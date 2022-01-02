import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import ReactPlayer from "react-player";

import CountDown from "../../components/CountDown";
import RememberCard from "../../components/RememberCard";

function Meeting() {
  const { query } = useRouter();
  const { sec } = query;
  const isWeekend = false;

  return (
    <div className="bg-[url('/images/background.png')] flex min-h-screen bg-no-repeat bg-cover justify-center">
      <div className="flex items-center flex-col justify-center">
        <h2 className="text-3xl text-purple-500">
          <div className="absolute left-5 top-5">
            <Link href="/home">
              <div className="w-5 h-2">
                <ArrowCircleLeftIcon className="text-purple-500 w-10" />
              </div>
            </Link>
          </div>
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
        <div className="flex items-center gap-5 my-12">
          <div className="bg-purple-500 rounded-md text-white flex gap-4 py-5 px-3 items-center w-64 text-center">
            <h3 className="font-semibold text-lg">
              La reunión de fin de semana comienza en:
            </h3>
          </div>
          <CountDown seconds={sec} />
        </div>
        <div className="mt-7 flex flex-col items-center">
          <h3 className="text-xl font-bold">RECORDATORIOS</h3>
          <div className="flex gap-2">
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
