import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const GamesShower = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState<GameImage[]>([]);

  useEffect(() => {
    const url = "/api/games/images";
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("HTTP status " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setImages(data);
      })
      .catch(() => {
        setImages([]);
      });
  }, []);

  const srcList1 = shuffleArray(images.map((img) => img.src).filter(Boolean));
  const srcList2 = shuffleArray(images.map((img) => img.src).filter(Boolean));
  const srcList3 = shuffleArray(images.map((img) => img.src).filter(Boolean));
  const repeatedSrcs1 = [...srcList1, ...srcList1];
  const repeatedSrcs2 = [...srcList2, ...srcList2];
  const repeatedSrcs3 = [...srcList3, ...srcList3];

  return (
    <div className="relative w-full h-[35vw] min-h-[250px] max-h-[600px] flex flex-col justify-between gap-[1vw]">
      {/* Bande 1 : gauche -> droite */}
      <div className="w-full overflow-hidden">
        <div className="infinite-scroll h-[10vw] items-center">
          {repeatedSrcs1.map((src, index) => (
            <div
              key={`b1-${index}`}
              className="bg-center bg-cover flex-shrink-0 rounded-xl"
              style={{
                backgroundImage: `url(${src})`,
                width: "10vw",
                minWidth: 120,
                maxWidth: 220,
                height: "10vw",
                minHeight: 120,
                maxHeight: 220,
              }}
            />
          ))}
        </div>
      </div>
      {/* Bande 2 : droite -> gauche */}
      <div className="w-full overflow-hidden">
        <div className="infinite-scroll-reverse h-[10vw] items-center">
          {repeatedSrcs2.map((src, index) => (
            <div
              key={`b2-${index}`}
              className="bg-center bg-cover flex-shrink-0 rounded-xl"
              style={{
                backgroundImage: `url(${src})`,
                width: "10vw",
                minWidth: 120,
                maxWidth: 220,
                height: "10vw",
                minHeight: 120,
                maxHeight: 220,
              }}
            />
          ))}
        </div>
      </div>
      {/* Bande 3 : gauche -> droite */}
      <div className="w-full overflow-hidden">
        <div className="infinite-scroll h-[10vw] items-center">
          {repeatedSrcs3.map((src, index) => (
            <div
              key={`b3-${index}`}
              className="bg-center bg-cover flex-shrink-0 rounded-xl"
              style={{
                backgroundImage: `url(${src})`,
                width: "10vw",
                minWidth: 120,
                maxWidth: 220,
                height: "10vw",
                minHeight: 120,
                maxHeight: 220,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesShower;