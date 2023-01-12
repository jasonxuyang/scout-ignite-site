import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Nav from "../components/common/nav/nav";
import Footer from "../components/common/footer/footer";

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
