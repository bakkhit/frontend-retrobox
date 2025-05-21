import { Typographie } from "@/_design/Typography";
import Image from "next/image";

export const NosSouvenirs = () => {
  return (
    <section className="relative w-full h-fit bg-[#18181b] -translate-y-19">
      <div className="relative w-full h-[100vh]">
        <Image
          src={"/svg/nosSouvenir.svg"}
          alt="Nos Souvenirs"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute top-[10vh] right-[10vw] h-fit w-[30vw] p-[3vw] bg-gray-800 bg-opacity-90 rounded-xl z-10">
          <Typographie
            variant="h5"
            fontFamily="Inter"
            color="white"
            className="leading-loose"
          >
            Dans un monde où tout va toujours plus vite, où les technologies
            évoluent à une vitesse folle, il reste une chose précieuse :
          </Typographie>
          <Typographie
            variant="h2"
            fontFamily="silkscreen"
            color="white"
            isWhiteNeon
            className="mt-[2vw] text-center leading-loose"
          >
            NOS SOUVENIR
          </Typographie>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none bg-gradient-to-b from-transparent to-[#18181b] z-5" />
        <Image
          src="/images/gamesIcon.png"
          alt="gamesIcon"
          width={600}
          height={100}
          className="z-20"
        />
      </div>
      {/* Contenu du bas, collé à l'image */}
      <div className="w-full flex flex-col gap-8 pb-16 bg-[#050D1D]">
        <div className="w-[30vw] bg-gray-800 bg-opacity-90 rounded-xl p-[1.5vw] text-end ml-[15vw] z-10">
          <Typographie
            variant="h5"
            fontFamily="Inter"
            color="white"
            className="leading-loose"
          >
            Ces moments passés devant une vieille télévision, une manette en
            main, à s’émerveiller devant nos jeux préférer. Ces soirées entre
            amis ou en famille, à se défier sur des jeux devenus cultes.
          </Typographie>
        </div>
        <div className="w-fit flex flex-wrap justify-center ml-[15vw] mt-[-5vw] z-10">
          <Image
            src="/images/console/consoles1.png"
            alt="consolesImage"
            width={600}
            height={100}
            className="rounded-xl"
          />
        </div>
        <div className="w-fit flex flex-wrap justify-center ml-[38vw] mt-[-50vw] z-9">
          <Image
            src="/images/console/consoles2.png"
            alt="consolesImage"
            width={1000}
            height={100}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
