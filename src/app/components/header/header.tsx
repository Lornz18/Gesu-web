// components/Header.js
"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">G</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
            >
              Academic Programs / Curriculum
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
            >
              Faculty & Staff
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="py-4 space-y-2 border-t border-gray-200/50">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/resources"
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/student-portal"
              className="block mx-4 mt-4 px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg text-center hover:shadow-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Student Portal
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
