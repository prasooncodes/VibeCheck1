import { useState } from 'react';

// Example questions data (you can import or pass this from props instead)
const questions = [
  {
    emoji: '🔥',
    text: 'How are you feeling right now?',
    options: [
      { text: 'Super energetic', vibe: 'energetic' },
      { text: 'Calm and relaxed', vibe: 'chill' },
      { text: 'A bit mysterious', vibe: 'mysterious' },
      { text: 'Creative and inspired', vibe: 'creative' },
    ],
  },
  {
    emoji: '🌈',
    text: 'Pick a color vibe',
    options: [
      { text: 'Blue and calm', vibe: 'zen' },
      { text: 'Bright and warm', vibe: 'cozy' },
      { text: 'Dark and moody', vibe: 'mysterious' },
      { text: 'Vibrant and fun', vibe: 'energetic' },
    ],
  },
  // Add more questions as needed
];

// Example results mapping based on vibe count
const resultsMap = {
  chill: {
    title: 'Chill Vibes',
    emoji: '😎',
    description: 'You are relaxed and laid-back, flowing with ease.',
    advice: 'Keep embracing calm moments and recharge your soul.',
  },
  energetic: {
    title: 'Energetic Spark',
    emoji: '⚡',
    description: 'You are full of energy and ready to take on the world!',
    advice: 'Channel your energy positively and inspire others.',
  },
  mysterious: {
    title: 'Mysterious Aura',
    emoji: '🦇',
    description: 'You have a deep, enigmatic vibe that draws curiosity.',
    advice: 'Stay true to your unique self and keep exploring.',
  },
  creative: {
    title: 'Creative Flow',
    emoji: '🎨',
    description: 'Your mind is buzzing with new ideas and artistic flair.',
    advice: 'Let your creativity shine in everything you do.',
  },
  zen: {
    title: 'Zen Master',
    emoji: '🧘‍♂️',
    description: 'You are balanced, mindful, and centered in peace.',
    advice: 'Maintain your harmony and spread calm vibes.',
  },
  cozy: {
    title: 'Cozy Comfort',
    emoji: '☕',
    description: 'You enjoy warmth, comfort, and simple pleasures.',
    advice: 'Surround yourself with things that make you happy.',
  },
};

const useQuizLogic = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const totalQuestions = questions.length;

  const answerQuestion = (option) => {
    setAnswers(prev => [...prev, option]);

    if (currentQuestionIndex + 1 === totalQuestions) {
      // Calculate result
      const vibeCount = {};

      [...answers, option].forEach(({ vibe }) => {
        vibeCount[vibe] = (vibeCount[vibe] || 0) + 1;
      });

      // Find vibe with highest count
      let maxVibe = null;
      let maxCount = 0;
      for (const [vibe, count] of Object.entries(vibeCount)) {
        if (count > maxCount) {
          maxCount = count;
          maxVibe = vibe;
        }
      }

      setResult(resultsMap[maxVibe] || null);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  };

  return {
    questions,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion: questions[currentQuestionIndex],
    answerQuestion,
    result,
    restartQuiz,
  };
};

export default useQuizLogic;
