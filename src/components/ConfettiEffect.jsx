import React, { useState, useEffect } from 'react';

const ConfettiEffect = ({ show }) => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    if (show) {
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2,
        color: ['text-yellow-400', 'text-pink-400', 'text-blue-400', 'text-green-400'][Math.floor(Math.random() * 4)]
      }));
      setConfetti(newConfetti);
      setTimeout(() => setConfetti([]), 5000);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className={`absolute ${piece.color} text-2xl float-animation`}
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
};

export default ConfettiEffect;