import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Transition from "@/components/Transition";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <div className="h-full" key={route}>
          <Transition />
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Layout>
  );
}
