import React from 'react';
import { RotateCcw } from 'lucide-react';

const RestartButton = ({ onRestart }) => (
  <button
    onClick={onRestart}
    className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto mt-4"
  >
    <RotateCcw size={20} />
    Take Again
  </button>
);

export default RestartButton;
