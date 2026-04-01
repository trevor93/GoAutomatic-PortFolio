import { Shield, Zap, Globe, Repeat, Layers, Users } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: Shield,
      title: 'Professional systems, not random editing',
      description: 'Structured workflows that ensure consistency and quality across every project.'
    },
    {
      icon: Zap,
      title: 'Built for speed without sacrificing quality',
      description: 'Fast turnaround times with the polish and attention to detail your brand deserves.'
    },
    {
      icon: Users,
      title: 'Clear communication and organized delivery',
      description: 'No endless revisions or confusion. Straightforward process from brief to final files.'
    },
    {
      icon: Globe,
      title: 'Multi-format support for modern brands',
      description: 'From UGC ads to multilingual content, adapt to how your audience actually consumes video.'
    },
    {
      icon: Repeat,
      title: 'Designed for repeatable content production',
      description: 'Whether you need one video or ongoing support, the system scales with your needs.'
    },
    {
      icon: Layers,
      title: 'Strategy and execution in one place',
      description: 'Not just editing—content structure, messaging, and business-focused creative thinking.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Why Clients <span className="font-semibold text-gold-600">Choose This Service</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Reliable. Professional. Built for business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gold-200/30 hover:border-gold-400 hover:shadow-xl hover:shadow-gold-100/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-gold-200 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
