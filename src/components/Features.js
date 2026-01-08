import React from 'react';
import { Shield, Sparkles, Key, CreditCard, Clock, Users, Home, Wifi } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Verified Properties",
      description: "Every stay is personally verified for quality and safety"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Hand-picked properties with high-quality amenities"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Self Check-In",
      description: "Easy digital check-in with keyless entry"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Safe and secure payment processing"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Booking",
      description: "Free cancellation on most properties"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Entire Places",
      description: "Private spaces, not shared rooms"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Fast WiFi",
      description: "High-speed internet in every property"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose StayFlex
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of hotel-like amenities and home-like comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-primary-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Hosting CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Become a Host</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Earn extra income by sharing your space with travelers from around the world
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            List Your Property
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;