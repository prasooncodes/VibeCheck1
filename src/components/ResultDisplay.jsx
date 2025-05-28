import React from 'react';
import ShareButton from './ShareButton';
import RestartButton from './RestartButton';

const ResultDisplay = ({ result, onRestart }) => (
  <div className="max-w-2xl mx-auto text-center px-6">
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
      <div className="text-6xl mb-6">{result.emoji}</div>
      <h2 className="text-4xl font-bold text-white mb-4">{result.title}</h2>
      <p className="text-xl text-white text-opacity-90 mb-6 leading-relaxed">{result.description}</p>
      <div className="text-lg text-white text-opacity-80 mb-8">{result.advice}</div>

      <div className="space-y-4">
        <ShareButton result={result} />
        <RestartButton onRestart={onRestart} />
      </div>
    </div>
  </div>
);

export default ResultDisplay;
