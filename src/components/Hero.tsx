export default function Hero() {
  return (
    <section className="pt-40 pb-32 px-6 lg:px-8 bg-gradient-to-b from-cream-50 via-cream-100/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="inline-block mb-8 px-6 py-2 bg-white rounded-full shadow-sm border border-gold-200/30">
            <span className="text-sm font-medium text-gray-600">
              From Manual <span className="text-gold-600">→ Automatic Growth</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-8 leading-tight tracking-tight">
            Performance-focused video creative for brands that need{' '}
            <span className="font-semibold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              quality and consistency
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            Professional video production, content strategy, and repeatable systems for ecommerce, hospitality, real estate, and personal brands that publish with purpose.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <a
              href="#contact"
              className="group w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full hover:shadow-2xl hover:shadow-gold-400/40 transition-all duration-300 text-base font-medium flex items-center justify-center hover:scale-105"
            >
              Book a Project Call
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-4 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-gold-400 hover:text-gold-600 transition-all duration-300 text-base font-medium flex items-center justify-center"
            >
              View Work
            </a>
          </div>

          <p className="text-xs text-gray-400 italic mt-6 font-light tracking-wide">
            No pressure. If you don't want this, we'll tell you exactly why you need it.
          </p>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
