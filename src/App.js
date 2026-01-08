import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ApartmentShowcase from './components/ApartmentShowcase';
import BuildingFeatures from './components/BuildingFeatures';
import TourGallery from './components/TourGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageTourModal from './components/ImageTourModal'; // Add this import
import VideoTourModal from './components/VideoTourModal'; // Add this import
import { apartments } from './data/apartments';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeTour, setActiveTour] = useState(null); // 'image' or 'video'
  const [selectedApartment, setSelectedApartment] = useState(null);

  const config = {
    buildingName: "LeBoa's Apartments",
    address: "ADMIRALTY ROAD LEKKI PHASE 1 ",
    city: "LAGOS",
    contactEmail: "Leboasapartment@gmail.com",
    contactPhone: "09060151358",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#"
    }
  };

  const handleTourClick = (tourType, apartment = null) => {
    console.log('Tour clicked:', tourType, apartment?.title || 'General tour');
    setSelectedApartment(apartment);
    setActiveTour(tourType);
  };

  const closeTour = () => {
    setActiveTour(null);
    setSelectedApartment(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        buildingName={config.buildingName}
        contactPhone={config.contactPhone}
        onTourClick={(tourType) => handleTourClick(tourType || 'image')}
      />
      
      <Hero 
        buildingName={config.buildingName}
        address={config.address}
        city={config.city}
        onTourClick={(tourType) => handleTourClick(tourType || 'image')}
      />
      
      <ApartmentShowcase 
        apartments={apartments}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onTourClick={handleTourClick}
      />
      
      <BuildingFeatures />
      
      <TourGallery 
        apartments={apartments}
        onTourClick={handleTourClick}
      />
      
      <Testimonials />
      <Contact 
        email={config.contactEmail}
        phone={config.contactPhone}
      />
      
      <Footer 
        buildingName={config.buildingName}
        address={config.address}
        socialLinks={config.socialLinks}
        contactInfo={config}
      />

      {/* Image Tour Modal */}
      {activeTour === 'image' && (
        <ImageTourModal
          apartment={selectedApartment}
          apartments={apartments}
          onClose={closeTour}
          buildingName={config.buildingName}
        />
      )}

      {/* Video Tour Modal */}
      {activeTour === 'video' && (
        <VideoTourModal
          apartment={selectedApartment}
          apartments={apartments}
          onClose={closeTour}
          buildingName={config.buildingName}
        />
      )}
    </div>
  );
}

export default App;