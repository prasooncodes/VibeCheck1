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
    }, 600);
  };

  return (
    <div className="max-w-3xl mx-auto text-center px-6 slide-in">
      {/* Progress section */}
      <div className="mb-8">
        <div className="text-white text-opacity-80 text-sm mb-2">
          Question {questionIndex + 1} of {totalQuestions}
        </div>
        <ProgressBar current={questionIndex + 1} total={totalQuestions} />
      </div>
      
      {/* Question card */}
      <div className="glass rounded-3xl p-8 shadow-2xl mb-6 hover-lift">
        {/* Emoji with floating effect */}
        <div className="relative mb-6">
          <span className="text-8xl mb-4 block float-animation">{question.emoji}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-xl animate-pulse"></div>
        </div>
        
        {/* Question text */}
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-blue-200 mb-8 leading-tight">
          {question.text}
        </h2>
      </div>
      
      {/* Options */}
      <div className="space-y-4">
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
      
      {/* Decorative progress indicator */}
      <div className="mt-8 flex justify-center space-x-2">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === questionIndex
                ? 'bg-white scale-125'
                : i < questionIndex
                ? 'bg-white bg-opacity-60'
                : 'bg-white bg-opacity-20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;