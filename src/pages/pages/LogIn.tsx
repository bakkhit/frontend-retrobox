import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header className="w-full h-20 flex justify-between items-center bg-blue-500 px-4 sticky top-0">
        <p className="text-white font-bold">RetroBox</p>
        <nav className="flex gap-4 ml-4">
          <a href="#" className="text-white border border-white px-2 py-1 rounded-full">Retrobox</a>
          <a href="#" className="text-white border border-white px-2 py-1 rounded-full">Jeux</a>
          <a href="#" className="text-white border border-white px-2 py-1 rounded-full">Console</a>
          <a href="#" className="text-white border border-white px-2 py-1 rounded-full">Actualités</a>
          <a href="#" className="text-white border border-white px-2 py-1 rounded-full">Boutique</a>
        </nav>
        <a href="../pages/LogIn.tsx" className="text-white border border-white px-2 py-1 rounded-full ml-auto">Connexion</a>
      </header>
      <div className="flex flex-col md:flex-row justify-around bg-black h-fit">
        <div className="mt-10 ml-4 md:ml-10 w-full md:w-1/4">
          <span className="text-blue-700 text-5xl font-bold">La Retrobox</span><br /><br />
          <p className="text-white">C’est l’occasion parfaite de se rassembler autour de jeux multijoueurs, de partager des émotions et de transmettre une passion de génération en génération. Un cadeau original pour les nostalgiques !<br /><br />
            Chaque box peut inclure des goodies rétro (t-shirts, posters, porte-clés), des défis pour pimenter les parties, et un code d'accès à des jeux numériques.</p> <br />
          <button className="border border-black px-2 py-1 rounded-full">Abonnement</button>
        </div>
        <div className="w-full md:w-auto">
          <Image src="/images/consoleImage1.png" alt="Image Console" width={900} height={300} />
        </div>
      </div>
        <Image src="/images/mario.png" alt="Mario" layout="responsive" width={100} height={100} />
      <div>
        <div className="h-fit flex justify-center items-center bg-slate-950 flex-col">
          <p className="text-5xl text-white font-thin mt-[15%] mb-[5%]">Console</p>
          <div className="consoleContainer flex gap-4">
            <div className="w-[300px] h-[550px] bg-zinc-400 rounded-[20px]"></div>
            <div className="w-[300px] h-[550px] bg-zinc-400 rounded-[20px]"></div>
            <div className="w-[300px] h-[550px] bg-zinc-400 rounded-[20px]"></div>
            <div className="w-[300px] h-[550px] bg-zinc-400 rounded-[20px]"></div>
          </div>
          <p className="text-5xl text-white font-thin mt-[15%] mb-[5%]">Maintenant Disponible</p>
        </div>
      </div>
    </div>
  );
}