import { CTA } from "@/_design/CTA";
import { Typographie } from "@/_design/Typography";
import { Number } from "@/_types/num_type";
import { String } from "@/_types/string_type";
import { Container } from "@/components/container/Container";
import { useSessionStore } from "@/context/Session.user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CartItem = {
  id: Number;
  name: String;
  images: {
    src: String;
  }[];
  price: String;
}[];

const Cart = () => {
  const { token } = useSessionStore();
  const router = useRouter();
  const [items, setItems] = useState<CartItem>([]);

  const getItems = () => {
    try {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const cartItems = JSON.parse(cart);
        setItems([cartItems]);
      }
    } catch (error) {
      console.error("Error loading cart:", error);
      setItems([]);
    }
  };

  const deleteItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(0, 10);
    setItems(updatedItems);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("token", token);
      if (!token) {
        router.push("/");
      }
    }
  }, [token, router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      getItems();
    }
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <Container paddingX={270} paddingY={100}>
      <div className="w-max flex flex-col gap-5 items-start justify-center bg-[rgba(69,229,197,0.5)] rounded-3xl p-10">
        <Typographie variant="h3" color="white" fontFamily="Inter" isMedium>
          Panier
        </Typographie>
        <hr className="border-none w-full h-[1px] bg-white" />
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className="flex w-full items-start justify-between border-b border-white"
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
              <div className="relative w-[300px] h-[300px] flex items-center">
                <Image
                  src="/images/Box-mockups.png"
                  alt={item.name}
                  width={300}
                  height={300}
                  className="absolute object-cover"
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
          <div className="p-4 text-center">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;
