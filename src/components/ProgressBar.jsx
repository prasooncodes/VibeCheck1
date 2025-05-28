import React from 'react';

const ProgressBar = ({ current, total }) => (
  <div className="w-full bg-white bg-opacity-20 rounded-full h-3 mb-8">
    <div 
      className="bg-white h-3 rounded-full transition-all duration-500 shimmer"
      style={{ width: `${(current / total) * 100}%` }}
    ></div>
  </div>
);

export default ProgressBar;