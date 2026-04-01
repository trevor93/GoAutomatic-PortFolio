import { Mail, MessageCircle, Send } from 'lucide-react';
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
    <section id="contact" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Start a conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your project? Reach out and let's talk about how video content can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                Get in touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you need a single video or ongoing production support, start with a quick conversation about your goals.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:hello@videosystems.pro"
                className="flex items-start p-4 bg-gray-50 rounded-sm border border-gray-200 hover:border-gold-400 transition-all duration-200 group"
              >
                <Mail className="w-6 h-6 text-gold-600 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-gold-600 transition-colors">
                    Email
                  </div>
                  <div className="text-sm text-gray-600">
                    hello@videosystems.pro
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 bg-gray-50 rounded-sm border border-gray-200 hover:border-gold-400 transition-all duration-200 group"
              >
                <MessageCircle className="w-6 h-6 text-gold-600 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-gold-600 transition-colors">
                    WhatsApp
                  </div>
                  <div className="text-sm text-gray-600">
                    Quick response for urgent inquiries
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors bg-white"
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
                  <label htmlFor="turnaround" className="block text-sm font-semibold text-gray-900 mb-2">
                    Preferred Turnaround
                  </label>
                  <select
                    id="turnaround"
                    value={formData.turnaround}
                    onChange={(e) => setFormData({ ...formData, turnaround: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors bg-white"
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
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Project Brief
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  placeholder="Tell me about your project, goals, and what kind of video content you need..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-gold-500 text-white rounded-full hover:bg-gold-600 transition-all duration-200 text-lg font-semibold flex items-center justify-center shadow-sm"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
