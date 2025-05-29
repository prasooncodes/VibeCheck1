import React from 'react';
import { Sparkles, Heart, Zap } from 'lucide-react';

const WelcomeScreen = ({ onStart }) => (
  <div className="max-w-2xl mx-auto text-center px-6 slide-in">
    <div className="glass rounded-3xl p-8 shadow-2xl hover-lift">
      
      <div className="relative mb-8">
        <div className="text-8xl mb-4 float-animation">✨</div>
        <div className="absolute -top-2 -right-2">
          <Sparkles className="text-white text-opacity-60 w-6 h-6 float-animation" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Heart className="text-pink-300 w-5 h-5 float-animation" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute top-0 left-0">
          <Zap className="text-yellow-300 w-4 h-4 float-animation" style={{animationDelay: '0.5s'}} />
        </div>
      </div>
      
      
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-blue-200 mb-6 rainbow-text">
        Vibe Check
      </h1>
      
      
      <div className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
        <p className="mb-4">
          ✨ Discover your current energy and get personalized vibes! ✨
        </p>
        <p className="text-lg text-white text-opacity-80">
          Answer a few fun questions to unlock your unique mood signature
        </p>
      </div>
      
      
      <div className="grid grid-cols-3 gap-4 mb-8 text-sm">
        <div className="glass-dark rounded-xl p-3 hover-lift">
          <div className="text-2xl mb-2">🎨</div>
          <div className="text-white text-opacity-80">Creative Insights</div>
        </div>
        <div className="glass-dark rounded-xl p-3 hover-lift">
          <div className="text-2xl mb-2">🌈</div>
          <div className="text-white text-opacity-80">Dynamic Colors</div>
        </div>
        <div className="glass-dark rounded-xl p-3 hover-lift">
          <div className="text-2xl mb-2">✨</div>
          <div className="text-white text-opacity-80">Personalized</div>
        </div>
      </div>
      
      
      <button
        onClick={onStart}
        className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 pulse-glow overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Start Vibe Check
          <Sparkles className="w-5 h-5" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      
      
      <div className="mt-8 text-white text-opacity-60">
        <div className="flex justify-center items-center gap-2">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          <span className="text-sm">Ready to discover your vibe?</span>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeScreen;