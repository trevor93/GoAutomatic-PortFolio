import { FileText, Lightbulb, File as FileEdit, Play, CheckCircle, Send } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: FileText,
      title: 'Brief',
      description: 'Clear intake process to understand your goals, audience, and content requirements.'
    },
    {
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Creative direction and structural planning to position your content for results.'
    },
    {
      icon: FileEdit,
      title: 'Script / Structure',
      description: 'Messaging framework, narrative flow, and content organization before production.'
    },
    {
      icon: Play,
      title: 'Edit / Build',
      description: 'Professional editing, motion graphics, sound design, and visual polish.'
    },
    {
      icon: CheckCircle,
      title: 'Review',
      description: 'Organized feedback round with fast revisions to ensure satisfaction.'
    },
    {
      icon: Send,
      title: 'Final Delivery',
      description: 'Multi-format exports ready for web, social, and business use.'
    }
  ];

  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            How It <span className="font-semibold text-gold-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            A structured process that eliminates confusion and delivers professional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {steps.slice(0, 3).map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm shadow-gold-200/50">
                <step.icon className="w-10 h-10 text-gold-600" />
              </div>
              <div className="text-5xl font-light text-gold-500 mb-4">{index + 1}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gradient-to-br from-white to-cream-50 border border-gold-200/40 rounded-3xl shadow-lg shadow-gold-100/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-light text-gray-800 mb-4">
              Your Data is <span className="font-semibold text-gold-600">Protected</span>
            </h3>
            <p className="text-base text-gray-600 leading-relaxed font-light">
              Clear communication. Organized production. Fast revisions. Delivery you can rely on. This process applies whether you need one video or ongoing monthly support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
