export default function FinalCTA() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
          Your Online Presence Should Help Your Business Move Forward — <span className="font-semibold text-gold-400">Not Hold It Back.</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light">
          If your website is weak, your systems are messy, or your business needs more digital support, GoAutomatic helps you fix the foundation first and grow from there.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full hover:shadow-2xl hover:shadow-gold-500/30 transition-all duration-300 text-base font-medium flex items-center justify-center hover:scale-105"
          >
            Let's Talk About Your Project →
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-gray-400 text-sm font-light">
            Professional video production for brands that publish with purpose
          </p>
        </div>
      </div>
    </section>
  );
}
