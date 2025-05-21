import { Container } from "@/components/container/Container";
import { fetchFilterData } from "../logique/fetch/data";
import { Filter } from "./filter/Filter";
import { GameCard } from "./games/GameCard";

import { useEffect, useState } from "react";
import useBoutiqueStore from "@/context/Boutique.filter";
import { Typographie } from "@/_design/Typography";

type Game = {
  id: number;
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

interface BoutiqueProps {
  toggle: boolean;
}

export const Boutique = ({ toggle }: BoutiqueProps) => {
  const { PEGI, Console, Gender } = useBoutiqueStore();
  const [gamesData, setGamesData] = useState<Game[]>([]);
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [addedGameIds, setAddedGameIds] = useState<number[]>([]);

  useEffect(() => {
    fetchFilterData({ src: "games" }).then((data) => {
      setGamesData(data);
      localStorage.setItem("games", JSON.stringify(data));
    });
  }, []);

  useEffect(() => {
    console.log(gamesData);
  }, [gamesData]);

  const cartItemSet = (game: Game) => {
    let updatedCart: Game[];

    // Récupère le panier actuel
    const existingCartRaw = localStorage.getItem("cart");
    const existingCart: Game[] = existingCartRaw
      ? JSON.parse(existingCartRaw)
      : [];

    const alreadyAdded = existingCart.some((item) => item.id === game.id);

    if (alreadyAdded) {
      // Retirer le jeu
      updatedCart = existingCart.filter((item) => item.id !== game.id);
    } else {
      // Ajouter le jeu
      updatedCart = [
        ...existingCart,
        {
          id: game.id,
          name: game.name,
          description: game.description,
          gender: game.gender,
          pegi: game.pegi,
          images: game.images,
          price: game.price,
        },
      ];
    }

    // Mettre à jour le state local
    const updatedIds = updatedCart.map((item) => item.id);
    setAddedGameIds(updatedIds);

    // Sauvegarder les objets dans localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

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
    <Container className="flex flex-col bg-[#45E5C5]/50 h-fit gap-22 p-18 rounded-3xl items-center justify-center">
      <div className="flex w-full items-center justify-start gap-10">
        <Typographie variant="h2" fontFamily="silkscreen" color="white">
          Boutique
        </Typographie>
        <Typographie variant="h4" fontFamily="Inter" color="white">
          Choisissez un jeu favori ou un jeu que vous voulez tester !
        </Typographie>
      </div>
      <div className="flex w-full items-start justify-between text-white">
        <Filter />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-max">
          {filteredGames.map((game, index) => (
            <div
              key={index}
              className={toggle ? "opacity-50 pointer-events-none" : ""}
            >
              <GameCard
                images={game.images}
                title={game.name}
                onClick={() => cartItemSet(game)}
                isAdded={addedGameIds.includes(game.id)}
                description={game.description}
                gender={game.gender}
                pegi={game.pegi}
                price={game.price}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
