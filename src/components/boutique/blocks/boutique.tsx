import { Container } from "@/components/container/Container";
import { fetchFilterData } from "../logique/fetch/data";
import { Filter } from "./filter/Filter";
import { GameCard } from "./games/GameCard";

import { useEffect, useState } from "react";

type Game = {
  name: string;
  description: string;
  price: number;
  images: {
    src: string;
  }[];
};

export const Boutique = () => {
  const [gamesData, setGamesData] = useState<Game[]>([]);

  useEffect(() => {
    fetchFilterData({ src: "games" }).then((data) => setGamesData(data));
  }, []);

  useEffect(() => {
    console.log(gamesData);
  }, [gamesData]);

  return (
    <Container
      paddingX={270}
      paddingY={100}
      className="flex w-full items-start justify-between"
    >
      <Filter />
      <div className="grid grid-cols-3 gap-4 w-full h-max">
        {gamesData.map((game, index) => (
          <GameCard
            key={index}
            images={game.images}
            title={game.name}
            description={game.description}
            price={game.price}
          />
        ))}
      </div>
    </Container>
  );
};
