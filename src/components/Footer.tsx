export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-12">
          <img
            src="/image_2026-03-28_15-32-12-removebg-preview.png"
            alt="Naim Agency Logo"
            className="h-40 w-auto mb-8"
          />
          <p className="text-gray-600 leading-relaxed text-center max-w-md">
            Professional video production for brands that need quality, consistency, and strategic content execution.
          </p>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col items-center text-center">
          <p className="text-sm text-gray-500 mb-4">
            © {currentYear} Video Systems. Professional video content production.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
