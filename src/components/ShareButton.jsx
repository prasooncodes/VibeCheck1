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
      className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
    >
      <Share2 size={20} />
      Share Your Vibe
    </button>
  );
};

export default ShareButton;
