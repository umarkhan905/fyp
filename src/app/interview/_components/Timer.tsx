"use client";

import { ITimer } from "@/types";
import React, { useEffect } from "react";

interface Props {
  time: ITimer;
  setTime: React.Dispatch<React.SetStateAction<ITimer>>;
}

export default function Timer({ time, setTime }: Props) {
  const startTimer = () => {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const interval = setInterval(() => {
      seconds = seconds + 1;
      setTime({ minutes, seconds, hours });

      if (seconds === 59) {
        minutes = minutes + 1;
        seconds = 0;
        setTime({ minutes, seconds, hours });
      }

      if (minutes === 59) {
        hours = hours + 1;
        minutes = 0;
        seconds = 0;
        setTime({ minutes, seconds, hours });
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
      {time.hours < 10 ? `0${time.hours}` : time.hours}
      <span className="mx-1">:</span>
      {time.minutes < 10 ? `0${time.minutes}` : time.minutes}
      <span className="mx-1">:</span>
      {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
    </div>
  );
}
