import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');
  const [result, setResult] = useState('');
  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(evaluateExpression(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'R') {
      setInput('0');
      setResult('');
    } else if (value === 'D') {
      setInput((prevInput) =>
        prevInput.length > 1 ? prevInput.slice(0, -1) : '0'
      );
    } else {
      setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
    }
  };
  const evaluateExpression = (expression) => {
    try {
      let tokens = expression.match(/(\d+(\.\d+)?|[+\-*\/])/g);
      if (!tokens) throw new Error("Invalid expression");

      let stack = [];
      let num = '';
      let lastOp = '+';

      const applyOp = (operator, num) => {
        switch (operator) {
          case '+':
            stack.push(num);
            break;
          case '-':
            stack.push(-num);
            break;
          case '*':
            stack.push(stack.pop() * num);
            break;
          case '/':
            if (num === 0) throw new Error("Division by zero");
            stack.push(stack.pop() / num);
            break;
          default:
            break;
        }
      };

      for (let token of tokens) {
        if (!isNaN(token)) {
          num = parseFloat(token);
          applyOp(lastOp, num);
        } else {
          lastOp = token;
        }
      }

      let result = stack.reduce((a, b) => a + b, 0);
      if (isNaN(result)) throw new Error("Invalid calculation");

      return parseFloat(result.toFixed(10)).toString();
    } catch (error) {
      return 'Error';
    }
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
