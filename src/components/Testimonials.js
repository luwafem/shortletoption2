import React from 'react';
import { Star, Quote, Building2, Calendar, Users, Home, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Wilson",
      role: "Corporate Relocation",
      duration: "3 months",
      content: "Perfect solution for our executive relocation. The apartment was fully equipped and the building services were exceptional.",
      rating: 5,
      apartment: "One-Bedroom Executive",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200"
    },
    {
      name: "Sarah Chen",
      role: "Renovation Stay",
      duration: "4 months",
      content: "Stayed here while our home was being renovated. The service was impeccable and the location couldn't be better.",
      rating: 5,
      apartment: "Deluxe Studio Suite",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200"
    },
    {
      name: "Michael Rodriguez",
      role: "Business Project",
      duration: "6 months",
      content: "The perfect home away from home during my extended project. All-inclusive pricing made budgeting simple.",
      rating: 4.9,
      apartment: "Two-Bedroom Corner Unit",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200"
    }
  ];

  const stats = [
    { value: "95%", label: "Renewal Rate", icon: <Users className="w-6 h-6" /> },
    { value: "4.9★", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
    { value: "30+", label: "Day Average Stay", icon: <Calendar className="w-6 h-6" /> },
    { value: "100%", label: "Occupancy Rate", icon: <Home className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-0.5 bg-primary-500"></div>
            <div className="w-8 h-0.5 bg-primary-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-700  bg-clip-text text-gray-900">
              Resident Stories
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the difference through the voices of our valued residents
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700"></div>
              
              <div className="p-6">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-primary-50 rounded-xl">
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-5">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <Star className="w-5 h-5 text-yellow-400 fill-current opacity-50" />
                  )}
                  <span className="ml-2 text-sm font-medium text-gray-600">{testimonial.rating.toFixed(1)}</span>
                </div>

                {/* Content */}
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1.5" />
                        {testimonial.duration}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-primary-600 text-sm font-medium">
                      <Building2 className="w-4 h-4 mr-2" />
                      {testimonial.apartment}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Background */}
              
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 via-transparent to-primary-500/10 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-50 to-primary-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-600">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold text-primary-600">Trusted by professionals</span> from leading companies
                  </p>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-xs text-gray-500">Happy Residents</div>
                  </div>
                  <div className="h-8 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-xs text-gray-500">Corporate Partners</div>
                  </div>
                  <div className="h-8 w-px bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">4.8★</div>
                    <div className="text-xs text-gray-500">Service Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-primary-50 to-primary-100 rounded-full px-6 py-3">
            <Star className="w-5 h-5 text-primary-600 mr-3" />
            <span className="text-primary-700 font-medium">
              Rated Excellent by residents for service and quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;