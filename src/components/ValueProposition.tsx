import { Zap, Target, Repeat } from 'lucide-react';

export default function ValueProposition() {
  const values = [
    {
      icon: Target,
      title: 'Built for brands that need more than random content',
      description: 'Every video is structured for clarity, trust, and business results—not just views.'
    },
    {
      icon: Zap,
      title: 'Clear process. Fast turnaround. Professional output.',
      description: 'Organized workflows that eliminate guesswork and deliver polished content on schedule.'
    },
    {
      icon: Repeat,
      title: 'Strategy, scripting, editing, packaging, and delivery in one workflow',
      description: 'Full production support from concept to final export, designed for repeatable quality.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            What <span className="font-semibold text-gold-600">You Get</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            It's video production, creative strategy, content systems, and repeatable delivery built for brands that publish with purpose.
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

        <div className="mt-16 p-10 md:p-14 bg-gradient-to-br from-white to-cream-100 border border-gold-200/40 rounded-3xl shadow-lg shadow-gold-100/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
              From UGC-style ads to faceless explainers
            </h3>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              Product promos to multilingual content—professional video production that adapts to how your business actually needs to communicate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
