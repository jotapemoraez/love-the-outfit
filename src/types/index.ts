export interface OutfitItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  affiliateLink: string;
  category: string;
}

export interface Look {
  id: string;
  title: string;
  description: string;
  items: OutfitItem[];
  mainImage: string;
  tags: string[];
  aesthetic: Aesthetic;
  occasion: Occasion;
  gender: Gender;
  season: Season;
  featured?: boolean;
}

export type Aesthetic = 'minimalist' | 'dark-academia' | 'cottagecore' | 'y2k';
export type Occasion = 'casual' | 'work-business' | 'date-night' | 'party' | 'gym-active';
export type Gender = 'masculine' | 'feminine' | 'unisex';
export type Season = 'spring-summer' | 'fall-winter';

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  type: 'aesthetic' | 'occasion' | 'gender' | 'season';
  value: Aesthetic | Occasion | Gender | Season;
} 