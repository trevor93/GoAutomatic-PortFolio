import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Client <span className="font-semibold text-gold-600">Feedback</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            What clients say about working together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-white to-cream-50 rounded-3xl border border-gold-200/30 p-8 hover:border-gold-400 hover:shadow-xl hover:shadow-gold-100/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-gold-400 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-6 font-light text-sm">
                "{testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-gold-100">
                <div className="font-semibold text-gray-800 text-sm">
                  {testimonial.author}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {testimonial.role}
                </div>
                <div className="text-xs text-gold-600 mt-0.5">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
