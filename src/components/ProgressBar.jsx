import React from 'react';

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full relative">
      {/* Background track */}
      <div className="w-full bg-white bg-opacity-20 rounded-full h-4 overflow-hidden backdrop-blur-sm">
        {/* Progress fill */}
        <div 
          className="h-4 rounded-full transition-all duration-700 ease-out relative overflow-hidden bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400"
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
      </div>
      
      {/* Progress text */}
      <div className="absolute -top-1 left-0 right-0 flex justify-center">
        <span className="text-xs text-white text-opacity-80 bg-black bg-opacity-20 px-2 py-1 rounded-full backdrop-blur-sm">
          {Math.round(percentage)}%
        </span>
      </div>
      
      {/* Progress dots */}
      <div className="flex justify-between mt-2">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i < current
                ? 'bg-gradient-to-r from-pink-400 to-purple-400 scale-110 pulse-glow'
                : i === current - 1
                ? 'bg-white animate-pulse'
                : 'bg-white bg-opacity-30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;