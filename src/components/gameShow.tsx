import Image from "next/image";
import { useState } from "react";
import { Container } from "./container/Container";
import { Typographie } from "@/_design/Typography";

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
  color: string; // couleur personnalisée
};

type Props = {
  data: Game[];
};

const GameShow = ({ data }: Props) => {
  const [selectedGame, setSelectedGame] = useState<Game>(data[0]);

  return (
    <Container
      paddingY={0}
      paddingX={270}
      className="flex flex-col gap-22 items-center justify-center"
    >
      <Typographie variant="h1" fontFamily="silkscreen" color="white">
        Maintenant disponible
      </Typographie>
      <section className="relative w-full h-max transition-all duration-500">
        {/* Dégradé gauche */}
        <div
          className="absolute top-0 left-0 w-[30%] h-full z-0"
          style={{
            background: `linear-gradient(to right, ${selectedGame.color}, transparent)`,
          }}
        ></div>

        <Image
          src={selectedGame.img}
          alt="bg image"
          width={1300}
          height={300}
        />

        {/* Texte jeu sélectionné */}
        <div className="px-[100px] py-5 text-white w-full text-[1vw] z-10 relative">
          <h2 className="text-[2vw] font-bold mb-2">{selectedGame.name}</h2>
          <p className="mb-4">{selectedGame.description}</p>
        </div>

        {/* Vignettes des autres jeux */}
        <div className="absolute bottom-14 right-0 -translate-x-1/2 flex justify-center gap-4 z-10">
          {data.slice(0, 6).map((game) => (
            <Image
              key={game.id}
              src={game.vignette}
              width={300}
              height={500}
              alt={game.name}
              onClick={() => setSelectedGame(game)}
              className={`object-cover rounded-xl cursor-pointer transition-transform duration-300 border-4 ${
                selectedGame.id === game.id
                  ? "border-white scale-105"
                  : "border-transparent hover:scale-105"
              }`}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default GameShow;
