import React, {useEffect, useState} from 'react'
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Lisbon'],
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as a Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['Leo Tolstoy', 'William Shakespeare', 'Mark Twain', 'Charles Dickens'],
    answer: 'William Shakespeare',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['O2','H20', 'CO2', 'H2'],
    answer: 'H2O',
  },
]

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleAnswer(null); // Если время истекло
          return 10;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Очищаем таймер при размонтировании
  }, [currentQuestion]);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    <div className="app">
      {showScore ? (
        <div className='score-section'>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className='quiz-section'>
          <h2>Time left: {timeLeft} seconds </h2>
          <h3>
            Question {currentQuestion + 1}/{questions.length}
          </h3>
          <p>{questions[currentQuestion].question}</p>
          <div className='options'>
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index}
                onClick={() => handleAnswer(option)}
                className='option-button'
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
