import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { VideoModal } from './components/VideoModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Toast } from './components/Toast';

import { CatalogView } from './views/CatalogView';
import { OfficesView } from './views/OfficesView';
import { VideosView } from './views/VideosView';
import { CopysView } from './views/CopysView';
import { MembershipsView } from './views/MembershipsView';
import { HealthGuideView } from './views/HealthGuideView';
import { AboutView } from './views/AboutView';

import { Product, VideoItem } from './types';
import { MessageCircle } from 'lucide-react';

const PAGE_TITLES: Record<string, string> = {
  catalogo: 'HGW LATAM | Catálogo Oficial de Productos',
  oficinas: 'HGW LATAM | Directorio de Oficinas & Sedes Autorizadas',
  videos: 'HGW LATAM | Videos del Sistema & Explicación de Bonos',
  copys: 'HGW LATAM | Ideas, Copys & Prompts IA para Prospección',
  membresias: 'HGW LATAM | Membresías Mayoristas & Plan Ganancia Mutua',
  salud: 'HGW LATAM | Guía de Salud, Fitoterapia & Protocolos',
  nosotros: 'HGW LATAM | Sobre la Empresa & Liderazgo Internacional'
};

const PATH_MAP: Record<string, string> = {
  catalogo: '/productos',
  oficinas: '/oficinas',
  videos: '/videos',
  copys: '/copys',
  membresias: '/membresias',
  salud: '/salud',
  nosotros: '/nosotros'
};

export default function App() {
  // Navigation & Routing State
  const [currentTab, setCurrentTab] = useState<string>('catalogo');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('Todos');

  // Modals State
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [productInContext, setProductInContext] = useState<Product | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Toast State
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Sync initial URL path with currentTab to support SPA links, bookmarks and direct URL entry
  useEffect(() => {
    const syncPathWithTab = () => {
      const path = window.location.pathname.toLowerCase().replace('/', '');
      let matchedTab = 'catalogo';

      if (path.includes('oficina')) {
        matchedTab = 'oficinas';
      } else if (path.includes('video')) {
        matchedTab = 'videos';
      } else if (path.includes('copy') || path.includes('idea') || path.includes('prompt')) {
        matchedTab = 'copys';
      } else if (path.includes('membresia') || path.includes('plan') || path.includes('bono')) {
        matchedTab = 'membresias';
      } else if (path.includes('salud') || path.includes('ciencia') || path.includes('guia')) {
        matchedTab = 'salud';
      } else if (path.includes('nosotros') || path.includes('empresa') || path.includes('contacto')) {
        matchedTab = 'nosotros';
      } else {
        matchedTab = 'catalogo';
      }

      setCurrentTab(matchedTab);
      document.title = PAGE_TITLES[matchedTab] || 'HGW LATAM | Health Green World Oficial';
    };

    syncPathWithTab();

    // Listen to browser back/forward buttons
    window.addEventListener('popstate', syncPathWithTab);
    return () => window.removeEventListener('popstate', syncPathWithTab);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    const targetPath = PATH_MAP[tab] || '/productos';
    window.history.pushState({}, '', targetPath);
    document.title = PAGE_TITLES[tab] || 'HGW LATAM | Health Green World Oficial';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRegisterModal = (product?: Product) => {
    if (product) {
      setProductInContext(product);
    } else {
      setProductInContext(null);
    }
    setRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-amber-200 selection:text-amber-950 font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenRegisterModal={() => handleOpenRegisterModal()}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCountry={selectedCountry}
        onSelectCountry={setSelectedCountry}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {currentTab === 'catalogo' && (
          <CatalogView
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onOpenRegisterModal={handleOpenRegisterModal}
          />
        )}

        {currentTab === 'oficinas' && (
          <OfficesView
            selectedCountry={selectedCountry}
            onSelectCountry={setSelectedCountry}
            onOpenRegisterModal={() => handleOpenRegisterModal()}
            onShowToast={triggerToast}
          />
        )}

        {currentTab === 'videos' && (
          <VideosView
            onPlayVideo={(vid) => setActiveVideo(vid)}
            onOpenRegisterModal={() => handleOpenRegisterModal()}
          />
        )}

        {currentTab === 'copys' && (
          <CopysView onShowToast={triggerToast} />
        )}

        {currentTab === 'membresias' && (
          <MembershipsView onOpenRegisterModal={() => handleOpenRegisterModal()} />
        )}

        {currentTab === 'salud' && (
          <HealthGuideView
            onOpenRegisterModal={() => handleOpenRegisterModal()}
            onGoToCatalog={() => handleSelectTab('catalogo')}
          />
        )}

        {currentTab === 'nosotros' && (
          <AboutView onOpenRegisterModal={() => handleOpenRegisterModal()} />
        )}
      </main>

      {/* Floating Action Button for WhatsApp Support */}
      <aside aria-label="Contacto de Soporte" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        <a
          href="https://wa.me/50767788375?text=Hola%20Yamilka,%20deseo%20asesor%C3%ADa%20sobre%20los%20productos%20HGW%20y%20el%20c%C3%B3digo%20de%20patrocinador%20Yamilka507"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-[#0A2540] hover:bg-[#1E3A8A] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full border border-slate-700 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
          title="Hablar por WhatsApp con Yamilka Batista (Patrocinadora Oficial)"
        >
          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
            <MessageCircle className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-mono font-bold text-xs uppercase tracking-wider text-amber-300">
            WhatsApp Oficial
          </span>
        </a>
      </aside>

      {/* Modals and Overlays */}
      <RegisterModal
        isOpen={registerModalOpen}
        onClose={() => {
          setRegisterModalOpen(false);
          setProductInContext(null);
        }}
        productContext={productInContext ? {
          name: productInContext.name,
          publicPrice: productInContext.publicPrice,
          partnerPrice: productInContext.partnerPrice
        } : null}
      />

      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onOpenRegisterModal={() => {
          setActiveVideo(null);
          handleOpenRegisterModal();
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenRegisterModal={(prod) => {
          setSelectedProduct(null);
          handleOpenRegisterModal(prod);
        }}
      />

      {/* Floating Toast Notification */}
      <Toast show={showToast} message={toastMessage} />

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenRegisterModal={() => handleOpenRegisterModal()}
      />
    </div>
  );
}
