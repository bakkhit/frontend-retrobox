import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import {data} from "../pages/api/games";

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

      <Image src="/images/mario.png" alt="Mario" layout="responsive" width={100} height={100} />

      <section>
        <div className="h-fit grid bg-slate-950">
          <h2 className="text-5xl text-white font-thin mt-[15%] mb-[5%] justify-self-center">Console</h2>
          <div className="console-container flex gap-4 justify-center">
            <div className="w-[332px] h-[572px] bg-blue-700 rounded-[20px]"></div>
            <div className="w-[332px] h-[572px] bg-blue-700 rounded-[20px]"></div>
            <div className="w-[332px] h-[572px] bg-blue-700 rounded-[20px]"></div>
            <div className="w-[332px] h-[572px] bg-blue-700 rounded-[20px]"></div>
          </div>
          <h2 className="text-5xl text-white font-thin mt-[15%] mb-[5%] justify-self-center">Maintenant Disponible</h2>
          <div className="w-[1376px] h-[580px] bg-zinc-400 justify-self-center mb-[5%]"></div>
          <div className="mb-[5%]">
            <h3 className="text-4xl text-white ml-[20%]">Jeux Vidéo</h3><br /><br />
            <div className="w-[30%] ml-[20%]">
              <p className="text-md text-white">
                lorem ipsum dolor sit amet. Non velit voluptas ut perspiciatis nemo sit animi voluptatem et repellat minusnam voluptatem nisi! Ut distinctio perspiciatis est cupiditate vero aut explicabo omnis ut sunt quia et quis alias ut incidunt perferendis
              </p><br />
              <button className="border border-white text-white px-5 py-1 rounded-full mr-[5%]">Plus d'info</button>
              <button className="border border-white text-white px-5 py-1 rounded-full">Acheter</button>
            </div>
          </div>
          <div className="mb-[5%]">
            <h3 className="justify-self-center text-white text-5xl font-thin">Boutique</h3><br />
            <div className="flex justify-end mr-[12%]">
              <label className="text-white mr-2"><input type="radio" name="rating1" value="1" /> 1</label>
              <label className="text-white mr-2"><input type="radio" name="rating1" value="2" /> 2</label>
              <label className="text-white"><input type="radio" name="rating1" value="3" /> 3</label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
              <aside className="w-fit ml-[35%]">
                <h4 className="text-white m-[14%] text-3xl">Genre</h4>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Action</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Aventure</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Jeux de rôle</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Tir</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Horreur</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Combat</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Course</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Famille</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Puzzle</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Simulation</label>
                <h4 className="text-white m-[14%] text-3xl">PEGI</h4>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />PEGI 18</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />PEGI 16</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />PEGI 7</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />PEGI 3</label>
                <h4 className="text-white m-[14%] text-3xl">Console</h4>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />PS4</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />PS5</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />PS3</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />PS2</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Nintendo Switch</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Nintendo 3DS</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Xbox Series X</label>
                <label className="block text-white m-[14%]"><input type="checkbox" className="mr-2" />Xbox 360</label>
              </aside>
              <div className="col-span-3 grid grid-cols-3 gap-4 mr-[15%]">
                <article className="w-full h-fit grid">
                  <div className="w-full h-[332px] bg-zinc-400 justify-self-top"></div><br />
                  <div className="flex justify-between w-full">
                    <p className="text-white">Jeux vidéo</p>
                    <p className="text-white">€€€</p>
                  </div>
                  <button className="text-white border border-white px-2 py-1 rounded-full mt-2 self-start w-fit">Acheter</button>
                </article>
                <article className="w-full h-fit grid">
                  <div className="w-full h-[332px] bg-zinc-400 justify-self-top"></div><br />
                  <div className="flex justify-between w-full">
                    <p className="text-white">Jeux vidéo</p>
                    <p className="text-white">€€€</p>
                  </div>
                  <button className="text-white border border-white px-2 py-1 rounded-full mt-2 self-start w-fit">Acheter</button>
                </article>
                <article className="w-full h-fit grid">
                  <div className="w-full h-[332px] bg-zinc-400 justify-self-top"></div><br />
                  <div className="flex justify-between w-full">
                    <p className="text-white">Jeux vidéo</p>
                    <p className="text-white">€€€</p>
                  </div>
                  <button className="text-white border border-white px-2 py-1 rounded-full mt-2 self-start w-fit">Acheter</button>
                </article>
                <article className="w-full h-fit grid">
                  <div className="w-full h-[332px] bg-zinc-400 justify-self-top"></div><br />
                  <div className="flex justify-between w-full">
                    <p className="text-white">Jeux vidéo</p>
                    <p className="text-white">€€€</p>
                  </div>
                  <button className="text-white border border-white px-2 py-1 rounded-full mt-2 self-start w-fit">Acheter</button>
                </article>
                <article className="w-full h-fit grid">
                  <div className="w-full h-[332px] bg-zinc-400 justify-self-top"></div><br />
                  <div className="flex justify-between w-full">
                    <p className="text-white">Jeux vidéo</p>
                    <p className="text-white">€€€</p>
                  </div>
                  <button className="text-white border border-white px-2 py-1 rounded-full mt-2 self-start w-fit">Acheter</button>
                </article>
                <article className="w-full h-fit grid">
                  <div className="w-full h-[332px] bg-zinc-400 justify-self-top"></div><br />
                  <div className="flex justify-between w-full">
                    <p className="text-white">Jeux vidéo</p>
                    <p className="text-white">€€€</p>
                  </div>
                  <button className="text-white border border-white px-2 py-1 rounded-full mt-2 self-start w-fit">Acheter</button>
                </article>
                <article className="w-full h-fit grid">
                  <div className="w-full h-[332px] bg-zinc-400 justify-self-top"></div><br />
                  <div className="flex justify-between w-full">
                    <p className="text-white">Jeux vidéo</p>
                    <p className="text-white">€€€</p>
                  </div>
                  <button className="text-white border border-white px-2 py-1 rounded-full mt-2 self-start w-fit">Acheter</button>
                </article>
                <article className="w-full h-fit grid">
                  <div className="w-full h-[332px] bg-zinc-400 justify-self-top"></div><br />
                  <div className="flex justify-between w-full">
                    <p className="text-white">Jeux vidéo</p>
                    <p className="text-white">€€€</p>
                  </div>
                  <button className="text-white border border-white px-2 py-1 rounded-full mt-2 self-start w-fit">Acheter</button>
                </article>
                <article className="w-full h-fit grid">
                  <div className="w-full h-[332px] bg-zinc-400 justify-self-top"></div><br />
                  <div className="flex justify-between w-full">
                    <p className="text-white">Jeux vidéo</p>
                    <p className="text-white">€€€</p>
                  </div>
                  <button className="text-white border border-white px-2 py-1 rounded-full mt-2 self-start w-fit">Acheter</button>
                </article>
              </div>
            </div>
            <div className="flex justify-end mr-[12%]">
              <label className="text-white mr-2"><input type="radio" name="rating1" value="1" /> 1</label>
              <label className="text-white mr-2"><input type="radio" name="rating1" value="2" /> 2</label>
              <label className="text-white"><input type="radio" name="rating1" value="3" /> 3</label>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
}