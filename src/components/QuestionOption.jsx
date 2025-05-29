import React from 'react';
import { Check } from 'lucide-react';

const QuestionOption = ({ option, onClick, isSelected, index }) => (
  <button
    onClick={onClick}
    className={`group relative w-full p-6 mb-4 rounded-2xl text-left transition-all duration-500 transform hover:scale-102 hover-lift slide-in ${
      isSelected 
        ? 'bg-gradient-to-r from-white via-pink-50 to-blue-50 text-purple-700 scale-105 pulse-glow' 
        : 'glass text-white hover:bg-white hover:bg-opacity-20'
    }`}
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {}
    <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 transition-all duration-300 ${
      isSelected 
        ? 'bg-purple-600 border-purple-600' 
        : 'border-white border-opacity-30 group-hover:border-opacity-60'
    }`}>
      {isSelected && (
        <Check className="w-4 h-4 text-white absolute top-0.5 left-0.5 bounce-in" />
      )}
    </div>
    
    {}
    <div className="pr-10">
      <span className={`text-lg font-semibold transition-all duration-300 ${
        isSelected ? 'text-purple-700' : 'text-white group-hover:text-pink-100'
      }`}>
        {option.text}
      </span>
    </div>
    {}
    <style jsx>{`
      .centered-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}</style>
    {}
    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
      isSelected ? 'opacity-20' : ''
    }`}></div>
    
    
    {isSelected && (
      <div className="absolute inset-0 rounded-2xl shimmer"></div>
    )}

    
    <div
      className={`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none ${
        isSelected
          ? 'bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 opacity-70'
          : 'bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 opacity-30'
      }`}
      style={{ zIndex: -1 }}
    ></div>

    
    <div className={`absolute inset-0 rounded-2xl border transition-all duration-300 ${
      isSelected 
        ? 'border-purple-400 border-opacity-50' 
        : 'border-white border-opacity-20 group-hover:border-opacity-40'
    }`}></div>
  </button>
);

export default QuestionOption;