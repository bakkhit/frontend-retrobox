import Image from "next/image";
import { useState, useEffect } from "react";
import { Container } from "./container/Container";
import { Typographie } from "@/_design/Typography";
import clsx from "clsx";

type Game = {
  id: number;
  name: string;
  description: string;
  price: number;
  console?: string;
  img: string;
  vignette: string;
  pegi?: number;
  genre?: string;
};

type Props = {
  data: Game[];
};

const GameShow = ({ data }: Props) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedGame(data[0]);
    }
  }, [data]);

  if (!selectedGame) {
    return null;
  }

  return (
    <Container
      paddingY={0}
      paddingX={0}
      className="flex flex-col items-center justify-center"
    >
      <section className="relative w-full h-max transition-all duration-500">
        <div
          className="absolute top-0 left-0 w-[30%] h-full z-0"
          style={{
            background: `linear-gradient(to right, #000000, transparent)`,
          }}
        ></div>

        <div
          className="relative w-full"
          style={{ height: "clamp(400px, 41.667vw, 800px)" }}
        >
          <Image
            src={selectedGame.img || "/default-image.jpg"}
            alt="bg image"
            fill
            className="object-cover aspect-video object-center transition-transform duration-500"
          />

          <div
            className="left-[180px] text-white w-full text-[1vw] z-10 relative"
            style={{ top: "clamp(70px, 10.417vw, 200px)" }}
          >
            <Typographie
              variant="h2"
              color="white"
              fontFamily="Inter"
              isBold
              className="mb-2"
            >
              {selectedGame.name}
            </Typographie>
            <Typographie
              variant="h5"
              color="white"
              fontFamily="Inter"
              className="mb-4"
            >
              {selectedGame.description}
            </Typographie>
          </div>

          <div className="absolute bottom-14 right-1/2 translate-x-1/2 flex justify-center gap-4 z-10">
            {data.slice(0, 6).map((game) => (
              <div
                key={game.id}
                onClick={() => setSelectedGame(game)}
                className={clsx(
                  "relative w-52 h-36 rounded-3xl cursor-pointer transition-transform duration-300 border-5",
                  selectedGame.id === game.id
                    ? "border-white scale-105"
                    : "border-transparent hover:scale-105"
                )}
              >
                <Image
                  key={game.id}
                  src={game.vignette || "/default-vignette.jpg"}
                  fill
                  alt={game.name}
                  className="absolute rounded-3xl p-1 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default GameShow;
