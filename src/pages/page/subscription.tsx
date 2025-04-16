import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import data from "../api/games";

export default function Subscription() {
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
                    <Image src="/images/subPres.png" alt="Image Console" width={900} height={300} />
                </section>
            </main>
            <main className="flex bg-[url('/images/subPres2.png')] bg-cover bg-no-repeat bg-center h-[52vw] text-right">
                <section className="absolute right-[15%] font-[silkscreen]">
                    <h1 className="neon-text2 mt-[30%] text-4xl text-[#45E5C5]">QUI SOMMES NOUS ?</h1>
                    <p className="w-[35vw] text-white">La RetroBox est une startup spécialisée dans la création de box souvenir avec une grande gamme de jeu vidéo. <br /><br />

                        Elle propose des box permettant de jouer à des milliers de jeux rétro sur des téléviseurs modernes, avec une interface fluide et intuitive.<br /><br />

                        Son objectif est de rendre le retrogaming accessible à tous, en offrant une solution simple, nostalgique et légale pour redécouvrir les classiques du jeu vidéo.<br /><br />
                    </p>
                </section>
            </main>
        </div>
    );
}