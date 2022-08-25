import React, { useRef, useEffect, useState } from "react";

export default function Timer() {
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const interval = useRef();

  const toggleStopwatch = () => setIsPaused(!isPaused);

  const clearStopwatch = () => setTime(0);

  const renderSeconds = () => {
    return Math.floor(time);
  };

  const renderMillis = () => {
    return ("0" + Math.floor(time * 100)).slice(-2);
  };

  useEffect(() => {
    if (isPaused) {
      clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(() => {
      setTime((prev) => prev + 0.01);
    }, 10);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="timer__container">
      <h3>Stopwatch Fn</h3>
      <p>
        {renderSeconds()}s: {renderMillis()}
      </p>
      <div>
        <button className="timer__btn" onClick={toggleStopwatch}>
          {isPaused ? "start" : "stop"}
        </button>
        <button className="timer__btn" onClick={clearStopwatch}>
          reset
        </button>
      </div>
    </div>
  );
}
