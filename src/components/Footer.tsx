import React from 'react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants/data';
import { Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Mail':
        return <Mail size={20} />;
      case 'Twitter':
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">
              Vanishree<span className="text-amber-500">.</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Finance professional with expertise in accounting, TDS, GST, and financial analysis. 
              Offering comprehensive financial services to help businesses thrive.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-amber-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={link.platform}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4 text-gray-300">
              <p>Email: vanisridheena0701@gmail.com</p>
              <p>Phone: +91 6383676528</p>
              <p>Location: Chennai, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-900 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Vanishree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;