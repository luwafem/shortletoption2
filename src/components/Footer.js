import React from 'react';

const Footer = ({ buildingName, address, contactInfo }) => {
  const footerLinks = {
    "Apartments": ["Studio Suites", "1-Bedroom Units", "2-Bedroom Units", "Penthouse"],
    "Services": ["Housekeeping", "Concierge", "Maintenance", "Security"],
    "Building": ["Amenities", "Floor Plans", "Location", "Gallery"],
    "Policies": ["Booking Terms", "Cancellation", "House Rules", "Privacy"]
  };

  const handleLinkClick = (section) => {
    console.log(`Navigate to ${section}`);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Building Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-2">{buildingName}</div>
            <p className="text-gray-400 mb-4">{address}</p>
            <p className="text-gray-400 mb-6">
              Premium service apartments offering hotel-like services with residential comfort.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">{contactInfo.contactPhone}</p>
              <p className="text-gray-400">{contactInfo.contactEmail}</p>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-1 py-1 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Corporate Partnerships */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Corporate Partnerships</h4>
              <p className="text-gray-400">
                Special rates for corporate clients, relocation services, and long-term stays.
                Contact our corporate team for customized solutions.
              </p>
            </div>
            <div>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Corporate email for special offers"
                  className="flex-1 px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                />
                <button
                  type="submit"
                  className="bg-primary-600 px-6 py-3 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  Contact Sales
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {buildingName}. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <button 
              onClick={() => handleLinkClick('Privacy Policy')}
              className="hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-1"
            >
              Privacy Policy
            </button>
            <span className="mx-2">|</span>
            <button 
              onClick={() => handleLinkClick('Terms of Service')}
              className="hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-1"
            >
              Terms of Service
            </button>
            <span className="mx-2">|</span>
            <button 
              onClick={() => handleLinkClick('Accessibility')}
              className="hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-1"
            >
              Accessibility
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;