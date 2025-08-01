import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, mockLooks } from '@/data/mockData';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.id === params.id);
  
  if (!category) {
    notFound();
  }

  // Filter looks based on category type and value
  const filteredLooks = mockLooks.filter(look => {
    switch (category.type) {
      case 'aesthetic':
        return look.aesthetic === category.value;
      case 'occasion':
        return look.occasion === category.value;
      case 'gender':
        return look.gender === category.value;
      case 'season':
        return look.season === category.value;
      default:
        return false;
    }
  });

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link href="/" className="text-2xl font-light tracking-wide text-stone-900 hover:text-stone-700 transition-colors">
            Love the Outfit
          </Link>
        </div>
      </header>

      {/* Category Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-stone-900 mb-4">{category.name}</h1>
          <p className="text-stone-600 font-light text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Category Image */}
        <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden mb-12">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-light mb-2">{category.name} Collection</h2>
              <p className="text-white/80 font-light">
                {filteredLooks.length} curated look{filteredLooks.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Looks Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        {filteredLooks.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLooks.map((look) => (
              <Link
                key={look.id}
                href={`/look/${look.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  {/* Look Image */}
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={look.mainImage}
                      alt={look.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Look Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-light text-stone-900 mb-2">
                      {look.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {look.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {look.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-stone-100 text-stone-700 text-xs rounded-full font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Price Range */}
                    <div className="flex items-center justify-between">
                      <p className="text-stone-500 text-sm font-light">
                        {look.items.length} pieces
                      </p>
                      <p className="text-stone-900 font-medium">
                        From ${Math.min(...look.items.map(item => item.price))}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-stone-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-stone-900 mb-2">No looks found</h3>
              <p className="text-stone-600 font-light mb-6">
                We're working on adding more {category.name.toLowerCase()} looks to our collection.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors font-light"
              >
                Explore Other Categories
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-stone-600 font-light">
              © 2024 Love the Outfit. Curated with love.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
} 