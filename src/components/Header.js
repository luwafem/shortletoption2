import React, { useState } from 'react';
import { Menu, X, Phone, Building2, Image, Play } from 'lucide-react';

const Header = ({ buildingName, contactPhone, onTourClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Apartments', href: '#apartments' },
    { label: 'Building', href: '#building' },
    { label: 'Tours', href: '#tours' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, label) => {
    e.preventDefault();
    console.log(`Navigate to ${label}`);
    
    // For smooth scrolling to sections
    const section = label.toLowerCase();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
          >
            
            <div className="text-left">
              <div className="text-xl font-bold text-gray-800">{buildingName}</div>
              <div className="text-xs text-gray-500">Service Apartments</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={(e) => handleNavClick(e, item.label)}
                className="text-gray-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-3 py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span>{contactPhone}</span>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => onTourClick('image')}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <Image className="w-4 h-4 mr-2" />
                Gallery
              </button>
              <button 
                onClick={() => onTourClick('video')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <Play className="w-4 h-4 mr-2" />
                Videos
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => handleNavClick(e, item.label)}
                  className="text-gray-700 hover:text-primary-600 py-2 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t">
                <div className="flex items-center text-gray-600 mb-4">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{contactPhone}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button 
                    onClick={() => {
                      onTourClick('image');
                      setIsMenuOpen(false);
                    }}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <Image className="w-4 h-4 mr-2" />
                    Image Tours
                  </button>
                  <button 
                    onClick={() => {
                      onTourClick('video');
                      setIsMenuOpen(false);
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Video Tours
                  </button>
                </div>
                
                <button
                  onClick={(e) => handleNavClick(e, 'Contact')}
                  className="w-full border-2 border-primary-600 text-primary-600 px-6 py-2 rounded-lg hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Optional: Add a subtle progress bar for scroll */}
      <div className="h-1 w-full bg-gray-100">
        <div 
          className="h-full bg-primary-600 transition-all duration-300"
          style={{
            width: `${Math.min(
              (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
              100
            )}%`
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;