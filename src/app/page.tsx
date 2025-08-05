import Image from 'next/image';
import { featuredLook } from '@/data/mockData';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            {/* Logo Icon */}
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 7L14.64 12.36L21 18L13.55 15.03L12 22L10.45 15.03L3 18L9.36 12.36L4 7L10.91 8.26L12 2Z" fill="white"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-neutral-900">
                OUTFIT
              </h1>
              <p className="text-xs text-neutral-600 font-medium">DAILY ESSENTIALS</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Look of the Day</h2>
          <p className="text-neutral-600 font-medium">No-nonsense style. Ready in 5 minutes.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-5xl mx-auto border border-neutral-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Look Image */}
            <div className="relative aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={featuredLook.mainImage}
                alt={featuredLook.title}
                fill
                className="object-cover"
                priority
              />
              {/* Quick Info Overlay */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                <p className="text-white text-sm font-medium">5 MIN SETUP</p>
              </div>
            </div>

            {/* Look Details */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {featuredLook.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  {featuredLook.description}
                </p>
                
                {/* Style Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredLook.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-900 text-white text-xs rounded-md font-medium uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Items Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-neutral-900">Get This Look</h4>
                  <p className="text-sm text-neutral-600 font-medium">3 ITEMS ONLY</p>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {featuredLook.items.map((item, index) => (
                    <a
                      key={item.id}
                      href={item.affiliateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                    >
                      <div className="relative aspect-square rounded-lg overflow-hidden mb-2 border border-neutral-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Item Number */}
                        <div className="absolute top-2 left-2 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-xs text-neutral-900 font-bold uppercase tracking-wide">
                          {item.brand}
                        </p>
                        <p className="text-xs text-neutral-600 line-clamp-1">{item.name}</p>
                        <p className="text-sm text-neutral-900 font-bold">${item.price}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="pt-4 border-t border-neutral-100">
                  <div className="bg-neutral-900 text-white rounded-lg p-4 text-center">
                    <p className="text-sm font-bold mb-1">TOTAL LOOK</p>
                    <p className="text-lg font-bold">
                      ${featuredLook.items.reduce((sum, item) => sum + item.price, 0)}
                    </p>
                    <p className="text-xs text-neutral-300 mt-2">Click items above to shop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-neutral-100">
              <div className="w-8 h-8 bg-neutral-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">SIMPLE</h4>
              <p className="text-xs text-neutral-600">3 pieces max. No overthinking.</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center border border-neutral-100">
              <div className="w-8 h-8 bg-neutral-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">QUICK</h4>
              <p className="text-xs text-neutral-600">5 minutes from closet to door.</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center border border-neutral-100">
              <div className="w-8 h-8 bg-neutral-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">SHARP</h4>
              <p className="text-xs text-neutral-600">Look put-together, always.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-neutral-600 text-sm font-medium">
              © 2024 OUTFIT Daily Essentials. No BS, just style.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
} 