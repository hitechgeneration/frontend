import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Kontakt } from ".";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HiTechGeneration</title>
        <link rel="icon" href={"/light_logo.ico"} />
      </Head>
      <Header />
      <div className="w-11/12 md:w-3/4 mx-auto">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Kontakt />
    </>
  );
}

export default MyApp;
