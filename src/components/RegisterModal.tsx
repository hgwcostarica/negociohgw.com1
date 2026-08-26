import React, { useState } from 'react';
import { X, ExternalLink, Copy, Check, MessageCircle, AlertCircle, Sparkles, Globe } from 'lucide-react';
import { copyToClipboard } from '../utils/imageHelper';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  productContext?: {
    name: string;
    publicPrice: number;
    partnerPrice: number;
  } | null;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  productContext
}) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeVideo, setActiveVideo] = useState<'registro' | 'oficina'>('registro');

  if (!isOpen) return null;

  const handleCopyCode = async () => {
    const success = await copyToClipboard('Yamilka507');
    if (success) {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2500);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[90vh] sm:h-auto max-h-[90vh] sm:max-h-[88vh] bg-white rounded-t-2xl sm:rounded-2xl border-t sm:border border-slate-200 shadow-2xl flex flex-col overflow-hidden min-h-0 animate-slideUp sm:animate-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Pull Bar Indicator */}
        <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto my-1.5 sm:hidden shrink-0" />

        {/* Modal Header */}
        <div className="bg-[#0A2540] text-white p-3.5 sm:p-5 flex items-start justify-between border-b border-slate-800 shrink-0">
          <div className="pr-2 min-w-0">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-400/20 text-amber-300 text-[9px] sm:text-xs font-bold uppercase tracking-widest mb-1 rounded border border-amber-400/30 font-mono">
              <Sparkles className="w-3 h-3" />
              <span>Guía Oficial de Registro & Compra</span>
            </div>
            <h2 className="text-sm sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
              ¿Cómo Registrarse y Comprar en HGW?
            </h2>
            <p className="text-slate-300 text-[11px] sm:text-sm mt-0.5 line-clamp-1 sm:line-clamp-none">
              Obtén hasta 30% a 60% de descuento y compra en oficinas autorizadas con tu código de usuario.
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

        {/* Product Context Banner (if triggered from a product card) */}
        {productContext && (
          <div className="bg-amber-50/90 border-b border-amber-200 px-3.5 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-1.5 shrink-0 text-xs">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-[9px] font-bold bg-[#0A2540] text-amber-300 px-2 py-0.5 rounded uppercase tracking-wider font-mono shrink-0">
                Producto
              </span>
              <span className="font-bold text-[#0A2540] truncate text-xs">{productContext.name}</span>
            </div>
            <div className="text-[11px] sm:text-xs text-slate-700 flex items-center gap-2 font-mono">
              <span>Público: <strong className="line-through text-slate-400">${productContext.publicPrice.toFixed(2)}</strong></span>
              <span className="text-[#0A2540] font-bold bg-white border border-amber-300 px-2 py-0.5 rounded">
                Socio: ${productContext.partnerPrice.toFixed(2)}
              </span>
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-3.5 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-y-auto flex-1 min-h-0 overscroll-contain">
          {/* Video Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 border-b border-slate-200 pb-2.5">
            <button
              onClick={() => setActiveVideo('registro')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer border font-mono ${
                activeVideo === 'registro'
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              1. Video: Registro Paso a Paso
            </button>
            <button
              onClick={() => setActiveVideo('oficina')}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer border font-mono ${
                activeVideo === 'oficina'
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              2. Video: Comprar en Oficina Virtual
            </button>
          </div>

          {/* Embedded YouTube Player */}
          <div className="aspect-video w-full overflow-hidden bg-black rounded-xl border border-slate-800 shadow-sm max-h-[35vh] sm:max-h-none">
            {activeVideo === 'registro' ? (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/cR-aHkU9N4A?autoplay=0&rel=0"
                title="Tutorial de Registro HGW"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zLGHwUv3E0s?autoplay=0&rel=0"
                title="Cómo Comprar Productos en Oficina Virtual HGW"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Enlace Directo a Oficina Virtual Debajo del Video */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 font-mono shadow-xs">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0A2540]">
                  Oficina Virtual Oficial HGW
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-600">
                Acceso directo a la plataforma de compras de Health Green World.
              </p>
            </div>

            <a
              href="https://www.healthgreenworld.com/?userName=Yamilka507"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all whitespace-nowrap text-center shadow-xs"
            >
              <span>Ir a Oficina Virtual</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          {/* Sponsor Code Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div className="text-center sm:text-left">
              <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest block font-mono">Código de Patrocinador Autorizado</span>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-0.5">
                <span className="text-xl sm:text-3xl font-black text-[#0A2540] font-mono tracking-wider">
                  Yamilka507
                </span>
                <span className="text-[10px] sm:text-xs bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                  Verificado
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
                Patrocinadora: <strong className="text-slate-800">Yamilka Batista</strong> (Panamá & LATAM)
              </p>
            </div>

            <button
              onClick={handleCopyCode}
              className={`w-full sm:w-auto min-h-[42px] flex items-center justify-center gap-2 font-bold px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs ${
                copiedCode
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#0A2540] hover:bg-[#1E3A8A] text-white'
              }`}
            >
              {copiedCode ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>¡Código Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar: Yamilka507</span>
                </>
              )}
            </button>
          </div>

          {/* Step-by-step instructions */}
          <div className="space-y-2.5 sm:space-y-4">
            <h4 className="font-bold text-xs sm:text-base text-[#0A2540] uppercase tracking-tight font-mono">
              Pasos sencillos para crear tu cuenta y comprar:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 relative">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#0A2540] text-amber-300 rounded flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs mb-2">
                  1
                </div>
                <h5 className="font-bold text-[#0A2540] text-xs uppercase mb-0.5">Haz clic en Registrarse</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Accede al portal oficial de Health Green World con el enlace oficial de patrocinio.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 relative">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#0A2540] text-amber-300 rounded flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs mb-2">
                  2
                </div>
                <h5 className="font-bold text-[#0A2540] text-xs uppercase mb-0.5">Elige tu País & Datos</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Selecciona tu país de residencia y completa tu nombre, identificación y dirección de entrega.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 relative">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#0A2540] text-amber-300 rounded flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs mb-2">
                  3
                </div>
                <h5 className="font-bold text-[#0A2540] text-xs uppercase mb-0.5">Selecciona tus Productos</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Elige tus productos favoritos o adquiere tu membresía mayorista con descuentos de por vida.
                </p>
              </div>
            </div>
          </div>

          {/* Important Rules Banner */}
          <div className="bg-amber-50/90 border-l-4 border-amber-500 rounded-r-xl p-3 sm:p-4 flex gap-2.5 text-xs text-slate-800">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold uppercase tracking-wide text-[11px] sm:text-xs text-[#0A2540] font-mono">
                📌 Compras en Oficinas Físicas HGW y Envíos a Domicilio:
              </p>
              <p className="text-slate-700 text-[11px] sm:text-xs leading-relaxed">
                Al escribir o acudir a las oficinas autorizadas, debes indicar tu <strong>número de usuario HGW</strong>. Si aún no lo tienes, créalo gratis en el botón inferior o contáctame y con gusto te enseño cómo generarlo. Los métodos de pago y despacho varían según país. Envíos entre 3 a 6 días hábiles.
              </p>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
            <a
              href="https://www.healthgreenworld.com/?userName=Yamilka507"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[44px] flex items-center justify-center gap-2 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold py-3 px-4 sm:px-6 rounded-xl text-center text-xs uppercase tracking-wider transition-all shadow-md active:scale-98"
            >
              <span>Ir a Registrarme en HGW Oficial</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/50767788375?text=Hola%20Yamilka,%20necesito%20ayuda%20para%20crear%20mi%20cuenta%20de%20usuario%20en%20HGW%20y%20comprar%20productos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[44px] flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 sm:px-6 rounded-xl transition-all text-xs uppercase tracking-wider shadow-md active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ayuda por WhatsApp</span>
            </a>
          </div>

          <div className="text-center pt-1 pb-2">
            <p className="text-[10px] sm:text-xs text-slate-400 font-mono">
              ¿Ya eres afiliado registrado? Ingresa con tus credenciales habituales o contacta a tu oficina local.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
