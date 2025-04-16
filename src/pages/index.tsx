import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import data from "../pages/api/games";
import GameShow from "../components/gameShow";
import LatestLeft from "../components/latestLeft";
import LatestRight from "../components/latestRight";
import { Boutique } from "@/components/boutique/blocks/boutique";
import { Cards } from "@/components/card/Cards";

const games = data;

export default function Home() {
  return (
    <div className="h-fit">
      <Header />

      <main className="flex flex-col md:flex-row justify-around items-center bg-slate-950 h-fit">
        <section className="mt-10 ml-4 ml-[10%] w-full md:w-1/4">
          <h1 className="neon-text text-blue-700 text-4xl font-medium">La Retrobox</h1><br /><br />
          <p className="text-white">
            C’est l’occasion parfaite de se rassembler autour de jeux multijoueurs, de partager des émotions et de transmettre une passion de génération en génération. Un cadeau original pour les nostalgiques !<br /><br />
            Chaque box peut inclure des goodies rétro (t-shirts, posters, porte-clés), des défis pour pimenter les parties, et un code d'accès à des jeux numériques.
          </p><br />
          <button className="border border-white text-white px-2 py-1 rounded-full">Abonnement</button>
        </section>
        <section className="w-full md:w-auto">
          <Image src="/images/retroboxMockup.png" alt="Image Console" width={900} height={300} />
        </section>
      </main>
      
      <section>
        <GameShow data={data} />
      </section>

      <section>
        <div className="h-fit grid bg-slate-950">

          <h1 className="font-[silkscreen] text-white text-center text-5xl mt-20">MAINTENANT DISPONIBLE</h1>
          <LatestLeft data={games} />
          <LatestRight data={games} />
          
          <Footer />
        </div>
      </section>
    </div>
  );
}