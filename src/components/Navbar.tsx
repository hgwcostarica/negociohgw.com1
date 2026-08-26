import React, { useState } from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Video, 
  Copy, 
  Award, 
  BookOpen, 
  Building2, 
  Search, 
  Menu, 
  X, 
  ExternalLink,
  Globe
} from 'lucide-react';
import { allowedCountriesList } from '../data/offices';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenRegisterModal: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCountry: string;
  onSelectCountry: (country: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  selectedCountry,
  onSelectCountry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { id: 'catalogo', label: 'Catálogo', icon: ShoppingBag, path: '/productos' },
    { id: 'oficinas', label: 'Oficinas Latam', icon: MapPin, path: '/oficinas' },
    { id: 'videos', label: 'Tutoriales & Bonos', icon: Video, path: '/videos' },
    { id: 'copys', label: 'Ideas & Copys', icon: Copy, path: '/copys' },
    { id: 'membresias', label: 'Plan de Ganancia', icon: Award, path: '/membresias' },
    { id: 'salud', label: 'Salud & Ciencia', icon: BookOpen, path: '/salud' },
    { id: 'nosotros', label: 'Sobre HGW', icon: Building2, path: '/nosotros' }
  ];

  const handleNavClick = (id: string, path: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-slate-200">
      {/* Top Utility Bar - Deep Corporate Navy (Phone removed as requested) */}
      <div className="bg-[#0A2540] text-white text-xs py-2 px-4 border-b border-[#0F2744]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>HGW Health Green World — Latinoamérica</span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] uppercase font-medium text-slate-300">
              Patrocinador Oficial: <strong className="text-amber-400 font-bold tracking-wider font-mono">Yamilka507</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <select 
                value={selectedCountry} 
                onChange={(e) => onSelectCountry(e.target.value)}
                className="bg-[#0F2744] text-white border border-slate-600 rounded-md px-2 py-0.5 text-xs focus:outline-none focus:border-amber-400 cursor-pointer uppercase font-mono"
                title="Filtrar por país"
              >
                {allowedCountriesList.map(country => (
                  <option key={country} value={country} className="bg-[#0A2540] text-white">
                    {country === 'Todos' ? '🌎 Todos los Países' : `📍 ${country}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand: Abbreviated HGW LATAM */}
          <div 
            onClick={() => handleNavClick('catalogo', '/productos')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0A2540] rounded-xl flex items-center justify-center shrink-0 border border-slate-700 shadow-md group-hover:bg-[#1E3A8A] transition-all">
              <span className="text-white font-black text-lg sm:text-xl tracking-tight">HGW</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[20px] sm:text-[24px] font-black uppercase tracking-tight text-[#0A2540] leading-none font-sans">
                  LATAM
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 uppercase font-mono">
                  Oficial
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-500 font-mono font-semibold mt-0.5">
                Health Green World
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.path)}
                  className={`px-3 py-2 rounded-lg text-[14px] font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? 'text-[#0A2540] bg-slate-100 font-bold shadow-xs' 
                      : 'text-slate-600 hover:text-[#0A2540] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions: Quick Search & Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Input */}
            <div className="relative hidden md:block">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Buscar productos u oficinas..."
                  className="w-48 lg:w-64 pl-9 pr-8 py-2 bg-slate-100 text-slate-900 placeholder-slate-400 rounded-lg border border-slate-200 text-[14px] focus:ring-2 focus:ring-[#0A2540] focus:bg-white focus:border-transparent outline-none transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => onSearchChange('')}
                    className="absolute right-2.5 text-xs text-slate-400 hover:text-slate-800 bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center cursor-pointer"
                    title="Limpiar búsqueda"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
              title="Buscar"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0A2540]" /> : <Menu className="w-6 h-6 text-[#0A2540]" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expansion */}
        {searchOpen && (
          <div className="md:hidden pb-4 pt-1">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Buscar productos, oficinas, bonos..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 text-slate-900 placeholder-slate-400 rounded-lg border border-slate-200 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#0A2540]"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-8 shadow-2xl animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.path)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-left font-bold text-[16px] transition-all min-h-[48px] ${
                    isActive
                      ? 'text-[#0A2540] bg-slate-100 border-l-4 border-[#0A2540]'
                      : 'text-slate-700 hover:text-[#0A2540] hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#0A2540]' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#0A2540]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200">
            <a
              href="https://www.healthgreenworld.com/?userName=Yamilka507"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold py-3.5 px-4 rounded-lg text-sm uppercase tracking-wider transition-all shadow-md"
            >
              <span>Oficina Virtual HGW</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
