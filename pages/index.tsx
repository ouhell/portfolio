import Image from "next/image";
import { Inter, Sora } from "next/font/google";
import classNames from "classnames";
import Particles from "@/components/Particles";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/variants";
import Head from "next/head";
import MainImage from "@/components/MainImage/MainImage";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/bg-explosion.png" />
      </Head>
      <div className="top-0 left-0 right-0 bottom-0 pointer-events-none bg-gradient-to-r from-primary/10 via-black/30 to-black/10 absolute bg-no-repeat "></div>
      {/* <div className="top-0 left-0 right-0 bottom-0 pointer-events-none  absolute bg-no-repeat bg-site -z-40"></div> */}
      <Particles />
      <MainImage />
      <div className="text-center flex flex-col justify-center lg:text-start container h-full mx-auto">
        <m.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="text-4xl"
        >
          {" "}
          Baking Imagination <br /> Into{" "}
          <span className="text-accent">Digital Creations</span>{" "}
        </m.h1>
        <m.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-10 xl:mb-16 mt-6"
        >
          Cooking up clean, elegant code that transforms concepts into seamless
          digital experiences. Lets bring your ideas to life.
        </m.p>
      </div>
    </>
  );
}
