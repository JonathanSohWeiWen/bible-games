import React, { useState, useEffect } from "react";
import H2 from "./Basic_Components/H2";

interface TimerProps {
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
}

const Timer = ({
  initialHours = 0,
  initialMinutes = 0,
  initialSeconds = 0,
}: TimerProps) => {
  const [hours, setHours] = useState<number>(initialHours);
  const [minutes, setMinutes] = useState<number>(initialMinutes);
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds < 11) {
        setTextColor("red");
      }
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            clearInterval(myInterval);
          } else {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <H2
      text={
        hours === 0 && minutes === 0 && seconds === 0
          ? "TIMES UP"
          : (hours !== 0 ? hours + ":" : "") +
            (minutes === 0 && hours === 0
              ? ""
              : minutes !== 0
              ? minutes < 10 && hours > 0
                ? "0" + minutes + ":"
                : minutes + ":"
              : "00:") +
            (seconds !== 0
              ? seconds < 10 && (minutes > 0 || hours > 0)
                ? "0" + seconds
                : seconds
              : "00")
      }
      color={textColor}
    />
  );
};

export default Timer;
