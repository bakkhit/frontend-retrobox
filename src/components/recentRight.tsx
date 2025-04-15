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

const RecentRight = ({ data }: Props) => {
  const secondToLastGame = useMemo(() => data[data.length - 2], [data]);

  return (
    <section className="relative w-full flex flex-col items-center py-20">
      {/* Conteneur image */}
      <div
        className="relative w-[70vw] h-[30vw] bg-center bg-cover rounded-xl shadow-xl"
        style={{ backgroundImage: `url(${secondToLastGame.img})` }}
      >
        {/* Vidéo dépassant en bas à gauche */}
        <div className="absolute -bottom-20 left-20 w-[20vw] h-[12vw] rounded-lg overflow-hidden shadow-lg border border-white">
          <iframe
            width="100%"
            height="100%"
            src={secondToLastGame.video.replace("watch?v=", "embed/")}
            title="Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Texte et boutons en dessous et à droite */}
      <div className="mt-8 self-end mr-[15vw] text-white w-[30vw] text-right">
        <h2 className="text-3xl font-bold">{secondToLastGame.name}</h2>
        <p className="mt-2 mb-4 text-sm leading-relaxed">{secondToLastGame.description}</p>
        <div className="flex gap-4 justify-end">
          <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Plus d'infos
          </button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
            Acheter
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentRight;