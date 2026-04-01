import { portfolioItems } from '../data/portfolio';
import { Play } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Selected work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional video production across industries, formats, and business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-sm overflow-hidden border border-gray-200 hover:border-gold-400 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gold-700 font-medium">
                    {item.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-full hover:border-gold-500 hover:text-gold-500 transition-all duration-200 font-semibold"
          >
            Request Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
