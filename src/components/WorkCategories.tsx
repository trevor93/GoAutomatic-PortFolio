import { workCategories } from '../data/portfolio';

export default function WorkCategories() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            What We Help Businesses <span className="font-semibold text-gold-600">Do</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Practical digital services built to improve trust, fix problems, and support growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-cream-50 p-8 rounded-2xl border border-gold-200/30 hover:border-gold-400 hover:shadow-xl hover:shadow-gold-100/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gold-600 transition-colors">
                  {category.title}
                </h3>
                <div className="w-2 h-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mt-2 shadow-sm shadow-gold-400/50"></div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm font-light">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
