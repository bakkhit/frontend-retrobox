import { Typographie } from "@/_design/Typography";
import { Number } from "@/_types/num_type";
import { String } from "@/_types/string_type";
import clsx from "clsx";
import Image from "next/image";

interface GameCardProps {
  onClick: () => void;
  isAdded: boolean;
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
  onClick,
  isAdded,
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
        width={200}
        height={200}
        className="w-[200px] h-[200px] bg-cover"
      />
      <div className="flex items-center justify-between w-full">
        <Typographie
          variant="h5"
          fontFamily="Inter"
          color="white"
          className="capitalize max-w-30 w-full"
        >
          {title}
        </Typographie>
        <Typographie variant="h5" fontFamily="Inter" color="white">
          {price} €
        </Typographie>
      </div>
      <button
        onClick={onClick}
        className={clsx(
          isAdded && "bg-white/20",
          "py-1 px-4 rounded-full border border-white text-white cursor-pointer hover:opacity-80 hover:bg-white/10 transition-all duration-200 ease-in-out"
        )}
      >
        Choisir
      </button>
    </div>
  );
};
