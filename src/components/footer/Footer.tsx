import Image from "next/image";
import { Container } from "../container/Container";
import { Typographie } from "@/_design/Typography";

export const Footer = () => {
  return (
    <Container
      paddingX={270}
      paddingY={100}
      className="footer flex items-center justify-between bg-[#45E5C5]/50 w-full h-max mt-10"
    >
      {/* LEFT PART */}
      <div className="flex flex-col gap-5.5 items-start justify-center">
        <Image
          src="/images/logo/logo-retro-box.png"
          alt="Logo Retro Box"
          width={70}
          height={70}
        />

        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col gap-7">
            <Typographie variant="h6" fontFamily="Inter" color="white" isBold>
              Infos
            </Typographie>
            <div className="flex flex-col gap-4">
              <Typographie
                variant="a"
                href="/mention-juridique"
                fontFamily="Inter"
                color="white"
              >
                Mentions juridique
              </Typographie>
              <Typographie
                variant="a"
                href="/politique-de-confidentialite"
                fontFamily="Inter"
                color="white"
              >
                Politique de confidentialité
              </Typographie>
              <Typographie
                variant="a"
                href="/conditions"
                fontFamily="Inter"
                color="white"
              >
                Conditions d’utilisation du site web
              </Typographie>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT PART */}
      <div className="flex flex-col gap-5.5 items-end justify-center">
        <Typographie
          variant="h4"
          fontFamily="Inter"
          color="white"
          isBold
          className="text-end w-[280px]"
        >
          Pour que nos souvenirs ne meurent jamais !
        </Typographie>
        <div className="flex items-center justify-center gap-2.5">
          <Image src="/svg/Instagram.svg" alt="insta" width={28} height={28} />
          <Image
            src="/svg/Facebook.svg"
            alt="Facebook"
            width={28}
            height={28}
          />
          <Image src="/svg/Youtube.svg" alt="Youtube" width={28} height={28} />
        </div>
      </div>
    </Container>
  );
};
