import { getSession } from "@/components/auth/session/getSession";
import { Navigation_Bar } from "@/components/navigation/Navigation_Bar";
import { useSessionStore } from "@/context/Session.user";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { setToken } = useSessionStore();
  const pathname = usePathname();

  useEffect(() => {
    const userSession = async () => {
      const userData = await getSession();

      if (userData) {
        setToken(userData.session.token);
      }
    };

    userSession();
  }, []);

  return (
    <>
      <Navigation_Bar path={pathname} />
      <Component {...pageProps} />
    </>
  );
}
