import { portfolioItems } from '../data/portfolio';
import { Play } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Selected <span className="font-semibold text-gold-600">Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Professional video production across industries, formats, and business objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gold-200/30 hover:border-gold-400 hover:shadow-xl hover:shadow-gold-100/20 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[9/16] bg-gradient-to-br from-cream-100 to-cream-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Play className="w-16 h-16 text-gold-400/80 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full border border-gold-200/30 shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-gray-800 mb-3 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-gold-100">
                  <p className="text-xs text-gold-700 font-medium">
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
            className="inline-flex items-center px-8 py-3 bg-white text-gray-700 border-2 border-gold-200/50 rounded-full hover:border-gold-500 hover:text-gold-600 hover:shadow-lg hover:shadow-gold-100/20 transition-all duration-300 font-medium"
          >
            Request Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
