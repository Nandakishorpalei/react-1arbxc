import { useEffect, useRef, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(300);
  const timerRef = useRef();

  useEffect(() => {
    startTimer();
  }, []);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  }

  const pauseTimer = () => {
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    setTime(300);
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>
        {Math.floor(time / 60)} {time % 60}
      </h2>
      <button onClick={startTimer}>start</button>
      <button onClick={pauseTimer}>pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
