import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    turnaround: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Start a <span className="font-semibold text-gold-600">Conversation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Ready to discuss your project? Reach out and let's talk about what pain are you currently facing in your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                Get in Touch
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-8 font-light">
                Whether you need a single video or ongoing production support, start with a quick conversation about your goals.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:hello@videosystems.pro"
                className="flex items-start p-6 bg-white rounded-2xl border border-gold-200/30 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-100/20 transition-all duration-300 group"
              >
                <Mail className="w-7 h-7 text-gold-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-gold-600 transition-colors text-lg">
                    Email
                  </div>
                  <div className="text-base text-gray-600 font-light">
                    salmin@naiminvestment.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-6 bg-white rounded-2xl border border-gold-200/30 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-100/20 transition-all duration-300 group"
              >
                <svg className="w-7 h-7 text-gold-600 mr-4 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.51.857-2.813 2.007-3.8 3.438C2.7 10.073 2 11.9 2 13.728c0 .983.192 1.953.564 2.863l.85-3.095c.674-2.453.674-2.718.674-2.87 0-1.466.504-2.75 1.347-3.74 1.946-2.25 5.455-3.182 8.687-2.368 1.584.404 3.001 1.138 4.105 2.191 1.104 1.053 1.861 2.423 2.191 4.006.33 1.581.157 3.407-.604 4.76-.761 1.351-2.237 2.453-3.994 2.695-1.757.242-3.282-.202-4.501-1.052" />
                </svg>
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-gold-600 transition-colors text-lg">
                    WhatsApp
                  </div>
                  <div className="text-base text-gray-600 font-light">
                    +27 69 613 3396
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-gold-200/30 shadow-lg shadow-gold-100/10">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gold-200/50 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200/50 transition-all"
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gold-200/50 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200/50 transition-all"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 border border-gold-200/50 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200/50 transition-all bg-white"
                      required
                    >
                      <option value="">Select a type</option>
                      <option value="short-form">Short-Form Video Editing</option>
                      <option value="ugc">UGC-Style Ad Creative</option>
                      <option value="product">Product Promo Videos</option>
                      <option value="explainer">Faceless Explainer Videos</option>
                      <option value="multilingual">Multilingual Production</option>
                      <option value="monthly">Monthly Content Support</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="turnaround" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Turnaround
                    </label>
                    <select
                      id="turnaround"
                      value={formData.turnaround}
                      onChange={(e) => setFormData({ ...formData, turnaround: e.target.value })}
                      className="w-full px-4 py-3 border border-gold-200/50 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200/50 transition-all bg-white"
                      required
                    >
                      <option value="">Select timeframe</option>
                      <option value="rush">Rush (1-3 days)</option>
                      <option value="standard">Standard (3-7 days)</option>
                      <option value="flexible">Flexible</option>
                      <option value="ongoing">Ongoing / Monthly</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Brief
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gold-200/50 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200/50 transition-all resize-none"
                    placeholder="Tell me about your project, goals, and what kind of video content you need..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full hover:shadow-2xl hover:shadow-gold-400/40 transition-all duration-300 text-base font-medium hover:scale-105"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
