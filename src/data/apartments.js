export const apartments = [
  {
    id: 1,
    title: "Deluxe Studio Suite",
    type: "Studio",
    floor: "12th Floor",
    apartmentNumber: "1201",
    price: "₦189/night",
    monthlyRate: "₦4,200/month",
    location: "The Grand Residences",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "650 sq ft",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&h=200",
        description: "Living area with city view",
        category: "Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=300&h=200",
        description: "Modern kitchenette with appliances",
        category: "Kitchen"
      },
      {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=300&h=200",
        description: "Comfortable sleeping area",
        category: "Bedroom"
      },
      {
        url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=300&h=200",
        description: "Modern bathroom with shower",
        category: "Bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=300&h=200",
        description: "View from the window",
        category: "View"
      },
      {
        url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=300&h=200",
        description: "Workspace with desk",
        category: "Workspace"
      }
    ],
    videoTours: [
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&h=200",
        title: "Studio Suite Full Walkthrough", 
        duration: "2:45",
        description: "Complete 360-degree tour of the Deluxe Studio Suite showing all features and amenities."
      },
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=300&h=200",
        title: "Kitchen & Living Area Tour", 
        duration: "1:30",
        description: "Detailed look at the kitchenette and living space features."
      }
    ],
    features: ["City View", "Smart TV", "Kitchenette", "Workspace", "Soundproof", "Walk-in Closet"],
    amenities: ["High-Speed WiFi", "Coffee Machine", "Desk", "Walk-in Closet", "Smart Lock"],
    buildingAmenities: ["Gym Access", "Pool Access", "Concierge", "Parking", "Business Center"],
    rating: 4.8,
    reviews: 64,
    available: true,
    minStay: 30,
    virtualTour: true
  },
  {
    id: 2,
    title: "One-Bedroom Executive",
    type: "1 Bedroom",
    floor: "18th Floor",
    apartmentNumber: "1805",
    price: "₦275/night",
    monthlyRate: "₦6,500/month",
    location: "The Grand Residences",
    bedrooms: 1,
    bathrooms: 1.5,
    guests: 2,
    area: "950 sq ft",
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=300&h=200",
        description: "Spacious living room",
        category: "Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=300&h=200",
        description: "Dining area with modern furniture",
        category: "Dining"
      },
      {
        url: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=300&h=200",
        description: "Master bedroom with king bed",
        category: "Bedroom"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&h=200",
        description: "Luxury bathroom with double vanity",
        category: "Bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=300&h=200",
        description: "Private balcony view",
        category: "Balcony"
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&h=200",
        description: "Fully equipped kitchen",
        category: "Kitchen"
      }
    ],
    videoTours: [
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=300&h=200",
        title: "Executive Suite Complete Tour", 
        duration: "3:20",
        description: "Full video walkthrough of the One-Bedroom Executive apartment."
      },
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=300&h=200",
        title: "Kitchen & Dining Area", 
        duration: "1:45",
        description: "Detailed look at the gourmet kitchen and dining space."
      },
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=300&h=200",
        title: "Master Bedroom & Bath", 
        duration: "2:10",
        description: "Tour of the luxurious bedroom and bathroom suite."
      }
    ],
    features: ["Panoramic City View", "Full Kitchen", "Separate Living Room", "Balcony", "Walk-in Closet", "Soundproof Windows"],
    amenities: ["Smart Home System", "Nespresso Machine", "Wine Cooler", "2 Smart TVs", "Bluetooth Speakers"],
    buildingAmenities: ["Business Center", "Rooftop Lounge", "Valet Parking", "24/7 Security", "Pet Spa"],
    rating: 4.9,
    reviews: 48,
    available: true,
    minStay: 30,
    virtualTour: true
  },
  {
    id: 3,
    title: "Two-Bedroom Corner Unit",
    type: "2 Bedroom",
    floor: "24th Floor",
    apartmentNumber: "2408",
    price: "₦395/night",
    monthlyRate: "₦9,500/month",
    location: "The Grand Residences",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    area: "1,350 sq ft",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=300&h=200",
        description: "Corner living room with panoramic views",
        category: "Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=300&h=200",
        description: "Modern kitchen with island",
        category: "Kitchen"
      },
      {
        url: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?auto=format&fit=crop&w=300&h=200",
        description: "Master bedroom suite",
        category: "Bedroom"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&h=200",
        description: "Guest bedroom",
        category: "Bedroom"
      },
      {
        url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=300&h=200",
        description: "Main bathroom with tub",
        category: "Bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1560185128-17a5c5a35857?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560185128-17a5c5a35857?auto=format&fit=crop&w=300&h=200",
        description: "Second balcony with seating",
        category: "Balcony"
      }
    ],
    videoTours: [
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=300&h=200",
        title: "Two-Bedroom Full Tour", 
        duration: "4:15",
        description: "Complete walkthrough of the corner unit with two bedrooms."
      },
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=300&h=200",
        title: "Kitchen & Living Space", 
        duration: "2:30",
        description: "Tour of the open concept kitchen and living area."
      }
    ],
    features: ["Corner Unit", "Floor-to-Ceiling Windows", "Two Balconies", "Walk-in Closets", "Separate Dining", "Ensuite Bathrooms"],
    amenities: ["Full Gourmet Kitchen", "In-Unit Laundry", "Dining Area", "Sound System", "Wine Rack"],
    buildingAmenities: ["Private Dining Room", "Pet Spa", "Co-working Space", "Spa Access", "Children's Playroom"],
    rating: 5.0,
    reviews: 32,
    available: true,
    minStay: 60,
    virtualTour: true
  },
  {
    id: 4,
    title: "Luxury Penthouse Suite",
    type: "Penthouse",
    floor: "Penthouse",
    apartmentNumber: "PH-01",
    price: "₦650/night",
    monthlyRate: "₦15,000/month",
    location: "The Grand Residences",
    bedrooms: 3,
    bathrooms: 3.5,
    guests: 6,
    area: "2,400 sq ft",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=300&h=200",
        description: "Penthouse living area",
        category: "Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=300&h=200",
        description: "Private rooftop terrace",
        category: "Terrace"
      },
      {
        url: "https://images.unsplash.com/photo-1560180474-9d5d7dca1d7e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560180474-9d5d7dca1d7e?auto=format&fit=crop&w=300&h=200",
        description: "Chef's kitchen with premium appliances",
        category: "Kitchen"
      },
      {
        url: "https://images.unsplash.com/photo-1560180474-9d5d7dca1d7e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560180474-9d5d7dca1d7e?auto=format&fit=crop&w=300&h=200",
        description: "Home theater room",
        category: "Entertainment"
      },
      {
        url: "https://images.unsplash.com/photo-1560180474-9d5d7dca1d7e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560180474-9d5d7dca1d7e?auto=format&fit=crop&w=300&h=200",
        description: "Master suite with sitting area",
        category: "Bedroom"
      },
      {
        url: "https://images.unsplash.com/photo-1560180474-9d5d7dca1d7e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560180474-9d5d7dca1d7e?auto=format&fit=crop&w=300&h=200",
        description: "Wine cellar",
        category: "Specialty"
      }
    ],
    videoTours: [
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=300&h=200",
        title: "Penthouse Complete Experience", 
        duration: "5:45",
        description: "Full luxury penthouse tour including rooftop terrace."
      },
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=300&h=200",
        title: "Rooftop Terrace Tour", 
        duration: "2:20",
        description: "Exclusive look at the private penthouse terrace."
      },
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1560180474-9d5d7dca1d7e?auto=format&fit=crop&w=300&h=200",
        title: "Home Theater & Entertainment", 
        duration: "1:55",
        description: "Tour of the home theater and entertainment systems."
      }
    ],
    features: ["Private Rooftop Terrace", "Chef's Kitchen", "Home Theater", "Wine Cellar", "Smart Home Automation", "Panoramic Views"],
    amenities: ["Smart Home Automation", "Wet Bar", "Fireplace", "Jacuzzi Tub", "His & Hers Walk-in Closets"],
    buildingAmenities: ["Personal Concierge", "Private Elevator", "Butler Service", "Limousine Service", "Private Chef Available"],
    rating: 5.0,
    reviews: 24,
    available: true,
    minStay: 90,
    virtualTour: true
  },
  {
    id: 5,
    title: "Executive Studio Plus",
    type: "Studio Plus",
    floor: "8th Floor",
    apartmentNumber: "0812",
    price: "₦225/night",
    monthlyRate: "₦5,200/month",
    location: "The Grand Residences",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "750 sq ft",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=300&h=200",
        description: "Open plan living and sleeping area",
        category: "Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&h=200",
        description: "Full kitchen with modern appliances",
        category: "Kitchen"
      },
      {
        url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=300&h=200",
        description: "Dedicated workspace with ergonomic chair",
        category: "Workspace"
      },
      {
        url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=300&h=200",
        description: "Modern bathroom with rainfall shower",
        category: "Bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=300&h=200",
        description: "Partial city view window",
        category: "View"
      }
    ],
    videoTours: [
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=300&h=200",
        title: "Executive Studio Plus Tour", 
        duration: "2:15",
        description: "Complete tour of the Executive Studio Plus with workspace."
      }
    ],
    features: ["Partial City View", "Separate Sleeping Area", "Full Kitchen", "Workspace", "Soundproofing", "Smart Storage"],
    amenities: ["Standing Desk", "Dedicated WiFi", "Coffee Bar", "Smart Storage", "Bluetooth Speakers"],
    buildingAmenities: ["Package Service", "Cleaning Service", "Tech Support", "Fitness Classes", "Business Lounge"],
    rating: 4.7,
    reviews: 56,
    available: true,
    minStay: 30,
    virtualTour: true
  },
  {
    id: 6,
    title: "Junior One-Bedroom",
    type: "Junior 1BR",
    floor: "15th Floor",
    apartmentNumber: "1503",
    price: "₦245/night",
    monthlyRate: "₦5,800/month",
    location: "The Grand Residences",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "850 sq ft",
    image: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=300&h=200",
        description: "Open layout living space",
        category: "Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&h=200",
        description: "Compact full kitchen",
        category: "Kitchen"
      },
      {
        url: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=300&h=200",
        description: "Cozy bedroom with storage",
        category: "Bedroom"
      },
      {
        url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=300&h=200",
        description: "Updated bathroom",
        category: "Bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=300&h=200",
        description: "Yoga and meditation space",
        category: "Wellness"
      }
    ],
    videoTours: [
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=300&h=200",
        title: "Junior One-Bedroom Tour", 
        duration: "2:30",
        description: "Complete walkthrough of the Junior One-Bedroom apartment."
      }
    ],
    features: ["Open Layout", "Full Kitchen", "Large Windows", "Ample Storage", "Quiet Zone", "Modern Finishes"],
    amenities: ["High-Speed Internet", "Smart TV", "Espresso Machine", "Yoga Space", "Storage Solutions"],
    buildingAmenities: ["Rooftop Garden", "BBQ Area", "Game Room", "Library", "Yoga Studio"],
    rating: 4.8,
    reviews: 42,
    available: true,
    minStay: 30,
    virtualTour: true
  },
  {
    id: 7,
    title: "Premium Two-Bedroom",
    type: "2 Bedroom",
    floor: "22nd Floor",
    apartmentNumber: "2210",
    price: "₦420/night",
    monthlyRate: "₦10,200/month",
    location: "The Grand Residences",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    area: "1,400 sq ft",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=300&h=200",
        description: "Spacious living room with modern decor",
        category: "Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&h=200",
        description: "Gourmet kitchen with island seating",
        category: "Kitchen"
      },
      {
        url: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=300&h=200",
        description: "Master bedroom with en-suite",
        category: "Bedroom"
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=300&h=200",
        description: "Guest bedroom with city view",
        category: "Bedroom"
      },
      {
        url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=300&h=200",
        description: "Spacious balcony",
        category: "Balcony"
      }
    ],
    videoTours: [
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=300&h=200",
        title: "Premium Two-Bedroom Full Tour", 
        duration: "3:45",
        description: "Complete walkthrough of the Premium Two-Bedroom apartment."
      }
    ],
    features: ["City View", "Separate Dining", "Two Balconies", "Walk-in Closets", "Ensuite Master", "Soundproof"],
    amenities: ["Smart Home System", "In-Unit Laundry", "Wine Cooler", "Sound System", "Office Nook"],
    buildingAmenities: ["Pool", "Gym", "Concierge", "Valet", "Business Center"],
    rating: 4.9,
    reviews: 38,
    available: true,
    minStay: 60,
    virtualTour: true
  },
  {
    id: 8,
    title: "Signature Studio",
    type: "Studio",
    floor: "10th Floor",
    apartmentNumber: "1007",
    price: "₦205/night",
    monthlyRate: "₦4,800/month",
    location: "The Grand Residences",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    area: "700 sq ft",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=300&h=200",
        description: "Signature studio layout",
        category: "Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?auto=format&fit=crop&w=300&h=200",
        description: "Efficient kitchenette",
        category: "Kitchen"
      },
      {
        url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=300&h=200",
        description: "Built-in workspace",
        category: "Workspace"
      },
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=300&h=200",
        description: "Corner views",
        category: "View"
      }
    ],
    videoTours: [
      { 
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        thumbnail: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=300&h=200",
        title: "Signature Studio Virtual Tour", 
        duration: "2:10",
        description: "Virtual tour of the Signature Studio apartment."
      }
    ],
    features: ["Corner Views", "Smart Layout", "Efficient Kitchen", "Built-in Storage", "Soundproof"],
    amenities: ["High-Speed WiFi", "Smart TV", "Coffee Machine", "Desk", "Storage Solutions"],
    buildingAmenities: ["Gym", "Pool", "Concierge", "Business Center", "Lounge"],
    rating: 4.7,
    reviews: 51,
    available: true,
    minStay: 30,
    virtualTour: true
  }
];

// Building-wide images for full building tour
export const buildingImages = [
  {
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&h=200",
    description: "Building exterior",
    category: "Exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=300&h=200",
    description: "Main lobby",
    category: "Lobby"
  },
  {
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&h=200",
    description: "Fitness center",
    category: "Amenities"
  },
  {
    url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=300&h=200",
    description: "Rooftop pool",
    category: "Amenities"
  },
  {
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=300&h=200",
    description: "Business center",
    category: "Amenities"
  },
  {
    url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200",
    thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=300&h=200",
    description: "Conference room",
    category: "Amenities"
  }
];

// Building-wide video tours
export const buildingVideoTours = [
  { 
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    thumbnail: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&h=200",
    title: "Full Building Tour", 
    duration: "6:30",
    description: "Complete tour of The Grand Residences including all amenities and common areas."
  },
  { 
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=300&h=200",
    title: "Amenities Tour", 
    duration: "3:45",
    description: "Tour of all building amenities including gym, pool, and business center."
  },
  { 
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    thumbnail: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=300&h=200",
    title: "Rooftop & Views", 
    duration: "2:20",
    description: "Tour of rooftop amenities and building views."
  }
];