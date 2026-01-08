import React, { useState } from 'react';
import { Play, Image, ChevronRight, Building2, Video, ZoomIn } from 'lucide-react';

const TourGallery = ({ apartments, onTourClick }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tourCategories = [
    { id: 'all', label: 'All Tours', count: apartments.length * 2 },
    { id: 'image', label: 'Image Tours', count: apartments.length },
    { id: 'video', label: 'Video Tours', count: apartments.length },
  ];

  const apartmentTypes = [...new Set(apartments.map(apt => apt.type))];

  // Mock image gallery data
  const galleryStats = [
    { number: '200+', label: 'High-Res Images', icon: <Image className="w-6 h-6" /> },
    { number: '15+', label: 'Video Tours', icon: <Video className="w-6 h-6" /> },
    { number: '4K', label: 'Video Quality', icon: <Play className="w-6 h-6" /> },
    { number: '360°', label: 'Interactive Views', icon: <ZoomIn className="w-6 h-6" /> },
  ];

  return (
    <section id="tours" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Virtual Tours & Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our apartments through high-quality image galleries and video tours
          </p>
        </div>

        {/* Tour Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {galleryStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-primary-600 mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tour Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tourCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {apartments.map((apartment) => (
            <div key={apartment.id} className="space-y-6">
              {/* Image Tour Card */}
              {(selectedCategory === 'all' || selectedCategory === 'image') && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={apartment.image}
                      alt={apartment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">
                        Image Gallery
                      </span>
                    </div>
                    <button
                      onClick={() => onTourClick('image', apartment)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                        <ZoomIn className="w-8 h-8 text-gray-800" />
                      </div>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{apartment.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-600">
                        <Building2 className="w-4 h-4 mr-1" />
                        <span>{apartment.floor}</span>
                      </div>
                      <button
                        onClick={() => onTourClick('image', apartment)}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
                      >
                        View Gallery
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Video Tour Card */}
              {(selectedCategory === 'all' || selectedCategory === 'video') && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                        <Play className="w-8 h-8 text-gray-800" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                        Video Tour
                      </span>
                    </div>
                    <button
                      onClick={() => onTourClick('video', apartment)}
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40"
                    ></button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{apartment.title} Video Tour</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        <span className="flex items-center">
                          <Play className="w-4 h-4 mr-1" />
                          2:45 min
                        </span>
                      </div>
                      <button
                        onClick={() => onTourClick('video', apartment)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
                      >
                        Play Video
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Apartment Type Filters */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Browse by Apartment Type
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {apartmentTypes.map((type) => (
              <button
                key={type}
                onClick={() => onTourClick('image', apartments.find(apt => apt.type === type))}
                className="px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors flex items-center"
              >
                <Building2 className="w-5 h-5 text-primary-600 mr-3" />
                <span className="font-medium text-gray-800">{type} Tours</span>
                <ChevronRight className="w-5 h-5 text-gray-400 ml-3" />
              </button>
            ))}
          </div>
        </div>

        {/* Building Tour */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Full Building Virtual Tour</h3>
              <p className="mb-6 text-gray-800">
                Take a complete virtual tour of The Grand Residences, including all common areas, 
                amenities, and building facilities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Play className="w-5 h-5  mr-3 text-gray-800" />
                  <span  className=" text-gray-800">360° views of all common areas</span>
                </div>
                <div className="flex items-center">
                  <Play className="w-5 h-5  mr-3 text-gray-800" />
                  <span  className=" text-gray-800">HD video tours of amenities</span>
                </div>
                <div className="flex items-center">
                  <Play className="w-5 h-5 mr-3 text-gray-800" />
                  <span className=" text-gray-800">Interactive floor plans</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => onTourClick('video')}
                className="bg-gray-800 text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                Start Building Tour
              </button>
              <p className="text-primary-200 mt-4 text-sm">
                Available 24/7 • No registration required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGallery;