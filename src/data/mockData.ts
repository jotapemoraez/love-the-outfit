import { Category, Look } from '@/types';

export const categories: Category[] = [
  // Aesthetic Categories
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean lines, neutral colors, timeless pieces',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
    type: 'aesthetic',
    value: 'minimalist'
  },
  {
    id: 'dark-academia',
    name: 'Dark Academia',
    description: 'Scholarly elegance with vintage charm',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    type: 'aesthetic',
    value: 'dark-academia'
  },
  {
    id: 'cottagecore',
    name: 'Cottagecore',
    description: 'Romantic, countryside-inspired looks',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop',
    type: 'aesthetic',
    value: 'cottagecore'
  },
  {
    id: 'y2k',
    name: 'Y2K',
    description: 'Futuristic nostalgia meets bold colors',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&h=400&fit=crop',
    type: 'aesthetic',
    value: 'y2k'
  },
  
  // Occasion Categories
  {
    id: 'casual',
    name: 'Casual',
    description: 'Comfortable everyday looks',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
    type: 'occasion',
    value: 'casual'
  },
  {
    id: 'work-business',
    name: 'Work & Business',
    description: 'Professional and polished outfits',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    type: 'occasion',
    value: 'work-business'
  },
  {
    id: 'date-night',
    name: 'Date Night',
    description: 'Romantic and charming looks',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop',
    type: 'occasion',
    value: 'date-night'
  },
  {
    id: 'party',
    name: 'Party',
    description: 'Bold and statement-making outfits',
    image: 'https://images.unsplash.com/photo-1566479179817-c0b0c8fdc7c8?w=400&h=400&fit=crop',
    type: 'occasion',
    value: 'party'
  },
  {
    id: 'gym-active',
    name: 'Gym & Active',
    description: 'Stylish activewear and athleisure',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    type: 'occasion',
    value: 'gym-active'
  }
];

export const mockLooks: Look[] = [
  {
    id: 'minimalist-casual-1',
    title: 'Effortless Minimalism',
    description: 'A perfect blend of comfort and style with clean lines',
    mainImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
    aesthetic: 'minimalist',
    occasion: 'casual',
    gender: 'unisex',
    season: 'spring-summer',
    featured: true,
    tags: ['comfortable', 'versatile', 'timeless'],
    items: [
      {
        id: 'item-1',
        name: 'Oxford Cotton Shirt',
        brand: 'Everlane',
        price: 68,
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop',
        affiliateLink: 'https://example.com/affiliate/shirt',
        category: 'shirt'
      },
      {
        id: 'item-2',
        name: 'Straight Leg Trousers',
        brand: 'COS',
        price: 89,
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop',
        affiliateLink: 'https://example.com/affiliate/trousers',
        category: 'pants'
      },
      {
        id: 'item-3',
        name: 'Leather Sneakers',
        brand: 'Veja',
        price: 120,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop',
        affiliateLink: 'https://example.com/affiliate/sneakers',
        category: 'shoes'
      }
    ]
  },
  {
    id: 'dark-academia-1',
    title: 'Scholarly Elegance',
    description: 'Channel your inner intellectual with this sophisticated look',
    mainImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    aesthetic: 'dark-academia',
    occasion: 'work-business',
    gender: 'unisex',
    season: 'fall-winter',
    tags: ['sophisticated', 'vintage', 'intellectual'],
    items: [
      {
        id: 'item-4',
        name: 'Wool Blazer',
        brand: 'Theory',
        price: 395,
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop',
        affiliateLink: 'https://example.com/affiliate/blazer',
        category: 'blazer'
      },
      {
        id: 'item-5',
        name: 'Turtleneck Sweater',
        brand: 'Uniqlo',
        price: 29,
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop',
        affiliateLink: 'https://example.com/affiliate/turtleneck',
        category: 'sweater'
      },
      {
        id: 'item-6',
        name: 'Oxford Shoes',
        brand: 'Cole Haan',
        price: 180,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop',
        affiliateLink: 'https://example.com/affiliate/oxford',
        category: 'shoes'
      }
    ]
  },
  {
    id: 'cottagecore-1',
    title: 'Garden Party Dreams',
    description: 'Romantic florals perfect for a countryside adventure',
    mainImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop',
    aesthetic: 'cottagecore',
    occasion: 'date-night',
    gender: 'feminine',
    season: 'spring-summer',
    tags: ['romantic', 'floral', 'vintage'],
    items: [
      {
        id: 'item-7',
        name: 'Floral Midi Dress',
        brand: 'Reformation',
        price: 178,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop',
        affiliateLink: 'https://example.com/affiliate/dress',
        category: 'dress'
      },
      {
        id: 'item-8',
        name: 'Woven Basket Bag',
        brand: 'Cult Gaia',
        price: 248,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
        affiliateLink: 'https://example.com/affiliate/bag',
        category: 'bag'
      },
      {
        id: 'item-9',
        name: 'Espadrille Sandals',
        brand: 'Castañer',
        price: 165,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop',
        affiliateLink: 'https://example.com/affiliate/sandals',
        category: 'shoes'
      }
    ]
  }
];

export const featuredLook = mockLooks.find(look => look.featured) || mockLooks[0]; 