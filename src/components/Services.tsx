import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            <span className="font-semibold text-gold-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Professional video production tailored to how your business actually needs to communicate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl border border-gold-200/30 hover:border-gold-400 hover:shadow-xl hover:shadow-gold-100/20 transition-all duration-300 p-8 group"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  What's Included
                </h4>
                <ul className="space-y-2">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mr-3 mt-2 flex-shrink-0 shadow-sm shadow-gold-400/50"></div>
                      <span className="text-gray-600 text-sm font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gold-100 space-y-3">
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">For:</span>
                  <p className="text-sm text-gray-600 mt-1 font-light">{service.forWho}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Solves:</span>
                  <p className="text-sm text-gray-600 mt-1 font-light">{service.solves}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full hover:shadow-2xl hover:shadow-gold-400/40 transition-all duration-300 text-base font-medium hover:scale-105"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
