import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { allowedCountriesList } from '../data/offices';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenRegisterModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenRegisterModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-12 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center font-extrabold text-base shadow-sm">
                HGW
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white font-sans tracking-tight">HGW LATAM</h3>
                <p className="text-[11px] uppercase tracking-widest text-slate-400 font-mono font-semibold">Health Green World</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Corporación internacional con presencia en más de 69 países y más de 31 años de liderazgo dedicados al desarrollo e investigación de productos de nutrición celular y el revolucionario Plan de Ganancia Mutua.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5 font-mono">Distribuidora Independiente:</span>
              <div className="bg-[#0F2744] border border-slate-700 rounded-xl p-3 flex items-center gap-3 shadow-xs">
                <img 
                  src="https://hgwpanama.com/wp-content/uploads/Foto-de-perfil-Yamilka-Batista-HGW.png" 
                  alt="Yamilka Batista"
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-400"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80';
                  }}
                />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Yamilka Batista</h4>
                  <p className="text-xs text-slate-300">Patrocinador: <span className="font-mono font-bold text-amber-400">Yamilka507</span></p>
                  <p className="text-[11px] text-slate-400 font-mono">Panamá / Cobertura Latam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-2 font-mono">
              Secciones del Portal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onSelectTab('catalogo')} 
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-medium"
                >
                  → Catálogo de Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('salud')} 
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-medium"
                >
                  → Guía de Salud & Protocolos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('oficinas')} 
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-medium"
                >
                  → Directorio de Oficinas en Latam
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('videos')} 
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-medium"
                >
                  → Videos Tutoriales & Oficina Virtual
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('copys')} 
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-medium"
                >
                  → Ideas de Copys & Scripts
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('membresias')} 
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-medium"
                >
                  → Membresías & Plan de Ganancia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('nosotros')} 
                  className="text-slate-300 hover:text-white transition-colors text-left cursor-pointer font-medium"
                >
                  → Liderazgo & Sobre HGW
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Países HGW Latinoamérica */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-2 font-mono">
              Países Disponibles
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {allowedCountriesList.filter(c => c !== 'Todos').map(country => (
                <span 
                  key={country}
                  className="text-[11px] bg-[#0F2744] text-slate-200 px-2.5 py-1 rounded-md border border-slate-700 font-mono"
                >
                  {country}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-400 leading-normal pt-1">
              Despachos nacionales de 3 a 6 días hábiles según volumen y distancia en cada territorio.
            </p>
          </div>

          {/* Col 4: Contacto & Registro */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-2 font-mono">
              Contacto & Asesoría
            </h4>
            <div className="space-y-2.5 text-sm">
              <a 
                href="https://wa.me/50767788375?text=Hola%20Yamilka,%20necesito%20información%20sobre%20HGW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0F2744] text-white border border-slate-700 p-2.5 rounded-lg hover:bg-slate-800 font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+507 6778-8375 (WhatsApp)</span>
              </a>
              <a 
                href="mailto:info@negociohgw.com" 
                className="flex items-center gap-2 bg-[#0F2744] text-white border border-slate-700 p-2.5 rounded-lg hover:bg-slate-800 font-bold transition-all"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@negociohgw.com</span>
              </a>
              <div className="flex items-start gap-2 text-xs text-slate-400 p-1">
                <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <span>Sede Panamá: Plaza Royal Blue, Local 6, San Francisco, Panamá</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenRegisterModal}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-4 rounded-lg uppercase tracking-wider text-xs transition-all cursor-pointer shadow-sm"
              >
                <span>Cómo Registrarse & Comprar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Box */}
        <div className="bg-[#0F2744] border border-slate-700 rounded-xl p-5 text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider font-mono">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Aviso Legal & Transparencia:</span>
          </div>
          <p className="leading-relaxed text-slate-300">
            Este sitio es operado por un afiliado independiente de HGW Health Green World. Aunque no es el sitio web corporativo central, la distribuidora cuenta con un amplio conocimiento sobre los productos, principios de salud y el plan de compensación de Ganancia Mutua, ofreciendo acompañamiento y mentoría en toda Latinoamérica. Para ingresar a la plataforma oficial: <a href="https://www.healthgreenworld.com/?userName=Yamilka507" target="_blank" rel="noopener noreferrer" className="text-amber-400 font-bold underline">healthgreenworld.com/?userName=Yamilka507</a>.
          </p>
        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} HGW Latinoamérica • Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors bg-[#0F2744] px-3 py-1.5 rounded-lg border border-slate-700 cursor-pointer uppercase font-mono text-[11px] font-bold"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

