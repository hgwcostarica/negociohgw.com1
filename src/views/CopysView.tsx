import React, { useState, useMemo } from 'react';
import { 
  Copy, 
  Check, 
  Search, 
  Sparkles, 
  MessageCircle, 
  Send, 
  Lightbulb, 
  Wand2, 
  ExternalLink,
  Award,
  Crown,
  FileText,
  User,
  Users,
  Video,
  MapPin,
  Clock,
  CheckCircle,
  Smile,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';
import { copysData } from '../data/copys';
import { scriptsData, scriptCategories, ScriptItem } from '../data/scripts';
import { CopyItem } from '../types';
import { copyToClipboard } from '../utils/imageHelper';
import { PromptMasterModal } from '../components/PromptMasterModal';
import { TeamBannerGeneratorModal } from '../components/TeamBannerGeneratorModal';

interface CopysViewProps {
  onShowToast: (msg: string) => void;
}

export const CopysView: React.FC<CopysViewProps> = ({ onShowToast }) => {
  // Main view mode: 'copys' | 'scripts' | 'banners'
  const [activeTab, setActiveTab] = useState<'copys' | 'scripts' | 'banners'>('copys');

  // Copys section state
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCopyForPrompt, setSelectedCopyForPrompt] = useState<CopyItem | null>(null);

  // Scripts section state
  const [selectedScriptCategory, setSelectedScriptCategory] = useState<string>('todos');
  const [scriptSearchQuery, setScriptSearchQuery] = useState('');
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null);
  const [prospectNameInput, setProspectNameInput] = useState('');

  // Banner Modal state
  const [showBannerModal, setShowBannerModal] = useState(false);

  const categories = [
    { id: 'todos', label: '✨ Todos los Copys' },
    { id: 'plan_negocio', label: '🤝 Plan 50/50' },
    { id: 'arandanos', label: '🫐 Arándanos' },
    { id: 'limpieza_colon', label: '🍃 Colon Detox' },
    { id: 'turmalina', label: '⚡ Turmalina' },
    { id: 'ganoderma', label: '🍄 Ganoderma' },
    { id: 'membresias', label: '💎 Membresías' },
    { id: 'prospeccion', label: '💬 WhatsApp' }
  ];

  const filteredCopys = useMemo(() => {
    return copysData.filter((item) => {
      if (selectedCategory !== 'todos' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchHeadline = item.headline.toLowerCase().includes(q);
        const matchContent = item.content.toLowerCase().includes(q);
        const matchAudience = item.targetAudience.toLowerCase().includes(q);
        const matchTag = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchHeadline && !matchContent && !matchAudience && !matchTag) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const filteredScripts = useMemo(() => {
    return scriptsData.filter((s) => {
      if (selectedScriptCategory !== 'todos' && s.category !== selectedScriptCategory) {
        return false;
      }
      if (scriptSearchQuery.trim()) {
        const q = scriptSearchQuery.toLowerCase();
        const matchTitle = s.title.toLowerCase().includes(q);
        const matchMessage = s.message.toLowerCase().includes(q);
        const matchAudience = s.targetAudience.toLowerCase().includes(q);
        const matchContext = s.context.toLowerCase().includes(q);
        if (!matchTitle && !matchMessage && !matchAudience && !matchContext) return false;
      }
      return true;
    });
  }, [selectedScriptCategory, scriptSearchQuery]);

  const handleCopyText = async (item: CopyItem) => {
    const textToCopy = `${item.headline}

${item.content}

${item.callToAction}`;

    const success = await copyToClipboard(textToCopy);
    if (success) {
      setCopiedId(item.id);
      onShowToast(`¡Texto copiado al portapapeles listo para enviar!`);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const handleCopyScript = async (script: ScriptItem) => {
    let msg = script.message;
    if (prospectNameInput.trim()) {
      msg = msg.replace(/\[Nombre\]/g, prospectNameInput.trim());
      msg = msg.replace(/\[Nombre del Socio\]/g, prospectNameInput.trim());
    }
    const success = await copyToClipboard(msg);
    if (success) {
      setCopiedScriptId(script.id);
      onShowToast(`¡Guion copiado al portapapeles!`);
      setTimeout(() => setCopiedScriptId(null), 2500);
    }
  };

  const handleSendWhatsAppScript = (script: ScriptItem) => {
    let msg = script.message;
    if (prospectNameInput.trim()) {
      msg = msg.replace(/\[Nombre\]/g, prospectNameInput.trim());
      msg = msg.replace(/\[Nombre del Socio\]/g, prospectNameInput.trim());
    }
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Header */}
      <section className="bg-[#0A2540] text-white p-6 sm:p-10 rounded-2xl shadow-lg border border-slate-800 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest font-mono rounded-md border border-white/10">
          <Lightbulb className="w-4 h-4" />
          <span>Arsenal de Prospección & Crecimiento</span>
        </div>

        <h1 className="h1-custom text-2xl sm:text-4xl text-white font-extrabold tracking-tight">
          Ideas, Copys, 30 Scripts & Creador de Banners
        </h1>

        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          Guiones probados para WhatsApp, publicaciones para redes sociales con Prompts Master de IA (con opción para adjuntar foto de producto), 30 scripts de prospección clasificados por etapas y generador interactivo de banners de reconocimiento para el equipo.
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700/80">
          <button
            onClick={() => setActiveTab('copys')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'copys'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Copys & Publicaciones ({copysData.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('scripts')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'scripts'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            <span>30 Scripts de Prospección & Cierre</span>
          </button>

          <button
            onClick={() => setActiveTab('banners')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'banners'
                ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Creador de Banners del Equipo</span>
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TAB 1: COPYS & PUBLICACIONES CON PROMPTS MASTER IA */}
      {/* ========================================================================= */}
      {activeTab === 'copys' && (
        <div className="space-y-8 animate-fadeIn">
          {/* AI Banner */}
          <section className="bg-gradient-to-r from-amber-500/15 via-emerald-500/10 to-blue-500/10 border border-amber-300/80 rounded-xl p-5 sm:p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider rounded-md font-mono">
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Creador de Imágenes de Prospección IA</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] tracking-tight">
                  Genera Fotografías Publicitarias con Personas Reales y Productos HGW en ChatGPT
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  Cada copy cuenta con un <strong>Prompt Master</strong> calibrado para DALL·E 3 / ChatGPT con opción de adjuntar tu foto de producto, título persuasivo en blanco con sombra y datos de contacto en la esquina inferior izquierda.
                </p>
              </div>

              <div className="shrink-0">
                <span className="text-xs font-mono font-bold text-[#0A2540] bg-white border border-amber-300 px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>1 Clic para abrir en ChatGPT</span>
                </span>
              </div>
            </div>
          </section>

          {/* Filter & Search */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {categories.map((cat) => {
                  const active = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-all cursor-pointer border font-mono ${
                        active
                          ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar copys..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] outline-none text-xs sm:text-sm"
                />
              </div>
            </div>
          </section>

          {/* Copys Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="text-sm font-bold text-[#0A2540] uppercase tracking-wider font-mono">
                Copys disponibles: <strong className="text-amber-600">{filteredCopys.length}</strong>
              </span>
              {(selectedCategory !== 'todos' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('todos');
                    setSearchQuery('');
                  }}
                  className="text-xs text-slate-600 hover:text-[#0A2540] font-bold underline cursor-pointer uppercase tracking-wider font-mono"
                >
                  Mostrar todos
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCopys.map((item) => {
                const isCopied = copiedId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-4">
                      {/* Top Bar */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A2540] bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200 font-mono">
                            {item.category.replace('_', ' ')}
                          </span>
                          <h3 className="font-bold text-lg text-[#0A2540] mt-2 tracking-tight">
                            {item.title}
                          </h3>
                        </div>

                        {/* Prominent Copy Button */}
                        <button
                          onClick={() => handleCopyText(item)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all border shrink-0 cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                              : 'bg-[#0A2540] hover:bg-[#061828] text-white border-[#0A2540] shadow-xs'
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4 text-white" />
                              <span>¡Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-white" />
                              <span>Copiar</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Target Audience */}
                      <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-700 font-mono">
                        <strong className="text-[#0A2540] uppercase">Público:</strong> {item.targetAudience}
                      </div>

                      {/* Headline */}
                      <div className="bg-amber-50/70 border-l-4 border-amber-500 p-3 rounded-r-lg">
                        <p className="font-bold text-[#0A2540] text-sm italic">
                          "{item.headline}"
                        </p>
                      </div>

                      {/* Main Copy Content */}
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-slate-800 text-xs sm:text-sm whitespace-pre-line leading-relaxed font-sans">
                          {item.content}
                        </p>
                      </div>

                      {/* Call to Action */}
                      <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540]">
                        <Send className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>Llamado a la acción: <strong>{item.callToAction}</strong></span>
                      </div>
                    </div>

                    {/* Bottom Bar: Tags & Full Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {/* Prompt Master Button */}
                        <button
                          onClick={() => setSelectedCopyForPrompt(item)}
                          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold py-2.5 px-3.5 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs active:scale-98"
                        >
                          <Wand2 className="w-4 h-4 text-amber-300" />
                          <span>Crear Imagen en ChatGPT</span>
                        </button>

                        {/* Copy Text Button */}
                        <button
                          onClick={() => handleCopyText(item)}
                          className="flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#061828] text-white font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs active:scale-98"
                        >
                          <Copy className="w-4 h-4" />
                          <span>Copiar Guion</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: 30 SCRIPTS DE PROSPECCIÓN, SEGUIMIENTO, CIERRE, EVENTOS Y ZOOM */}
      {/* ========================================================================= */}
      {activeTab === 'scripts' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Top Explanatory Banner */}
          <section className="bg-gradient-to-r from-[#0A2540] via-[#1E3A8A] to-[#0A2540] text-white rounded-xl p-5 sm:p-6 shadow-md border border-slate-700">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-400 text-slate-950 text-[11px] font-bold uppercase tracking-wider rounded font-mono">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>30 Guiones de Prospección Probados</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                  Guiones de Alta Conversión por Etapa de Negocio
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Utiliza estos 30 guiones listos para enviar por WhatsApp o llamada telefónica. Puedes personalizar el nombre de tu prospecto y reemplazar automáticamente los campos de texto.
                </p>
              </div>

              {/* Quick Name Replacer Input */}
              <div className="bg-white/10 p-3 rounded-xl border border-white/20 shrink-0 w-full sm:w-auto">
                <label className="block text-[10px] font-bold text-amber-300 uppercase mb-1">
                  Reemplazar [Nombre] en los guiones:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={prospectNameInput}
                    onChange={(e) => setProspectNameInput(e.target.value)}
                    placeholder="Ej: Carlos / María"
                    className="px-3 py-1.5 text-xs bg-white text-slate-900 rounded-lg outline-none w-36"
                  />
                  {prospectNameInput && (
                    <button
                      onClick={() => setProspectNameInput('')}
                      className="text-[10px] text-slate-300 hover:text-white underline cursor-pointer"
                    >
                      Limpiar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Script Categories & Search Bar */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {scriptCategories.map((cat) => {
                  const active = selectedScriptCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedScriptCategory(cat.id)}
                      className={`px-3 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-all cursor-pointer border font-mono ${
                        active
                          ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-xs'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  value={scriptSearchQuery}
                  onChange={(e) => setScriptSearchQuery(e.target.value)}
                  placeholder="Buscar guion..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] outline-none text-xs sm:text-sm"
                />
              </div>
            </div>
          </section>

          {/* Scripts List Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="text-sm font-bold text-[#0A2540] uppercase tracking-wider font-mono">
                Scripts filtrados: <strong className="text-amber-600">{filteredScripts.length}</strong>
              </span>
              {(selectedScriptCategory !== 'todos' || scriptSearchQuery) && (
                <button
                  onClick={() => {
                    setSelectedScriptCategory('todos');
                    setScriptSearchQuery('');
                  }}
                  className="text-xs text-slate-600 hover:text-[#0A2540] font-bold underline cursor-pointer uppercase tracking-wider font-mono"
                >
                  Mostrar todos los scripts
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredScripts.map((script) => {
                const isCopied = copiedScriptId === script.id;
                let displayedMessage = script.message;
                if (prospectNameInput.trim()) {
                  displayedMessage = displayedMessage.replace(/\[Nombre\]/g, prospectNameInput.trim());
                  displayedMessage = displayedMessage.replace(/\[Nombre del Socio\]/g, prospectNameInput.trim());
                }

                return (
                  <div
                    key={script.id}
                    className="bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      {/* Category Badge & Title */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0A2540] bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-md font-mono">
                            {script.category.replace('_', ' ')}
                          </span>
                          <h3 className="font-bold text-base sm:text-lg text-[#0A2540] mt-1.5 tracking-tight">
                            {script.title}
                          </h3>
                        </div>

                        <button
                          onClick={() => handleCopyScript(script)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all border shrink-0 cursor-pointer ${
                            isCopied
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : 'bg-[#0A2540] hover:bg-[#061828] text-white border-[#0A2540]'
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>¡Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copiar</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Context & Target Audience */}
                      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs space-y-1 text-slate-600">
                        <div><strong className="text-[#0A2540]">Público:</strong> {script.targetAudience}</div>
                        <div><strong className="text-[#0A2540]">Momento de uso:</strong> {script.context}</div>
                      </div>

                      {/* Message Body */}
                      <div className="bg-slate-900 text-slate-100 p-4 rounded-xl border border-slate-800 font-sans text-xs sm:text-sm whitespace-pre-line leading-relaxed shadow-inner">
                        {displayedMessage}
                      </div>

                      {/* Tips list */}
                      <div className="space-y-1 pt-1">
                        <div className="text-[11px] font-bold text-amber-700 uppercase font-mono flex items-center gap-1">
                          <Info className="w-3.5 h-3.5" />
                          <span>Consejos Clave:</span>
                        </div>
                        <ul className="text-[11px] text-slate-600 space-y-0.5 pl-4 list-disc">
                          {script.tips.map((t, idx) => (
                            <li key={idx}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleSendWhatsAppScript(script)}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-slate-950 font-bold py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs active:scale-98"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar por WhatsApp</span>
                      </button>

                      <button
                        onClick={() => handleCopyScript(script)}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#061828] text-white font-bold py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs active:scale-98"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Guion</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: CREADOR DE BANNERS DE RECONOCIMIENTO DEL EQUIPO */}
      {/* ========================================================================= */}
      {activeTab === 'banners' && (
        <div className="space-y-8 animate-fadeIn">
          <section className="bg-gradient-to-r from-[#0A2540] via-[#113255] to-[#0A2540] text-white rounded-2xl p-6 sm:p-10 border border-slate-700 shadow-xl space-y-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-widest rounded-md font-mono">
                <Crown className="w-4 h-4" />
                <span>Generador Oficial de Banners de Equipo</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Crea Banners de Bienvenida, Ascenso y Rangos de Liderazgo
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Herramienta interactiva para generar reconocimientos visuales de alta calidad para tus socios con subida de foto, país, rango (Plata, Oro, Platino, Diamante) y exportación de Prompts IA para ChatGPT y DALL-E 3.
              </p>
            </div>

            {/* Quick Cards for Banner Types */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/10 border border-white/20 p-5 rounded-xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">1. Bienvenida al Equipo</h4>
                <p className="text-xs text-slate-300">
                  Da la bienvenida a nuevos afiliados con su fotografía, país y paquete de membresía inicial.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 p-5 rounded-xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">2. Ascenso de Membresía</h4>
                <p className="text-xs text-slate-300">
                  Reconoce el crecimiento de socios que pasan de Junior/Senior a Master para maximizar bonos.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 p-5 rounded-xl space-y-3">
                <div className="w-10 h-10 rounded-lg bg-sky-400/20 text-sky-300 flex items-center justify-center">
                  <Crown className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">3. Rangos de Liderazgo</h4>
                <p className="text-xs text-slate-300">
                  Homenajea a líderes que conquistan los rangos de Plata, Oro, Platinum, Diamante y Corona.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setShowBannerModal(true)}
                className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black py-3.5 px-8 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg cursor-pointer active:scale-98"
              >
                <Sparkles className="w-5 h-5" />
                <span>Abrir Creador de Banners & Generador de Prompts</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </section>
        </div>
      )}

      {/* Prompt Master Modal (for Copys) */}
      {selectedCopyForPrompt && (
        <PromptMasterModal
          copyItem={selectedCopyForPrompt}
          onClose={() => setSelectedCopyForPrompt(null)}
          onShowToast={onShowToast}
        />
      )}

      {/* Team Banner Generator Modal */}
      {showBannerModal && (
        <TeamBannerGeneratorModal
          onClose={() => setShowBannerModal(false)}
          onShowToast={onShowToast}
        />
      )}
    </div>
  );
};
