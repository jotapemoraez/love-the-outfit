import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockLooks } from '@/data/mockData';

interface LookPageProps {
  params: {
    id: string;
  };
}

export default function LookPage({ params }: LookPageProps) {
  const look = mockLooks.find(l => l.id === params.id);
  
  if (!look) {
    notFound();
  }

  const totalPrice = look.items.reduce((sum, item) => sum + item.price, 0);

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

      {/* Look Details */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Look Image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src={look.mainImage}
              alt={look.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Look Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-light text-stone-900 mb-4">{look.title}</h1>
              <p className="text-stone-600 leading-relaxed text-lg">
                {look.description}
              </p>
            </div>

            {/* Look Meta */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-stone-200">
              <div>
                <p className="text-stone-500 text-sm font-light uppercase tracking-wide mb-1">Style</p>
                <p className="text-stone-900 capitalize">{look.aesthetic.replace('-', ' ')}</p>
              </div>
              <div>
                <p className="text-stone-500 text-sm font-light uppercase tracking-wide mb-1">Occasion</p>
                <p className="text-stone-900 capitalize">{look.occasion.replace('-', ' ')}</p>
              </div>
              <div>
                <p className="text-stone-500 text-sm font-light uppercase tracking-wide mb-1">Gender</p>
                <p className="text-stone-900 capitalize">{look.gender}</p>
              </div>
              <div>
                <p className="text-stone-500 text-sm font-light uppercase tracking-wide mb-1">Season</p>
                <p className="text-stone-900 capitalize">{look.season.replace('-', ' ')}</p>
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-light text-stone-900 mb-3">Style Tags</h3>
              <div className="flex flex-wrap gap-2">
                {look.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-2 bg-stone-100 text-stone-700 text-sm rounded-full font-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-stone-500 text-sm font-light">Complete Look</p>
                  <p className="text-2xl font-light text-stone-900">${totalPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-stone-500 text-sm font-light">{look.items.length} pieces</p>
                  <p className="text-stone-700 text-sm">Free shipping available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-stone-900 mb-2">Get the Look</h2>
          <p className="text-stone-600 font-light">Shop each piece individually</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {look.items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative aspect-square">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-stone-500 text-sm font-light uppercase tracking-wide mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-light text-stone-900 mb-1">{item.name}</h3>
                  <p className="text-stone-600 font-medium">{item.brand}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-2xl font-light text-stone-900">${item.price}</p>
                  <p className="text-stone-500 text-sm">Free returns</p>
                </div>

                <a
                  href={item.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-stone-900 text-white text-center py-3 rounded-xl hover:bg-stone-800 transition-colors font-light"
                >
                  Shop Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Looks */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-stone-900 mb-2">You Might Also Like</h2>
          <p className="text-stone-600 font-light">More looks in this style</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockLooks
            .filter(l => l.id !== look.id && (l.aesthetic === look.aesthetic || l.occasion === look.occasion))
            .slice(0, 3)
            .map((relatedLook) => (
              <Link
                key={relatedLook.id}
                href={`/look/${relatedLook.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={relatedLook.mainImage}
                      alt={relatedLook.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-light text-stone-900 mb-2">
                      {relatedLook.title}
                    </h3>
                    <p className="text-stone-600 text-sm">
                      From ${Math.min(...relatedLook.items.map(item => item.price))}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
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