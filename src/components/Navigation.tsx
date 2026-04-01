import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-lg shadow-gold-100/20' : 'bg-cream-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center space-x-3 group">
            <img
              src="/526d8635-4b4e-4d01-acd9-44b50bc8c7c9-removebg-preview.png"
              alt="GoAuto Portfolio Logo"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
             <span className="text-2xl font-bold text-gray-900 hidden sm:block bg-gradient-to-r from-gray-900 to-gold-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gold-600 transition-all duration-300 text-sm font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full hover:shadow-xl hover:shadow-gold-400/30 transition-all duration-300 text-sm font-medium tracking-wide hover:scale-105"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gold-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-gold-200/30">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-gold-600 transition-colors duration-200 text-sm font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full hover:shadow-xl transition-all duration-200 text-sm font-medium mt-4"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
