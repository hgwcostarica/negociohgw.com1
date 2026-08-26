import React, { useState, useRef } from 'react';
import { 
  X, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink, 
  Users, 
  Package, 
  Camera, 
  MessageSquare,
  Wand2,
  Layers,
  User,
  Phone,
  Globe,
  Sliders,
  Type,
  Upload,
  Image as ImageIcon
} from 'lucide-react';
import { CopyItem } from '../types';
import { generateProspectingImagePrompt, derivePersuasiveTitle } from '../utils/promptGenerator';
import { copyToClipboard } from '../utils/imageHelper';

interface PromptMasterModalProps {
  copyItem: CopyItem | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const PromptMasterModal: React.FC<PromptMasterModalProps> = ({
  copyItem,
  onClose,
  onShowToast
}) => {
  const [includeContact, setIncludeContact] = useState(true);
  const [contactName, setContactName] = useState('Yamilka Batista');
  const [contactWhatsapp, setContactWhatsapp] = useState('+507 6778-8375');
  const [contactLink, setContactLink] = useState('hgw.yamilkabatista.com');
  const [customTitle, setCustomTitle] = useState(copyItem ? derivePersuasiveTitle(copyItem) : '');
  const [showConfig, setShowConfig] = useState(false);
  const [productImageRef, setProductImageRef] = useState<string | null>(null);
  const [productNameCustom, setProductNameCustom] = useState('');

  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  const productFileInputRef = useRef<HTMLInputElement>(null);

  if (!copyItem) return null;

  const handleProductImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProductImageRef(reader.result as string);
        onShowToast('¡Imagen de producto cargada como referencia!');
      };
      reader.readAsDataURL(file);
    }
  };

  const promptData = generateProspectingImagePrompt(copyItem, {
    includeContact,
    name: contactName,
    whatsapp: contactWhatsapp,
    link: contactLink,
    customTitle: customTitle || derivePersuasiveTitle(copyItem),
    productImageRef: productImageRef || undefined,
    productNameCustom: productNameCustom || undefined
  });

  const handleCopyPromptOnly = async () => {
    const success = await copyToClipboard(promptData.masterPrompt);
    if (success) {
      setCopiedPrompt(true);
      onShowToast('¡Prompt Master copiado al portapapeles!');
      setTimeout(() => setCopiedPrompt(false), 2500);
    }
  };

  const handleCopyAll = async () => {
    const fullPackage = `${promptData.masterPrompt}

═════════════════════════════════════════════════
📝 GUION / COPY PARA LA PUBLICACIÓN:
═════════════════════════════════════════════════
${copyItem.headline}

${copyItem.content}

${copyItem.callToAction}`;

    const success = await copyToClipboard(fullPackage);
    if (success) {
      setCopiedAll(true);
      onShowToast('¡Prompt Master + Copy completo copiado!');
      setTimeout(() => setCopiedAll(false), 2500);
    }
  };

  const handleOpenChatGPT = () => {
    window.open(promptData.chatGptUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl h-[92vh] sm:h-auto max-h-[92vh] sm:max-h-[90vh] bg-white rounded-t-2xl sm:rounded-2xl border-t sm:border border-slate-200 shadow-2xl flex flex-col overflow-hidden min-h-0 animate-slideUp sm:animate-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Bar Indicator */}
        <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto my-1.5 sm:hidden shrink-0" />

        {/* Modal Header */}
        <div className="bg-[#0A2540] text-white p-3.5 sm:p-5 flex items-start justify-between border-b border-slate-800 shrink-0">
          <div className="pr-2 min-w-0">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-400/20 text-amber-300 text-[9px] sm:text-xs font-bold uppercase tracking-widest rounded border border-amber-400/30 mb-1 font-mono">
              <Wand2 className="w-3 h-3" />
              <span>Prompt Master para Imagen con IA</span>
            </div>
            <h2 className="text-sm sm:text-xl font-extrabold text-white tracking-tight leading-snug">
              Generador de Imagen de Prospección
            </h2>
            <p className="text-slate-300 text-[11px] sm:text-sm mt-0.5 line-clamp-1">
              Basado en: <strong className="text-white font-medium">{copyItem.title}</strong>
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

        {/* Modal Scrollable Content */}
        <div className="p-3.5 sm:p-6 space-y-4 overflow-y-auto flex-1 min-h-0 text-slate-800 text-xs sm:text-sm overscroll-contain">
          {/* Quick Action Top Banner */}
          <div className="bg-amber-50/90 border border-amber-300/80 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shadow-xs">
            <div className="space-y-0.5">
              <span className="text-[11px] sm:text-xs font-bold text-[#0A2540] uppercase tracking-wider flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Creación Directa con ChatGPT / DALL-E 3</span>
              </span>
              <p className="text-[11px] text-slate-600">
                Abre ChatGPT con el Prompt, Título persuasivo y Datos de Contacto ya incluidos.
              </p>
            </div>

            <button
              onClick={handleOpenChatGPT}
              className="min-h-[40px] flex items-center justify-center gap-1.5 bg-[#10A37F] hover:bg-[#0E8E6D] text-white font-bold py-2 px-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap active:scale-98"
            >
              <span>Abrir en ChatGPT</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Contact Data & Title Customizer Panel */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-3">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setShowConfig(!showConfig)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#0A2540] uppercase font-mono cursor-pointer hover:text-amber-600 transition-colors"
              >
                <Sliders className="w-3.5 h-3.5 text-amber-500" />
                <span>Personalizar Datos & Subir Producto:</span>
                <span className="text-[10px] text-slate-500 font-sans font-normal ml-1">
                  ({showConfig ? 'Ocultar campos' : 'Modificar Nombre, WhatsApp, Título o Foto Producto'})
                </span>
              </button>

              <label className="flex items-center gap-1.5 cursor-pointer text-[11px] font-semibold text-slate-700 select-none">
                <input
                  type="checkbox"
                  checked={includeContact}
                  onChange={(e) => setIncludeContact(e.target.checked)}
                  className="w-4 h-4 text-[#0A2540] rounded border-slate-300 focus:ring-amber-400 cursor-pointer"
                />
                <span>Incluir datos</span>
              </label>
            </div>

            {/* Config Fields */}
            {showConfig && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-200 animate-fadeIn">
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1 flex items-center gap-1">
                    <Type className="w-3 h-3 text-slate-400" />
                    <span>Título Persuasivo Corto:</span>
                  </label>
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    placeholder="Ej: PROTEGE TU VISIÓN Y ENERGÍA"
                    className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-400" />
                    <span>Nombre para la Imagen:</span>
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ej: Yamilka Batista"
                    className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-slate-400" />
                    <span>WhatsApp:</span>
                  </label>
                  <input
                    type="text"
                    value={contactWhatsapp}
                    onChange={(e) => setContactWhatsapp(e.target.value)}
                    placeholder="Ej: +507 6778-8375"
                    className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-slate-400" />
                    <span>Enlace Web (Opcional):</span>
                  </label>
                  <input
                    type="text"
                    value={contactLink}
                    onChange={(e) => setContactLink(e.target.value)}
                    placeholder="Ej: hgw.yamilkabatista.com"
                    className="w-full text-xs px-2.5 py-1.5 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-amber-500 bg-white"
                  />
                </div>

                {/* Upload Product Image Option */}
                <div className="sm:col-span-2 pt-2 border-t border-slate-200">
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <ImageIcon className="w-3 h-3 text-amber-500" />
                      <span>Subir Imagen del Producto (Opcional):</span>
                    </span>
                    {productImageRef && (
                      <button
                        type="button"
                        onClick={() => setProductImageRef(null)}
                        className="text-[10px] text-rose-600 hover:underline cursor-pointer"
                      >
                        Quitar imagen
                      </button>
                    )}
                  </label>
                  <input
                    type="file"
                    ref={productFileInputRef}
                    onChange={handleProductImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => productFileInputRef.current?.click()}
                      className="flex-1 flex items-center justify-center gap-2 py-1.5 px-3 border border-slate-300 hover:border-[#0A2540] rounded-lg bg-white text-xs text-slate-700 font-semibold cursor-pointer transition-all"
                    >
                      <Upload className="w-3.5 h-3.5 text-amber-500" />
                      <span>{productImageRef ? 'Cambiar Imagen del Producto' : 'Subir Foto o Empaque del Producto'}</span>
                    </button>
                    {productImageRef && (
                      <div className="w-8 h-8 rounded border border-slate-300 overflow-hidden shrink-0">
                        <img src={productImageRef} alt="Ref" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Visual Mini-Layout Preview with mandatory 65% opacity dark background & white text */}
            <div className="relative bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-700 text-white rounded-xl p-3 sm:p-4 overflow-hidden border border-slate-600 shadow-inner flex flex-col justify-between min-h-[110px]">
              {/* Title preview in white with shadow */}
              <div className="text-center">
                <span className="text-xs sm:text-sm font-black tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] uppercase font-sans">
                  {promptData.persuasiveTitle}
                </span>
              </div>

              {/* Bottom Left Contact Card Preview (Dark bg 65% opacity, white text) */}
              {includeContact && (contactName || contactWhatsapp || contactLink) && (
                <div className="self-start mt-4 bg-black/65 backdrop-blur-xs border border-white/20 rounded-lg px-2.5 py-1.5 text-[10px] sm:text-[11px] text-white space-y-0.5 shadow-md">
                  {contactName && <div className="font-bold flex items-center gap-1"><User className="w-2.5 h-2.5 text-amber-300" /> {contactName}</div>}
                  {contactWhatsapp && <div className="flex items-center gap-1 font-mono text-[10px]"><Phone className="w-2.5 h-2.5 text-emerald-400" /> {contactWhatsapp}</div>}
                  {contactLink && <div className="text-slate-200 text-[9px] flex items-center gap-1 font-mono"><Globe className="w-2.5 h-2.5 text-sky-400" /> {contactLink}</div>}
                </div>
              )}
            </div>
          </div>

          {/* Prompt Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#0A2540] uppercase font-mono">
                <Users className="w-3.5 h-3.5 text-amber-500" />
                <span>Personas & Enfoque:</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {promptData.peopleFocus}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#0A2540] uppercase font-mono">
                <Package className="w-3.5 h-3.5 text-amber-500" />
                <span>Producto HGW Integrado:</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {promptData.productFocus}
              </p>
            </div>
          </div>

          {/* Master Prompt Codebox */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-bold text-[#0A2540] uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-slate-500" />
                <span>Texto del Prompt Master con Instrucciones:</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono">
                Formato: {promptData.recommendedAspect}
              </span>
            </div>

            <div className="relative bg-slate-900 text-slate-100 rounded-xl p-3 sm:p-4 font-mono text-xs leading-relaxed border border-slate-800 shadow-inner max-h-36 sm:max-h-56 overflow-y-auto">
              <pre className="whitespace-pre-wrap font-sans text-xs text-slate-200 leading-relaxed">
                {promptData.masterPrompt}
              </pre>
            </div>
          </div>

          {/* Copy Snippet Reference */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#0A2540] uppercase font-mono">
              <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
              <span>Copy Asociado que Acompañará la Imagen:</span>
            </div>
            <p className="text-xs font-bold text-slate-800 italic">
              "{copyItem.headline}"
            </p>
            <p className="text-xs text-slate-600 line-clamp-2">
              {copyItem.content}
            </p>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 shrink-0">
          <button
            onClick={handleCopyPromptOnly}
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
                <Copy className="w-4 h-4" />
                <span>Copiar Solo Prompt</span>
              </>
            )}
          </button>

          <button
            onClick={handleCopyAll}
            className={`min-h-[40px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
              copiedAll
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
            }`}
          >
            {copiedAll ? (
              <>
                <Check className="w-4 h-4" />
                <span>¡Todo Copiado!</span>
              </>
            ) : (
              <>
                <Layers className="w-4 h-4" />
                <span>Copiar Prompt + Copy</span>
              </>
            )}
          </button>

          <button
            onClick={handleOpenChatGPT}
            className="min-h-[40px] flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold py-2 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-98"
          >
            <span>Crear en ChatGPT</span>
            <ExternalLink className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
