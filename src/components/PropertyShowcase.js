import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyShowcase = ({ properties, activeTab, onTabChange }) => {
  const categories = [
    { id: 'all', label: 'All Stays' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'villa', label: 'Villas' },
    { id: 'house', label: 'Houses' },
    { id: 'cabin', label: 'Cabins' },
    { id: 'loft', label: 'Lofts' }
  ];

  const filteredProperties = activeTab === 'all' 
    ? properties 
    : properties.filter(property => property.type.toLowerCase() === activeTab);

  return (
    <section id="properties" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Short-Term Rentals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover unique spaces for your next vacation, business trip, or weekend getaway
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-colors ${
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

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;