import { useState } from 'react';
import questions from '../data/questions';
import results from '../data/results';

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

      setResult(results[maxVibe] || null);
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