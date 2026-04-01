import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional video production tailored to how your business actually needs to communicate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-sm border border-gray-200 hover:border-gold-400 transition-all duration-300 p-8 group"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                  What's Included
                </h4>
                <ul className="space-y-2">
                  {service.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-3">
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">For:</span>
                  <p className="text-sm text-gray-700 mt-1">{service.forWho}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Solves:</span>
                  <p className="text-sm text-gray-700 mt-1">{service.solves}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-4 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-all duration-200 text-lg font-semibold shadow-sm"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
