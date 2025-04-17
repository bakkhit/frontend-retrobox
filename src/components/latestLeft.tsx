import { CTA } from "@/_design/CTA";
import { Typographie } from "@/_design/Typography";
import { useMemo } from "react";

type Game = {
  id: number;
  name: string;
  description: string;
  price: number;
  console: string;
  img: string;
  vignette: string;
  pegi: number;
  genre: string;
  video: string;
};

type Props = {
  data: Game[];
};

const LatestLeft = ({ data }: Props) => {
  const lastGame = useMemo(() => data[data.length - 1], [data]);

  return (
    <section className="relative w-full flex flex-col items-center">
      <Typographie
        variant="h1"
        fontFamily="silkscreen"
        color="white"
        className="pb-22"
      >
        Maintenant disponible
      </Typographie>
      {/* Conteneur image */}
      <div
        className="relative w-[70vw] h-[30vw] bg-center bg-cover rounded-xl shadow-xl"
        style={{ backgroundImage: `url(${lastGame.img})` }}
      >
        {/* Vidéo dépassant en bas à droite */}
        <div className="absolute -bottom-20 right-20 w-[20vw] h-[12vw] rounded-lg overflow-hidden shadow-lg border border-white">
          <iframe
            width="100%"
            height="100%"
            src={lastGame.video.replace("watch?v=", "embed/")}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Texte et boutons en dessous et à gauche */}
      <div className="relative flex flex-col left-70 top-10 items-start justify-start text-white w-full">
        <Typographie
          variant="h3"
          color="white"
          fontFamily="Inter"
          isBold
          className="text-3xl font-bold text-left"
        >
          {lastGame.name}
        </Typographie>
        <Typographie
          variant="h5"
          color="white"
          fontFamily="Inter"
          className="mt-2 mb-4 text-sm leading-relaxed"
        >
          {lastGame.description}
        </Typographie>
        <div className="flex gap-4">
          <CTA variant="primary">Plus d'infos</CTA>
          <CTA variant="primary">Acheter</CTA>
        </div>
      </div>
    </section>
  );
};

export default LatestLeft;
