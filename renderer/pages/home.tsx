import React from "react";
import Button from "../components/Button";

const getSeconds = (date) =>
  Math.abs(Math.floor((date.getTime() - Date.now()) / 1000));

function Home() {
  const weekDate = new Date(2022, 1, 1, 20, 0, 0, 0);
  const weekendDate = new Date(2022, 1, 2, 18, 30, 0, 0);

  return (
    <div className="bg-[url('/images/background.png')] flex min-h-screen justify-center items-center flex-col bg-no-repeat bg-cover">
      <h2 className="font-medium tracking-wide text-3xl text-purple-500 mb-9">
        Selecciona Reunión
      </h2>
      <div className="flex gap-5">
        <Button
          href={{
            pathname: "/meeting/miercoles",
            query: { sec: getSeconds(weekDate) },
          }}
          day="Entre Semana"
        />
        <Button
          href={{
            pathname: "/meeting/domingo",
            query: { sec: getSeconds(weekendDate) },
          }}
          day="Fin de semana"
        />
      </div>
    </div>
  );
}

export default Home;
