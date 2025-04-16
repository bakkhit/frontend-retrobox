import React, { useState, useEffect } from "react";

const Jeux = () => {
  const consoles = [
    "Nes",
    "PS1",
    "Nintendo 64",
    "Gamecube",
    "wii",
    "Game boy",
    "Nintendos",
    "Game and Watch",
    "PSP",
    "PS Vita",
  ];

  const [cards, setCards] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  useEffect(() => {
    const shuffledCards = [...consoles, ...consoles].sort(
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
    <div className="w-full h-screen bg-neutral-300 relative flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Console Memory Game</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {cards.map((console, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-32 h-32 flex items-center justify-center rounded-lg cursor-pointer hover:opacity-65 transition-all duration-300 ${
              flippedCards.includes(index) || matchedCards.includes(index)
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {(flippedCards.includes(index) || matchedCards.includes(index)) && (
              <span className="text-center p-2">{console}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jeux;
