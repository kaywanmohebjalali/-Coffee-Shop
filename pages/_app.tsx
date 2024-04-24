import Footer from "@/components/modules/Footer/Footer";
import Header from "@/components/modules/Header/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <section >
   <Header/>
  <Component {...pageProps} />
  <Footer/>
  </section>
}
