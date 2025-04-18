import { useState } from "react";

type Game = {
    id: number;
    name: string;
    description: string;
    price: number;
    console: string;
    img: string;
    vignette: string;
    pegi: number;
    genre: string;
    color: string; // couleur personnalisée
};

type Props = {
    data: Game[];
};

const GameShow = ({ data }: Props) => {
    const [selectedGame, setSelectedGame] = useState<Game>(data[0]);

    return (
        <section
            className="relative w-full h-[58vw] bg-cover bg-no-repeat bg-center p-10 transition-all duration-500 bg-black"
            style={{ backgroundImage: `url(${selectedGame.img})` }}
        >
            {/* Dégradé gauche */}
            <div
                className="absolute top-0 left-0 w-[30%] h-full z-0"
                style={{
                    background: `linear-gradient(to right, ${selectedGame.color}, transparent)`
                }}
            ></div>

            {/* Texte jeu sélectionné */}
            <div className="text-white w-[25%] mt-[13vw] ml-[13vw] text-[1vw] z-10 relative">
                <h2 className="text-[2vw] font-bold mb-2">{selectedGame.name}</h2>
                <p className="mb-4">{selectedGame.description}</p>
            </div>

            {/* Vignettes des autres jeux */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-4 z-10">
                {data.slice(0, 6).map((game) => (
                    <img
                        key={game.id}
                        src={game.vignette}
                        alt={game.name}
                        onClick={() => setSelectedGame(game)}
                        className={`w-[10vw] object-cover rounded-xl cursor-pointer transition-transform duration-300 border-4 ${selectedGame.id === game.id
                            ? "border-white scale-105"
                            : "border-transparent hover:scale-105"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default GameShow;
