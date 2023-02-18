import "@/assets/styles/globals.scss";

import type { AppProps } from "next/app";
import Header from "@/components/layout/header/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
