import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Users, Building2 } from 'lucide-react';

const Contact = ({ email, phone }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    moveInDate: '',
    duration: '3 months',
    guests: 1,
    apartmentType: '',
    message: ''
  });

  const apartmentTypes = [
    'Deluxe Studio Suite',
    'One-Bedroom Executive',
    'Two-Bedroom Corner Unit',
    'Luxury Penthouse Suite',
    'Executive Studio Plus',
    'Junior One-Bedroom'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Apartment inquiry:', formData);
    // Implement inquiry submission
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Request Apartment Details
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contact our leasing team for personalized assistance and availability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inquiry Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Move-in Date
                  </label>
                  <input
                    type="date"
                    name="moveInDate"
                    value={formData.moveInDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Duration</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option>1 month</option>
                    <option>2 months</option>
                    <option>3 months</option>
                    <option>6 months</option>
                    <option>12 months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Occupants
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 flex items-center">
                  <Building2 className="w-4 h-4 mr-2" />
                  Interested In
                </label>
                <select
                  name="apartmentType"
                  value={formData.apartmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select apartment type...</option>
                  {apartmentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Special Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any specific requirements or questions?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Leasing Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">{phone}</p>
                    <p className="text-sm text-gray-500">Mon-Fri: 9am-6pm, Sat: 10am-4pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">{email}</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Hours</h4>
                    <p className="text-gray-600">
                      ADMIRALTY ROAD LEKKI PHASE 1
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Options */}
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-semibold text-gray-800 mb-4">Booking Process</h4>
                <ol className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                    <span className="text-gray-600">Submit inquiry or book a tour</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                    <span className="text-gray-600">View available units</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                    <span className="text-gray-600">Submit application & documents</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-primary-100 text-primary-600 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                    <span className="text-gray-600">Sign lease & move in</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-primary-600 text-white p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold mb-3">Schedule a Personal Tour</h4>
              <p className="mb-6">See the apartments and building amenities in person</p>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Book Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;