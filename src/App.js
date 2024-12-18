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
    <div className="App">
      Quiz App
    </div>
  );
}

export default App;
