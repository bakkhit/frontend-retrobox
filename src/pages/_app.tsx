import { getSession } from "@/components/auth/session/getSession";
import { Navigation_Bar } from "@/components/navigation/Navigation_Bar";
import { useSessionStore } from "@/context/Session.user";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { setToken } = useSessionStore();

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
      <Navigation_Bar />
      <Component {...pageProps} />
    </>
  );
}
