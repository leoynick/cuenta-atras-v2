import React from "react";
import Image from "next/image";

const RememberCard = ({ text, image }) => {
  return (
    <div className="h-52 w-48 border-4 bg-white rounded-md border-purple-500 flex flex-col justify-around p-2 items-center">
      <img className="w-16" src={`/images/${image}.png`} />
      <p>{text}</p>
    </div>
  );
};

export default RememberCard;
