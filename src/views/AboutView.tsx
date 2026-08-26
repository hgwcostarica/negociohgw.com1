import React from 'react';
import { 
  Building2, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Globe2, 
  GraduationCap, 
  Phone, 
  Mail, 
  MessageCircle,
  ExternalLink,
  Check
} from 'lucide-react';
import { leadershipProfiles, directSellingAssociations } from '../data/memberships';
import { LeaderProfile } from '../types';

interface AboutViewProps {
  onOpenRegisterModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenRegisterModal }) => {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Header */}
      <section className="bg-[#0A2540] text-white p-8 sm:p-10 rounded-xl shadow-lg border border-slate-800 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest font-mono rounded-md border border-white/10">
          <Building2 className="w-3.5 h-3.5" />
          <span>Trayectoria, Liderazgo & Solidez Mundial</span>
        </div>

        <h1 className="h1-custom text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight">
          Sobre HGW (Health Green World)
        </h1>

        <p className="text-slate-300 text-standard sm:text-base max-w-3xl leading-relaxed">
          Más de tres décadas dedicadas a la investigación biológica, fitoterapia de vanguardia, nanotecnología de turmalina y bienestar integral en más de 69 países de los cinco continentes.
        </p>
      </section>

      {/* 3 Pillars Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center space-y-2 shadow-sm">
          <span className="text-4xl font-black text-[#0A2540] font-mono">+31 AÑOS</span>
          <h3 className="font-bold text-[#0A2540] text-xs uppercase">Trayectoria Científica</h3>
          <p className="text-xs text-slate-600">Fundada en 1994, pionera en biotecnología aplicada a la salud natural.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center space-y-2 shadow-sm">
          <span className="text-4xl font-black text-[#0A2540] font-mono">+69 PAÍSES</span>
          <h3 className="font-bold text-[#0A2540] text-xs uppercase">Presencia Global</h3>
          <p className="text-xs text-slate-600">Oficinas y centros de distribución autorizados en América, Europa, Asia y África.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center space-y-2 shadow-sm">
          <span className="text-4xl font-black text-[#0A2540] font-mono">50 / 50</span>
          <h3 className="font-bold text-[#0A2540] text-xs uppercase">Plan Ganancia Mutua</h3>
          <p className="text-xs text-slate-600">El modelo más justo y solidario de la industria del Network Marketing mundial.</p>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A2540] bg-slate-100 px-3 py-1 rounded-md border border-slate-200 font-mono">
            Liderazgo Corporativo & Enlace Hispano
          </span>
          <h2 className="h2-custom text-2xl sm:text-3xl font-bold text-[#0A2540] tracking-tight">
            Fundadores y Líderes de Expansión
          </h2>
          <p className="text-xs text-slate-600">
            Conoce a las mentes detrás de la ciencia, la expansión internacional y el soporte personalizado en español.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {leadershipProfiles.map((leader: LeaderProfile, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="space-y-5">
                {/* Photo & Name */}
                <div className="text-center space-y-3">
                  <div className="w-32 h-32 mx-auto overflow-hidden bg-slate-100 rounded-full border-2 border-slate-200 shadow-sm">
                    <img
                      src={leader.photoUrl}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0A2540] tracking-tight">{leader.name}</h3>
                    <p className="text-xs font-bold text-slate-700 font-mono">{leader.role}</p>
                    <p className="text-[11px] text-slate-500">{leader.institution}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed text-center sm:text-left">
                  {leader.bio}
                </p>

                {/* Credentials */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A2540] flex items-center gap-1.5 font-mono">
                    <GraduationCap className="w-3.5 h-3.5 text-[#0A2540]" />
                    <span>Credenciales & Trayectoria:</span>
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {leader.credentials.map((cred, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-1.5">
                        <span className="text-amber-500 font-bold">•</span>
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {leader.name.includes('Yamilka') && (
                <div className="pt-2 space-y-2">
                  <a
                    href="https://wa.me/50767788375?text=Hola%20Yamilka,%20vi%20tu%20perfil%20en%20el%20portal%20HGW%20y%20deseo%20asesoría"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-all shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contactar Directo por WhatsApp</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Direct Selling Associations */}
      <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0A2540] bg-slate-100 px-3 py-1 rounded-md border border-slate-200 font-mono inline-block">
            Legalidad & Ética Comercial
          </span>
          <h3 className="h3-custom text-xl sm:text-2xl font-bold text-[#0A2540] tracking-tight">
            Miembro de las Asociaciones de Venta Directa en América Latina
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            HGW opera bajo las normativas legales y éticas más exigentes de cada país, garantizando transparencia, protección al consumidor y formalidad comercial en toda la región.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {directSellingAssociations.map((assoc, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-lg p-3.5 flex items-center gap-3 text-xs font-bold text-slate-800 uppercase font-mono"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{assoc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

