import { useEffect, useState } from "react";

const START_TIMER = 0;

export const Timer = () => {
  const [time, setTime] = useState(START_TIMER);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (!isTimerRunning) return;

    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [isTimerRunning]);

  return (
    <div>
      <div>{time}</div>
      <div className="buttons">
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={clearTimer}>reset</button>
      </div>
    </div>
  );

  function startTimer() {
    setIsTimerRunning(true);
  }

  function stopTimer() {
    setIsTimerRunning(false);
  }

  function clearTimer() {
    setIsTimerRunning(false);
    setTime(START_TIMER);
  }
};

// Create the Timer. It should have buttons to start, stop and reset.
