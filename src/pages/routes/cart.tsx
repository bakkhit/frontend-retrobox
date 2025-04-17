import { useEffect, useState } from "react";

type CartItem = {
  name: string;
  image: string;
  price: string;
};

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const getItems = () => {
    if (typeof window !== "undefined") {
      setItems(
        localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart")!)
          : []
      );
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <section className="text-white">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mr-4"
              />
              <div>
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Remove
            </button>
          </div>
        ))
      ) : (
        <div>No item found</div>
      )}
    </section>
  );
};

export default Cart;
