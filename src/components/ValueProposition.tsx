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
    <section className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Chaos <span className="text-gold-500">→ Clean</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            It's video production, creative strategy, content systems, and repeatable delivery built for brands that publish with purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gold-400 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 md:p-14 bg-white border border-gold-300 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What <span className="text-gold-500">You Get</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              From UGC-style ads to faceless explainers, product promos to multilingual content—professional video production that adapts to how your business actually needs to communicate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
