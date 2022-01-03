import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import ReactPlayer from "react-player";

import CountDown from "../../components/CountDown";
import RememberCard from "../../components/RememberCard";

const WEEK = "Entre Semana";
const WEEKEND = "Fin de Semana";

function Meeting() {
  const [isComplete, setIsComplete] = useState(false);
  const { query } = useRouter();
  const { sec, day } = query;
  const isWeekend = day === "weekend";

  return (
    <div className="bg-[url('/images/background.png')] flex min-h-screen bg-no-repeat bg-cover justify-center bg-center">
      <div className="absolute left-10 top-5">
        <Link href="/home">
          <div className="w-5 h-2">
            <ArrowCircleLeftIcon className="text-purple-500 w-10" />
          </div>
        </Link>
      </div>
      <div className="flex items-center flex-col justify-center">
        <h2 className="text-3xl text-purple-500 relative text-center">
          “A los que buscan a Jehová no les faltará nada bueno”<br></br>
          (Salmos 34:10)
        </h2>
        <div className="hidden">
          <ReactPlayer
            url={`/audio/${isWeekend ? 2 : 57}.mp3`}
            playing={true}
            loop={true}
          />
        </div>
        <div className="min-h-[33%] my-10 flex">
          {isComplete ? (
            <span className="font-semibold text-3xl text-purple-500 flex items-center">
              ¡COMENZAMOS!
            </span>
          ) : (
            <div className="flex items-center gap-24 ">
              <h3 className="font-semibold bg-purple-500 rounded-md text-xl py-5 px-3 text-white text-center">
                La reunión de <br></br> {isWeekend ? WEEKEND : WEEK} comienza
                en:
              </h3>
              <CountDown seconds={sec} onComplete={() => setIsComplete(true)} />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold">RECORDATORIOS</h3>
          <div className="flex gap-4">
            <RememberCard
              text="No se permite tomar fotos o videos durante la reunión."
              image="photo"
            />
            <RememberCard
              text="Pon tus dispositivos en silencio para evitar interrupciones."
              image="sound"
            />
            <RememberCard
              text="Mantén una buena apariencia, con una vestimenta formal, respetuosa y modesta."
              image="elegant"
            />
            <RememberCard
              text="Mantén una buena iluminación. Trata de recibir luz de frente."
              image="lamp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
