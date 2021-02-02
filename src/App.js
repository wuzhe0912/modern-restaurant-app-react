import './App.css';
import React from 'react';
const { useState } = React;

function App() {
  const number = {
    fontSize: '28px',
  };
  const [count, setCount] = useState(12);

  const addNumber = () => {
    setCount(count + 1);
  };

  const cutNumber = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="counter__container">
          <i
            className="cheveron cheveron__up"
            onClick={ addNumber }
          />
          <span style={ number }>{ count }</span>
          <i
            className="cheveron cheveron__down"
            onClick={ cutNumber }
          />
        </div>
      </header>
    </div>
  );
}

export default App;
