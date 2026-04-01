export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-10 leading-tight">
            Performance-focused video creative for brands that need{' '}
            <span className="text-gold-500">quality and consistency</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto font-normal">
            Professional video production, content strategy, and repeatable systems for ecommerce, hospitality, real estate, and personal brands that publish with purpose.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-all duration-200 text-lg font-semibold flex items-center justify-center shadow-sm"
            >
              Book a Project Call
            </a>
          </div>

          <p className="text-sm text-gray-500 italic mt-4">
            No pressure. If you don't need this, We'll tell you.
          </p>
        </div>
      </div>
    </section>
  );
}
