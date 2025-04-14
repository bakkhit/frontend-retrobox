import { Boutique } from "@/components/boutique/blocks/boutique";
import { Cards } from "@/components/card/Cards";
import { Header } from "@/components/header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 overflow-x-hidden h-fit">
      <Header />

      <Image
        src="/images/mario.png"
        alt="Mario"
        layout="responsive"
        width={100}
        height={100}
      />

      <Cards />

      <section>
        <div className="h-fit grid bg-slate-950">
          <Boutique />
          <footer className="h-[336px] bg-blue-700">
            <div className="text-white mt-10 ml-[11%] text-4xl font-thin mb-[1%]">
              <h2>Retro</h2>
              <h2>Box</h2>
            </div>
            <div className="grid grid-cols-3 ml-[11%] w-fit gap-[70px]">
              <div className="text-white font-thin">
                <p className="font-medium mb-[1%]">Infos</p>
                <a href="#" className="block">
                  Mentions juridique
                </a>
                <a href="#" className="block">
                  Politique de confidentialité
                </a>
                <a href="#" className="block">
                  Conditions d'utilisation du site web
                </a>
                <a href="#" className="block">
                  Plan du site
                </a>
              </div>
              <div className="text-white font-thin">
                <p className="font-medium mb-[1%]">Valeurs</p>
                <a href="#" className="block">
                  Environnement
                </a>
                <a href="#" className="block">
                  Accessibilité
                </a>
                <a href="#" className="block">
                  Confidentialité en ligne
                </a>
              </div>
              <div className="text-white font-thin">
                <p className="font-medium mb-[1%]">Connexion</p>
                <a href="#" className="block">
                  Application iOS
                </a>
                <a href="#" className="block">
                  Application Android
                </a>
                <div className="flex gap-2 mt-2 l-0">
                  <a href="#">
                    <Image
                      src="/images/Instagram.png"
                      alt="Image Console"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/images/Facebook.png"
                      alt="Image Console"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href="#">
                    <Image
                      src="/images/Youtube.png"
                      alt="Image Console"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
