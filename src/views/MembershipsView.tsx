import React from 'react';
import { 
  Award, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  Users, 
  UserCheck, 
  Crown, 
  Layers, 
  Zap,
  Gift
} from 'lucide-react';
import { membershipsData, ranksList } from '../data/memberships';
import { MembershipPlan } from '../types';

interface MembershipsViewProps {
  onOpenRegisterModal: () => void;
}

export const MembershipsView: React.FC<MembershipsViewProps> = ({ onOpenRegisterModal }) => {
  return (
    <div className="space-y-10 pb-16">
      {/* Hero Header */}
      <section className="bg-[#0A2540] text-white p-8 sm:p-10 rounded-xl shadow-lg border border-slate-800 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-widest rounded-md border border-white/10">
          <Crown className="w-4 h-4" />
          <span>Plan de Compensación de Ganancia Mutua HGW</span>
        </div>

        <h1 className="h1-custom text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
          Membresías Mayoristas & Los 8 Bonos
        </h1>

        <p className="text-slate-300 text-standard sm:text-base max-w-3xl leading-relaxed">
          El único modelo de negocio donde ganas de tu propio equipo y también de las comisiones generadas por la red de tu patrocinador. Sin recompras forzosas obligatorias ni pérdida de rango.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenRegisterModal}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg uppercase text-xs tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <UserCheck className="w-4 h-4" />
            <span>Cómo Registrarse & Activar Membresía</span>
          </button>
        </div>
      </section>

      {/* 4 Membership Tiers */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A2540] bg-slate-100 px-3 py-1 rounded-md border border-slate-200 font-mono">
            Elige tu nivel de entrada
          </span>
          <h2 className="h2-custom text-2xl sm:text-3xl font-bold text-[#0A2540]">
            4 Paquetes de Membresía a Tu Libre Elección
          </h2>
          <p className="text-sm text-slate-600">
            Tú eliges exactamente los productos que deseas adquirir. Puedes ascender de paquete acumulando compras en cualquier momento sin perder tu antigüedad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {membershipsData.map((plan: MembershipPlan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-xl flex flex-col justify-between space-y-6 transition-all duration-300 relative border ${
                plan.isPopular
                  ? 'bg-[#0A2540] text-white border-slate-800 shadow-xl scale-102'
                  : 'bg-white text-slate-900 border-slate-200 hover:shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-slate-950" />
                  <span>Más Rentable (60% Recompras)</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className={`text-xl font-bold uppercase tracking-tight ${plan.isPopular ? 'text-white' : 'text-[#0A2540]'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-3xl font-black font-mono">{plan.bv}</span>
                    <span className={`text-xs font-bold font-mono ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>BV</span>
                  </div>
                  <p className={`text-xs mt-1 font-mono ${plan.isPopular ? 'text-slate-300' : 'text-slate-500'}`}>
                    Inversión aprox: {plan.approxCostUSD}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className={`p-4 rounded-lg space-y-2 text-xs font-mono border ${
                  plan.isPopular ? 'bg-white/10 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'
                }`}>
                  <div className="flex justify-between">
                    <span className={plan.isPopular ? 'text-slate-300' : 'text-slate-500'}>Desc. Activación:</span>
                    <span className="font-bold">{plan.discountActivation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={plan.isPopular ? 'text-slate-300' : 'text-slate-500'}>Recompras:</span>
                    <span className="font-bold text-amber-400">
                      {plan.discountReorder}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={plan.isPopular ? 'text-slate-300' : 'text-slate-500'}>Bono Desarrollo:</span>
                    <span className="font-bold">{plan.developmentBonus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={plan.isPopular ? 'text-slate-300' : 'text-slate-500'}>Bono Equipo:</span>
                    <span className="font-bold">{plan.teamBonusRate}</span>
                  </div>
                  <div className={`flex justify-between pt-1 border-t ${plan.isPopular ? 'border-white/10' : 'border-slate-200'}`}>
                    <span className="font-bold">Tope Diario:</span>
                    <span className="font-black text-sm">
                      ${plan.dailyCapUSD} USD/día
                    </span>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                    plan.isPopular ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    Beneficios:
                  </span>
                  <ul className="space-y-1.5 text-xs">
                    {plan.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          plan.isPopular ? 'text-amber-400' : 'text-emerald-600'
                        }`} />
                        <span className={plan.isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={onOpenRegisterModal}
                className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  plan.isPopular
                    ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold shadow-sm'
                    : 'bg-[#0A2540] hover:bg-[#1E3A8A] text-white'
                }`}
              >
                Seleccionar {plan.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* The 8 Bonos Breakdown */}
      <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A2540] bg-slate-100 px-3 py-1 rounded-md border border-slate-200 font-mono">
            Estructura Financiera
          </span>
          <h2 className="h2-custom text-2xl sm:text-3xl font-bold text-[#0A2540]">
            Los 8 Bonos del Plan de Ganancia Mutua HGW
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Diseñado para generar ingresos diarios, semanales y mensuales continuos y sostenibles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Bono 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 bg-[#0A2540] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
              1
            </div>
            <h4 className="font-bold text-sm text-[#0A2540] uppercase">Bono Venta al Público</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Margen de ganancia directo de <strong>30% a 60%</strong> en venta presencial física o virtual mediante tu link personal.
            </p>
          </div>

          {/* Bono 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 bg-[#0A2540] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
              2
            </div>
            <h4 className="font-bold text-sm text-[#0A2540] uppercase">Bono de Inicio Rápido</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cobras el <strong>20%</strong> en nuevos afiliados directos (10% en 1er nivel y 10% en 2do nivel) desde tu primera semana.
            </p>
          </div>

          {/* Bono 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 bg-[#0A2540] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
              3
            </div>
            <h4 className="font-bold text-sm text-[#0A2540] uppercase">Bono Desarrollo / 1ra Compra</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cobro de <strong>$0.20 a $3.00 USD por cada BV</strong> en los paquetes de primera compra de los miembros de tu organización.
            </p>
          </div>

          {/* Bono 4 */}
          <div className="bg-[#0A2540] text-white rounded-xl p-5 space-y-2 shadow-md">
            <div className="w-8 h-8 bg-amber-500 text-slate-950 rounded-lg flex items-center justify-center font-mono font-extrabold text-xs">
              4
            </div>
            <h4 className="font-bold text-sm text-white uppercase">Bono de Equipo (50/50)</h4>
            <p className="text-xs text-slate-200 leading-relaxed">
              Ganas del <strong>5% al 10% diario</strong> del volumen BV de tu equipo menor. Se divide 50% para ti y 50% para tu patrocinador. Tope de hasta <strong>$720 USD/día</strong>.
            </p>
          </div>

          {/* Bono 5 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 bg-[#0A2540] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
              5
            </div>
            <h4 className="font-bold text-sm text-[#0A2540] uppercase">Bono Recompra Residual</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>5%</strong> sobre los BV de las recompras de tu red hasta 10 niveles y <strong>2.5% de la red de tu patrocinador</strong> colocada tras tu registro.
            </p>
          </div>

          {/* Bono 6 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 bg-[#0A2540] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
              6
            </div>
            <h4 className="font-bold text-sm text-[#0A2540] uppercase">Bono Élite</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ganas el <strong>4%</strong> del bono de equipo de tus líderes calificados: hasta 3 generaciones para Senior y hasta <strong>6 generaciones</strong> para Master.
            </p>
          </div>

          {/* Bono 7 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 bg-[#0A2540] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
              7
            </div>
            <h4 className="font-bold text-sm text-[#0A2540] uppercase">Bono al Mérito Personal</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Reconocimiento económico cuando tu volumen supera al de tu patrocinador, premiando tu liderazgo individual.
            </p>
          </div>

          {/* Bono 8 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
            <div className="w-8 h-8 bg-[#0A2540] text-white rounded-lg flex items-center justify-center font-mono font-bold text-xs">
              8
            </div>
            <h4 className="font-bold text-sm text-[#0A2540] uppercase">Incentivos & Viajes</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Premios en viajes nacionales e internacionales con todos los gastos pagados, bonos de autos y galardones en convenciones.
            </p>
          </div>
        </div>
      </section>

      {/* Ranks and Recognition */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0A2540] bg-slate-100 px-3 py-1 rounded-md border border-slate-200 font-mono">
            Carrera de Éxito
          </span>
          <h2 className="h2-custom text-2xl sm:text-3xl font-bold text-[#0A2540]">
            Escalera de Rangos de Honor HGW
          </h2>
          <p className="text-sm text-slate-600">
            Los puntos BV se acumulan continuamente; nunca pierdes tu rango una vez alcanzado.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {ranksList.map((rank, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 text-center space-y-3 hover:shadow-md transition-all"
            >
              <div className="w-20 h-20 mx-auto bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center p-2 shadow-xs">
                <img
                  src={rank.badgeUrl}
                  alt={rank.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://hgwpanama.com/wp-content/uploads/2026/08/Rango-Diamante-300x300-1.webp';
                  }}
                />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0A2540] uppercase">{rank.name}</h4>
                <p className="text-xs text-slate-500 font-mono font-semibold mt-1">{rank.bvRequirement}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

