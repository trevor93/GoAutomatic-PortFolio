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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-gold-500">Works</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A structured process that eliminates confusion and delivers professional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {steps.slice(0, 3).map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-gold-500" />
              </div>
              <div className="text-5xl font-bold text-gold-500 mb-4">{index + 1}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-white border border-gray-200 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Your Data is <span className="text-gold-500">Protected</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Clear communication. Organized production. Fast revisions. Delivery you can rely on. This process applies whether you need one video or ongoing monthly support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
