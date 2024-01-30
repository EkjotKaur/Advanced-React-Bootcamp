import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <h1>Counter Example</h1>
      <span>Count {count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
