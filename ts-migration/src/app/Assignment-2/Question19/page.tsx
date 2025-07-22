"use client"
import useTimer from "../hooks/useTimer";

export default function CountdownComponent() {
  const { time, start, pause, reset } = useTimer(60);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <h3>Time: {time} seconds</h3>
      </div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}