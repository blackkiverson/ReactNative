// ReactJS Counter Example using Hooks!

// State
// Unlike props that are read-only and should not be modified, 
// the state allows React components to change their output 
// over time in response to user actions, network responses 
// and anything else.

import React, { useState } from 'react';



const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p>You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
};

//CSS
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}