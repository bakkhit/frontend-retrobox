import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="w-full h-20 flex justify-between items-center bg-blue-500 px-4">
        <div className="text-white font-bold">Rétrobox</div>
        <nav className="flex gap-[5%] ml-[10%]">
          <a href="#" className="text-white border border-white px-2 py-1 px-[20px] rounded-full">Jeux</a>
          <a href="#" className="text-white border border-white px-2 py-1 px-[20px] rounded-full">Console</a>
          <a href="#" className="text-white border border-white px-2 py-1 px-[20px] rounded-full">Actualités</a>
          <a href="#" className="text-white border border-white px-2 py-1 px-[20px] rounded-full">Boutique</a>
        </nav>
        <div className="text-white border border-white px-2 py-1 px-[20px] rounded-full ml-auto">Connexion</div>
      </header>
    </div>
  );
}