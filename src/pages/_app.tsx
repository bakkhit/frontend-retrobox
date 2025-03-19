import { Navigation_Bar } from "@/components/navigation/Navigation_Bar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation_Bar />
      <Component {...pageProps} />
    </>
  );
}
