import React, {useState} from 'react'
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
    options: ['o2', 'H20', 'CO2', 'H2'],
    answer: 'H2O',
  },
]

function App() {
  return (
    <div className="app">
      {showScore ? (
        <div className='score-section'>
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={() => resetQuiz()}>Restart Quiz</button>
        </div>
      ) : (
        <div className='quiz-section'>
          <h2>
            Question {currentQuestion + 1}/{questions.length}
          </h2>
          <p>{questions[currentQuestion].question}</p>
          <div className='options'>
            {questions[currentQuestions].options.map((option, index) => (
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
