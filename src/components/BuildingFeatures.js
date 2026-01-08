import React from 'react';
import { Wifi, Droplets, Dumbbell, Wine, Shield, Coffee, Car, Users, Home, ChefHat, Briefcase, TreePine, CheckCircle } from 'lucide-react';

const BuildingFeatures = () => {
  const buildingFeatures = [
    {
      category: "Building Amenities",
      features: [
        { icon: <Dumbbell className="w-5 h-5" />, text: "24/7 Fitness Center" },
        { icon: <Wine className="w-5 h-5" />, text: "Rooftop Lounge" },
        { icon: <Shield className="w-5 h-5" />, text: "24/7 Security & CCTV" },
        { icon: <Car className="w-5 h-5" />, text: "Valet Parking" },
      ]
    },
    {
      category: "Included Services",
      features: [
        { icon: <Coffee className="w-5 h-5" />, text: "Daily Housekeeping" },
        { icon: <Users className="w-5 h-5" />, text: "Concierge Service" },
        { icon: <ChefHat className="w-5 h-5" />, text: "Room Service Available" },
        { icon: <Briefcase className="w-5 h-5" />, text: "Business Center" },
      ]
    },
    {
      category: "Apartment Features",
      features: [
        { icon: <Wifi className="w-5 h-5" />, text: "High-Speed Fiber Internet" },
        { icon: <Droplets className="w-5 h-5" />, text: "In-Unit Laundry" },
        { icon: <Home className="w-5 h-5" />, text: "Fully Furnished" },
        { icon: <TreePine className="w-5 h-5" />, text: "Weekly Linen Change" },
      ]
    }
  ];

  const locationFeatures = [
    {
      title: "Prime Downtown Location",
      description: "Walking distance to financial district, restaurants, and entertainment"
    },
    {
      title: "Transportation Hub",
      description: "2 blocks from subway, 10 minutes to major highways"
    },
    {
      title: "Business Friendly",
      description: "Perfect for corporate relocations and extended business stays"
    }
  ];

  return (
    <section id="building" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <div className="w-12 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Building Features & Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience hotel-like services with the comfort and space of a residential apartment
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {buildingFeatures.map((section, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-6 bg-primary-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-semibold text-gray-900">{section.category}</h3>
              </div>
              <div className="space-y-4">
                {section.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="text-primary-500 bg-primary-50 p-2 rounded-lg mr-3">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Location Features */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white mb-16 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
                <span className="text-lg font-bold">📍</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Prime Location Advantages</h3>
              <p className="text-primary-100 opacity-90">Strategically positioned for convenience and accessibility</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locationFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                  <p className="text-sm text-primary-100 opacity-90 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All-Inclusive Package */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 shadow-sm">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              All-Inclusive Monthly Rate Includes:
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for a comfortable stay, all in one simple payment
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { text: "All Utilities" },
              { text: "High-Speed WiFi" },
              { text: "Cable TV" },
              { text: "Weekly Cleaning" },
              { text: "Maintenance" },
              { text: "Gym Access" },
              { text: "Concierge" },
              { text: "Security" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-lg border border-gray-100 hover:border-primary-100 hover:bg-primary-50/30 transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mb-3 group-hover:bg-primary-200 transition-colors">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm text-center">{item.text}</span>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="mt-10 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold text-primary-600">No hidden fees.</span> One transparent monthly rate covers all essential services and amenities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingFeatures;