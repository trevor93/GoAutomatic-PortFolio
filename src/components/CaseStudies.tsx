import { caseStudies } from '../data/caseStudies';
import { CheckCircle2 } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Case <span className="font-semibold text-gold-600">Studies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Real projects. Real workflows. Real business value.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-white to-cream-50 rounded-3xl border border-gold-200/30 hover:border-gold-400 hover:shadow-xl hover:shadow-gold-100/20 transition-all duration-300 p-8 md:p-10"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="mb-6">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-gold-100 to-gold-200 text-gold-700 text-xs font-medium rounded-full border border-gold-300/30">
                      {study.clientType}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-snug">
                    {study.goal}
                  </h3>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                      Approach
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {study.approach}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                      Deliverables
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {study.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-gold-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 text-sm font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gold-200/30">
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Outcome
                      </span>
                    </div>
                    <p className="text-gold-700 font-medium mb-3 text-sm">
                      {study.outcome}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm font-light">
                      <span className="font-medium text-gray-800">Why it worked:</span> {study.whyItWorked}
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
