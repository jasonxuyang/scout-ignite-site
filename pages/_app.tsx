import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
