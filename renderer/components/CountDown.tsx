import React from "react";
import ReactCountdownClock from "react-countdown-clock";

const CountDown = ({ seconds, onComplete }) => {
  return (
    <ReactCountdownClock
      seconds={seconds}
      color="#a854f7"
      alpha={0.9}
      size={225}
      weight={8}
      fontSize="53px"
      showMilliseconds={false}
      onComplete={onComplete}
    />
  );
};

export default CountDown;
