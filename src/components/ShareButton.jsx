import React from 'react';
import { Share2 } from 'lucide-react';

const ShareButton = ({ result }) => {
  const shareText = `I just took a Vibe Check and I'm feeling ${result.title}! ${result.description} What's your vibe?`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Vibe Check Result',
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        fallbackShare();
      }
    } else {
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    navigator.clipboard.writeText(shareText + ` ${window.location.href}`);
    alert('Link copied to clipboard!');
  };

  return (
    <button
      onClick={handleShare}
      className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto overflow-hidden"
    >
      <Share2 className="w-5 h-5" />
      <span>Share Your Vibe</span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </button>
  );
};

export default ShareButton;