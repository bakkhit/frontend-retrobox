import { CTA } from "@/_design/CTA";
import { useSessionStore } from "@/context/Session.user";
import Image from "next/image";

export const Navigation_Bar = () => {
  const { token } = useSessionStore();

  return (
    <section className="topBar sticky top-0 w-full h-20 z-10 flex gap-[180px] justify-between items-center px-4">
      <Image
        src="/images/logo/logo-retro-box.png"
        alt="Logo Retro Box"
        width={50}
        height={50}
      />
      <nav className="flex gap-4 ml-4">
        <CTA variant="primary" href="/">
          Accueil
        </CTA>
        <CTA variant="primary" href="../routes/jeux">
          Retrobox
        </CTA>
      </nav>
      <CTA
        variant="primary"
        href={token ? "../routes/monCompte" : "../routes/LogIn"}
        className="ml-auto"
      >
        {token ? "Mon compte" : "Connexion"}
      </CTA>
    </section>
  );
};
