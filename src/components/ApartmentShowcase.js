import React from 'react';
import ApartmentCard from './ApartmentCard';

const ApartmentShowcase = ({ apartments, activeTab, onTabChange, onTourClick }) => {
  const categories = [
    { id: 'all', label: 'All Units' },
    { id: 'Studio', label: 'Studios' },
    { id: '1 Bedroom', label: '1 Bedroom' },
    { id: '2 Bedroom', label: '2 Bedroom' },
    { id: 'Penthouse', label: 'Penthouse' },
  ];

  const filteredApartments = activeTab === 'all' 
    ? apartments 
    : apartments.filter(apt => apt.type === activeTab);

  return (
    <section id="apartments" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Available Service Apartments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of fully-furnished apartments with premium amenities
          </p>
          {onTourClick && (
            <button 
              onClick={() => onTourClick('image')}
              className="mt-6 bg-primary-600 text-black px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Schedule Building Tour →
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                activeTab === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => onTabChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApartments.map((apartment) => (
            <ApartmentCard 
              key={apartment.id} 
              apartment={apartment} 
              onTourClick={onTourClick}
            />
          ))}
        </div>

        {/* Rental Terms */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Flexible Rental Terms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary-600 text-3xl font-bold mb-2">30+</div>
              <h4 className="font-semibold text-gray-800 mb-2">Night Minimum Stay</h4>
              <p className="text-gray-600">Perfect for extended stays, relocations, and business trips</p>
            </div>
            <div className="text-center">
              <div className="text-primary-600 text-3xl font-bold mb-2">All-Inclusive</div>
              <h4 className="font-semibold text-gray-800 mb-2">No Hidden Fees</h4>
              <p className="text-gray-600">Utilities, WiFi, cable, cleaning services included</p>
            </div>
            <div className="text-center">
              <div className="text-primary-600 text-3xl font-bold mb-2">Flexible</div>
              <h4 className="font-semibold text-gray-800 mb-2">Easy Extensions</h4>
              <p className="text-gray-600">Extend your stay easily based on availability</p>
            </div>
          </div>
          
          {/* Tour CTA */}
          {onTourClick && (
            <div className="mt-8 pt-8 border-t text-center">
              <button 
                onClick={() => onTourClick('image')}
                className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Schedule Tour to See Available Units
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Add default props for safety
ApartmentShowcase.defaultProps = {
  apartments: [],
  activeTab: 'all',
  onTabChange: () => console.log('Tab change not implemented'),
  onTourClick: null
};

export default ApartmentShowcase;