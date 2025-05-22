import { Typographie } from "@/_design/Typography";
import { Boutique } from "@/components/boutique/blocks/boutique";
import { fetch_consoles } from "@/components/boutique/logique/fetch/console";
import { Card } from "@/components/card/Card";
import { Container } from "@/components/container/Container";
import TimeSlide from "@/components/sections/timeSlide";
import { useConsoleStore } from "@/context/Consoles.data";
import { gameboyPack } from "@/utils/gameboy_pack";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Ellipse } from "@/components/pattern/ellipse";

type ConsoleType = {
  id: number;
  name?: string;
  price?: number;
  description?: string;
  images?: { src: string }[];
  [key: string]: any;
};

const retrobox = () => {
  const { setConsole, fetchedConsoles } = useConsoleStore();
  const [selectedConsoles, setSelectedConsoles] = useState<ConsoleType[]>([]);
  const [packisSelected, setPackIsSelected] = useState(false);
  const [cartPackIds, setCartPackIds] = useState<number[]>([]);

  const toggleConsole = (console: any) => {
    const isSelected = selectedConsoles.find((c) => c.id === console.id);

    if (isSelected) {
      // Remove from selection
      setSelectedConsoles((prev) => prev.filter((c) => c.id !== console.id));
    } else {
      // Add to selection
      setSelectedConsoles((prev) => [...prev, console]);
    }
  };

  const saveToLocalStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(selectedConsoles));
    }
    console.log("Consoles ajoutées au panier :", selectedConsoles);
  };

  const handleAddPackToCart = (pack: any) => {
    try {
      const existingCart = localStorage.getItem("cart");
      const cart: ConsoleType[] = existingCart ? JSON.parse(existingCart) : [];

      // Vérifie si ce pack est déjà dans le panier
      const isAlreadyInCart = cart.some((item) => item.id === pack.id);
      if (isAlreadyInCart) return;

      const formattedPack: ConsoleType = {
        id: pack.id,
        name: pack.name,
        description: "", // si tu n'en as pas, tu peux laisser vide
        price: pack.price,
        images: [{ src: pack.src }],
      };

      const newCart = [...cart, formattedPack];
      localStorage.setItem("cart", JSON.stringify(newCart));
      console.log("Pack ajouté au panier :", formattedPack);

      // ✅ Met à jour immédiatement l'état local
      setCartPackIds((prev) => [...prev, pack.id]);

      localStorage.setItem("packIsSelected", "true");
      setPackIsSelected(true);
    } catch (error) {
      console.error("Erreur lors de l'ajout du pack :", error);
    }
  };

  const removeFromLocalStorage = (consoleId: number) => {
    const updated = selectedConsoles.filter((c) => c.id !== consoleId);
    setSelectedConsoles(updated);

    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) {
        try {
          const cart = JSON.parse(stored);
          const newCart = cart.filter((c: any) => c.id !== consoleId);
          localStorage.setItem("cart", JSON.stringify(newCart));
        } catch (e) {
          console.error("Erreur suppression localStorage:", e);
        }
      }
    }
  };

  const isConsoleInLocalStorage = (consoleId: number): boolean => {
    if (typeof window === "undefined") return false;

    const stored = localStorage.getItem("cart");
    if (!stored) return false;

    try {
      const cart = JSON.parse(stored);
      return Array.isArray(cart) && cart.some((c) => c.id === consoleId);
    } catch (e) {
      console.error("Erreur parsing localStorage:", e);
      return false;
    }
  };

  useEffect(() => {
    if (fetchedConsoles.length === 0) {
      fetch_consoles(setConsole);
    }
  }, []);

  useEffect(() => {
    const savedPackState = localStorage.getItem("packIsSelected");
    if (savedPackState === "true") {
      setPackIsSelected(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          const cartItems = JSON.parse(storedCart);
          const ids = cartItems.map((item: any) => item.id);
          setCartPackIds(ids);
        } catch (err) {
          console.error("Erreur parsing cart:", err);
        }
      }
    }
  }, []);

  useEffect(() => {
    console.log("fetchedConsoles a changé :", fetchedConsoles);
  }, [fetchedConsoles]);

  return (
    <Container
      paddingX={270}
      paddingY={100}
      className="flex flex-col items-center justify-center gap-32 h-fit z-1"
    >
      <Ellipse
        top={-10}
        left={-10}
        backgroundColor="#4845E5"
        width={20}
        blur={150}
        className=""
      />
      <Ellipse
        top={5}
        left={-10}
        backgroundColor="#4845E5"
        width={20}
        blur={150}
        className=""
      />
      <Ellipse
        top={45}
        left={10}
        backgroundColor="#4845E5"
        width={20}
        blur={150}
        className=""
      />
      <Ellipse
        top={50}
        left={0}
        backgroundColor="#4845E5"
        width={20}
        blur={150}
        className=""
      />
      <Ellipse
        top={15}
        left={70}
        backgroundColor="#45E5C5"
        width={50}
        blur={250}
        className=""
      />
      <Ellipse
        top={80}
        left={10}
        backgroundColor="#45E5C5"
        width={80}
        blur={600}
        className=""
      />
      <Ellipse
        top={100}
        left={0}
        backgroundColor="#45E5C5"
        width={50}
        blur={600}
        className=""
      />
      <Ellipse
        top={80}
        left={70}
        backgroundColor="#4845E5"
        width={50}
        blur={250}
        className=""
      />
      <Ellipse
        top={250}
        left={0}
        backgroundColor="#4845E5"
        width={50}
        blur={350}
        className=""
      />
      <Typographie variant="h1" fontFamily="silkscreen" color="white">
        Personnalise ta Retrobox !
      </Typographie>
      <div className="flex flex-col items-start justify-center w-full gap-10">
        <Typographie variant="h2" fontFamily="silkscreen" color="white">
          Pack déjà prêt pour vous
        </Typographie>
        <div className="flex items-center justify-center w-full gap-4 flex-wrap">
          {gameboyPack.map((pack) => {
            const isAlreadyInCart = cartPackIds.includes(pack.id);
            return (
              <div
                className={clsx(
                  isAlreadyInCart && "border border-white rounded-[20px]",
                  "w-max h-max cursor-pointer z-1 transition-opacity duration-200 hover:opacity-80"
                )}
                key={pack.id}
                onClick={() => handleAddPackToCart(pack)}
              >
                <Card
                  type="forRetrobox"
                  options={Object.values(pack.options)}
                  price={pack.price}
                  img={pack.src}
                  title={pack.name}
                  subtitle=""
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* SECOND SECTION */}

      <div className="flex flex-col items-start justify-center gap-15 w-full bg-[#45E5C5]/50 h-fit rounded-3xl p-18">
        <div className="flex w-full items-center justify-start gap-10">
          <Typographie variant="h2" fontFamily="silkscreen" color="white">
            Consoles
          </Typographie>
          <Typographie variant="h4" fontFamily="Inter" color="white">
            Cliquez pour choisir une console à tester !
          </Typographie>
        </div>
        <div className="flex overflow-x-scroll w-full items-start justify-start gap-4">
          {fetchedConsoles.map((console: ConsoleType, index: number) => {
            const isSelected = selectedConsoles.some(
              (c) => String(c.id) === String(console.id)
            );

            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <div
                  className={`w-max h-max cursor-pointer transition-opacity duration-200 ${
                    isSelected ? "opacity-50" : "opacity-100"
                  }`}
                  onClick={() => toggleConsole(console)}
                >
                  <Card
                    img={console.images?.[0]?.src ?? ""}
                    title={console.name ?? "Error"}
                    subtitle={console.description ?? "Error"}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-max flex items-center justify-center gap-4">
          <div className="w-max flex items-center justify-center gap-4">
            {selectedConsoles.length > 0 &&
            !selectedConsoles.some((c) => isConsoleInLocalStorage(c.id)) ? (
              <button
                className={clsx(
                  packisSelected && "opacity-50 pointer-events-none",
                  "py-1 px-4 rounded-full border border-white text-white cursor-pointer hover:opacity-80 hover:bg-white/10 transition-all duration-200 ease-in-out"
                )}
                onClick={saveToLocalStorage}
              >
                J’aimerai avoir cette console
              </button>
            ) : (
              selectedConsoles.some((c) => isConsoleInLocalStorage(c.id)) && (
                <button
                  className={clsx(
                    packisSelected && "opacity-50 pointer-events-none",
                    "py-1 px-4 rounded-full border bg-white/10 border-white text-white cursor-pointer hover:opacity-80 hover:bg-white/10 transition-all duration-200 ease-in-out"
                  )}
                  onClick={() => {
                    const toRemove = selectedConsoles.find((c) =>
                      isConsoleInLocalStorage(c.id)
                    );
                    if (toRemove) removeFromLocalStorage(toRemove.id);
                  }}
                >
                  Je possède déjà cette console
                </button>
              )
            )}
          </div>
        </div>
      </div>
      <Boutique toggle={packisSelected} />
      <TimeSlide />
      {/* <div className="flex flex-col items-center justify-center gap-7">
        <button
          className="py-1 px-4 rounded-full border border-white text-white cursor-pointer hover:opacity-80 hover:bg-white/10 transition-all duration-200 ease-in-out"
          onClick={saveToLocalStorage}
        >
          Valider la personnalisation
        </button>
        <div className="flex flex-col items-center justify-center gap-4">
          <Typographie variant="h6" fontFamily="Inter" color="white">
            Attention vous ne pouvez pas acheter un pack et une boîte
            personnalisé en même temps.
          </Typographie>
          <Typographie variant="h6" fontFamily="Inter" color="white">
            Vous ne pouvez prendre qu’un pack ou une boîte par commande.
          </Typographie>
        </div>
      </div> */}
    </Container>
  );
};

export default retrobox;
