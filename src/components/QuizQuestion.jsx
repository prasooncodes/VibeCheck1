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
    <div className="max-w-3xl mx-auto text-center px-6 py-10 slide-in">
      
      <div className="mb-10">
        <div className="text-white text-opacity-80 text-sm mb-3">
          Question {questionIndex + 1} of {totalQuestions}
        </div>
        <ProgressBar current={questionIndex + 1} total={totalQuestions} />
      </div>

      
      <div className="glass rounded-3xl p-10 shadow-2xl mb-12 hover-lift">
        
        <div className="relative mb-8 flex justify-center">
          <span className="text-6xl mb-6 block float-animation">{question.emoji}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-xl animate-pulse"></div>
        </div>

        
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-blue-200 mb-12 leading-tight">
          {question.text}
        </h2>
      </div>

      
      <ul className="flex flex-col gap-6 md:gap-8 mb-24 list-none px-0">
        {question.options.map((option, index) => (
          <li key={index} className="w-full">
            <QuestionOption
              option={option}
              onClick={() => handleOptionClick(option)}
              isSelected={selectedAnswer === option}
              index={index}
              className="text-base md:text-lg py-4"
            />
          </li>
        ))}
      </ul>

    
      <div className="mt-10 flex justify-center space-x-3">
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