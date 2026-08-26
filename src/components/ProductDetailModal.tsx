import React from 'react';
import { X, Check, ShieldCheck, Sparkles, UserCheck, HeartHandshake, Info } from 'lucide-react';
import { Product } from '../types';
import { getDriveImageUrl } from '../utils/imageHelper';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenRegisterModal: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenRegisterModal
}) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[92vh] sm:h-auto max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-2xl sm:rounded-2xl border-t sm:border border-slate-200 shadow-2xl flex flex-col overflow-hidden min-h-0 animate-slideUp sm:animate-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Bar Indicator */}
        <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto my-2 sm:hidden shrink-0" />

        {/* Modal Header */}
        <div className="bg-[#0A2540] text-white px-4 py-3.5 sm:px-6 sm:py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-300 bg-white/10 px-2.5 py-1 rounded-md border border-white/10 font-mono truncate">
              {product.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body - 1 Col on Mobile, 2 Col on Desktop */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 min-h-0 space-y-5 sm:space-y-6 overscroll-contain">
          {/* Top Section: Photo + Main Info (1 Col on Mobile, 2 Col on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-start">
            {/* Product Image */}
            <div className="relative w-full bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6 flex items-center justify-center h-52 sm:h-64 md:h-72">
              <img
                src={getDriveImageUrl(product.driveId, product.imageUrl)}
                alt={product.name}
                className="max-h-44 sm:max-h-56 md:max-h-60 w-auto object-contain transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80';
                }}
              />
              {product.featured && (
                <div className="absolute top-2.5 left-2.5 bg-[#0A2540] text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-slate-700 flex items-center gap-1 font-mono shadow-xs">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Destacado</span>
                </div>
              )}
            </div>

            {/* Product Main Specs & Pricing (1 Col Flow) */}
            <div className="space-y-4">
              <div>
                <h1 className="h1-custom text-xl sm:text-2xl md:text-3xl text-[#0A2540] font-extrabold tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs sm:text-sm font-mono font-bold text-slate-600 mt-1.5">
                  Materia Prima: <span className="font-normal text-slate-800">{product.rawMaterial}</span>
                </p>
                <p className="text-xs sm:text-sm font-mono text-slate-500 mt-0.5">
                  Presentación: <span className="font-normal text-slate-700">{product.presentation}</span>
                </p>
              </div>

              {/* Pricing & BV Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-2.5 font-mono shadow-xs">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold uppercase text-slate-500">Precio Público Sugerido:</span>
                  <span className="font-bold text-slate-400 line-through">${product.publicPrice.toFixed(2)} USD</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                  <div>
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0A2540] block">
                      Precio Socio Mayorista:
                    </span>
                    <span className="text-[11px] text-emerald-700 font-semibold">30% a 60% descuento</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#0A2540]">
                    ${product.partnerPrice.toFixed(2)} USD
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#0A2540] bg-white border border-slate-200 rounded-lg px-3 py-1.5 shadow-2xs">
                  <span>Puntos de Volumen:</span>
                  <span className="font-black bg-[#0A2540] text-amber-300 px-2.5 py-0.5 rounded text-xs sm:text-sm">
                    {product.bv.toFixed(2)} BV
                  </span>
                </div>
              </div>

              {/* CTA: Cómo Comprar / Registrarse */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => {
                    onClose();
                    onOpenRegisterModal(product);
                  }}
                  className="w-full min-h-[48px] flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold py-3 px-4 rounded-xl transition-all cursor-pointer text-xs sm:text-sm uppercase tracking-wider text-center shadow-md active:scale-98"
                >
                  <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>¿Cómo Comprar / Registrarse?</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 font-mono">
                  Compras oficiales en plataforma HGW o en oficinas autorizadas con tu código de usuario.
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 pt-4 border-t border-slate-200">
            <h3 className="h3-custom text-sm sm:text-base font-bold text-[#0A2540] uppercase flex items-center gap-1.5 font-mono">
              <Info className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Descripción del Producto</span>
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Advantages & Benefits - 1 Col on Mobile, 2 Col on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {product.advantages && product.advantages.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <h4 className="font-bold text-[#0A2540] text-xs sm:text-sm uppercase flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ventajas Clave</span>
                </h4>
                <ul className="space-y-1.5">
                  {product.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.benefits && product.benefits.length > 0 && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                <h4 className="font-bold text-[#0A2540] text-xs sm:text-sm uppercase flex items-center gap-1.5 font-mono">
                  <HeartHandshake className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Beneficios para la Salud</span>
                </h4>
                <ul className="space-y-1.5">
                  {product.benefits.map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Usage, Ingredients & Precautions - Strict 1 Col on Mobile, 3 Col on Tablet/Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-1 text-xs">
            {product.howToUse && (
              <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <span className="font-bold text-[#0A2540] uppercase block mb-1 font-mono text-[11px] sm:text-xs">Modo de Uso:</span>
                <p className="text-slate-600 leading-relaxed text-xs">{product.howToUse}</p>
              </div>
            )}
            {product.ingredients && (
              <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <span className="font-bold text-[#0A2540] uppercase block mb-1 font-mono text-[11px] sm:text-xs">Ingredientes:</span>
                <p className="text-slate-600 leading-relaxed text-xs">{product.ingredients.join(', ')}</p>
              </div>
            )}
            {product.shelfLife && (
              <div className="bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200">
                <span className="font-bold text-[#0A2540] uppercase block mb-1 font-mono text-[11px] sm:text-xs">Vida Útil:</span>
                <p className="text-slate-600 leading-relaxed text-xs">{product.shelfLife}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
