import React, { useEffect, useState } from "react";

type GameImage = {
  id: number;
  src: string;
  gameId: number;
  game: {
    id: number;
    name: string;
    description: string;
    price: number;
    stars: number;
  };
};

const GameShow = () => {
  const [images, setImages] = useState<GameImage[]>([]);
  const [selectedGame, setSelectedGame] = useState<GameImage | null>(null);
  const [vignettes, setVignettes] = useState<GameImage[]>([]);

  useEffect(() => {
    fetch("/api/games/images")
      .then((res) => {
        if (!res.ok) throw new Error("HTTP status " + res.status);
        return res.json();
      })
      .then((data) => {
        const imgs = data.slice(0, 6);
        setImages(imgs);
        if (imgs.length > 0) setSelectedGame(imgs[0]);
      })
      .catch(() => setImages([]));
  }, []);

  // Fetch vignette background
  useEffect(() => {
    fetch("/api/games/vignette")
      .then((res) => res.json())
      .then((data) => {
        console.log("Vignettes API:", data); // Ajoute ce log
        if (Array.isArray(data)) setVignettes(data);
      })
      .catch((err) => {
        console.error("Erreur vignette:", err);
        setVignettes([]);
      });
  }, []);

  const backgroundUrl =
    selectedGame && vignettes.length
      ? vignettes.find((v) => v.gameId === selectedGame.gameId)?.src || ""
      : "";

  if (!selectedGame) return null;

  return (
    <section
      className="relative w-full h-screen bg-black flex flex-col items-center justify-center py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : undefined,
      }}
    >
      {/* Dégradé gauche */}
      <div
        className="absolute top-0 left-0 w-[30%] h-full z-0 pointer-events-none"
        style={{
          background: `linear-gradient(to right, #050D1D, transparent)`,
        }}
      ></div>

      {/* Texte jeu sélectionné */}
      <div className="absolute bottom-[13vw] left-[10vw] text-white p-5 rounded-xl max-w-[30%] z-10 bg-black/60">
        <h2 className="whiteNeon text-[2vw] font-bold mb-2">
          {selectedGame.game.name}
        </h2>
        <p className="mb-2 text-[1vw] font-md">
          {selectedGame.game.description}
        </p>
      </div>

      {/* Vignettes des autres jeux */}
      <div className="absolute bottom-[4vw] left-1/2 -translate-x-1/2 z-10 flex justify-center">
        <div className="flex gap-[2vw] w-full justify-center items-center">
          {images.map((img) => (
            <div
              key={img.id}
              className={`flex p-1 items-center justify-center rounded-2xl border-4 cursor-pointer
      transition-all duration-500
      ${
        selectedGame.id === img.id
          ? "border-white shadow-[0_0_24px_4px_rgba(255,255,255,0.5)]"
          : "border-transparent"
      }
    `}
              style={{
                width: "12vw",
                height: "6vw",
                minWidth: "140px",
                minHeight: "140px",
                maxWidth: "220px",
                maxHeight: "110px",
                overflow: "hidden",
              }}
              onClick={() => setSelectedGame(img)}
            >
              <img
                src={img.src}
                alt={img.game.name}
                className="rounded-xl"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameShow;
