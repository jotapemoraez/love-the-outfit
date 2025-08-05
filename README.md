# Love the Outfit 💕

A minimalist and aesthetic app for fashion look curation focused on affiliate links.

## 💡 Concept

The idea behind **Love the Outfit** is to create daily curated fashion outfits with direct links to e-commerce platforms, generating revenue through affiliate commissions. Users can discover complete looks, see exactly what items they need, and purchase them with a single click.

**Currently, all results are mocked data** - the app showcases the concept and design while we prepare integrations with real fashion APIs and affiliate networks.

### 🎯 Business Model
- **Daily Curation**: Fresh outfit inspiration every day
- **Affiliate Revenue**: Earn commissions from fashion retailers
- **User Experience**: Simple, fast, and mobile-optimized shopping
- **Scalable**: Ready for multiple brands and categories

## ✨ Features

### 🎨 Style Categories
- **Aesthetic**: Minimalist, Dark Academia, Cottagecore, Y2K
- **Occasion**: Casual, Work/Business, Date Night, Party, Gym/Active
- **Gender**: Masculine, Feminine, Unisex
- **Season**: Spring/Summer, Fall/Winter

### 🌟 Functionality
- **Look of the Day**: Daily featured look on homepage
- **Category navigation**: Explore styles by aesthetic, occasion, etc.
- **Detailed look pages**: View complete looks with pricing
- **Affiliate links**: Monetization through commissions
- **Responsive design**: Works perfectly on mobile and desktop
- **API Routes**: Ready for external integrations

## 🚀 Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS** - Utility-first styling
- **Next/Image** - Image optimization
- **Inter Font** - Modern typography

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd love-the-outfit

# Install dependencies
npm install

# Run development server
npm run dev
```

Access `http://localhost:3000` to view the app.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/                    # API Routes
│   │   ├── looks/              # Look endpoints
│   │   ├── categories/         # Category endpoints
│   │   └── affiliate/          # Affiliate tracking
│   ├── category/[id]/          # Category pages
│   ├── look/[id]/              # Individual look pages
│   └── page.tsx                # Homepage
├── data/
│   └── mockData.ts             # Mock data
├── types/
│   └── index.ts                # TypeScript definitions
└── components/                 # Components (future)
```

## 🎯 Next Steps

### Planned Integrations
- [ ] **External APIs**: Amazon, Zara, ASOS
- [ ] **Analytics System**: Google Analytics, click tracking
- [ ] **CMS**: Sanity or Strapi for content management
- [ ] **Database**: PostgreSQL for data persistence
- [ ] **Authentication**: For users to save favorites

### Future Features
- [ ] **Favorites**: System to save looks
- [ ] **Advanced Filters**: By price, color, size
- [ ] **Search**: Text-based search
- [ ] **Recommendations**: ML for personalized suggestions
- [ ] **Social Sharing**: Share looks on social media

## 🔗 API Endpoints

### GET `/api/looks`
Search looks with optional filters:
- `?aesthetic=minimalist`
- `?occasion=casual`
- `?gender=unisex`
- `?season=spring-summer`
- `?featured=true`

### GET `/api/categories`
List categories:
- `?type=aesthetic` (aesthetic, occasion, gender, season)

### POST `/api/affiliate/click`
Track affiliate link clicks:
```json
{
  "itemId": "item-1",
  "affiliateLink": "https://...",
  "lookId": "look-1",
  "userId": "user-123"
}
```

## 🎨 Design System

### Colors
- **Background**: `stone-50` (#fafaf9)
- **Cards**: `white` (#ffffff)
- **Text Primary**: `stone-900` (#1c1917)
- **Text Secondary**: `stone-600` (#57534e)
- **Accent**: `stone-100` (#f5f5f4)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300 (light), 400 (normal), 500 (medium), 600 (semibold)

### Components
- **Border Radius**: `rounded-2xl` (16px)
- **Shadows**: `shadow-sm` subtle
- **Transitions**: 300ms ease
- **Hover Effects**: Scale and translate

## 📱 Responsiveness

- **Mobile First**: Mobile-optimized design
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: Responsive CSS Grid
- **Images**: Next/Image with lazy loading

## 💰 Monetization

### Affiliate Links
- Automatic click tracking
- Support for multiple networks (Amazon Associates, etc.)
- Conversion analytics
- Commission per sale

### Important Metrics
- CTR (Click Through Rate)
- Conversion Rate
- Revenue per Look
- Popular Categories

## 🚀 Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Recommended Platforms
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**

## 📄 License

MIT License - see LICENSE file for details.

---

**Love the Outfit** - Curated with love 💕 