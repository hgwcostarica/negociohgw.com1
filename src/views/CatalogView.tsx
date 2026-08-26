import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  UserCheck, 
  Info, 
  ShieldCheck, 
  ChevronRight, 
  Eye, 
  Tag,
  ExternalLink
} from 'lucide-react';
import { productsData } from '../data/products';
import { Product, ProductCategory } from '../types';
import { getDriveImageUrl } from '../utils/imageHelper';

interface CatalogViewProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenRegisterModal: (product?: Product) => void;
}

const categories: ProductCategory[] = [
  'Todos',
  'Serie Candys HGW',
  'Cafés Organicos Saludables',
  'Tés Organicos Saludables',
  'Chocolates Organicos Saludables',
  'Jugos organicos Saludables',
  'Suplementos alimenticios',
  'Articulos terapeuticos',
  'Cuidado personal',
  'Articulos de belleza',
  'Herramientas empresariales',
  'Licores organicos'
];

export const CatalogView: React.FC<CatalogViewProps> = ({
  searchQuery,
  onSearchChange,
  onSelectProduct,
  onOpenRegisterModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todos');
  const [selectedFocus, setSelectedFocus] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'bv'>('featured');

  const healthFocusList = [
    'Todos',
    'Cuidado de la visión',
    'Protocolo Limpieza de Colon',
    'Sistema inmunológico',
    'Salud hepática y renal',
    'Piedra de Turmalina',
    'Salud articular y ósea',
    'Energía y vitalidad',
    'Control de peso'
  ];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Category filter
      if (selectedCategory !== 'Todos' && product.category !== selectedCategory) {
        return false;
      }
      // Health Focus filter
      if (selectedFocus !== 'Todos') {
        if (!product.healthFocus || !product.healthFocus.some(f => f.toLowerCase() === selectedFocus.toLowerCase())) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchCategory = product.category.toLowerCase().includes(q);
        const matchRaw = product.rawMaterial.toLowerCase().includes(q);
        const matchDesc = product.shortDescription.toLowerCase().includes(q);
        const matchIngredients = product.ingredients?.some(i => i.toLowerCase().includes(q));
        if (!matchName && !matchCategory && !matchRaw && !matchDesc && !matchIngredients) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.partnerPrice - b.partnerPrice;
      if (sortBy === 'priceDesc') return b.partnerPrice - a.partnerPrice;
      if (sortBy === 'bv') return b.bv - a.bv;
      // Default: featured first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [selectedCategory, selectedFocus, searchQuery, sortBy]);

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Banner with Corporate Navy Palette */}
      <section className="bg-[#0A2540] text-white p-8 sm:p-10 rounded-xl shadow-lg border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest rounded-md border border-white/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catálogo Oficial • HGW Latinoamérica</span>
          </div>

          <h1 className="h1-custom text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
            Nutrición Celular, Turmalina & Superalimentos
          </h1>

          <p className="text-slate-300 text-standard sm:text-base leading-relaxed">
            Extractos de arándanos canadienses ricos en antocianinas, nanotecnología de turmalina bioeléctrica autocalentable, Ganoderma Lucidum, Cordyceps Sinensis y fitoterapia con respaldo en más de 69 países.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onOpenRegisterModal()}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              <UserCheck className="w-4 h-4" />
              <span>Cómo Comprar con Descuento</span>
            </button>
            <div className="flex items-center gap-2 text-xs text-white/90 bg-white/10 px-3.5 py-2 rounded-lg border border-white/10 uppercase font-mono font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Descuento de 30% a 60% para Socios</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Toolbar */}
      <section className="space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar por nombre, arándanos, turmalina, ganoderma, café..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 rounded-lg border border-slate-200 focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] outline-none transition-all text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-700 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
              >
                ×
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider whitespace-nowrap">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0A2540] cursor-pointer font-mono"
            >
              <option value="featured">✨ Destacados</option>
              <option value="bv">💎 Mayor Puntuación BV</option>
              <option value="priceAsc">💵 Precio: Menor a Mayor</option>
              <option value="priceDesc">💵 Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>

        {/* Category Pills (Horizontally Scrollable) */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-widest">
            <Filter className="w-3.5 h-3.5 text-[#0A2540]" />
            <span>Categorías:</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer rounded-lg border ${
                    active
                      ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Health Focus Filter Pills */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-widest">
            <Tag className="w-3.5 h-3.5 text-[#0A2540]" />
            <span>Enfoques de Salud & Protocolos:</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {healthFocusList.map((focus) => {
              const active = selectedFocus === focus;
              return (
                <button
                  key={focus}
                  onClick={() => setSelectedFocus(focus)}
                  className={`px-3 py-1 text-xs font-semibold transition-all cursor-pointer rounded-lg border ${
                    active
                      ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {focus}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">
          Mostrando <strong className="text-[#0A2540] font-black">{filteredProducts.length}</strong> productos
        </span>
        {(selectedCategory !== 'Todos' || selectedFocus !== 'Todos' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('Todos');
              setSelectedFocus('Todos');
              onSearchChange('');
            }}
            className="text-xs text-slate-600 hover:text-[#0A2540] font-bold underline cursor-pointer uppercase tracking-wider"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-16 h-16 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="h3-custom text-xl font-bold text-[#0A2540]">No se encontraron productos</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            No encontramos coincidencias para "{searchQuery}". Intenta con otros términos como "arándano", "turmalina", "café", "ganoderma" o limpia los filtros.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('Todos');
              setSelectedFocus('Todos');
              onSearchChange('');
            }}
            className="bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold px-6 py-2.5 text-xs uppercase tracking-wider transition-all rounded-lg cursor-pointer"
          >
            Ver Catálogo Completo
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-slate-200 p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative"
              >
                <div>
                  {/* Product Thumbnail */}
                  <div 
                    onClick={() => onSelectProduct(product)}
                    className="relative aspect-square bg-slate-50 rounded-lg border border-slate-100 p-4 flex items-center justify-center cursor-pointer overflow-hidden mb-3"
                  >
                    <img
                      src={getDriveImageUrl(product.driveId, product.imageUrl)}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80';
                      }}
                    />

                    {product.featured && (
                      <span className="absolute top-2 left-2 bg-[#0A2540] text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs">
                        Estrella
                      </span>
                    )}

                    <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] font-bold font-mono px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {product.bv.toFixed(2)} BV
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block">
                      {product.category}
                    </span>
                    <h3 
                      onClick={() => onSelectProduct(product)}
                      className="font-bold text-[15px] text-[#0A2540] line-clamp-2 hover:text-[#1E3A8A] transition-colors cursor-pointer leading-snug"
                      title={product.name}
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Pricing Box & CTA */}
                <div className="space-y-3 pt-3 mt-3 border-t border-slate-100">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-mono">Público:</span>
                      <span className="text-xs text-slate-400 line-through font-mono">
                        ${product.publicPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase text-[#0A2540] block font-mono">
                        Precio Socio:
                      </span>
                      <span className="text-base font-extrabold text-[#0A2540] font-mono">
                        ${product.partnerPrice.toFixed(2)} USD
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full flex items-center justify-center gap-1 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-2 rounded-lg border border-slate-200 text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      title="Ver detalles completos"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detalles</span>
                    </button>

                    <button
                      onClick={() => onOpenRegisterModal(product)}
                      className="w-full flex items-center justify-center gap-1 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold py-2 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                      title="Cómo comprar o registrarse"
                    >
                      <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>Comprar</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Information Banner on Ordering & Registration */}
      <section className="bg-slate-50 text-slate-900 p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A2540] bg-white px-3 py-1 rounded-md border border-slate-200 inline-block font-mono">
            ℹ️ ¿Cómo Funciona la Compra de Productos HGW?
          </span>
          <h2 className="h2-custom text-xl sm:text-2xl text-[#0A2540] font-bold">
            Compras oficiales directas con tu Código de Usuario Mayorista
          </h2>
          <p className="text-slate-600 text-standard leading-relaxed text-sm">
            Las compras se procesan de manera segura en la <strong>Oficina Virtual HGW</strong> o presencialmente en cualquiera de las <strong>Oficinas Oficiales de Latinoamérica</strong> presentando tu código patrocinador <strong>Yamilka507</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 pt-1">
          <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1">
            <span className="text-[#0A2540] font-bold text-xs block uppercase tracking-wider font-mono">1. Crea tu Usuario</span>
            <p className="text-xs text-slate-600">
              Usa el código patrocinador <strong>Yamilka507</strong> para habilitar tus precios de socio mayorista.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1">
            <span className="text-[#0A2540] font-bold text-xs block uppercase tracking-wider font-mono">2. Elige tus Productos</span>
            <p className="text-xs text-slate-600">
              Escoge tus productos a libre elección sin paquetes cerrados forzosos.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4 space-y-1">
            <span className="text-[#0A2540] font-bold text-xs block uppercase tracking-wider font-mono">3. Despacho o Retiro</span>
            <p className="text-xs text-slate-600">
              Despacho a tu domicilio o retiro inmediato en la oficina oficial de tu ciudad.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => onOpenRegisterModal()}
            className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold py-3 px-5 rounded-lg uppercase tracking-wider text-xs transition-all cursor-pointer shadow-sm"
          >
            <span>Ver Tutorial de Registro & Apertura de Cuenta</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

