import React from "react";
import differenceInSeconds from "date-fns/differenceInSeconds";

import Button from "../components/Button";

const getSeconds = (date) => Math.abs(differenceInSeconds(new Date(), date));

function Home() {
  const weekDate = new Date().setHours(20, 0);
  const weekendDate = new Date().setHours(18, 30);

  return (
    <div className="bg-[url('/images/background.png')] flex min-h-screen justify-center items-center flex-col bg-no-repeat bg-cover bg-center">
      <h2 className="font-medium tracking-wide text-3xl text-purple-500 mb-9">
        Selecciona Reunión
      </h2>
      <div className="flex gap-5">
        <Button
          href={{
            pathname: "/meeting/week",
            query: { sec: getSeconds(weekDate) },
          }}
          day="Entre Semana"
        />
        <Button
          href={{
            pathname: "/meeting/weekend",
            query: { sec: getSeconds(weekendDate) },
          }}
          day="Fin de semana"
        />
      </div>
    </div>
  );
}

export default Home;
