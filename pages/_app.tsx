import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Transition from "@/components/Transition";
import "@/styles/globals.css";
import { AnimatePresence, Variants } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  return (
    <Layout>
      {/* <AnimatePresence mode="wait" initial={false}>
        <m.div className="h-full" key={route}>
          <Transition />

          <Component {...pageProps} />
        </m.div>
      </AnimatePresence> */}
      <Component {...pageProps} />
    </Layout>
  );
}
