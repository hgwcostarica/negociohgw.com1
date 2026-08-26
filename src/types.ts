export type ProductCategory = 
  | 'Todos'
  | 'Serie Candys HGW'
  | 'Cafés Organicos Saludables'
  | 'Tés Organicos Saludables'
  | 'Chocolates Organicos Saludables'
  | 'Jugos organicos Saludables'
  | 'Suplementos alimenticios'
  | 'Articulos terapeuticos'
  | 'Cuidado personal'
  | 'Articulos de belleza'
  | 'Herramientas empresariales'
  | 'Licores organicos';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  presentation: string;
  rawMaterial: string;
  publicPrice: number;
  partnerPrice: number;
  bv: number;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  advantages?: string[];
  ingredients?: string[];
  howToUse?: string;
  precautions?: string;
  shelfLife?: string;
  imageUrl: string;
  driveId?: string;
  featured?: boolean;
  healthFocus?: string[];
}

export type CountryName = 
  | 'Perú'
  | 'México'
  | 'Colombia'
  | 'Bolivia'
  | 'Ecuador'
  | 'Chile'
  | 'El Salvador'
  | 'Panamá'
  | 'España'
  | 'Guatemala'
  | 'Paraguay'
  | 'República Dominicana'
  | 'Costa Rica';

export interface Office {
  id: string;
  country: CountryName;
  city: string;
  title: string;
  address: string;
  hours: {
    weekdays: string;
    saturday: string;
    sundayAndHolidays?: string;
  };
  contacts: string[];
  imageUrl: string;
  driveId?: string;
  notes?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'sistema' | 'bonos';
  youtubeId: string;
  youtubeUrl: string;
  description: string;
  speaker?: string;
  tags: string[];
}

export interface CopyItem {
  id: string;
  title: string;
  category: 'prospeccion' | 'plan_negocio' | 'arandanos' | 'limpieza_colon' | 'turmalina' | 'ganoderma' | 'membresias';
  targetAudience: string;
  headline: string;
  content: string;
  callToAction: string;
  tags: string[];
  customPrompt?: {
    people: string;
    product: string;
    scene: string;
    mood: string;
  };
}

export interface MembershipPlan {
  id: string;
  name: string;
  bv: number;
  approxCostUSD: string;
  discountActivation: string;
  discountReorder: string;
  fastStartBonus: string;
  developmentBonus: string;
  teamBonusRate: string;
  dailyCapUSD: number;
  eliteBonusGenerations: string;
  benefits: string[];
  isPopular?: boolean;
}

export interface LeaderProfile {
  name: string;
  role: string;
  institution: string;
  bio: string;
  photoUrl: string;
  credentials: string[];
}
