import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Client feedback
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What clients say about working together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-sm border border-gray-200 p-8 hover:border-gold-300 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-gold-400 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-gray-200">
                <div className="font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}
                </div>
                <div className="text-sm text-gold-600">
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
