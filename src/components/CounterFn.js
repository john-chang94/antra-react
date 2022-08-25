import React, { useEffect, useState } from "react";
import { useCounter } from "../hooks/useCounter";

export default function CounterFn() {
  const [hasAlert, setHasAlert] = useState(false);
  const [counter, handleIncrement, handleDecrement] = useCounter(10);
  // const [counter, setCounter] = useState(0);

  // const handleIncrement = () => setCounter(counter + 1);

  // const handleDecrement = () => setCounter(counter - 1);

  const handleAlert = () => {
    setTimeout(() => {
      setHasAlert(true);
    }, 3000);
  }

  useEffect(() => {
    if (hasAlert) alert(counter);
  }, [hasAlert])

  return (
    <section>
      <h2>Counter Fn</h2>
      {counter}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleAlert}>Alert after 3s</button>
      </div>
    </section>
  );
}
