import Image from "next/image";
import Link from "next/link";

export const GameBtn = () => {
  return (
    <Link
      href="/routes/jeux"
      className="w-60 h-60 overflow-hidden fixed bottom-0 right-2 hover:opacity-70 transition-all duration-150 ease-in-out z-20"
    >
      <Image
        src="/svg/GameBtnIcone.svg"
        alt="game btn"
        className="w-max h-max abosolute bg-cover"
        width={63}
        height={63}
      />
    </Link>
  );
};
