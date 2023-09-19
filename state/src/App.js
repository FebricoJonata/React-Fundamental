import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  function increment(){
    setCounter(counter+1)
  }

  function decrement(){
    setCounter(counter-1)
  }

  function reset(){
    setCounter(0)
  }

  return (<>
    <div className="App">
      <button onClick={increment} disabled={counter>=10 || counter < 0}>+</button>
      <p>{(counter>=10 || counter < 0) ? 'Done!' : counter}</p>
      <button onClick={decrement} disabled={counter>=10 || counter < 0}>-</button>
      
    </div>

    <div className="Reset">
      <button onClick={reset} disabled={!counter>=10 || !counter < 0}>Reset</button>
    </div>
  </>);
}

export default App;
