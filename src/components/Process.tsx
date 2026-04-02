import { FileText, Lightbulb, File as FileEdit, Play, CheckCircle, Send } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: FileText,
      title: 'Clear Business-Focused Work',
      description: 'We do not build for decoration alone. We focus on websites, fixes, and support that help businesses communicate clearly and operate better.'
    },
    {
      icon: Lightbulb,
      title: 'Fast, Practical Problem Solving',
      description: 'When something breaks or slows your business down, speed matters. We approach troubleshooting carefully and practically so you can keep moving.'
    },
    {
      icon: FileEdit,
      title: 'Built Around Real Business Needs',
      description: 'Some clients need a website first. Some need technical help. Some need support with visibility and lead flow. We meet the real need instead of forcing one-size-fits-all solutions.'
    },
    {
      icon: Play,
      title: 'Simple, Professional Delivery',
      description: 'Our goal is not to overwhelm you with jargon. It is to help you get useful digital work done properly and professionally.'
    }
  ];

  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Why Businesses Choose <span className="font-semibold text-gold-600">GoAutomatic</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            We focus on practical digital work that helps businesses look better, solve problems faster, and support growth without unnecessary complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-100 to-gold-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm shadow-gold-200/50">
                <step.icon className="w-10 h-10 text-gold-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
