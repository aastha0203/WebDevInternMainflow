import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
      </div>
    </div>
  );
};

export default App;
