import { useTimer } from "./useTimer";

export const Timer4 = () => {
  const { time, timerDispatch } = useTimer();

  return (
    <div>
      <div>{time}</div>
      <div className="buttons">
        <button onClick={() => timerDispatch({ type: "START" })}>start</button>
        <button onClick={() => timerDispatch({ type: "STOP" })}>stop</button>
        <button onClick={() => timerDispatch({ type: "RESET" })}>reset</button>
      </div>
    </div>
  );
};
