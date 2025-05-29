import React from 'react';
import CustomStyles from './CustomStyles';

const BackgroundWrapper = ({ children, currentVibe = 'default' }) => {
  const vibeBackgrounds = {
    chill: 'from-blue-400 via-purple-500 to-pink-400',
    energetic: 'from-yellow-400 via-orange-500 to-red-500',
    mysterious: 'from-purple-900 via-indigo-800 to-black',
    zen: 'from-green-300 via-teal-400 to-blue-400',
    creative: 'from-pink-400 via-purple-500 to-indigo-600',
    cozy: 'from-orange-300 via-amber-400 to-yellow-400',
    futuristic: 'from-cyan-400 via-blue-600 to-indigo-900',
    dreamy: 'from-pink-200 via-violet-300 to-blue-200',
    sunset: 'from-red-400 via-orange-300 to-yellow-200',
    ocean: 'from-blue-500 via-cyan-400 to-teal-300',
    default: 'from-indigo-600 via-purple-600 to-pink-600'
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${vibeBackgrounds[currentVibe] || vibeBackgrounds.default} transition-all duration-1000 relative overflow-hidden`}>
      
      <div className="hidden
        from-blue-400 via-purple-500 to-pink-400
        from-yellow-400 via-orange-500 to-red-500
        from-purple-900 via-indigo-800 to-black
        from-green-300 via-teal-400 to-blue-400
        from-pink-400 via-purple-500 to-indigo-600
        from-orange-300 via-amber-400 to-yellow-400
        from-cyan-400 via-blue-600 to-indigo-900
        from-pink-200 via-violet-300 to-blue-200
        from-red-400 via-orange-300 to-yellow-200
        from-blue-500 via-cyan-400 to-teal-300
        from-indigo-600 via-purple-600 to-pink-600
      "></div>
      
      <div className="absolute inset-0">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>
      
      
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      
      <div className="absolute inset-0 backdrop-blur-sm bg-white bg-opacity-5"></div>
      
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {children}
      </div>
      
      <CustomStyles />
    </div>
  );
};

export default BackgroundWrapper;