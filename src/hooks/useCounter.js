import { useState } from 'react';

export default function useCounter(customValue) {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);
  const customIncrease = () => setCounter(counter + Number(customValue));
  const customDecrement = () => setCounter(counter - Number(customValue));

  return {
    counter,
    increase,
    decrement,
    resetCounter,
    customIncrease,
    customDecrement
  };
}
