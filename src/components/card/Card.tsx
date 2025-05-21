import { Typographie } from "@/_design/Typography";
import { Number } from "@/_types/num_type";
import { String } from "@/_types/string_type";
import Image from "next/image";

interface CardProps {
  type?: "forRetrobox";
  img: String;
  title: String;
  subtitle: String;
}

interface CardPropsForRetrobox extends CardProps {
  type: "forRetrobox";
  options: {
    name: String;
  }[];
  price: Number;
}

type AllCardProps = CardProps | CardPropsForRetrobox;

export const Card = (props: AllCardProps) => {
  const { type, img, title, subtitle } = props;
  const { options, price } = props as CardPropsForRetrobox;
  return (
    <div
      className="relative flex flex-col items-center justify-start max-w-[330px] w-full rounded-[20px] gap-6 h-[572px] bg-[#4542ed55] p-5"
      {...props}
    >
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
        {!type ? (
          <Typographie
            variant="h5"
            color="white"
            fontFamily="Inter"
            className="w-full"
          >
            {subtitle}
          </Typographie>
        ) : (
          <>
            {options.map((option, index) => (
              <Typographie
                key={index}
                variant="h5"
                color="white"
                fontFamily="Inter"
                className="w-full"
              >
                • {option.name}
              </Typographie>
            ))}
          </>
        )}
        {type === "forRetrobox" && (
          <Typographie
            variant="h5"
            color="white"
            fontFamily="Inter"
            className="w-full text-end"
          >
            {price}€
          </Typographie>
        )}
      </div>
    </div>
  );
};
