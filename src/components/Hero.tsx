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
            We Build Websites That Builds Trust. Website Fixes That Keep Business Moving. Systems That Help You Grow.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
            We help businesses build professional websites, fix technical issues fast, and improve how they attract clients online. From website development and troubleshooting to content systems and lead generation support, GoAutomatic helps you move faster without unnecessary complexity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <a
              href="#contact"
              className="group w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full hover:shadow-2xl hover:shadow-gold-400/40 transition-all duration-300 text-base font-medium flex items-center justify-center hover:scale-105"
            >
              See What We Can Build For You →
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-4 bg-white text-gray-700 rounded-full border-2 border-gray-200 hover:border-gold-400 hover:text-gold-600 transition-all duration-300 text-base font-medium flex items-center justify-center"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-300/10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
