import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  Award,
  User,
  Globe,
  Crown,
  Layers,
  Camera,
  RefreshCw,
  Share2
} from 'lucide-react';
import { generateTeamBannerPrompt, TeamBannerData } from '../utils/promptGenerator';
import { copyToClipboard } from '../utils/imageHelper';

interface TeamBannerGeneratorModalProps {
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const TeamBannerGeneratorModal: React.FC<TeamBannerGeneratorModalProps> = ({
  onClose,
  onShowToast
}) => {
  const [bannerType, setBannerType] = useState<'bienvenida' | 'ascenso_membresia' | 'rango_liderazgo'>('bienvenida');
  const [memberName, setMemberName] = useState('Yamilka Batista');
  const [country, setCountry] = useState('Panamá');
  const [membership, setMembership] = useState('Master');
  const [previousMembership, setPreviousMembership] = useState('Junior');
  const [newMembership, setNewMembership] = useState('Master');
  const [rank, setRank] = useState('Diamante');
  const [sponsorName, setSponsorName] = useState('');
  
  // Custom uploaded photo & rank logo
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [rankLogo, setRankLogo] = useState<string | null>(null);

  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const photoInputRef = useRef<HTMLInputElement>(null);
  const rankLogoInputRef = useRef<HTMLInputElement>(null);

  const countriesList = [
    { name: 'Panamá', flag: '🇵🇦' },
    { name: 'Perú', flag: '🇵🇪' },
    { name: 'México', flag: '🇲🇽' },
    { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Bolivia', flag: '🇧🇴' },
    { name: 'Ecuador', flag: '🇪🇨' },
    { name: 'Chile', flag: '🇨🇱' },
    { name: 'El Salvador', flag: '🇸🇻' },
    { name: 'España', flag: '🇪🇸' },
    { name: 'Guatemala', flag: '🇬🇹' },
    { name: 'Paraguay', flag: '🇵🇾' },
    { name: 'República Dominicana', flag: '🇩🇴' },
    { name: 'Costa Rica', flag: '🇨🇷' }
  ];

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserPhoto(reader.result as string);
        onShowToast('¡Fotografía cargada correctamente!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRankLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setRankLogo(reader.result as string);
        onShowToast('¡Logo de rango cargado!');
      };
      reader.readAsDataURL(file);
    }
  };

  const bannerData: TeamBannerData = {
    type: bannerType,
    memberName,
    country,
    membership,
    previousMembership,
    newMembership,
    rank,
    sponsorName,
    userPhotoUrl: userPhoto || undefined,
    rankLogoUrl: rankLogo || undefined
  };

  const promptResult = generateTeamBannerPrompt(bannerData);

  const handleCopyPrompt = async () => {
    const success = await copyToClipboard(promptResult.promptText);
    if (success) {
      setCopiedPrompt(true);
      onShowToast('¡Prompt del Banner copiado para ChatGPT / DALL-E!');
      setTimeout(() => setCopiedPrompt(false), 2500);
    }
  };

  const handleCopyCongratulationText = async () => {
    let text = '';
    if (bannerType === 'bienvenida') {
      text = `🌟 ¡BIENVENIDO(A) AL EQUIPO HGW! 👏🎉\n\nFelicitamos a ${memberName} desde ${country} 🇵🇦 por unirse con Membresía ${membership} a nuestra familia internacional HGW. ¡Estamos listos para apoyarte a alcanzar todas tus metas de salud y libertad financiera! 🚀🌿💎`;
    } else if (bannerType === 'ascenso_membresia') {
      text = `🚀 ¡FELICIDADES POR TU ASCENSO DE MEMBRESÍA! 💎✨\n\nReconocemos la visión y compromiso de ${memberName} (${country}) por ascender de Membresía ${previousMembership} a Membresía ${newMembership}. ¡Alcanzando el máximo porcentaje de ganancias y bonos élite! 📈👏`;
    } else {
      text = `🏆 ¡NUEVO RANGO ${rank.toUpperCase()} ALCANZADO! 👑🌟\n\nUn aplauso de pie para nuestro(a) líder ${memberName} desde ${country} por alcanzar el prestigioso Rango ${rank} en HGW. Tu dedicación y liderazgo inspiran a toda Latinoamérica. ¡Vamos por el siguiente nivel! 🔥💎`;
    }

    const success = await copyToClipboard(text);
    if (success) {
      setCopiedText(true);
      onShowToast('¡Texto de felicitación copiado!');
      setTimeout(() => setCopiedText(false), 2500);
    }
  };

  const handleOpenChatGPT = () => {
    window.open(promptResult.chatGptUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[94vh] sm:h-auto max-h-[94vh] sm:max-h-[92vh] bg-white rounded-t-2xl sm:rounded-2xl border-t sm:border border-slate-200 shadow-2xl flex flex-col overflow-hidden min-h-0 animate-slideUp sm:animate-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Bar Indicator */}
        <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto my-1.5 sm:hidden shrink-0" />

        {/* Modal Header */}
        <div className="bg-[#0A2540] text-white p-3.5 sm:p-5 flex items-start justify-between border-b border-slate-800 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-400/20 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border border-amber-400/30 mb-1 font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Reconocimiento & Liderazgo HGW</span>
            </div>
            <h2 className="text-base sm:text-xl font-extrabold text-white tracking-tight">
              Generador de Banners de Reconocimiento & Prompts IA
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
              Crea imágenes para Bienvenida al Equipo, Ascenso de Membresía y Rangos de Liderazgo con IA o previsualización en vivo.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-3.5 sm:p-6 space-y-6 overflow-y-auto flex-1 min-h-0 text-slate-800 text-xs sm:text-sm overscroll-contain">
          {/* Banner Type Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              onClick={() => setBannerType('bienvenida')}
              className={`p-3 rounded-xl border flex items-center gap-2 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                bannerType === 'bienvenida'
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <User className="w-4 h-4 text-amber-400 shrink-0" />
              <div className="text-left">
                <div>Bienvenida</div>
                <div className="text-[10px] font-normal opacity-80">Nuevo Socio</div>
              </div>
            </button>

            <button
              onClick={() => setBannerType('ascenso_membresia')}
              className={`p-3 rounded-xl border flex items-center gap-2 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                bannerType === 'ascenso_membresia'
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="text-left">
                <div>Ascenso Membresía</div>
                <div className="text-[10px] font-normal opacity-80">Upgrade de Paquete</div>
              </div>
            </button>

            <button
              onClick={() => setBannerType('rango_liderazgo')}
              className={`p-3 rounded-xl border flex items-center gap-2 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                bannerType === 'rango_liderazgo'
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <Crown className="w-4 h-4 text-amber-300 shrink-0" />
              <div className="text-left">
                <div>Rango de Liderazgo</div>
                <div className="text-[10px] font-normal opacity-80">Plata, Oro, Platino, Diamante</div>
              </div>
            </button>
          </div>

          {/* Form & Live Preview Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Input Form Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h3 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Datos del Reconocimiento</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Member Name */}
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Nombre Completo del Socio:
                  </label>
                  <input
                    type="text"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                    placeholder="Ej: Yamilka Batista"
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-1 focus:ring-[#0A2540] outline-none"
                  />
                </div>

                {/* Country Selection */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    País:
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-1 focus:ring-[#0A2540] outline-none cursor-pointer"
                  >
                    {countriesList.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.flag} {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Conditional Fields depending on Banner Type */}
                {bannerType === 'bienvenida' && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Membresía de Ingreso:
                    </label>
                    <select
                      value={membership}
                      onChange={(e) => setMembership(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-1 focus:ring-[#0A2540] outline-none cursor-pointer"
                    >
                      <option value="Master">💎 Master (600 BV)</option>
                      <option value="Senior">⭐ Senior (300 BV)</option>
                      <option value="Junior">🟢 Junior (100 BV)</option>
                      <option value="Pre-Junior">🌿 Pre-Junior (50 BV)</option>
                    </select>
                  </div>
                )}

                {bannerType === 'ascenso_membresia' && (
                  <>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                        Membresía Anterior:
                      </label>
                      <select
                        value={previousMembership}
                        onChange={(e) => setPreviousMembership(e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-1 focus:ring-[#0A2540] outline-none cursor-pointer"
                      >
                        <option value="Pre-Junior">Pre-Junior (50 BV)</option>
                        <option value="Junior">Junior (100 BV)</option>
                        <option value="Senior">Senior (300 BV)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                        Nueva Membresía Alcanzada:
                      </label>
                      <select
                        value={newMembership}
                        onChange={(e) => setNewMembership(e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-1 focus:ring-[#0A2540] outline-none cursor-pointer"
                      >
                        <option value="Master">💎 Master (600 BV)</option>
                        <option value="Senior">⭐ Senior (300 BV)</option>
                        <option value="Junior">🟢 Junior (100 BV)</option>
                      </select>
                    </div>
                  </>
                )}

                {bannerType === 'rango_liderazgo' && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                      Rango de Liderazgo Alcanzado:
                    </label>
                    <select
                      value={rank}
                      onChange={(e) => setRank(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-1 focus:ring-[#0A2540] outline-none cursor-pointer font-bold text-[#0A2540]"
                    >
                      <option value="Plata">🥈 Rango Plata (Silver)</option>
                      <option value="Oro">🥇 Rango Oro (Gold)</option>
                      <option value="Platinum">💎 Rango Platinum</option>
                      <option value="Diamante">👑 Rango Diamante (Diamond)</option>
                      <option value="Corona">👑 Corona Diamante (Crown)</option>
                    </select>
                  </div>
                )}

                {/* Sponsor / Team */}
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
                    Patrocinador / Equipo (Opcional):
                  </label>
                  <input
                    type="text"
                    value={sponsorName}
                    onChange={(e) => setSponsorName(e.target.value)}
                    placeholder="Ej: Equipo Diamantes Internacional"
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-1 focus:ring-[#0A2540] outline-none"
                  />
                </div>
              </div>

              {/* Photo & Logo Upload Controls */}
              <div className="pt-3 border-t border-slate-200 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Member Photo Upload */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1 flex items-center justify-between">
                      <span>Foto del Socio:</span>
                      {userPhoto && (
                        <button
                          type="button"
                          onClick={() => setUserPhoto(null)}
                          className="text-[10px] text-rose-600 hover:underline cursor-pointer"
                        >
                          Quitar foto
                        </button>
                      )}
                    </label>
                    <input
                      type="file"
                      ref={photoInputRef}
                      onChange={handlePhotoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => photoInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 border-2 border-dashed border-slate-300 hover:border-[#0A2540] rounded-lg bg-white text-xs text-slate-700 font-semibold cursor-pointer transition-all"
                    >
                      <Upload className="w-4 h-4 text-amber-500" />
                      <span>{userPhoto ? 'Cambiar Foto' : 'Subir Foto del Socio'}</span>
                    </button>
                  </div>

                  {/* Rank Logo Upload */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1 flex items-center justify-between">
                      <span>Logo de Rango / Pin (Opcional):</span>
                      {rankLogo && (
                        <button
                          type="button"
                          onClick={() => setRankLogo(null)}
                          className="text-[10px] text-rose-600 hover:underline cursor-pointer"
                        >
                          Quitar
                        </button>
                      )}
                    </label>
                    <input
                      type="file"
                      ref={rankLogoInputRef}
                      onChange={handleRankLogoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => rankLogoInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 border-2 border-dashed border-slate-300 hover:border-[#0A2540] rounded-lg bg-white text-xs text-slate-700 font-semibold cursor-pointer transition-all"
                    >
                      <Crown className="w-4 h-4 text-amber-500" />
                      <span>{rankLogo ? 'Cambiar Logo' : 'Subir Logo Rango'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Live Graphic Preview (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Camera className="w-4 h-4 text-slate-600" />
                  <span>Previsualización del Banner</span>
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">
                  En Vivo
                </span>
              </div>

              {/* Banner Canvas Mockup */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl border-4 border-amber-400/70 bg-gradient-to-br from-[#061828] via-[#0A2540] to-[#04101d] text-white p-5 flex flex-col justify-between items-center text-center select-none">
                {/* Background ambient lighting effects */}
                <div className="absolute -top-12 -left-12 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

                {/* Top Header */}
                <div className="relative z-10 space-y-1 w-full">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-amber-300 uppercase px-1">
                    <span>HGW OFICIAL</span>
                    <span>PLAN 50/50</span>
                  </div>

                  <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {bannerType === 'bienvenida' && '🌟 ¡BIENVENIDO(A) AL EQUIPO! 🌟'}
                    {bannerType === 'ascenso_membresia' && '🚀 ¡ASCENSO DE MEMBRESÍA! 🚀'}
                    {bannerType === 'rango_liderazgo' && `🏆 ¡NUEVO RANGO ${rank.toUpperCase()}! 🏆`}
                  </div>
                </div>

                {/* Center Photo Circle */}
                <div className="relative z-10 my-2">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-amber-400 p-1 bg-gradient-to-b from-amber-300 to-amber-600 shadow-2xl overflow-hidden flex items-center justify-center bg-slate-800">
                    {userPhoto ? (
                      <img
                        src={userPhoto}
                        alt="Socio"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-400 text-[10px]">
                        <User className="w-8 h-8 text-amber-300/80 mb-1" />
                        <span>Foto Socio</span>
                      </div>
                    )}
                  </div>

                  {/* Rank Badge Badge overlay if present */}
                  <div className="absolute -bottom-2 -right-1 bg-black/80 border border-amber-400 rounded-full p-1 shadow-md">
                    {rankLogo ? (
                      <img src={rankLogo} alt="Rango" className="w-6 h-6 object-contain" />
                    ) : (
                      <Crown className="w-5 h-5 text-amber-400" />
                    )}
                  </div>
                </div>

                {/* Bottom Details Card */}
                <div className="relative z-10 w-full bg-black/65 backdrop-blur-xs border border-white/20 rounded-xl p-2.5 space-y-1">
                  <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                    {memberName || 'Nombre del Socio'}
                  </h4>

                  <div className="flex items-center justify-center gap-2 text-[10px] text-slate-200">
                    <span className="flex items-center gap-1 font-semibold">
                      <Globe className="w-3 h-3 text-sky-400" />
                      {country}
                    </span>
                    <span>•</span>
                    <span className="font-bold text-amber-300">
                      {bannerType === 'bienvenida' && `Membresía ${membership}`}
                      {bannerType === 'ascenso_membresia' && `${previousMembership} ➔ ${newMembership}`}
                      {bannerType === 'rango_liderazgo' && `Rango ${rank}`}
                    </span>
                  </div>

                  {sponsorName && (
                    <div className="text-[9px] text-slate-300 truncate">
                      {sponsorName}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* AI Prompt Box for ChatGPT / DALL-E */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Prompt Master para Generar este Banner con IA (ChatGPT / DALL-E 3 / Midjourney):</span>
              </span>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-xl p-3 sm:p-4 font-mono text-xs border border-slate-800 shadow-inner max-h-40 overflow-y-auto">
              <pre className="whitespace-pre-wrap font-sans text-xs text-slate-200 leading-relaxed">
                {promptResult.promptText}
              </pre>
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 shrink-0">
          <button
            onClick={handleCopyCongratulationText}
            className={`min-h-[40px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              copiedText
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
            }`}
          >
            {copiedText ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡Texto Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Texto de Felicitación</span>
              </>
            )}
          </button>

          <button
            onClick={handleCopyPrompt}
            className={`min-h-[40px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              copiedPrompt
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
            }`}
          >
            {copiedPrompt ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡Prompt Copiado!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Copiar Prompt IA</span>
              </>
            )}
          </button>

          <button
            onClick={handleOpenChatGPT}
            className="min-h-[40px] flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold py-2 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-98"
          >
            <span>Generar en ChatGPT</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
