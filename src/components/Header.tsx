
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              DummyApp
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link to="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Services
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
