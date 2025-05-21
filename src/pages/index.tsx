import { Typographie } from "@/_design/Typography";
import { Boutique } from "@/components/boutique/blocks/boutique";
import { Cards } from "@/components/card/Cards";
import GameShow from "@/components/gameShow";
import { Header } from "@/components/header/Header";
import LatestLeft from "@/components/latestLeft";
import { Ellipse } from "@/components/pattern/ellipse";
import GamesShower from "@/components/sections/gamesShower";
import { HowItWorks } from "@/components/sections/howItWorks";
import { NosSouvenirs } from "@/components/sections/memory";
import { fetchGamesData } from "@/utils/games-data-fetch";

export default function Home() {
  const games = fetchGamesData();

  return (
    <div className="flex flex-col gap-32 h-fit">

      <Ellipse top={60} left={-10} backgroundColor="#4845E5" width={20} blur={150} className=""/>
      <Ellipse top={90} left={85} backgroundColor="#45E5C5" width={30} blur={200} className=""/>
      <Ellipse top={120} left={85} backgroundColor="#45E5C5" width={30} blur={200} className=""/>
      <Ellipse top={130} left={60} backgroundColor="#4845E5" width={30} blur={250} className=""/>
      <Ellipse top={140} left={45} backgroundColor="#45E5C5" width={30} blur={250} className=""/>
      <Ellipse top={320} left={-50} backgroundColor="#45E5C5" width={70} blur={250} className=""/>
      <Ellipse top={360} left={80} backgroundColor="#4845E5" width={30} blur={250} className=""/>
      <Ellipse top={400} left={-50} backgroundColor="#4845E5" width={70} blur={250} className=""/>
      <Ellipse top={400} left={80} backgroundColor="#45E5C5" width={40} blur={250} className=""/>
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

      <GameShow/>

      <GamesShower />

      <Cards />
    </div>
  );
}
