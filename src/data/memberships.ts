import { MembershipPlan, LeaderProfile } from '../types';

export const membershipsData: MembershipPlan[] = [
  {
    id: 'prejunior',
    name: 'PreJunior',
    bv: 50,
    approxCostUSD: '$89.00 - $100.00 USD',
    discountActivation: '30% de descuento',
    discountReorder: '30% de descuento',
    fastStartBonus: '20% (10% en 2 niveles)',
    developmentBonus: '$0.20 USD por cada BV',
    teamBonusRate: '5% sobre BV del equipo menor',
    dailyCapUSD: 50,
    eliteBonusGenerations: 'No aplica',
    benefits: [
      'Acceso a la plataforma internacional y tienda virtual 24/7.',
      '30% de descuento en productos de libre elección.',
      'Bono de inicio rápido y desarrollo activados.',
      'Tope diario de ganancia de hasta $50 USD ($1,500 USD/mes).'
    ]
  },
  {
    id: 'junior',
    name: 'Junior',
    bv: 100,
    approxCostUSD: '$180.00 - $200.00 USD',
    discountActivation: '30% de descuento',
    discountReorder: '30% de descuento',
    fastStartBonus: '20% (10% en 2 niveles)',
    developmentBonus: '$0.50 USD por cada BV',
    teamBonusRate: '7% sobre BV del equipo menor',
    dailyCapUSD: 120,
    eliteBonusGenerations: 'No aplica',
    benefits: [
      'Mayor porcentaje de Bono de Equipo (7%).',
      'Tope diario de ganancia de hasta $120 USD ($3,600 USD/mes).',
      'Bono de desarrollo de $0.50 USD por BV.',
      'Productos a tu libre elección.'
    ]
  },
  {
    id: 'senior',
    name: 'Senior',
    bv: 300,
    approxCostUSD: '$540.00 - $600.00 USD',
    discountActivation: '30% de descuento',
    discountReorder: '30% de descuento',
    fastStartBonus: '20% (10% en 2 niveles)',
    developmentBonus: '$1.50 USD por cada BV',
    teamBonusRate: '8% sobre BV del equipo menor',
    dailyCapUSD: 360,
    eliteBonusGenerations: 'Hasta 3 generaciones (4%)',
    benefits: [
      'Acceso al codiciado Bono Élite hasta la 3ra generación (4%).',
      '8% de Bono de Equipo diario.',
      'Tope diario de hasta $360 USD ($10,800 USD/mes).',
      'Bono de desarrollo de $1.50 USD por BV.'
    ]
  },
  {
    id: 'master',
    name: 'Master (Socio Estratégico)',
    bv: 600,
    approxCostUSD: '$980.00 - $1,100.00 USD',
    discountActivation: '30% de descuento',
    discountReorder: '60% DE DESCUENTO EN RECOMPRAS',
    fastStartBonus: '20% (10% en 2 niveles)',
    developmentBonus: '$3.00 USD por cada BV (Máximo)',
    teamBonusRate: '10% sobre BV del equipo menor',
    dailyCapUSD: 720,
    eliteBonusGenerations: 'Hasta 6 generaciones (4%)',
    isPopular: true,
    benefits: [
      '¡60% de descuento en todas las recompras futuras! (Margen de ganancia de hasta 150%).',
      '10% máximo en Bono de Equipo.',
      'Tope de ganancia diario de hasta $720 USD ($21,600 USD/mes).',
      'Bono Élite hasta 6 generaciones en profundidad.',
      'Acceso preferente a eventos internacionales y viajes de liderazgo.'
    ]
  }
];

export const ranksList = [
  { name: 'Rango Plata', bvRequirement: '$500 USD Acumulados', badgeUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/rango-plata-hgw.webp' },
  { name: 'Rango Oro', bvRequirement: '$1,500 USD Acumulados', badgeUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/rango-oro-hgw.webp' },
  { name: 'Rango Platino', bvRequirement: '$3,000 USD Acumulados', badgeUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/rango-platino-hgw.webp' },
  { name: 'Rango Diamante', bvRequirement: '$5,000 USD Acumulados', badgeUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/Rango-Diamante-300x300-1.webp' },
  { name: 'Diamante 1 Estrella', bvRequirement: '1 Patrocinado directo Diamante', badgeUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/Rango-Diamante-300x300-1.webp' },
  { name: 'Diamante 2 Estrellas', bvRequirement: '2 Patrocinados directos Diamante', badgeUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/Rango-Diamante-300x300-1.webp' },
  { name: 'Diamante 3 Estrellas', bvRequirement: '3 Patrocinados directos Diamante', badgeUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/Rango-Diamante-300x300-1.webp' },
  { name: 'Diamante 4 a 7 Estrellas', bvRequirement: 'Hasta 7 directos Diamantes', badgeUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/Rango-Diamante-300x300-1.webp' }
];

export const leadershipProfiles: LeaderProfile[] = [
  {
    name: 'Dra. Deming Li',
    role: 'Presidente Fundadora',
    institution: 'Green World International Group & HGW',
    bio: 'Científica, investigadora y empresaria con una trayectoria global insuperable en biología molecular, fitoterapia e innovación en salud.',
    photoUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/HGW-Dr.-Deming-Li-Presidente-de-Green-World-Group.webp',
    credentials: [
      'Doctorado en Biología en la Universidad Cornell, EE.UU.',
      'Doctorado en la Universidad de Wisconsin, EE.UU.',
      'Investigadora en el Instituto de Michigan, EE.UU.',
      'Miembro de Blueberry Association en América del Norte.',
      'Vicepresidente del Consejo de la Asociación de Salud de Tianjin.'
    ]
  },
  {
    name: 'Mr. Peter Li',
    role: 'Vicepresidente Global & CEO Región Latinoamérica',
    institution: 'Green World Group / HGW Latinoamérica',
    bio: 'Líder visionario y estratega internacional con más de 18 años de experiencia impulsando el crecimiento y expansión de redes de mercadeo en más de 15 países de América Latina.',
    photoUrl: 'https://hgwpanama.com/wp-content/uploads/2026/08/HGW-Peter-Li.webp',
    credentials: [
      'Egresado de la Universidad en Ciencias Políticas y Derecho.',
      'Más de 18 años de experiencia en Network Marketing y desarrollo empresarial.',
      'Líder del proyecto de expansión HGW en más de 13 países de habla hispana.'
    ]
  },
  {
    name: 'Yamilka Batista',
    role: 'Distribuidora Independiente & Networker Digital',
    institution: 'HGW Panamá & Equipo Hispanoamérica',
    bio: 'Líder comprometida en guiar y acompañar a nuevos socios y clientes en toda Latinoamérica para aprovechar al máximo los productos de salud y el plan de ganancias mutuas.',
    photoUrl: 'https://hgwpanama.com/wp-content/uploads/Foto-de-perfil-Yamilka-Batista-HGW.png',
    credentials: [
      'Código de Patrocinador Oficial: Yamilka507',
      'País: Panamá (Cobertura en toda Latinoamérica)',
      'Email: info@negociohgw.com',
      'WhatsApp directo: +507 6778-8375',
      'Mentora en la Academia Digital HGW (academiahgw.online)'
    ]
  }
];

export const directSellingAssociations = [
  'Asociación Panameña de Venta Directa',
  'Asociación Colombiana de Venta Directa (ACOVEDI)',
  'Asociación Boliviana de Venta Directa (ASOBOD)',
  'Asociación Ecuatoriana de Venta Directa (AEVD)',
  'Asociación Guatemalteca de Venta Directa',
  'Asociación Mexicana de Ventas Directas (AMVD)',
  'Asociación de Empresas de Venta Directa Internacional'
];
