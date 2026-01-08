import React from 'react';
import { Bed, Bath, Users, Star, Building2, Image, Play, Calendar, Square } from 'lucide-react';

const ApartmentCard = ({ apartment, onTourClick }) => {
  // Safe handler functions with fallbacks
  const handleImageTour = (e) => {
    e.stopPropagation();
    if (typeof onTourClick === 'function') {
      onTourClick('image', apartment);
    } else {
      console.warn('onTourClick is not available');
      // Fallback: log to console for debugging
      console.log('Image tour requested for:', apartment.title);
    }
  };

  const handleVideoTour = (e) => {
    e.stopPropagation();
    if (typeof onTourClick === 'function') {
      onTourClick('video', apartment);
    } else {
      console.warn('onTourClick is not available');
      // Fallback: log to console for debugging
      console.log('Video tour requested for:', apartment.title);
    }
  };

  const handleDetails = (e) => {
    e.stopPropagation();
    // In a real app, this would navigate to apartment details page
    console.log('View details for:', apartment.id);
    // You can also trigger a modal or navigation here
  };

  // Default values for safety
  const imageCount = apartment.images?.length || 5;
  const videoCount = apartment.videoTours?.length || 1;

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={apartment.image}
          alt={apartment.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800";
          }}
        />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="px-3 py-1.5 bg-primary-600 text-white rounded-full text-sm font-medium shadow-lg">
            {apartment.type || 'Apartment'}
          </span>
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-sm font-medium shadow-lg">
            {apartment.floor || 'Floor'}
          </span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span className="font-bold">{apartment.rating || 4.5}</span>
            <span className="text-xs text-gray-300 ml-1">({apartment.reviews || 0})</span>
          </div>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
          <div className="flex justify-between items-end">
            <div>
              <div className="text-2xl font-bold text-white">{apartment.price || '$0/night'}</div>
              <div className="text-sm text-gray-300">{apartment.monthlyRate || 'Contact for rates'}</div>
            </div>
            <div className="text-white text-sm font-medium">
              #{apartment.apartmentNumber || '000'}
            </div>
          </div>
        </div>

        {/* Hover Overlay with Tour Buttons */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button 
            onClick={handleImageTour}
            className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors transform hover:scale-105 active:scale-95 flex items-center shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <Image className="w-5 h-5 mr-2" />
            Image Tour
          </button>
          <button 
            onClick={handleVideoTour}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95 flex items-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Play className="w-5 h-5 mr-2" />
            Video Tour
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{apartment.title || 'Apartment'}</h3>
          <div className="flex items-center text-gray-600">
            <Building2 className="w-4 h-4 mr-1.5 flex-shrink-0" />
            <span className="text-sm truncate">{apartment.location || 'The Grand Residences'}</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex items-center space-x-2">
            <div className="bg-primary-50 p-2 rounded-lg">
              <Bed className="w-4 h-4 text-primary-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Bedrooms</div>
              <div className="font-semibold text-gray-800">{apartment.bedrooms || 1}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="bg-primary-50 p-2 rounded-lg">
              <Bath className="w-4 h-4 text-primary-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Bathrooms</div>
              <div className="font-semibold text-gray-800">{apartment.bathrooms || 1}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="bg-primary-50 p-2 rounded-lg">
              <Users className="w-4 h-4 text-primary-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Guests</div>
              <div className="font-semibold text-gray-800">{apartment.guests || 2}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="bg-primary-50 p-2 rounded-lg">
              <Square className="w-4 h-4 text-primary-600" />
            </div>
            <div>
              <div className="text-sm text-gray-600">Area</div>
              <div className="font-semibold text-gray-800">{apartment.area || '0 sq ft'}</div>
            </div>
          </div>
        </div>

        {/* Quick Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {(apartment.features || []).slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
              >
                {feature}
              </span>
            ))}
            {(apartment.features || []).length > 3 && (
              <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                +{(apartment.features || []).length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Minimum Stay */}
        <div className="mb-6 bg-gray-50 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gray-500 mr-3" />
              <div>
                <div className="text-sm text-gray-600">Minimum Stay</div>
                <div className="font-semibold text-gray-800">{apartment.minStay || 30}+ nights</div>
              </div>
            </div>
            <span className="text-sm text-gray-500">Flexible extensions</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={handleImageTour}
            className="flex-1 bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 group/tour"
          >
            <Image className="w-5 h-5 mr-2 group-hover/tour:scale-110 transition-transform" />
            Image Gallery
          </button>
          
          <button 
            onClick={handleVideoTour}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 group/tour"
          >
            <Play className="w-5 h-5 mr-2 group-hover/tour:scale-110 transition-transform" />
            Video Tour
          </button>
          
          <button 
            onClick={handleDetails}
            className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-gray-500"
            title="More details"
          >
            ...
          </button>
        </div>

        {/* Quick Stats */}
        <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-primary-600">
              {imageCount}
            </div>
            <div className="text-xs text-gray-600">High-Res Images</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-600">
              {videoCount}
            </div>
            <div className="text-xs text-gray-600">Video Tours</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add default props for safety
ApartmentCard.defaultProps = {
  apartment: {},
  onTourClick: () => {
    console.warn('onTourClick not provided to ApartmentCard');
  }
};

export default ApartmentCard;