import { Shield, Zap, Globe, Repeat, Layers, Users } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: Shield,
      title: 'They Need a Better Online Presence',
      description: 'A weak website costs trust. Clients work with us when they need a cleaner, stronger business presence that makes them look serious.'
    },
    {
      icon: Zap,
      title: 'They Need Problems Solved',
      description: 'Broken pages, technical issues, and messy workflows create friction. Clients come to us when they want practical fixes without wasting time.'
    },
    {
      icon: Users,
      title: 'They Want More Than Just a Website',
      description: 'Some businesses also need support with content direction and lead generation, so their digital presence does not just exist — it helps them grow.'
    },
    {
      icon: Globe,
      title: 'They Prefer Simple, Reliable Support',
      description: 'We keep things clear, practical, and business-focused. No unnecessary complexity. No inflated promises. Just useful digital support.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Why Clients Work With <span className="font-semibold text-gold-600">GoAutomatic</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            They want practical help, clear communication, and digital work that supports actual business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
