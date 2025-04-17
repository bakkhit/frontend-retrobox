import { Typographie } from "@/_design/Typography";
import { Number } from "@/_types/num_type";
import { String } from "@/_types/string_type";
import Image from "next/image";

interface GameCardProps {
  title: String;
  description: String;
  gender: {
    name: String;
  }[];
  pegi: {
    name: String;
  }[];
  price: Number;
  images: {
    src: String;
  }[];
}

export const GameCard = ({
  title,
  description,
  gender,
  pegi,
  price,
  images,
}: GameCardProps) => {
  return (
    <div className="flex flex-col gap-2.5 items-start w-max justify-center text-white">
      <Image
        src={images[0].src}
        alt={`image ${title}`}
        width={250}
        height={250}
      />
      <div className="flex items-center justify-between w-full">
        <Typographie
          variant="h5"
          fontFamily="Inter"
          color="white"
          className="capitalize"
        >
          {title}
        </Typographie>
        <Typographie variant="h5" fontFamily="Inter" color="white">
          {price} €
        </Typographie>
      </div>
    </div>
  );
};
