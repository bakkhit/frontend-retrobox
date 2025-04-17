import { Container } from "@/components/container/Container";
import { fetchFilterData } from "../logique/fetch/data";
import { Filter } from "./filter/Filter";
import { GameCard } from "./games/GameCard";

import { useEffect, useState } from "react";
import useBoutiqueStore from "@/context/Boutique.filter";
import { Typographie } from "@/_design/Typography";

type Game = {
  name: string;
  description: string;
  gender: {
    name: string;
  }[];
  pegi: {
    name: string;
  }[];
  price: number;
  images: {
    src: string;
  }[];
};

export const Boutique = () => {
  const { PEGI, Console, Gender } = useBoutiqueStore();
  const [gamesData, setGamesData] = useState<Game[]>([]);

  useEffect(() => {
    fetchFilterData({ src: "games" }).then((data) => setGamesData(data));
  }, []);

  useEffect(() => {
    console.log(gamesData);
  }, [gamesData]);

  const filteredGames = gamesData.filter((game) => {
    const matchPEGI =
      PEGI.length === 0 || game.pegi.some((p) => PEGI.includes(p.name));
    const matchGender =
      Gender.length === 0 || game.gender.some((g) => Gender.includes(g.name));
    const matchConsole =
      Console.length === 0 ||
      Console.some((c) => game.name.toLowerCase().includes(c.toLowerCase()));

    return matchPEGI && matchGender && matchConsole;
  });

  return (
    <Container
      paddingX={270}
      paddingY={100}
      className="flex flex-col gap-22 items-center justify-center"
    >
      <Typographie variant="h1" fontFamily="silkscreen" color="white">
        Boutique
      </Typographie>
      <div className="flex w-full items-start justify-between text-white">
        <Filter />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-max">
          {filteredGames.map((game, index) => (
            <GameCard
              key={index}
              images={game.images}
              title={game.name}
              description={game.description}
              gender={game.gender}
              pegi={game.pegi}
              price={game.price}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
