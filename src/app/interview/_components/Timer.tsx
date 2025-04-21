"use client";

import React, { useEffect, useState } from "react";

type TimerState = {
  minutes: number;
  seconds: number;
};

export default function Timer() {
  const [timer, setTimer] = useState<TimerState>({
    minutes: 0,
    seconds: 0,
  });

  const startTimer = () => {
    let seconds = 0;
    let minutes = 0;

    const interval = setInterval(() => {
      seconds = seconds + 1;
      setTimer({ minutes, seconds });

      if (seconds === 59) {
        minutes = minutes + 1;
        seconds = 0;
        setTimer({ minutes, seconds });
      }
    }, 1000);

    return interval;
  };

  useEffect(() => {
    const interval = startTimer();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-muted text-foreground text-lg font-semibold px-2 py-1 rounded-full">
      {timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes}
      <span className="mx-1">:</span>
      {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
    </div>
  );
}
