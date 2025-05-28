import React from 'react';
import ShareButton from './ShareButton';
import RestartButton from './RestartButton';
import { Star, Sparkles, Award } from 'lucide-react';

const ResultDisplay = ({ result, onRestart }) => (
  <div className="max-w-3xl mx-auto text-center px-6 bounce-in">
    {/* Main result card */}
    <div className="glass rounded-3xl p-10 shadow-2xl hover-lift relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4">
          <Star className="w-8 h-8 text-white float-animation" />
        </div>
        <div className="absolute bottom-4 left-4">
          <Sparkles className="w-6 h-6 text-white float-animation" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute top-1/2 left-4">
          <Award className="w-7 h-7 text-white float-animation" style={{animationDelay: '2s'}} />
        </div>
      </div>
      
      {/* Result emoji with glow */}
      <div className="relative mb-8">
        <div className="text-9xl mb-4 float-animation relative">
          {result.emoji}
          <div className="absolute inset-0 blur-xl bg-white opacity-20 animate-pulse"></div>
        </div>
      </div>
      
      {/* Result title */}
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-blue-200 mb-6 rainbow-text">
        {result.title}
      </h2>
      
      {/* Description card */}
      <div className="glass-dark rounded-2xl p-6 mb-6 hover-lift">
        <p className="text-xl text-white text-opacity-90 leading-relaxed font-medium">
          {result.description}
        </p>
      </div>
      
      {/* Advice section */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-opacity-20 rounded-2xl p-6 mb-8 border border-white border-opacity-20">
        <div className="flex items-center justify-center mb-3">
          <Sparkles className="w-5 h-5 text-pink-300 mr-2" />
          <span className="text-sm font-semibold text-white text-opacity-80 uppercase tracking-wide">
            Your Vibe Advice
          </span>
          <Sparkles className="w-5 h-5 text-pink-300 ml-2" />
        </div>
        <p className="text-lg text-white text-opacity-90 leading-relaxed italic">
          "{result.advice}"
        </p>
      </div>
      
      {/* Action buttons */}
      <div className="space-y-4">
        <ShareButton result={result} />
        <RestartButton onRestart={onRestart} />
      </div>
      
      {/* Decorative bottom section */}
      <div className="mt-8 pt-6 border-t border-white border-opacity-20">
        <div className="flex justify-center items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
          <div className="flex items-center gap-2 text-white text-opacity-60">
            <Star className="w-4 h-4" />
            <span className="text-sm">Your unique vibe signature</span>
            <Star className="w-4 h-4" />
          </div>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  </div>
);

export default ResultDisplay;