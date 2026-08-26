import React from 'react';
import { X, ExternalLink, UserCheck, Globe, Play } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onOpenRegisterModal: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  video,
  onClose,
  onOpenRegisterModal
}) => {
  if (!video) return null;

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
        <div className="bg-[#0A2540] text-white p-3.5 sm:p-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="pr-2 sm:pr-6 min-w-0">
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300 block mb-0.5 truncate">
              {video.category === 'sistema' ? 'Tutorial del Sistema HGW' : 'Plan de Bonos & Compensación'}
            </span>
            <h3 className="text-xs sm:text-lg md:text-xl font-bold text-white tracking-tight line-clamp-1">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Cerrar video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 min-h-0 p-3 sm:p-5 md:p-6 space-y-3.5 sm:space-y-4 overscroll-contain">
          {/* Video Player */}
          <div className="aspect-video w-full bg-black rounded-xl border border-slate-800 overflow-hidden shadow-inner max-h-[40vh] sm:max-h-none">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Enlace Directo a la Oficina Virtual HGW (Debajo del Video) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 font-mono shadow-xs">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#0A2540]">
                  Oficina Virtual Oficial HGW
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-600">
                Portal web para ingresar con tu código de usuario, compras y red.
              </p>
            </div>

            <a
              href="https://www.healthgreenworld.com/?userName=Yamilka507"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all whitespace-nowrap text-center shadow-xs"
            >
              <span>Acceder a Oficina</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>

          {/* Details and Actions */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="space-y-1 max-w-xl">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{video.description}</p>
              {video.speaker && (
                <p className="text-[11px] text-[#0A2540] font-bold uppercase font-mono">Expositor: {video.speaker}</p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto pt-1 md:pt-0">
              <button
                onClick={() => {
                  onClose();
                  onOpenRegisterModal();
                }}
                className="flex-1 min-h-[40px] flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shadow-xs active:scale-98"
              >
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>Cómo Registrarse</span>
              </button>
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] p-2.5 bg-white hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-300 transition-colors shadow-xs flex items-center justify-center"
                title="Abrir en YouTube"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
