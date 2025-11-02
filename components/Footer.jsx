// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            RR Fitness & Nutrition
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Building strength, confidence, and healthier lifestyles — one workout and meal at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-yellow-400 transition">
                Programs
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm6.5-.75a1.25 1.25 0 11-1.25-1.25A1.25 1.25 0 0118.5 7.75z"></path>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.2 3-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v2.1h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12"></path>
              </svg>
            </a>
            {/* YouTube */}
           <a
  href="https://youtube.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-red-600 transition"
  aria-label="YouTube"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M23.498 6.186a2.97 2.97 0 0 0-2.09-2.101C19.78 3.5 12 3.5 12 3.5s-7.78 0-9.408.585A2.97 2.97 0 0 0 .502 6.186C0 7.815 0 12 0 12s0 4.185.502 5.814a2.97 2.97 0 0 0 2.09 2.101C4.22 20.5 12 20.5 12 20.5s7.78 0 9.408-.585a2.97 2.97 0 0 0 2.09-2.101C24 16.185 24 12 24 12s0-4.185-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
  </svg>
</a>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Stay updated with our fitness tips and nutrition plans.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            RR Fitness & Nutrition
          </span>{" "}
          | Built with ❤️ by <span className="text-yellow-400">RR_FITNESS</span>
        </p>
      </div>
    </footer>
  );
}

