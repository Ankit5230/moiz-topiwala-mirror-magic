
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b shadow-sm animate-fade-in">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 transition-transform duration-300 hover:scale-[1.02]">
            <span className="text-2xl font-bold text-medical-700">Dr. Topiwala</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-base font-medium transition-colors ${
              isActive('/') 
                ? "text-medical-700 border-b-2 border-medical-600" 
                : "text-gray-700 hover:text-medical-600"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-base font-medium transition-colors ${
              isActive('/about') 
                ? "text-medical-700 border-b-2 border-medical-600" 
                : "text-gray-700 hover:text-medical-600"
            }`}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`text-base font-medium transition-colors ${
              isActive('/services') 
                ? "text-medical-700 border-b-2 border-medical-600" 
                : "text-gray-700 hover:text-medical-600"
            }`}
          >
            Services
          </Link>
          <Link 
            to="/faq" 
            className={`text-base font-medium transition-colors ${
              isActive('/faq') 
                ? "text-medical-700 border-b-2 border-medical-600" 
                : "text-gray-700 hover:text-medical-600"
            }`}
          >
            FAQ
          </Link>
          <Link 
            to="/contact" 
            className={`text-base font-medium transition-colors ${
              isActive('/contact') 
                ? "text-medical-700 border-b-2 border-medical-600" 
                : "text-gray-700 hover:text-medical-600"
            }`}
          >
            Contact
          </Link>
          <Button asChild className="bg-medical-600 hover:bg-medical-700 text-white transition-all duration-300 transform hover:scale-105">
            <Link to="/book">Book Appointment</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-medical-600 focus:outline-none transition-colors"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b animate-fade-in">
          <div className="container-custom py-4 space-y-3">
            <Link
              to="/"
              className={`block py-2 text-base font-medium ${
                isActive('/') 
                  ? "text-medical-700" 
                  : "text-gray-700 hover:text-medical-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 text-base font-medium ${
                isActive('/about') 
                  ? "text-medical-700" 
                  : "text-gray-700 hover:text-medical-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block py-2 text-base font-medium ${
                isActive('/services') 
                  ? "text-medical-700" 
                  : "text-gray-700 hover:text-medical-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/faq"
              className={`block py-2 text-base font-medium ${
                isActive('/faq') 
                  ? "text-medical-700" 
                  : "text-gray-700 hover:text-medical-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className={`block py-2 text-base font-medium ${
                isActive('/contact') 
                  ? "text-medical-700" 
                  : "text-gray-700 hover:text-medical-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-medical-600 hover:bg-medical-700 text-white transition-all duration-300">
              <Link to="/book" onClick={() => setIsMenuOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
