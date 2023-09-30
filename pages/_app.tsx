import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Transition from "@/components/Transition";
import "@/styles/globals.css";
import { AnimatePresence, Variants } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  return (
    <>
      <Head>
        <title>CodeBaker</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      {/* <AnimatePresence mode="wait" initial={false}>
        <m.div className="h-full" key={route}>
          <Transition />

          <Component {...pageProps} />
        </m.div>
      </AnimatePresence> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
