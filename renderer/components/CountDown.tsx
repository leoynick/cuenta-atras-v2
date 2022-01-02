import React from "react";
import ReactCountdownClock from "react-countdown-clock";

const CountDown = ({ seconds }) => {
  //   const date = new Date(2020, 10, 10, 20, 0, 0, 0);
  //   const seconds = Math.abs(Math.floor((date.getTime() - Date.now()) / 1000));

  return (
    <ReactCountdownClock
      seconds={seconds}
      color="#a854f7"
      alpha={0.9}
      size={150}
      weight={5}
      fontSize="30px"
      //   onComplete={myCallback}
    />
  );
};

export default CountDown;
