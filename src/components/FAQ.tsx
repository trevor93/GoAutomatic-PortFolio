import { useState } from 'react';
import { faqs } from '../data/testimonials';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 lg:px-8 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Common <span className="font-semibold text-gold-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Common questions about working together.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gold-200/30 overflow-hidden hover:shadow-lg hover:shadow-gold-100/10 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-cream-50/50 transition-colors"
              >
                <span className="text-base font-medium text-gray-800 pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-gold-600" />
                  ) : (
                    <Plus className="w-4 h-4 text-gold-600" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-cream-50/30">
                  <p className="text-gray-600 leading-relaxed text-sm font-light">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
