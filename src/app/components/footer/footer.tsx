// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container text-center">
        {/* Copyright Info */}
        <p className="mb-4">
          © {currentYear} My Awesome Site. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex justify-center items-center space-x-4 flex-wrap">
          <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-300">
            Privacy Policy
          </Link>
          <span className="text-gray-500">|</span> {/* Separator */}
          <Link href="/terms" className="hover:text-blue-400 transition-colors duration-300">
            Terms of Service
          </Link>
          {/* Add more links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;