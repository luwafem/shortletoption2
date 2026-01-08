import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Building2, Clock, Share2 } from 'lucide-react';

const VideoTourModal = ({ apartment, apartments, onClose }) => {
  const [selectedApartmentType, setSelectedApartmentType] = useState(
    apartment ? apartment.type : apartments[0].type
  );
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef(null);

  const apartmentTypes = [...new Set(apartments.map(apt => apt.type))];
  
  const tourApartments = apartment 
    ? [apartment]
    : apartments.filter(apt => apt.type === selectedApartmentType);

  // Get all video tours from selected apartments
  const videoTours = tourApartments.flatMap(apt => 
    apt.videoTours || [{ url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: `${apt.title} Tour`, duration: '2:45' }]
  );

  const currentVideo = videoTours[selectedVideo];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {!apartment && (
              <div className="hidden md:flex space-x-2">
                {apartmentTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedApartmentType(type);
                      setSelectedVideo(0);
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

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row p-4 gap-6">
          {/* Video Player */}
          <div className="flex-1">
            <div className="relative bg-black rounded-xl overflow-hidden">
              {/* Video Element */}
              <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  ref={videoRef}
                  src={currentVideo.url}
                  title={currentVideo.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info */}
              <div className="p-4 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{currentVideo.title}</h3>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Building2 className="w-4 h-4 mr-2" />
                      <span>{tourApartments[0].location}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{currentVideo.duration || '2:45'}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleFullscreen}
                    className="p-2 hover:bg-white/20 rounded-lg text-white transition-colors"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Video Controls */}
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5 mr-2" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Play
                    </>
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 accent-primary-600"
                />
              </div>

              <div className="text-white">
                Video {selectedVideo + 1} of {videoTours.length}
              </div>
            </div>
          </div>

          {/* Video List */}
          <div className="lg:w-80">
            <div className="bg-gray-900 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-4">Available Video Tours</h4>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {videoTours.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVideo(index)}
                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                      selectedVideo === index
                        ? 'bg-primary-600'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 bg-gray-700 rounded-lg overflow-hidden">
                          {video.thumbnail && (
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium line-clamp-2">{video.title}</div>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {video.duration || '2:45'}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Video Details */}
            <div className="mt-4 bg-gray-900 rounded-xl p-4">
              <h4 className="text-white font-semibold mb-3">About This Tour</h4>
              <p className="text-gray-300 text-sm">
                {currentVideo.description || 'Walkthrough of the apartment showing all rooms, features, and building amenities.'}
              </p>
              
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="text-center">
                  <div className="text-primary-400 text-lg font-bold">360°</div>
                  <div className="text-gray-400 text-xs">View</div>
                </div>
                <div className="text-center">
                  <div className="text-primary-400 text-lg font-bold">HD</div>
                  <div className="text-gray-400 text-xs">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTourModal;