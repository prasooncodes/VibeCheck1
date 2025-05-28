import React from 'react';

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full relative">
      <div className="w-full bg-white bg-opacity-10 rounded-full h-4 overflow-hidden backdrop-blur-sm shadow-inner">
        <div 
          className="h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 shimmer"></div>
          <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
        </div>
      </div>
      
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <span className="text-sm font-medium text-white bg-black bg-opacity-30 px-3 py-1 rounded-full backdrop-blur-sm">
          {Math.round(percentage)}%
        </span>
      </div>
      
      <div className="flex justify-between mt-4">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i < current
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-110 pulse-glow'
                : i === current - 1
                ? 'bg-white animate-pulse'
                : 'bg-white bg-opacity-20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;