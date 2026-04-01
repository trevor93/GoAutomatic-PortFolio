import { workCategories } from '../data/portfolio';

export default function WorkCategories() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Featured work categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized production across formats that matter for modern business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-sm border border-gray-200 hover:border-gold-400 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gold-600 transition-colors">
                  {category.title}
                </h3>
                <div className="w-2 h-2 bg-gold-400 rounded-full mt-2"></div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
