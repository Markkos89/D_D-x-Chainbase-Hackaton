import Topbar from "@/components/Topbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Component {...pageProps} />
    </>
  );
}
