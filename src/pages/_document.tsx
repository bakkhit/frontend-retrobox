import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased flex m-3 bg-gradient-to-tl from-blue-900 via-black to-blue-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
