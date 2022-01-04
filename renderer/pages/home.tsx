import React from "react";

import Button from "../components/Button";

const weekDate = new Date().setHours(20, 0, 0, 0);
const weekendDate = new Date().setHours(18, 30, 0, 0);

function Home() {
  return (
    <div className="bg-[url('/images/background.png')] flex min-h-screen justify-center items-center flex-col bg-no-repeat bg-cover bg-center">
      <h2 className="font-medium tracking-wide text-3xl text-jw mb-9">
        Selecciona Reunión
      </h2>
      <div className="flex gap-5">
        <Button
          href={{
            pathname: "/meeting/week",
            query: { date: weekDate },
          }}
          day="Entre Semana"
        />
        <Button
          href={{
            pathname: "/meeting/weekend",
            query: { date: weekendDate },
          }}
          day="Fin de semana"
        />
      </div>
    </div>
  );
}

export default Home;
