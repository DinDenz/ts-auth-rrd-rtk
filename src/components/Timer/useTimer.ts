import { useEffect, useReducer } from "react";

export const START_TIMER = 0;

interface Time {
  time: number;
  isRunning: boolean;
}

type Action =
  | { type: "START" }
  | { type: "STOP" }
  | { type: "RESET" }
  | { type: "TICK" };

export function useTimer() {
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

  return {
    time: state.time,
    isRunning: state.isRunning,
    timerDispatch: dispatch,
  };
}
