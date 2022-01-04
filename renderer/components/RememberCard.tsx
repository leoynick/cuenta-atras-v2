import React from "react";
import Image from "next/image";

const RememberCard = ({ text, image }) => {
  return (
    <div className="h-53 w-56 border-4 bg-white font-normal rounded-md border-jw flex flex-col justify-around p-4 items-center">
      <img className="w-16" src={`/images/${image}.png`} />
      <p>{text}</p>
    </div>
  );
};

export default RememberCard;
