import React from 'react';

const WelcomeScreen = ({ onStart }) => (
  <div className="max-w-2xl mx-auto text-center px-6">
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
      <div className="text-6xl mb-6 float-animation">✨</div>
      <h1 className="text-5xl font-bold text-white mb-6">Vibe Check</h1>
      <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
        Discover your current energy and get personalized vibes! Answer a few fun questions to unlock your mood.
      </p>
      <button
        onClick={onStart}
        className="bg-white text-purple-700 px-8 py-4 rounded-full text-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 pulse-glow"
      >
        Start Vibe Check
      </button>
    </div>
  </div>
);

export default WelcomeScreen;
