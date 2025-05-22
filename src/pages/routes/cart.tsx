import { CTA } from "@/_design/CTA";
import { Typographie } from "@/_design/Typography";
import { Number } from "@/_types/num_type";
import { String } from "@/_types/string_type";
import { Container } from "@/components/container/Container";
import Checkout from "@/components/stripe/CTA.Stripe";
import { useSessionStore } from "@/context/Session.user";
import { CartPricesData } from "@/utils/cart_prices_data";
import { gameboyPack } from "@/utils/gameboy_pack";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Ellipse } from "@/components/pattern/ellipse";

type CartItem = {
  id: Number;
  name: String;
  images: {
    src: String;
  }[];
  price: String;
}[];

const Cart = () => {
  const { token, user } = useSessionStore();
  const [abonnementDuration, setAbonnementDuration] = useState<number | null>(
    null
  );
  const [items, setItems] = useState<CartItem>([]);

  const getItems = () => {
    try {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const cartItems = JSON.parse(cart);
        setItems(cartItems);
      }
    } catch (error) {
      console.error("Error loading cart:", error);
      setItems([]);
    }
  };

  const deleteItem = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedItems));

      // 🔁 Vérifie s’il reste encore un pack dans le panier
      const isStillPack = updatedItems.some(
        (item) => isPack(item) // à définir plus bas
      );

      if (!isStillPack) {
        localStorage.removeItem("packIsSelected");
      }
    }
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const isPack = (item: any) => {
    const packIds = gameboyPack.map((pack) => pack.id);
    return packIds.includes(item.id);
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     console.log("token", token);
  //     if (!token) {
  //       router.push("/");
  //     }
  //   }
  // }, [token, router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      getItems();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const duration = parseFloat(localStorage.getItem("duration") ?? "0");
      setAbonnementDuration(duration);
    }
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <Container
      paddingX={270}
      paddingY={100}
      className="flex flex-col gap-12 items-start justify-start"
    >
      <Ellipse top={-10} left={82} backgroundColor="#4845E5" width={20} blur={150} className=""/>
      <Ellipse top={0} left={-30} backgroundColor="#45E5C5" width={50} blur={250} className=""/>
      <Ellipse top={30} left={20} backgroundColor="#4845E5" width={30} blur={250} className=""/>
      <Ellipse top={-20} left={-10} backgroundColor="#4845E5" width={20} blur={150} className=""/>
      <div className="w-full flex flex-col gap-5 items-start justify-center bg-[rgba(69,229,197,0.5)] rounded-3xl p-10">
        <Typographie variant="h3" color="white" fontFamily="Inter" isMedium>
          Panier
        </Typographie>
        <hr className="border-none w-full h-[1px] bg-white" />
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className="flex w-full items-start justify-between border-b pb-8 border-white"
            >
              <div className="flex flex-col h-full items-start justify-between gap-8">
                <Typographie
                  variant="h3"
                  color="white"
                  fontFamily="Inter"
                  isBold
                  className="text-lg font-bold"
                >
                  Retrobox
                </Typographie>
                <div className="flex flex-col gap-4">
                  <Typographie
                    variant="h5"
                    color="white"
                    fontFamily="silkscreen"
                    isMedium
                    className="text-lg font-bold"
                  >
                    {item.name}
                  </Typographie>
                  <Typographie
                    variant="h6"
                    color="white"
                    fontFamily="Inter"
                    isBold
                    className="text-gray-500"
                  >
                    {item.price} € à l’achat
                  </Typographie>
                  <Typographie
                    variant="h6"
                    color="white"
                    fontFamily="Inter"
                    isMedium
                    className="text-gray-500"
                  >
                    60 €/mois ensuite
                  </Typographie>
                </div>
                <div className="flex h-full items-start justify-start flex-col gap-4">
                  <Typographie
                    variant="h6"
                    color="white"
                    fontFamily="Inter"
                    isMedium
                    className="text-lg font-bold"
                  >
                    • Un jeu tout les mois
                  </Typographie>
                  <Typographie
                    variant="h6"
                    color="white"
                    fontFamily="Inter"
                    isMedium
                    className="text-gray-500"
                  >
                    • Du merch officiel
                  </Typographie>
                  <Typographie
                    variant="h6"
                    color="white"
                    fontFamily="Inter"
                    isMedium
                    className="text-gray-500"
                  >
                    • Annulez à tout moment
                  </Typographie>
                </div>
              </div>
              <div className="relative w-[200px] h-[200px] flex items-center overflow-hidden">
                <Image
                  src={item.images[0].src}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="absolute object-cover w-max h-max bg-cover"
                />
              </div>
              <CTA
                onClick={() => deleteItem(item.id)}
                variant="primary"
                className="bg-red-500 border-none"
              >
                Supprimer
              </CTA>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-white">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col gap-5 items-start justify-center bg-[rgba(69,229,197,0.5)] rounded-3xl p-10">
        <Typographie variant="h3" color="white" fontFamily="Inter" isMedium>
          Total
        </Typographie>
        <div className="flex flex-col h-max w-full items-start">
          {CartPricesData.map((item, index) => (
            <div
              className={clsx(
                "flex w-full justify-between items-center border-t border-white py-3.5"
              )}
            >
              <Typographie
                variant="h6"
                color="white"
                fontFamily="Inter"
                className="text-lg font-bold"
              >
                {item.name}
              </Typographie>
              <Typographie
                variant="h6"
                color="white"
                fontFamily="Inter"
                className="text-lg font-bold"
              >
                {index === 0 ? abonnementDuration : item.price}{" "}
                {index === 0 ? "mois" : "€"}
              </Typographie>
            </div>
          ))}
          <div
            className={clsx(
              "flex w-full justify-between items-center border-t border-white py-3.5"
            )}
          >
            <Typographie
              variant="h5"
              color="white"
              fontFamily="Inter"
              isMedium
              className="text-lg font-bold"
            >
              Total
            </Typographie>
            <Typographie
              variant="h5"
              color="white"
              fontFamily="Inter"
              isMedium
              className="text-lg font-bold"
            >
              {getTotalPrice()} €
            </Typographie>
          </div>
          {items.length > 0 && (
            <div className="w-full mt-6">
              <Checkout
                name={user.name}
                amount={getTotalPrice()}
                customerEmail={user.email}
                customerName={user.name}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
