import React, { useState } from "react";

export default function CounterFn() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);

  const handleDecrement = () => setCounter(counter - 1);

  return (
    <section>
      <h2>Counter Fn</h2>
      {counter}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </section>
  );
}
