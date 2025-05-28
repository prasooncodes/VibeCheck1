import React from 'react';

const QuestionOption = ({ option, onClick, isSelected, index }) => (
  <button
    onClick={onClick}
    className={`w-full p-4 mb-3 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
      isSelected 
        ? 'bg-white text-purple-700 shadow-lg pulse-glow' 
        : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
    }`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <span className="font-medium">{option.text}</span>
  </button>
);

export default QuestionOption;