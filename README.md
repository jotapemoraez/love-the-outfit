# Love the Outfit 💕

Um app minimalista e aesthetic para curadoria de looks de moda com foco em links de afiliados.

## ✨ Features

### 🎨 Categorias de Estilo
- **Aesthetic**: Minimalist, Dark Academia, Cottagecore, Y2K
- **Ocasião**: Casual, Work/Business, Date Night, Party, Gym/Active
- **Gênero**: Masculine, Feminine, Unisex
- **Estação**: Spring/Summer, Fall/Winter

### 🌟 Funcionalidades
- **Look of the Day**: Destaque diário na homepage
- **Navegação por categorias**: Explore estilos por aesthetic, ocasião, etc.
- **Páginas detalhadas de looks**: Visualize looks completos com preços
- **Links de afiliados**: Monetização através de comissões
- **Design responsivo**: Funciona perfeitamente em mobile e desktop
- **API Routes**: Preparado para integrações externas

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Styling utilitário
- **Next/Image** - Otimização de imagens
- **Inter Font** - Tipografia moderna

## 📦 Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd love-the-outfit

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` para ver o app.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/                    # API Routes
│   │   ├── looks/              # Endpoints de looks
│   │   ├── categories/         # Endpoints de categorias
│   │   └── affiliate/          # Tracking de afiliados
│   ├── category/[id]/          # Páginas de categoria
│   ├── look/[id]/              # Páginas de look individual
│   └── page.tsx                # Homepage
├── data/
│   └── mockData.ts             # Dados mockados
├── types/
│   └── index.ts                # Definições TypeScript
└── components/                 # Componentes (futuro)
```

## 🎯 Próximos Passos

### Integrações Planejadas
- [ ] **APIs Externas**: Amazon, Zara, ASOS
- [ ] **Sistema de Analytics**: Google Analytics, tracking de cliques
- [ ] **CMS**: Sanity ou Strapi para gerenciar conteúdo
- [ ] **Database**: PostgreSQL para persistir dados
- [ ] **Authentication**: Para usuários salvarem favoritos

### Features Futuras
- [ ] **Favoritos**: Sistema para salvar looks
- [ ] **Filtros Avançados**: Por preço, cor, tamanho
- [ ] **Search**: Busca por texto
- [ ] **Recomendações**: ML para sugestões personalizadas
- [ ] **Social Sharing**: Compartilhar looks nas redes sociais

## 🔗 API Endpoints

### GET `/api/looks`
Busca looks com filtros opcionais:
- `?aesthetic=minimalist`
- `?occasion=casual`
- `?gender=unisex`
- `?season=spring-summer`
- `?featured=true`

### GET `/api/categories`
Lista categorias:
- `?type=aesthetic` (aesthetic, occasion, gender, season)

### POST `/api/affiliate/click`
Tracking de cliques em links de afiliados:
```json
{
  "itemId": "item-1",
  "affiliateLink": "https://...",
  "lookId": "look-1",
  "userId": "user-123"
}
```

## 🎨 Design System

### Cores
- **Background**: `stone-50` (#fafaf9)
- **Cards**: `white` (#ffffff)
- **Text Primary**: `stone-900` (#1c1917)
- **Text Secondary**: `stone-600` (#57534e)
- **Accent**: `stone-100` (#f5f5f4)

### Tipografia
- **Font**: Inter (Google Fonts)
- **Weights**: 300 (light), 400 (normal), 500 (medium), 600 (semibold)

### Componentes
- **Border Radius**: `rounded-2xl` (16px)
- **Shadows**: `shadow-sm` sutil
- **Transitions**: 300ms ease
- **Hover Effects**: Scale e translate

## 📱 Responsividade

- **Mobile First**: Design otimizado para mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid responsivo
- **Images**: Next/Image com lazy loading

## 💰 Monetização

### Links de Afiliados
- Tracking automático de cliques
- Suporte para múltiplas redes (Amazon Associates, etc.)
- Analytics de conversão
- Comissões por venda

### Métricas Importantes
- CTR (Click Through Rate)
- Conversion Rate
- Revenue per Look
- Popular Categories

## 🚀 Deploy

```bash
# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

### Plataformas Recomendadas
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.

---

**Love the Outfit** - Curated with love 💕 