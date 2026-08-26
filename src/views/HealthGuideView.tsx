import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Eye, 
  Zap, 
  ShieldCheck, 
  Heart, 
  Activity, 
  Feather, 
  UserCheck, 
  Check,
  ChevronRight,
  ExternalLink,
  Droplets
} from 'lucide-react';

interface HealthGuideViewProps {
  onOpenRegisterModal: () => void;
  onGoToCatalog: () => void;
}

export const HealthGuideView: React.FC<HealthGuideViewProps> = ({
  onOpenRegisterModal,
  onGoToCatalog
}) => {
  const [activeTab, setActiveTab] = useState<'vision' | 'colon' | 'inmune' | 'hepatica' | 'turmalina'>('vision');

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Header - Corporate Navy */}
      <section className="bg-[#0A2540] text-white p-8 sm:p-12 rounded-xl shadow-lg border border-slate-800 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-[11px] font-bold uppercase tracking-widest font-mono rounded-md border border-white/10">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Ciencia, Nutrición Celular & Fitoterapia</span>
        </div>

        <h1 className="h1-custom text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight">
          Guía de Salud & Enfoques Terapéuticos HGW
        </h1>

        <p className="text-slate-300 text-standard sm:text-lg max-w-3xl leading-relaxed">
          Descubre los fundamentos científicos detrás de nuestros protocolos de salud: Cuidado de la Visión con Arándanos canadienses, Limpieza de Colon y Detox, Modulación del Sistema Inmunológico, Salud Hepática y Renal, y Tecnología Bioeléctrica de Turmalina.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenRegisterModal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <UserCheck className="w-4 h-4" />
            <span>Cómo Adquirir con 30%-60% de Descuento</span>
          </button>
          <a
            href="https://www.healthgreenworld.com/?userName=Yamilka507"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider border border-white/20 transition-all"
          >
            <span>Oficina Virtual HGW</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* Navigation Tabs (Enfoques de Salud) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          onClick={() => setActiveTab('vision')}
          className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
            activeTab === 'vision'
              ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
          }`}
        >
          👁️ Cuidado de la Visión
        </button>

        <button
          onClick={() => setActiveTab('colon')}
          className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
            activeTab === 'colon'
              ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
          }`}
        >
          🍃 Protocolo Limpieza de Colon
        </button>

        <button
          onClick={() => setActiveTab('inmune')}
          className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
            activeTab === 'inmune'
              ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
          }`}
        >
          🛡️ Sistema Inmunológico
        </button>

        <button
          onClick={() => setActiveTab('hepatica')}
          className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
            activeTab === 'hepatica'
              ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
          }`}
        >
          🌱 Salud Hepática y Renal
        </button>

        <button
          onClick={() => setActiveTab('turmalina')}
          className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap border ${
            activeTab === 'turmalina'
              ? 'bg-[#0A2540] text-white border-[#0A2540] shadow-sm'
              : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
          }`}
        >
          ⚡ Piedra de Turmalina
        </button>
      </div>

      {/* TAB 1: CUIDADO DE LA VISION */}
      {activeTab === 'vision' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 bg-slate-50 border border-slate-200 rounded-xl p-6 flex items-center justify-center">
                <img
                  src="https://hgwpanama.com/wp-content/uploads/2026/08/arandano-azul-hgw.webp"
                  alt="Arándanos Azules HGW - Cuidado de la Visión"
                  className="max-h-64 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://hgwpanama.com/wp-content/uploads/2026/08/Blueberry-Candy-_-Caramelos-de-arandano.png';
                  }}
                />
              </div>

              <div className="w-full md:w-2/3 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A2540] bg-blue-50 px-3 py-1 rounded-md font-mono border border-blue-200 inline-block">
                  Enfoque Clínico: Cuidado de la Visión & Retina
                </span>
                <h2 className="h2-custom text-2xl sm:text-3xl font-bold text-[#0A2540] tracking-tight">
                  Antocianinas & Protección Ocular contra la Luz Azul
                </h2>
                <p className="text-slate-600 text-standard leading-relaxed">
                  Los arándanos de HGW se cultivan bajo estándares biológicos estrictos en Norteamérica. Contienen la mayor concentración natural de <strong>Antocianinas tipo VMA</strong>, un flavonoide antioxidante que atraviesa la barrera hemato-retiniana en tan solo <strong>20 minutos tras su ingesta</strong>, nutriendo directamente los bastoncillos y conos oculares.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
                    <strong className="text-[#0A2540] block uppercase mb-1 font-mono font-bold">50x más potente que Vitamina E:</strong>
                    <span className="text-slate-600">Neutraliza radicales libres protegiendo el cristalino y la mácula contra el desgaste oxidativo.</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
                    <strong className="text-[#0A2540] block uppercase mb-1 font-mono font-bold">200x más potente que Vitamina C:</strong>
                    <span className="text-slate-600">Fortalece la microcirculación de los capilares de la retina y mejora la visión nocturna.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Products for Vision */}
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <h3 className="h3-custom text-xl font-bold text-[#0A2540]">
                Productos Estrella para el Cuidado de la Visión
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-blue-700 font-mono">1. Blueberry Candy</span>
                  <p className="text-xs text-slate-600">Caramelos ricos en antocianinas para consumo diario portátil en niños, jóvenes y adultos.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-blue-700 font-mono">2. Berry Juice HIGH VC</span>
                  <p className="text-xs text-slate-600">Mega concentrado de frutos rojos y vitamina C para fatiga visual por pantallas y celulares.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-blue-700 font-mono">3. Blueberry Coffee HGW</span>
                  <p className="text-xs text-slate-600">Café gourmet con arándanos canadienses: energía limpia y salud ocular en cada taza.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <button
                onClick={onGoToCatalog}
                className="bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold px-5 py-3 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-sm"
              >
                <span>Ver Productos de Visión en el Catálogo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PROTOCOLO LIMPIEZA DE COLON */}
      {activeTab === 'colon' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A2540] bg-emerald-50 px-3 py-1 rounded-md font-mono border border-emerald-200 inline-block">
                Enfoque Digestivo: Protocolo Limpieza de Colon & Detox
              </span>
              <h2 className="h2-custom text-2xl sm:text-3xl font-bold text-[#0A2540] tracking-tight">
                Protocolo Verde HGW: Desintoxicación Intestinal Sin Irritantes
              </h2>
              <p className="text-slate-600 text-standard leading-relaxed max-w-3xl">
                El 80% del sistema inmunológico y el 90% de la serotonina corporal se originan en el tracto intestinal. Nuestro protocolo verde elimina residuos estancados, combate la hinchazón y restaura la flora digestiva sin cólicos ni deshidratación.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 font-mono">Paso 1: Evacuación & Alcalinidad</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Ayunas</span>
                </div>
                <h3 className="font-bold text-[#0A2540] text-base">
                  Fresh Drink Chang JingJing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fórmula a base de brotes tiernos de cebada, clorofila pura, bayas de goji y diente de león. Arrastra las placas mucosas adheridas a las vellosidades intestinales.
                </p>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 font-mono">
                  🌿 1 sobre en 500ml de agua tibia en ayunas por 15 a 30 días.
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 font-mono">Paso 2: Metabolismo Lipídico</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Post Almuerzo</span>
                </div>
                <h3 className="font-bold text-[#0A2540] text-base">
                  Pro Shaping Tea (Té Moldeador)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Hojas de loto, té verde, espino blanco y semillas de cassia. Acelera la digestión pesada, disminuye la retención hídrica y quema grasa abdominal.
                </p>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 font-mono">
                  🍵 1 bolsita en 300ml de agua caliente 20 min tras almorzar.
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 font-mono">Paso 3: Repoblación Microbiota</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">Continuo</span>
                </div>
                <h3 className="font-bold text-[#0A2540] text-base">
                  Biolacti Candy (Probióticos)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lactobacillus acidophilus y Bifidobacterium activos que colonizan el colon, evitando la proliferación de bacterias dañinas y gases.
                </p>
                <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs text-slate-700 font-mono">
                  🥛 Consumir 1 a 2 caramelos al día tras las comidas.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <button
                onClick={onGoToCatalog}
                className="bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold px-5 py-3 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-sm"
              >
                <span>Ver Productos del Protocolo de Colon</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SISTEMA INMUNOLOGICO */}
      {activeTab === 'inmune' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 bg-slate-50 border border-slate-200 rounded-xl p-6 flex items-center justify-center">
                <img
                  src="https://hgwpanama.com/wp-content/uploads/2026/08/ganoderma-lucidum-hgw.webp"
                  alt="Ganoderma Lucidum HGW - Sistema Inmunológico"
                  className="max-h-64 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://yamilkahgwpanama.shop/wp-content/uploads/2026/07/Ganoderma-Soluble-Coffee-_-Cafe-soluble-de-Ganoderma.png';
                  }}
                />
              </div>

              <div className="w-full md:w-2/3 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A2540] bg-amber-50 px-3 py-1 rounded-md font-mono border border-amber-200 inline-block">
                  Enfoque Celular: Modulación del Sistema Inmunológico
                </span>
                <h2 className="h2-custom text-2xl sm:text-3xl font-bold text-[#0A2540] tracking-tight">
                  Ganoderma Lucidum & Cordyceps Sinensis
                </h2>
                <p className="text-slate-600 text-standard leading-relaxed">
                  Utilizado durante más de 4,000 años en la farmacopea oriental, el Ganoderma Lucidum (Reishi) y el Cordyceps Sinensis son los mayores adaptógenos e inmunomoduladores. No estimulan en exceso: <strong>calibran y equilibran</strong> la actividad de macrófagos, linfocitos T y células Natural Killer (NK).
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
                    <strong className="text-[#0A2540] block uppercase mb-1 font-mono font-bold">Beta-Glucanos Polisacáridos:</strong>
                    <span className="text-slate-600">Reconocen y neutralizan patógenos, bacterias oportunistas y virus respiratorios.</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
                    <strong className="text-[#0A2540] block uppercase mb-1 font-mono font-bold">Germanio Orgánico & Triterpenos:</strong>
                    <span className="text-slate-600">Aumentan hasta un 150% la capacidad de captación de oxígeno de los glóbulos rojos.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Etapas Ganoderma */}
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <h3 className="h3-custom text-xl font-bold text-[#0A2540]">
                Las 5 Etapas de Acción del Ganoderma en el Organismo
              </h3>
              <div className="grid sm:grid-cols-5 gap-3">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1.5">
                  <div className="w-6 h-6 bg-[#0A2540] text-white rounded font-mono font-bold flex items-center justify-center text-xs">1</div>
                  <h4 className="font-bold text-[#0A2540] text-xs uppercase">Detección (1-30 d)</h4>
                  <p className="text-[11px] text-slate-600">Identifica toxinas ocultas y desequilibrios biológicos.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1.5">
                  <div className="w-6 h-6 bg-[#0A2540] text-white rounded font-mono font-bold flex items-center justify-center text-xs">2</div>
                  <h4 className="font-bold text-[#0A2540] text-xs uppercase">Detox (1-30 s)</h4>
                  <p className="text-[11px] text-slate-600">Depura ácido úrico, grasa y residuos químicos.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1.5">
                  <div className="w-6 h-6 bg-[#0A2540] text-white rounded font-mono font-bold flex items-center justify-center text-xs">3</div>
                  <h4 className="font-bold text-[#0A2540] text-xs uppercase">Regulación (1-12 m)</h4>
                  <p className="text-[11px] text-slate-600">Equilibra glucosa, presión y pH inmunológico.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1.5">
                  <div className="w-6 h-6 bg-[#0A2540] text-white rounded font-mono font-bold flex items-center justify-center text-xs">4</div>
                  <h4 className="font-bold text-[#0A2540] text-xs uppercase">Construcción (6-24 m)</h4>
                  <p className="text-[11px] text-slate-600">Fortalece tejidos, vasos y sistema óseo.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1.5">
                  <div className="w-6 h-6 bg-[#0A2540] text-white rounded font-mono font-bold flex items-center justify-center text-xs">5</div>
                  <h4 className="font-bold text-[#0A2540] text-xs uppercase">Regeneración (1-3 a)</h4>
                  <p className="text-[11px] text-slate-600">Mantiene la vitalidad celular y frena el envejecimiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SALUD HEPATICA Y RENAL */}
      {activeTab === 'hepatica' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A2540] bg-teal-50 px-3 py-1 rounded-md font-mono border border-teal-200 inline-block">
                Enfoque Metabólico: Salud Hepática y Renal
              </span>
              <h2 className="h2-custom text-2xl sm:text-3xl font-bold text-[#0A2540] tracking-tight">
                Protección de Hígado y Riñones: Filtración y Vigor Jing
              </h2>
              <p className="text-slate-600 text-standard leading-relaxed max-w-3xl">
                El hígado procesa más de 500 funciones vitales de filtrado químico y el riñón regula el equilibrio electrolítico, la presión arterial y la energía vital. Las fórmulas fitoterapéuticas de HGW combinan hongos medicinales y extractos amargos depurativos para descongestionar el hígado graso y proteger el tejido renal.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <span className="text-xs font-bold text-teal-700 font-mono">1. Cordyceps Sinensis & Café</span>
                <h3 className="font-bold text-[#0A2540] text-base">Tonificación Renal & Oxigenación</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  El micelio de Cordyceps mejora la microcirculación de las nefronas renales, disminuye la creatinina y apoya la síntesis de energía ATP mitocondrial sin sobrecargar los riñones.
                </p>
                <div className="bg-white p-2.5 rounded border border-slate-200 text-xs text-slate-700 font-mono">
                  ☕ Disponible en Cordyceps Coffee Cream y Coffee Ceps (Sin Azúcar).
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <span className="text-xs font-bold text-teal-700 font-mono">2. Diente de León & Clorofila</span>
                <h3 className="font-bold text-[#0A2540] text-base">Drenaje Biliar & Hígado Graso</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Estimula la secreción de bilis, facilitando la digestión de grasas pesadas y limpiando toxinas hepáticas acumuladas por medicamentos o alimentos procesados.
                </p>
                <div className="bg-white p-2.5 rounded border border-slate-200 text-xs text-slate-700 font-mono">
                  🌱 Presente en Fresh Drink Chang JingJing.
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                <span className="text-xs font-bold text-teal-700 font-mono">3. Semillas de Cassia & Té Verde</span>
                <h3 className="font-bold text-[#0A2540] text-base">Eliminación de Ácido Úrico</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Actúa como diurético suave que reduce los depósitos de ácido úrico, previniendo cálculos y arenillas en el sistema urinario.
                </p>
                <div className="bg-white p-2.5 rounded border border-slate-200 text-xs text-slate-700 font-mono">
                  🍵 Presente en Pro Shaping Tea.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
              <button
                onClick={onGoToCatalog}
                className="bg-[#0A2540] hover:bg-[#1E3A8A] text-white font-bold px-5 py-3 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all shadow-sm"
              >
                <span>Ver Productos para Hígado y Riñones en el Catálogo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: TURMALINA */}
      {activeTab === 'turmalina' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 bg-slate-50 border border-slate-200 rounded-xl p-6 flex items-center justify-center">
                <img
                  src="https://hgwpanama.com/wp-content/uploads/2026/08/turmalina-hgw.webp"
                  alt="Piedra de Turmalina HGW - Terapia Bioeléctrica"
                  className="max-h-64 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://hgwpanama.com/wp-content/uploads/2026/08/Toalla-Sanitaria-Noche-_-Toalla-Sanitaria-con-Turmalina-Uso-Noche.png';
                  }}
                />
              </div>

              <div className="w-full md:w-2/3 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0A2540] bg-purple-50 px-3 py-1 rounded-md font-mono border border-purple-200 inline-block">
                  Tecnología Bioeléctrica Natural
                </span>
                <h2 className="h2-custom text-2xl sm:text-3xl font-bold text-[#0A2540] tracking-tight">
                  Piedra de Turmalina: El Mineral Autocalentable
                </h2>
                <p className="text-slate-600 text-standard leading-relaxed">
                  La turmalina es un mineral borosilicato complejo con propiedades piezoeléctricas. Al entrar en contacto con el calor corporal humano, emite de forma autónoma <strong>Rayos Infrarrojos Lejanos (FIR 4-14 µm)</strong> e <strong>Iones Negativos</strong> sin necesidad de baterías ni recargas eléctricas.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
                    <strong className="text-[#0A2540] block uppercase mb-1 font-mono font-bold">Infrarrojo Lejano (FIR):</strong>
                    <span className="text-slate-600">Penetra 4 a 5 cm dilatando capilares, acelerando la recuperación muscular y desinflamando articulaciones.</span>
                  </div>
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
                    <strong className="text-[#0A2540] block uppercase mb-1 font-mono font-bold">Iones Negativos Aniónicos:</strong>
                    <span className="text-slate-600">Neutralizan bacterias patógenas, combaten malos olores y protegen de la radiación electromagnética.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Line of Products with Tourmaline */}
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <h3 className="h3-custom text-xl font-bold text-[#0A2540]">
                Línea Terapéutica e Íntima de Turmalina HGW
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#0A2540] text-xs uppercase">Cinturón Lumbar Magnético</h4>
                  <p className="text-xs text-slate-600">Alivia lumbalgias, hernias discales, ciática y cólicos menstruales con calor natural.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#0A2540] text-xs uppercase">Protectores de Rodilla</h4>
                  <p className="text-xs text-slate-600">Soporte térmico ideal para artritis, artrosis, desgarros y desgaste de cartílago.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#0A2540] text-xs uppercase">Protector de Cuello</h4>
                  <p className="text-xs text-slate-600">Libera contracturas cervicales, dolores de cabeza tensionales y rigidez de oficina.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                  <h4 className="font-bold text-[#0A2540] text-xs uppercase">Toallas Sanitarias con Turmalina</h4>
                  <p className="text-xs text-slate-600">Banda aniónica patentada que neutraliza bacterias, olores y alivia cólicos menstruales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
