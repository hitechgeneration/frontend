import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HiTechGeneration</title>
        <link rel="icon" href={`${window.location.origin}/light_logo.ico`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
