import Projects from "@/components/Projects";
import React from "react";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/variants";
type Props = {};

const Work = (props: Props) => {
  return (
    <div className="flex-1 container flex flex-col lg:flex-row mx-auto justify-center lg:justify-normal items-center gap-8 lg:gap-32 w-full relative z-10 ">
      <div className="flex flex-col gap-4 lg:mt-[-8rem]">
        <m.h1
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          className="text-3xl"
        >
          My Projects
        </m.h1>
        <m.p
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          className="max-w-xs"
        >
          Discover What I&apos;ve Built
        </m.p>
      </div>
      <Projects />
    </div>
  );
};

export default Work;
