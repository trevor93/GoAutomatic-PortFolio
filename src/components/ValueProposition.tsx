import { Zap, Target, Repeat } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      icon: Target,
      title: 'Professional Websites',
      description: 'Clean, modern business websites built to improve trust, present your offer clearly, and help visitors take action.'
    },
    {
      icon: Zap,
      title: 'Fast Technical Support',
      description: 'Troubleshooting, fixes, and debugging support to help solve issues quickly and keep your website or workflow running properly.'
    },
    {
      icon: Repeat,
      title: 'Growth Support Services',
      description: 'Beyond websites, we also support businesses with content systems and lead generation that help bring in more opportunities.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            <span className="font-semibold text-gold-600">Built for Businesses That Need Practical Results</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Built for service businesses, growing brands, and founders who want reliable digital support without overcomplication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gold-200/30 hover:border-gold-400 hover:shadow-xl hover:shadow-gold-100/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-gold-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-3 leading-snug">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm font-light">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
