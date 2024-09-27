import React from 'react';
import video from '../assets/videos/Porche video lang.MP4';

function HeroBannerVideo() {
  return (
    <div className="main-bg bg-no-repeat bg-cover bg-center min-h-screen">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Section */}
        <div className="text-purple-500 md:w-1/2 w-full flex flex-col justify-center p-8 py-72">
          {/* Content */}
          <div className="flex flex-col justify-center items-start h-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Button */}
            <button className="bg-purple-600 text-black font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
              Lorem
            </button>
          </div>
        </div>

        {/* Right Section with Video */}
        <div className="relative md:w-1/3 w-full flex justify-center items-center p-8">
          {/* Video in a Box */}
          <div className="relative w-96 h-64">
            <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBannerVideo;
