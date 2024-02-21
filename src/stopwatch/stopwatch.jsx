import React, { useState, useEffect } from "react";

export default function stopWatch() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const [active, setActive] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [timer, setTimer] = useState(0);
// eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let Id;
    if (active) {
      Id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(Id);
    }

    return () => clearInterval(Id);
  }, [active]);

  const start = () => {
    setActive(!active);
  };

  const reset = () => {
    setActive(false);
    setTimer(0);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const remainingSec = sec % 60;
    return `${minutes}:${remainingSec < 10 ? "0" : ""}${remainingSec}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={start}> {active ? "stop" : "start"} </button>
      <button onClick={reset}> Reset </button>
    </div>
  );
}
