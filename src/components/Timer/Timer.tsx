import { FC, useEffect, useRef, useState } from "react";
import "./timer.css";

const START_TIMER = 0;

export const Timer: FC = () => {
  const [time, setTime] = useState(START_TIMER);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  /*   const timerId = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isTimerRunning) {
      timerId.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    }

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [isTimerRunning]); */

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
