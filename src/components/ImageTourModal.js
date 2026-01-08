import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, MapPin, Building2, Maximize2, Download } from 'lucide-react';

const ImageTourModal = ({ apartment, apartments, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedApartmentType, setSelectedApartmentType] = useState(
    apartment ? apartment.type : apartments[0].type
  );

  // Get all apartments of the selected type or specific apartment
  const tourApartments = apartment 
    ? [apartment]
    : apartments.filter(apt => apt.type === selectedApartmentType);

  // Get all images from selected apartments
  const allImages = tourApartments.flatMap(apt => apt.images || []);
  const currentImage = allImages[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') onClose();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const apartmentTypes = [...new Set(apartments.map(apt => apt.type))];

  return (
    <div 
      className={`fixed inset-0 z-50 ${isFullscreen ? 'bg-black' : 'bg-black/90'}`}
      onClick={() => !isFullscreen && onClose()}
    >
      {/* Controls */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={onClose}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          {!apartment && (
            <div className="hidden md:flex space-x-2">
              {apartmentTypes.map(type => (
                <button
                  key={type}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedApartmentType(type);
                    setCurrentImageIndex(0);
                  }}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedApartmentType === type
                      ? 'bg-primary-600 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(!isFullscreen);
            }}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // In a real app, this would trigger a download
              window.open(currentImage.url || currentImage, '_blank');
            }}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image Display */}
      <div className="h-full flex items-center justify-center p-4">
        <div className="relative max-w-7xl max-h-[90vh]">
          <img
            src={currentImage.url || currentImage}
            alt={`Tour image ${currentImageIndex + 1}`}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Image Info */}
          <div 
            className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {tourApartments[0].title} - Image {currentImageIndex + 1} of {allImages.length}
                </h3>
                <div className="flex items-center text-sm text-gray-300">
                  <Building2 className="w-4 h-4 mr-1" />
                  <span>{tourApartments[0].floor} • #{tourApartments[0].apartmentNumber}</span>
                </div>
              </div>
              <div className="text-sm text-gray-300">
                {currentImage.description || 'High-resolution apartment view'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Thumbnail Strip */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 overflow-x-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex space-x-2 justify-center">
          {allImages.slice(0, 10).map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentImageIndex === index ? 'border-primary-500' : 'border-transparent'
              }`}
            >
              <img
                src={img.thumbnail || img.url || img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
          {allImages.length > 10 && (
            <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gray-800 flex items-center justify-center text-white">
              +{allImages.length - 10} more
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageTourModal;