import React from "react";
import Particles from "../Particles";
import { fadeIn } from "@/variants";
import { motion as m } from "framer-motion";
import MainImage from "../MainImage/MainImage";
const Home = () => {
  return (
    <>
      {/* <Head>
        <link rel="preload" as="image" href="/bg-explosion.png" />
      </Head> */}
      <>
        {/* <div className="top-0 left-0 right-0 bottom-0 pointer-events-none bg-gradient-to-r from-primary/10 via-black/30 to-black/10 absolute bg-no-repeat "></div> */}
        {/* <div className="top-0 left-0 right-0 bottom-0 pointer-events-none  absolute bg-no-repeat bg-site -z-40"></div> */}

        <div className=" h-screen relative flex flex-col justify-center">
          <Particles />

          <div className=" text-center flex flex-col  justify-center lg:text-start container mx-auto ">
            <MainImage />
            <m.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="text-4xl"
            >
              Baking Imagination <br /> Into{" "}
              <span className="text-accent">Digital Creations</span>{" "}
            </m.h1>
            <m.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-10 xl:mb-16 mt-6"
            >
              Cooking up clean, elegant code that transforms concepts into
              seamless digital experiences. Lets bring your ideas to life.
            </m.p>
          </div>
          {/* <div className="h-100 bg-red-400"></div> */}
        </div>

        {/* <About /> */}
      </>
    </>
  );
};

export default Home;
