import { ArrowRight, FileText } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
          If your brand needs content that looks sharper, ships faster, and feels more consistent
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Bring the offer, the footage, or even just the brief. The system handles the rest.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-all duration-200 text-lg font-semibold flex items-center justify-center shadow-lg"
          >
            Start a Project
          </a>
        </div>

        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-gray-400 text-sm">
            Professional video production for brands that publish with purpose
          </p>
        </div>
      </div>
    </section>
  );
}
