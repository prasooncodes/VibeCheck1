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
    default: 'from-indigo-600 via-purple-600 to-pink-600'
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${vibeBackgrounds[currentVibe] || vibeBackgrounds.default} transition-all duration-1000`}>
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="relative z-10">{children}</div>
      <CustomStyles />
    </div>
  );
};

export default BackgroundWrapper;