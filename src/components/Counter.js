import React from 'react';

const Counter = ({number, onIncrement, onDecrement}) => {
  return (
    <div className="Counter">
      <h1>{number}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Counter;