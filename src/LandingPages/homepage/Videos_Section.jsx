// VideosSection.jsx
import React from "react";
import YouTube from "react-youtube";

const videoOptions = {
  height: '315',  // Standard YouTube height
  width: '100%',   // Standard YouTube width
  playerVars: {
    autoplay: 0,
  },
};

const VideosSection = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 mb-10" style={{ 
        backgroundImage: `url('https://thequranfoundation.org/wp-content/uploads/2020/06/paral-23.jpg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <h1 className="text-2xl font-bold text-center mb-8 text-sky-900">
        - Witness the impact of our initiative
      </h1>

      <div className="space-y-8 w-full max-w-3xl">
        <YouTube videoId="bYxIJet8Esw" opts={videoOptions} className="w-full rounded-lg shadow-lg" />
        <YouTube videoId="TTO6-sG0Q7Q" opts={videoOptions} className="w-full rounded-lg shadow-lg" />
        <YouTube videoId="QfsD7YgpVDU" opts={videoOptions} className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default VideosSection;
