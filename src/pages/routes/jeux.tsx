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
  ];

  const [cards, setCards] = useState<ConsoleImage[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

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
      <h1 className="text-3xl font-bold mb-8">Console Memory Game</h1>
      <div className="grid grid-cols-5 gap-4 p-4">
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
