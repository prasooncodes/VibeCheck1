import React from 'react';

const CustomStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes pulse-glow {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.1);
      }
      50% { 
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(255, 255, 255, 0.2);
      }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }
      50% {
        opacity: 1;
        transform: scale(1.05);
      }
      70% {
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes particleFloat {
      0%, 100% {
        transform: translateY(0px) translateX(0px) rotate(0deg);
        opacity: 0.7;
      }
      33% {
        transform: translateY(-30px) translateX(30px) rotate(120deg);
        opacity: 1;
      }
      66% {
        transform: translateY(20px) translateX(-20px) rotate(240deg);
        opacity: 0.5;
      }
    }
    
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
    
    /* Particle animations */
    .particle {
      position: absolute;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      pointer-events: none;
      animation: particleFloat 20s infinite ease-in-out;
    }
    
    .particle-1 {
      width: 20px;
      height: 20px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
      animation-duration: 25s;
    }
    
    .particle-2 {
      width: 15px;
      height: 15px;
      top: 60%;
      left: 80%;
      animation-delay: -5s;
      animation-duration: 30s;
    }
    
    .particle-3 {
      width: 25px;
      height: 25px;
      top: 40%;
      left: 70%;
      animation-delay: -10s;
      animation-duration: 20s;
    }
    
    .particle-4 {
      width: 12px;
      height: 12px;
      top: 80%;
      left: 20%;
      animation-delay: -15s;
      animation-duration: 35s;
    }
    
    .particle-5 {
      width: 18px;
      height: 18px;
      top: 30%;
      left: 50%;
      animation-delay: -20s;
      animation-duration: 28s;
    }
    
    .particle-6 {
      width: 22px;
      height: 22px;
      top: 70%;
      left: 40%;
      animation-delay: -25s;
      animation-duration: 22s;
    }
    
    /* Custom classes */
    .float-animation { 
      animation: float 6s ease-in-out infinite; 
    }
    
    .pulse-glow { 
      animation: pulse-glow 2s ease-in-out infinite; 
    }
    
    .shimmer {
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      background-size: 200% 100%;
      animation: shimmer 2s infinite;
    }
    
    .slide-in {
      animation: slideInUp 0.6s ease-out forwards;
    }
    
    .bounce-in {
      animation: bounceIn 0.8s ease-out forwards;
    }
    
    .rainbow-text {
      animation: rainbow 3s linear infinite;
    }
    
    /* Glassmorphism effects */
    .glass {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .glass-dark {
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    /* Hover effects */
    .hover-lift {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .hover-lift:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  `}</style>
);

export default CustomStyles;