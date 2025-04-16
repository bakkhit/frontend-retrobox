import { Typographie } from "@/_design/Typography";
import { Number } from "@/_types/num_type";
import { String } from "@/_types/string_type";
import { useEffect, useState } from "react";
import { Card } from "./Card";

const BACK_URL = process.env.NEXT_PUBLIC_BACKEND_WEBSITE_URL;
const BACK_VERSION = process.env.NEXT_PUBLIC_BACKEND_VERSION;

type Consoles_Data = {
  name?: String;
  description?: String;
  images?: string;
  price?: Number;
  stars?: Number;
};

export const Cards = () => {
  const [consoles, setConsoles] = useState<Consoles_Data[]>([]);

  useEffect(() => {
    const fetch_consoles = async () => {
      try {
        const res = await fetch(`${BACK_URL}/api/${BACK_VERSION}/consoles`);
        const json = await res.json();
        setConsoles(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetch_consoles();
  }, []);
  return (
    <section className="w-full h-max flex flex-col gap-8 items-center justify-center">
      <Typographie variant="h1" color="white" fontFamily="Inter">
        Console
      </Typographie>
      <div className="flex items-center justify-center gap-4">
        {consoles.map((console) => (
          <Card
            img={console.images ?? ""}
            title={console.name ?? "Error"}
            subtitle={console.description ?? "Error"}
          />
        ))}
      </div>
    </section>
  );
};
