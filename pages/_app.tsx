import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Nav from "../components/nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
