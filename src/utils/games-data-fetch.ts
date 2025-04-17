interface Game {
  id: number;
  name: string;
  description: string;
  images: {
    src: string;
  }[];
  price: number;
  stars: number;
}

export const fetchGamesData = (): Game[] => {
  if (typeof window === "undefined") {
    // Si nous sommes côté serveur, on retourne un tableau vide
    return [];
  }

  try {
    // On peut utiliser localStorage ici car on sait que nous sommes côté client
    const allGames = localStorage.getItem("games");

    if (allGames) {
      const parsedData: Game[] = JSON.parse(allGames);

      return parsedData.map((game) => ({
        id: game.id,
        name: game.name,
        description: game.description,
        images: game.images[0]?.src ? [{ src: game.images[0].src }] : [],
        price: game.price,
        stars: game.stars,
      }));
    }

    return [];
  } catch (error) {
    console.error("Error fetching games data:", error);
    return [];
  }
};
