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
};

type Props = {
    data: Game[];
};

const GameShow = ({ data }: Props) => {
    const [selectedGame, setSelectedGame] = useState<Game>(data[0]);

    return (
        <section
            className="w-[100vw] h-[100%] bg-cover bg-center bg-no-repeat p-10 transition-all duration-500 bg-black"
            style={{ backgroundImage: `url(${selectedGame.img})` }}
        >
            <div className="text-white w-[25%] m-[13vw] text-[1vw]">
                <h2 className="text-[2vw] font-bold mb-2">{selectedGame.name}</h2>
                <p className="mb-4">{selectedGame.description}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
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