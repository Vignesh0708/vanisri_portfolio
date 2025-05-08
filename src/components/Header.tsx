import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants/data';
import { Menu, X, FileText } from 'lucide-react';
import Button from './Button';
import Resume from "../Assets/Vanishree D Resume (1).pdf"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-playfair font-bold text-blue-950">
            Vanishree<span className="text-amber-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className="text-gray-700 hover:text-amber-500 font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
  <a
    href={Resume} // public folder path
    download
    className="inline-flex items-center px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition"
  >
    <FileText size={16} className="mr-2" />
    Download CV
  </a>
</div>


          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-blue-950"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out absolute w-full ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-amber-500 font-medium transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button 
                variant="primary" 
                size="sm"
                className="w-full flex justify-center items-center"
              >
                <FileText size={16} className="mr-2" />
                Download CV
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;