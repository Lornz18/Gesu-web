// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright Info */}
        <p className="mb-4">
          © {currentYear} My Awesome Site. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex justify-center items-center space-x-4 mb-4 flex-wrap">
          <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-300">
            Privacy Policy
          </Link>
          <span className="text-gray-500">|</span> {/* Separator */}
          <Link href="/terms" className="hover:text-blue-400 transition-colors duration-300">
            Terms of Service
          </Link>
          {/* Add more links here */}
        </div>

        {/* Social Media Links (Optional) */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition-colors duration-300" aria-label="Facebook">
            {/* You can use SVG icons here for actual social media logos */}
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* Placeholder for Facebook icon */}
              F
            </svg>
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors duration-300" aria-label="Twitter">
            {/* Placeholder for Twitter icon */}
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {/* Placeholder for Twitter icon */}
              T
            </svg>
          </a>
          {/* Add more social media links */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;