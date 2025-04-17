import { CTA } from "@/_design/CTA";
import { String } from "@/_types/string_type";
import { useSessionStore } from "@/context/Session.user";
import { authClient } from "@/utils/auth-client";
import Image from "next/image";
import { useRouter } from "next/router";

interface Props {
  path: String;
}

export const Navigation_Bar = ({ path = "/" }: Props) => {
  const { token } = useSessionStore();
  const router = useRouter();

  const isActive = "bg-blue-500 border-none";

  const logOut = async () => {
    await authClient.signOut();
  };

  return (
    <section className="topBar sticky top-0 w-full h-20 z-10 flex gap-10 lg:gap-[180px] justify-between items-center px-4">
      <Image
        src="/images/logo/logo-retro-box.png"
        alt="Logo Retro Box"
        width={50}
        height={50}
      />
      <nav className="flex gap-4 ml-4">
        <CTA
          variant="primary"
          href="/"
          className={path === "/" ? isActive : ""}
        >
          Accueil
        </CTA>
        <CTA
          variant="primary"
          href="../routes/jeux"
          className={path.includes("jeux") ? isActive : ""}
        >
          Retrobox
        </CTA>
      </nav>
      <div className="w-full flex items-center gap-4">
        <CTA
          variant="primary"
          href={token ? "/" : "../routes/LogIn"}
          onClick={() => token && logOut()}
          className="ml-auto"
        >
          {token ? "Se déconnecter" : "Connexion"}
        </CTA>
        <Image
          className="hover:opacity-75"
          src="/images/cart.svg"
          onClick={() => router.push(`/routes/cart`)}
          alt="cart icon"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
};
