import { Typographie } from "@/_design/Typography";
import { Number } from "@/_types/num_type";
import { String } from "@/_types/string_type";
import Image from "next/image";

interface CardProps {
  img: String;
  title: String;
  subtitle: String;
}

export const Card = ({ img, title, subtitle }: CardProps) => {
  return (
    <div className="relative flex flex-col items-center justify-center max-w-[330px] w-full rounded-[20px] gap-6 h-max bg-[#4642ED] p-5">
      <div className="flex items-center justify-center relative w-full h-80 bg-[#0A1834] rounded-2xl px-3.5">
        <Image src={img} alt="img" width={290} height={370} />
      </div>
      <div className="flex flex-col w-full h-max items-start justify-center gap-2.5">
        <Typographie
          variant="h4"
          color="white"
          fontFamily="Inter"
          isMedium
          className="w-full"
        >
          {title}
        </Typographie>
        <Typographie
          variant="h5"
          color="white"
          fontFamily="Inter"
          className="w-full"
        >
          {subtitle}
        </Typographie>
      </div>
    </div>
  );
};
