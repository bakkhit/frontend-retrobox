import { Typographie } from "@/_design/Typography";
import { Boutique } from "@/components/boutique/blocks/boutique";
import { Cards } from "@/components/card/Cards";
import GameShow from "@/components/gameShow";
import { Header } from "@/components/header/Header";
import LatestLeft from "@/components/latestLeft";
import GamesShower from "@/components/sections/gamesShower";
import { HowItWorks } from "@/components/sections/howItWorks";
import { NosSouvenirs } from "@/components/sections/memory";
import { fetchGamesData } from "@/utils/games-data-fetch";

export default function Home() {
  const games = fetchGamesData();

  return (
    <div className="flex flex-col gap-32 h-fit">
      <NosSouvenirs />
      <Header />

      {/* <LatestLeft
        data={[
          {
            id: 1,
            name: "example game",
            description: "example description",
            price: 20,
            console: "example console",
            img: "/images/jumanji.png",
            vignette: "/images/jumanji.png",
            pegi: 12,
            genre: "example genre",
            video:
              "https://www.youtube.com/embed/VbmKRdinlus?si=V1MvQgvhTJkCiTmE",
          },
        ]}
      /> */}

      <Typographie
        variant="h1"
        fontFamily="silkscreen"
        color="white"
        className="text-center"
      >
        Comment ça fonctionne ?
      </Typographie>

      <HowItWorks />

      <Typographie
        variant="h1"
        fontFamily="silkscreen"
        color="white"
        className="text-center"
      >
        Nos jeux disponible
      </Typographie>

      <GameShow
        data={games.map((game) => ({
          id: game.id,
          name: game.name,
          description: game.description,
          price: game.price,
          img: game.images[0]?.src || "/default-image.jpg", // Image par défaut si src est manquant
          vignette: game.images[0]?.src || "/default-vignette.jpg", // Image par défaut pour la vignette
        }))}
      />

      <GamesShower />

      <Cards />
    </div>
  );
}
