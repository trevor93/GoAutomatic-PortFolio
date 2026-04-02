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
            Tell Us What Your Business <span className="font-semibold text-gold-600">Needs Help With</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
            Whether you need a better website, technical fixes, or support with content and lead generation, send us the details and we will respond with the best next step.
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
                <img
                  src="/whatsapp-golden-logo-icon-hd-transparent-png-704081694684976pkkolkfsxa.png"
                  alt="WhatsApp"
                  className="w-7 h-7 mr-4 flex-shrink-0 mt-1"
                />
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
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gold-200/50 rounded-xl focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-200/50 transition-all"
                      placeholder="Your Email Address"
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
                    placeholder="Tell us about your business, what you need help with, and any website, technical, or growth support you want."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full hover:shadow-2xl hover:shadow-gold-400/40 transition-all duration-300 text-base font-medium hover:scale-105"
                >
                  Send My Request →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
