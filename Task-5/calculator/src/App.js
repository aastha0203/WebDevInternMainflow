import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');
  const handleButtonClick = (value) => {
  
  };


  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
      {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'D', 'R'].map((btn) => (
          <button key={btn} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
