import { Typographie } from "@/_design/Typography";
import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect } from "react";

type ConsoleImage = {
  folderName: string;
  fileName: string;
};

const Jeux = () => {
  const consolesImages = [
    {
      folderName: "nintendo_nes",
      fileName: "nintendo-nes-card-front.png",
    },
    {
      folderName: "ps1",
      fileName: "ps1-card-front.png",
    },
    {
      folderName: "nintendo_64",
      fileName: "nintendo-64-card-front.png",
    },
    {
      folderName: "gamecube",
      fileName: "gamecube-card-front.png",
    },
    {
      folderName: "wii",
      fileName: "wii-card-front.png",
    },
    {
      folderName: "gameboy",
      fileName: "gameboy-card-front.png",
    },
    {
      folderName: "nintendo_ds",
      fileName: "nintendo-ds-card-front.png",
    },
    {
      folderName: "game_watch",
      fileName: "game-watch-card-front.png",
    },
    {
      folderName: "psp",
      fileName: "psp-card-front.png",
    },
    {
      folderName: "ps_vita",
      fileName: "ps-vita-card-front.png",
    },
    {
      folderName: "xbox",
      fileName: "xbox-card-front.png",
    },
    {
      folderName: "nintendo_64",
      fileName: "nintendo-64-card-front.png",
    },
  ];

  const [cards, setCards] = useState<ConsoleImage[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [instruction, setInstruction] = useState<boolean>(true);

  useEffect(() => {
    setInstruction(true);
  }, []);

  useEffect(() => {
    const shuffledCards = [...consolesImages, ...consolesImages].sort(
      () => Math.random() - 0.5
    );
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index: number) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(index) ||
      matchedCards.includes(index)
    ) {
      return;
    }
    setInstruction(false);

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      if (cards[newFlippedCards[0]] === cards[newFlippedCards[1]]) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <div className="w-full h-max relative flex flex-col items-center justify-center">
      {/* Instruction */}
      <div
        className={clsx(
          instruction ? "flex" : "hidden",
          "flex-col absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-start justify-center gap-3 bg-[#247968] rounded-3xl p-5 max-w-[500px] w-full"
        )}
      >
        <div className="w-full flex items-center justify-between">
          <Typographie variant="h5" fontFamily="Inter" color="white">
            Règle du jeu
          </Typographie>
          <button
            onClick={() => setInstruction(false)}
            className="cursor-pointer hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <hr className="bg-white border-none w-full h-[1px]" />
        <Typographie variant="h6" fontFamily="Inter" color="white">
          Toutes les cartes sont faces cachées. Vous devez retourner deux
          cartes. Si les images sont identiques,vous gagnez la paire constituée
          et rejouez. Au bout des 30 coups vous perdez
        </Typographie>
      </div>
      {/* FIN Instruction */}
      {/* POPUP */}
      <div
        className={clsx(
          matchedCards.length === 4 ? "flex" : "hidden",
          "flex-col absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-start justify-center gap-3 bg-[#247968] rounded-3xl p-5 max-w-[500px] w-full"
        )}
      >
        <Typographie variant="h5" fontFamily="Inter" color="white">
          Coupon de réduction
        </Typographie>
        <hr className="bg-white border-none w-full h-[1px]" />
        <Typographie variant="h6" fontFamily="Inter" color="white">
          Bien joué ! Vous avez gagné un coupon de réduction de 10% sur votre
          prochaine commande.
        </Typographie>
        <Typographie
          variant="h6"
          fontFamily="Inter"
          color="white"
          isMedium
          className="bg-white/10 p-2 rounded-lg"
        >
          GAGNANT10
        </Typographie>
      </div>
      {/* FIN POPUP */}
      <div className="grid grid-cols-8 gap-4 p-4">
        {cards.map((console, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-[160px] h-[240px] flex items-center justify-center rounded-lg cursor-pointer hover:opacity-65 transition-all duration-300 ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? `bg-[url(/images/game/${console.folderName}/${console.fileName})] bg-center text-white`
                : "bg-[url(/images/game/game-card-back.png)] bg-center"
            }`}
          >
            <Image
              src={`/images/game/${console.folderName}/${console.fileName}`}
              alt={console.fileName}
              width={160}
              height={240}
              className={`w-[160px] h-[240px] transition-all duration-300 ${
                flippedCards.includes(index) || matchedCards.includes(index)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jeux;
 