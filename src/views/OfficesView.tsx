import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  Clock, 
  Phone, 
  Copy, 
  Check, 
  AlertCircle, 
  Building2, 
  ExternalLink, 
  Sparkles,
  Globe,
  UserCheck
} from 'lucide-react';
import { officesData, allowedCountriesList } from '../data/offices';
import { Office } from '../types';
import { getDriveImageUrl, copyToClipboard } from '../utils/imageHelper';

interface OfficesViewProps {
  selectedCountry: string;
  onSelectCountry: (country: string) => void;
  onOpenRegisterModal: () => void;
  onShowToast: (msg: string) => void;
}

export const OfficesView: React.FC<OfficesViewProps> = ({
  selectedCountry,
  onSelectCountry,
  onOpenRegisterModal,
  onShowToast
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredOffices = useMemo(() => {
    return officesData.filter((office) => {
      // Country filter
      if (selectedCountry !== 'Todos' && office.country !== selectedCountry) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = office.title.toLowerCase().includes(q);
        const matchCity = office.city.toLowerCase().includes(q);
        const matchCountry = office.country.toLowerCase().includes(q);
        const matchAddress = office.address.toLowerCase().includes(q);
        const matchContact = office.contacts.some(c => c.toLowerCase().includes(q));
        if (!matchTitle && !matchCity && !matchCountry && !matchAddress && !matchContact) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCountry, searchQuery]);

  const handleCopyOffice = async (office: Office) => {
    const textToCopy = `🏢 ${office.title}
📍 Dirección: ${office.address}
🕒 Horario: ${office.hours.weekdays} | Sáb: ${office.hours.saturday}
📞 Contacto(s): ${office.contacts.join(' / ')}
🆔 Código de Patrocinador HGW: Yamilka507
ℹ️ Nota: Para compras presentar tu número de usuario HGW.`;

    const success = await copyToClipboard(textToCopy);
    if (success) {
      setCopiedId(office.id);
      onShowToast(`¡Datos de ${office.city} copiados al portapapeles!`);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Header */}
      <section className="bg-[#0A2540] text-white p-8 sm:p-10 rounded-xl shadow-lg border border-slate-800 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest font-mono rounded-md border border-white/10">
          <Building2 className="w-4 h-4" />
          <span>Directorio Oficial • Sedes HGW Latinoamérica</span>
        </div>

        <h1 className="h1-custom text-3xl sm:text-4xl lg:text-[35px] text-white font-extrabold tracking-tight">
          Direcciones, Horarios y Contactos de Oficinas
        </h1>

        <p className="text-slate-300 text-standard sm:text-base max-w-3xl leading-relaxed">
          Encuentra la oficina autorizada más cercana en tu país para compras presenciales, entrega de pedidos, demostración de productos y capacitaciones.
        </p>
      </section>

      {/* Mandatory Instructions Alert Notice */}
      <section className="bg-amber-50/70 border border-amber-200 rounded-xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center shrink-0 shadow-xs">
            <AlertCircle className="w-6 h-6" />
          </div>

          <div className="space-y-2 flex-1">
            <h3 className="font-bold text-[#0A2540] text-lg sm:text-xl tracking-tight">
              Nota Importante para Compras y Envíos en Oficinas HGW
            </h3>
            <p className="text-slate-700 text-standard leading-relaxed">
              Al escribir o acudir a las Oficinas Oficiales, <strong className="text-[#0A2540]">debes indicar tu número de usuario</strong>. Si ya lo tienes, contacta a tu patrocinador. Si aún no lo tienes, puedes escribir al <strong className="text-[#0A2540]">+507 6778-8375</strong> y con gusto te enseñamos cómo crearlo en minutos bajo el patrocinio <strong className="text-[#0A2540]">Yamilka507</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono pt-1 text-slate-700">
              <span className="bg-white border border-amber-200 px-2.5 py-1 rounded-md">
                📦 Envíos: 3 a 6 días hábiles
              </span>
              <span className="bg-white border border-amber-200 px-2.5 py-1 rounded-md">
                💳 Métodos de pago y despacho ajustados por país
              </span>
            </div>
          </div>

          <button
            onClick={onOpenRegisterModal}
            className="w-full md:w-auto bg-[#0A2540] hover:bg-[#061828] text-white font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer shadow-sm"
          >
            Crear mi Usuario HGW
          </button>
        </div>
      </section>

      {/* Search & Country Filter */}
      <section className="space-y-4">
        {/* Quick Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar oficina por ciudad, dirección, teléfono o país (ej. Lima, Bogotá, Santa Cruz, Panamá, Guatemala)..."
            className="w-full pl-11 pr-4 py-3 bg-white text-slate-900 placeholder-slate-400 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0A2540] focus:border-transparent outline-none text-sm transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3 text-xs text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full w-5 h-5 flex items-center justify-center cursor-pointer"
            >
              ×
            </button>
          )}
        </div>

        {/* Country Filter Pills */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#0A2540] uppercase tracking-widest block font-mono">
            Filtrar por País ({allowedCountriesList.length - 1} Países Disponibles):
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            {allowedCountriesList.map((country) => {
              const active = selectedCountry === country;
              return (
                <button
                  key={country}
                  onClick={() => onSelectCountry(country)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer border font-mono ${
                    active
                      ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
                  }`}
                >
                  {country === 'Todos' ? '🌎 Todos' : country}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <span className="text-sm font-bold text-[#0A2540] uppercase tracking-wider font-mono">
            Oficinas encontradas: <strong className="text-amber-600">{filteredOffices.length}</strong>
          </span>
          {(selectedCountry !== 'Todos' || searchQuery) && (
            <button
              onClick={() => {
                onSelectCountry('Todos');
                setSearchQuery('');
              }}
              className="text-xs text-slate-600 hover:text-[#0A2540] font-bold underline cursor-pointer uppercase tracking-wider font-mono"
            >
              Restablecer filtros
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffices.map((office) => {
            const isCopied = copiedId === office.id;
            return (
              <div
                key={office.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Office Image Header */}
                <div className="relative aspect-16/10 bg-slate-100 overflow-hidden group border-b border-slate-200">
                  <img
                    src={getDriveImageUrl(office.driveId, office.imageUrl)}
                    alt={office.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-[#0A2540]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20 font-mono">
                    📍 {office.country}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-base line-clamp-1 text-white tracking-tight">
                      {office.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono">{office.city}</p>
                  </div>
                </div>

                {/* Office Body Info */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3.5">
                    {/* Address */}
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <MapPin className="w-4 h-4 text-[#0A2540] shrink-0 mt-0.5" />
                      <p className="leading-snug">
                        <strong className="text-[#0A2540] block font-bold uppercase text-[11px] tracking-wider font-mono">Dirección:</strong>
                        {office.address}
                      </p>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                      <Clock className="w-4 h-4 text-[#0A2540] shrink-0 mt-0.5" />
                      <div className="space-y-0.5 leading-snug">
                        <strong className="text-[#0A2540] block font-bold uppercase text-[11px] tracking-wider font-mono">Horarios:</strong>
                        <p className="text-xs text-slate-600"><span className="font-semibold text-slate-800">L-V:</span> {office.hours.weekdays}</p>
                        <p className="text-xs text-slate-600"><span className="font-semibold text-slate-800">Sáb:</span> {office.hours.saturday}</p>
                        {office.hours.sundayAndHolidays && (
                          <p className="text-[11px] text-slate-500"><span className="font-semibold text-slate-700">Dom/Fest:</span> {office.hours.sundayAndHolidays}</p>
                        )}
                      </div>
                    </div>

                    {/* Contacts */}
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Phone className="w-4 h-4 text-[#0A2540] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A2540] block font-bold uppercase text-[11px] tracking-wider mb-1 font-mono">Contacto:</strong>
                        <div className="flex flex-wrap gap-1.5">
                          {office.contacts.map((tel, idx) => (
                            <a
                              key={idx}
                              href={`tel:${tel.replace(/\s+/g, '')}`}
                              className="text-xs font-mono font-bold text-[#0A2540] bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded border border-slate-200 transition-colors inline-block"
                            >
                              {tel}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {office.notes && (
                      <p className="text-[11px] text-slate-600 italic bg-amber-50/50 p-2.5 rounded-lg border border-amber-200/60">
                        💡 {office.notes}
                      </p>
                    )}
                  </div>

                  {/* Clipboard Action Button */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => handleCopyOffice(office)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                        isCopied
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-[#0A2540] hover:bg-[#061828] text-white border-[#0A2540] shadow-xs'
                      }`}
                      title="Copiar dirección y teléfonos de esta oficina"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-white" />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-white" />
                          <span>Copiar Datos</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={onOpenRegisterModal}
                      className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg border border-slate-200 transition-colors cursor-pointer"
                      title="Cómo comprar en esta oficina"
                    >
                      <UserCheck className="w-4 h-4 text-[#0A2540]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
