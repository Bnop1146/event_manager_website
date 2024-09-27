import React, { useState } from 'react';
import video from '../assets/videos/Porche video lang.MP4';

function HeroBannerVideo() {
  const [isHovered, setIsHovered] = useState(false); // State for video hover

  return (
    <div className="main-bg bg-no-repeat bg-cover bg-center min-h-screen relative">
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen relative z-10">
        {/* Left Section */}
        <div className="text-purple-500 md:w-1/2 w-full flex flex-col justify-center p-8 py-24 md:py-48">
          {/* Content */}
          <div className="flex flex-col justify-center items-start h-full">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white text-animate leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white text-animate leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Floating Button */}
            <button className="bg-purple-600 text-black font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300 floating-button">
              Lorem
            </button>
          </div>
        </div>

        {/* Right Section with Video */}
        <div className="relative md:w-1/2 w-full flex justify-center items-center p-4 md:p-8">
          {/* Video in a Box */}
          <div
            className="relative w-full h-48 md:w-96 md:h-64"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <video
              autoPlay={isHovered} // Video plays when hovered
              muted
              loop
              className="w-full h-full object-cover rounded-lg"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark Overlay on Video */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBannerVideo;
