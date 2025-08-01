// Types for affiliate products
export interface AffiliateProduct {
  id: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  image: string;
  affiliateLink: string;
  category: string;
  description?: string;
  colors?: string[];
  sizes?: string[];
}

export interface RecommendationRequest {
  aesthetic?: string;
  occasion?: string;
  gender?: string;
  season?: string;
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
}

// Mock API service - replace with real API calls
export class AffiliateAPIService {
  private static readonly MOCK_PRODUCTS: AffiliateProduct[] = [
    {
      id: 'asos-1',
      name: 'Minimalist Cotton Shirt',
      brand: 'ASOS',
      price: 45,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop',
      affiliateLink: 'https://asos.pxf.io/minimalist-shirt',
      category: 'shirt',
      description: 'Clean lines, perfect for minimalist aesthetic',
      colors: ['white', 'black', 'navy'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 'shein-1',
      name: 'Y2K Metallic Top',
      brand: 'SHEIN',
      price: 18,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&h=300&fit=crop',
      affiliateLink: 'https://shein.com/affiliate/y2k-metallic-top',
      category: 'top',
      description: 'Futuristic metallic finish for Y2K vibes',
      colors: ['silver', 'gold', 'pink'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 'farfetch-1',
      name: 'Designer Wool Blazer',
      brand: 'Theory',
      price: 395,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop',
      affiliateLink: 'https://farfetch.com/affiliate/theory-blazer',
      category: 'blazer',
      description: 'Professional wool blazer for dark academia aesthetic',
      colors: ['navy', 'black', 'charcoal'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    }
  ];

  // Get recommendations based on user preferences
  static async getRecommendations(request: RecommendationRequest): Promise<AffiliateProduct[]> {
    // In a real implementation, this would call external APIs
    // For now, we'll filter mock products based on request
    
    let filteredProducts = [...this.MOCK_PRODUCTS];

    // Filter by category if specified
    if (request.category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase().includes(request.category!.toLowerCase())
      );
    }

    // Filter by price range if specified
    if (request.priceRange) {
      filteredProducts = filteredProducts.filter(product => 
        product.price >= request.priceRange!.min && 
        product.price <= request.priceRange!.max
      );
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return filteredProducts;
  }

  // Get products by aesthetic/style
  static async getProductsByAesthetic(aesthetic: string): Promise<AffiliateProduct[]> {
    const aestheticMap: Record<string, string[]> = {
      'minimalist': ['shirt', 'pants', 'sneakers'],
      'dark-academia': ['blazer', 'sweater', 'oxford'],
      'y2k': ['top', 'skirt', 'platform'],
      'cottagecore': ['dress', 'cardigan', 'sandals']
    };

    const relevantCategories = aestheticMap[aesthetic.toLowerCase()] || [];
    
    return this.MOCK_PRODUCTS.filter(product => 
      relevantCategories.some(category => 
        product.category.toLowerCase().includes(category)
      )
    );
  }

  // Search products by text query
  static async searchProducts(query: string): Promise<AffiliateProduct[]> {
    const searchTerms = query.toLowerCase().split(' ');
    
    return this.MOCK_PRODUCTS.filter(product => 
      searchTerms.some(term => 
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term)
      )
    );
  }

  // Real API integration examples (commented out for now)
  /*
  // Example: ASOS API integration
  static async getAsosProducts(category: string): Promise<AffiliateProduct[]> {
    try {
      const response = await fetch(`https://api.asos.com/v2/products?category=${category}`, {
        headers: {
          'Authorization': `Bearer ${process.env.ASOS_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      return data.products.map((product: any) => ({
        id: `asos-${product.id}`,
        name: product.name,
        brand: product.brand.name,
        price: product.price.current.value,
        currency: product.price.currency,
        image: product.imageUrl,
        affiliateLink: `https://asos.pxf.io/${product.id}`,
        category: product.category.name.toLowerCase(),
        description: product.description
      }));
    } catch (error) {
      console.error('Error fetching ASOS products:', error);
      return [];
    }
  }

  // Example: Farfetch API integration
  static async getFarfetchProducts(query: string): Promise<AffiliateProduct[]> {
    try {
      const response = await fetch('https://app.retailed.io/api/v1/scraper/farfetch/product', {
        method: 'GET',
        headers: {
          'x-api-key': process.env.RETAILED_API_KEY || '',
        },
        params: {
          query: query,
          mode: 'simple',
          country: 'US'
        }
      });
      
      const data = await response.json();
      
      return [{
        id: `farfetch-${data.id}`,
        name: data.name,
        brand: data.brand,
        price: data.price,
        currency: data.price_currency,
        image: data.images[0],
        affiliateLink: `https://farfetch.com/affiliate/${data.id}`,
        category: 'luxury',
        description: data.description
      }];
    } catch (error) {
      console.error('Error fetching Farfetch products:', error);
      return [];
    }
  }
  */
}

// Utility functions for affiliate tracking
export const trackAffiliateClick = (productId: string, source: string) => {
  // Track clicks for analytics
  console.log(`Affiliate click tracked: ${productId} from ${source}`);
  
  // In a real app, you'd send this to your analytics service
  // analytics.track('affiliate_click', { productId, source });
};

export const generateAffiliateLink = (baseUrl: string, affiliateId: string, productId: string) => {
  return `${baseUrl}?aff=${affiliateId}&pid=${productId}`;
}; 