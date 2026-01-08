import React from 'react';
import { Bed, Bath, Users, Star, MapPin, Heart } from 'lucide-react';

const PropertyCard = ({ property }) => {
  const handleBookNow = () => {
    console.log('Booking property:', property.id);
    // Implement booking functionality
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-600 text-white">
            {property.type}
          </span>
        </div>
        <button 
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          onClick={() => console.log('Added to favorites')}
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <div className="absolute bottom-4 right-4">
          <span className="px-3 py-1 rounded-lg text-sm font-medium bg-white/90 backdrop-blur-sm text-gray-800">
            {property.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span className="font-semibold">{property.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({property.reviews} reviews)</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.title}</h3>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center justify-between mb-5 text-gray-600 border-b pb-4">
          <div className="flex items-center">
            <Bed className="w-5 h-5 mr-2" />
            <span className="text-sm">{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 mr-2" />
            <span className="text-sm">{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            <span className="text-sm">{property.guests} guests</span>
          </div>
        </div>

        {/* Features Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs">
              +{property.features.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={handleBookNow}
            className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Book Now
          </button>
          <button 
            onClick={() => console.log('View details')}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;