import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import QuestionOption from './QuestionOption';

const QuizQuestion = ({ question, onAnswer, questionIndex, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    setTimeout(() => {
      onAnswer(option);
      setSelectedAnswer(null);
    }, 500);
  };

  return (
    <div className="max-w-2xl mx-auto text-center px-6">
      <ProgressBar current={questionIndex + 1} total={totalQuestions} />
      <div className="mb-8">
        <span className="text-2xl mb-4 block">{question.emoji}</span>
        <h2 className="text-3xl font-bold text-white mb-8">{question.text}</h2>
      </div>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <QuestionOption
            key={index}
            option={option}
            onClick={() => handleOptionClick(option)}
            isSelected={selectedAnswer === option}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
