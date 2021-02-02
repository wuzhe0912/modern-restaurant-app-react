import './App.css';
import React from 'react';
const { useState } = React;

function App() {
  const number = {
    fontSize: '28px',
  };
  const [count, setCount] = useState(4);

  const handleClick = (type) =>
    setCount(type === 'increment' ? count + 1 : count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter__container">
          <i
            className={`cheveron cheveron__up ${count >= 8 && 'display-none'}`}
            onClick={ () => handleClick('increment') }
          />

          <span style={ number }>{ count }</span>

          <i
            className={`cheveron cheveron__down ${count <= 0 && 'visibility-hidden'}`}
            onClick={ () => handleClick() }
          />
        </div>
      </header>
    </div>
  );
}

export default App;
