import { caseStudies } from '../data/caseStudies';
import { CheckCircle2 } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Case studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real projects. Real workflows. Real business value.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-sm border-2 border-gray-100 hover:border-gold-300 transition-all duration-300 p-8 md:p-10"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="mb-6">
                    <span className="px-3 py-1 bg-gold-50 text-gold-700 text-sm font-medium rounded-full border border-gold-200">
                      {study.clientType}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {study.goal}
                  </h3>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      Approach
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {study.approach}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                      Deliverables
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {study.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-gold-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <div className="mb-3">
                      <span className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        Outcome
                      </span>
                    </div>
                    <p className="text-gold-700 font-medium mb-3">
                      {study.outcome}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      <span className="font-medium text-gray-900">Why it worked:</span> {study.whyItWorked}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
