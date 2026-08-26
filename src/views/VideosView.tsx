import React, { useState, useMemo } from 'react';
import { 
  Play, 
  Search, 
  ExternalLink, 
  UserCheck, 
  Film,
  Globe,
  GraduationCap
} from 'lucide-react';
import { videosData } from '../data/videos';
import { VideoItem } from '../types';

interface VideosViewProps {
  onPlayVideo: (video: VideoItem) => void;
  onOpenRegisterModal: () => void;
}

export const VideosView: React.FC<VideosViewProps> = ({
  onPlayVideo,
  onOpenRegisterModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'sistema' | 'bonos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredVideos = useMemo(() => {
    return videosData.filter((video) => {
      if (selectedCategory !== 'todos' && video.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = video.title.toLowerCase().includes(q);
        const matchDesc = video.description.toLowerCase().includes(q);
        const matchTag = video.tags.some(t => t.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchTag) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <section className="bg-[#0A2540] text-white p-8 sm:p-10 rounded-xl shadow-lg border border-slate-800 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest font-mono rounded-md border border-white/10">
          <Film className="w-4 h-4" />
          <span>Centro Multimedia • Tutoriales HGW LATAM</span>
        </div>

        <h1 className="h1-custom text-3xl sm:text-4xl lg:text-[35px] text-white font-extrabold tracking-tight">
          Videos del Sistema & Explicación de Bonos
        </h1>

        <p className="text-slate-300 text-standard sm:text-base max-w-3xl leading-relaxed">
          Aprende a dominar tu Oficina Virtual, gestionar pedidos, inscribir nuevos socios y comprender el potencial financiero del Plan de Ganancia Mutua.
        </p>
      </section>

      {/* Filter and Search Controls */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-all cursor-pointer border font-mono ${
                selectedCategory === 'todos'
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              🎬 Todos ({videosData.length})
            </button>
            <button
              onClick={() => setSelectedCategory('sistema')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-all cursor-pointer border font-mono ${
                selectedCategory === 'sistema'
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              💻 Tutoriales Sistema
            </button>
            <button
              onClick={() => setSelectedCategory('bonos')}
              className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider whitespace-nowrap rounded-lg transition-all cursor-pointer border font-mono ${
                selectedCategory === 'bonos'
                  ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              💰 Bonos HGW
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por tema o bono..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 text-slate-900 placeholder-slate-400 border border-slate-200 rounded-lg focus:border-[#0A2540] focus:ring-1 focus:ring-[#0A2540] outline-none text-xs sm:text-sm font-sans"
            />
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <span className="text-sm font-bold text-[#0A2540] uppercase tracking-wider font-mono">
            Mostrando <strong className="text-amber-600">{filteredVideos.length}</strong> videos tutoriales
          </span>
          {(selectedCategory !== 'todos' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
              }}
              className="text-xs text-slate-600 hover:text-[#0A2540] font-bold underline cursor-pointer uppercase tracking-wider font-mono"
            >
              Ver todos los videos
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => {
            return (
              <div
                key={video.id}
                className="bg-white border border-slate-200 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Video Thumbnail with Play Overlay */}
                <div
                  onClick={() => onPlayVideo(video)}
                  className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden border-b border-slate-200"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/95 text-[#0A2540] rounded-full flex items-center justify-center border border-white group-hover:scale-110 transition-all shadow-md">
                      <Play className="w-5 h-5 fill-[#0A2540] ml-0.5" />
                    </div>
                  </div>

                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 text-amber-300 bg-[#0A2540]/90 rounded-md border border-slate-700 font-mono">
                    {video.category === 'sistema' ? 'Tutorial Sistema' : 'Bono HGW'}
                  </span>
                </div>

                {/* Video Body */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 
                      onClick={() => onPlayVideo(video)}
                      className="font-bold text-[16px] sm:text-[17px] text-[#0A2540] line-clamp-2 hover:text-[#1E3A8A] transition-colors cursor-pointer leading-snug tracking-tight"
                      title={video.title}
                    >
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1">
                      {video.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={() => onPlayVideo(video)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#061828] text-white font-bold py-2.5 px-3 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs active:scale-98"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Ver Video</span>
                      </button>
                      <a
                        href="https://www.healthgreenworld.com/?userName=Yamilka507"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 font-bold py-2.5 px-3 rounded-lg border border-slate-300 text-xs uppercase tracking-wider transition-all shadow-xs"
                        title="Acceder a Oficina Virtual HGW"
                      >
                        <span>Oficina Virtual</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white hover:bg-slate-50 text-slate-700 rounded-lg border border-slate-300 transition-colors shrink-0 shadow-xs"
                        title="Ver en YouTube"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enlace Directo a la Oficina Virtual HGW Debajo de los Videos */}
      <section className="bg-[#0A2540] text-white p-6 sm:p-8 rounded-xl shadow-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-[10px] font-bold uppercase tracking-widest font-mono rounded-md border border-white/10">
            <Globe className="w-3.5 h-3.5" />
            <span>Portal Oficial de Socios & Distribuidores</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Oficina Virtual Health Green World (HGW)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Ingresa con tu código de usuario y contraseña para consultar tus comisiones, realizar compras de productos a precio mayorista, verificar tus puntos BV y afiliar nuevos miembros a tu equipo.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
          <a
            href="https://www.healthgreenworld.com/?userName=Yamilka507"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all text-center shadow-md active:scale-98"
          >
            <span>Ingresar a Oficina Virtual</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenRegisterModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-lg border border-white/20 text-xs uppercase tracking-wider transition-all text-center cursor-pointer"
          >
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>¿Cómo Registrarme?</span>
          </button>
        </div>
      </section>

      {/* Academia Digital Banner */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-bold text-[#0A2540] uppercase tracking-widest bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-md inline-block font-mono">
            Capacitación Continua 24/7
          </span>
          <h3 className="h3-custom text-xl sm:text-2xl font-bold text-[#0A2540] tracking-tight">
            Acceso Exclusivo a la Academia Digital HGW
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
            Una vez activo como distribuidor con tu membresía HGW, tendrás acceso gratuito y permanente a la plataforma formativa <strong>academiahgw.online</strong> con estrategias digitales, embudos de prospección y capacitaciones.
          </p>
        </div>

        <button
          onClick={onOpenRegisterModal}
          className="bg-[#0A2540] hover:bg-[#061828] text-white font-bold px-6 py-3.5 rounded-xl uppercase text-xs tracking-wider transition-all shrink-0 cursor-pointer shadow-sm active:scale-98"
        >
          Crear Cuenta & Obtener Acceso
        </button>
      </section>
    </div>
  );
};
