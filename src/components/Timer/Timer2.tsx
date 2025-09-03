import { useEffect, useReducer, useState } from "react";

const START_TIMER = 0;

interface Time {
  time: number;
  isRunning: boolean;
}

type Action =
  | { type: "START" }
  | { type: "STOP" }
  | { type: "RESET" }
  | { type: "TICK" };

const timerReducer = (state: Time, action: Action) => {
  switch (action.type) {
    case "START":
      return { ...state, isRunning: true };
    case "STOP":
      return { ...state, isRunning: false };
    case "RESET":
      return { time: START_TIMER, isRunning: false };
    case "TICK":
      return { ...state, time: state.time + 1 };
    default:
      return state;
  }
};

export const Timer2 = () => {
  const [state, dispatch] = useReducer(timerReducer, {
    time: START_TIMER,
    isRunning: false,
  });

  useEffect(() => {
    if (!state.isRunning) return;

    const id = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(id);
  }, [state.isRunning]);

  return (
    <div>
      <div>{state.time}</div>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "START" })}>start</button>
        <button onClick={() => dispatch({ type: "STOP" })}>stop</button>
        <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      </div>
    </div>
  );
};

// Create the Timer. It should have buttons to start, stop and reset.
