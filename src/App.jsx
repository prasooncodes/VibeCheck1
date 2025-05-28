import React from 'react';
import useQuizLogic from './hooks/useQuizLogic';
import BackgroundWrapper from './components/BackgroundWrapper';
import WelcomeScreen from './components/WelcomeScreen';
import QuizQuestion from './components/QuizQuestion';
import ResultDisplay from './components/ResultDisplay';
import ConfettiEffect from './components/ConfettiEffect';

const App = () => {
  const {
    questions,
    currentQuestionIndex,
    totalQuestions,
    currentQuestion,
    answerQuestion,
    result,
    restartQuiz,
  } = useQuizLogic();

  const [hasStarted, setHasStarted] = React.useState(false);

  const currentVibe = result ? result.title.toLowerCase().split(' ')[0] : 'default';

  return (
    <BackgroundWrapper currentVibe={currentVibe}>
      <ConfettiEffect show={!!result} />
      {!hasStarted && !result && (
        <WelcomeScreen onStart={() => setHasStarted(true)} />
      )}
      {hasStarted && !result && currentQuestion && (
        <QuizQuestion
          question={currentQuestion}
          onAnswer={answerQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
        />
      )}
      {result && (
        <ResultDisplay
          result={result}
          onRestart={() => {
            restartQuiz();
            setHasStarted(false);
          }}
        />
      )}
    </BackgroundWrapper>
  );
};

export default App;