import React from "react";
import ReactCountdownClock from "react-countdown-clock";

const CountDown = ({ seconds, onComplete }) => {
  return (
    <ReactCountdownClock
      seconds={seconds}
      color="#a854f7"
      alpha={0.9}
      size={200}
      weight={8}
      fontSize="30px"
      onComplete={onComplete}
    />
  );
};

export default CountDown;
