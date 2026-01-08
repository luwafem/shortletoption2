import React from 'react';
import { MapPin, Building2, Star, CheckCircle, Image, Play, ChevronRight } from 'lucide-react';

const Hero = ({ buildingName, address, city, onTourClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          {/* Building Icon and Name */}
          <div className="flex items-center mb-6">
            <div className="bg-primary-600/20 backdrop-blur-sm rounded-2xl p-4 mr-4">
              
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
                
              </h1>
              <p className="text-xl text-primary-100"></p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mr-4">
              <MapPin className="w-6 h-6 text-primary-300" />
            </div>
            <div>
              <div className="text-lg font-medium">{address}</div>
              <div className="text-primary-200">{city}</div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-sm md:text-base">Fully Furnished & Equipped</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-sm md:text-base">All Utilities Included</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-sm md:text-base">Flexible Stays (30+ nights)</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">4.9<span className="text-primary-300">★</span></div>
              <div className="text-sm text-gray-300">Guest Rating</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">6</div>
              <div className="text-sm text-gray-300">Apartment Types</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-gray-300">Concierge</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-sm text-gray-300">Happy Residents</div>
            </div>
          </div>

          {/* Tour CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
              onClick={() => onTourClick('image')}
              className="bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-primary-600/30 flex items-center justify-center text-lg font-semibold group"
            >
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-lg mr-3 group-hover:bg-white/30 transition-colors">
                  <Image className="w-5 h-5" />
                </div>
                <span>Explore Image Tours</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button 
              onClick={() => onTourClick('video')}
              className="bg-blue-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-blue-600/30 border border-blue-400/30 flex items-center justify-center text-lg font-semibold group"
            >
              <div className="flex items-center">
                <div className="bg-white/20 p-2 rounded-lg mr-3 group-hover:bg-white/30 transition-colors">
                  <Play className="w-5 h-5" />
                </div>
                <span>Watch Video Tours</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Tour Quick Info */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 text-primary-200">Virtual Tour Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="bg-primary-600/20 p-2 rounded-lg mr-3">
                  <div className="text-primary-300 text-sm font-medium">200+</div>
                </div>
                <div>
                  <div className="text-sm font-medium">High-Res Images</div>
                  <div className="text-xs text-gray-400">Detailed apartment views</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-600/20 p-2 rounded-lg mr-3">
                  <div className="text-blue-300 text-sm font-medium">4K</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Video Quality</div>
                  <div className="text-xs text-gray-400">HD virtual tours</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-600/20 p-2 rounded-lg mr-3">
                  <div className="text-green-300 text-sm font-medium">360°</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Interactive Views</div>
                  <div className="text-xs text-gray-400">Panoramic experiences</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex flex-col items-center animate-bounce">
              <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Features */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-600/20 p-2 rounded-lg">
              <Star className="w-5 h-5 text-primary-300" />
            </div>
            <div>
              <div className="text-white font-medium">5-Star Rated</div>
              <div className="text-sm text-gray-300">Building Amenities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;