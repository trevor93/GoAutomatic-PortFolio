export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-cream-50 text-gray-600 py-16 px-6 lg:px-8 border-t border-gold-200/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-12">
          <img
            src="/image_2026-03-28_15-32-12-removebg-preview.png"
            alt="GoAuto Portfolio Logo"
            className="h-56 w-auto mb-8 opacity-90"
          />
          <p className="text-gray-600 leading-relaxed text-center max-w-md font-light">
            GoAutomatic — Website Development, Troubleshooting, and Practical Digital Support for Growing Businesses.
          </p>
        </div>

        <div className="pt-8 border-t border-gold-200/30 flex flex-col items-center text-center">
          <p className="text-sm text-gray-500 mb-4 font-light">
            © {currentYear} GoAutomatic. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gold-600 transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gold-600 transition-colors font-light">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
