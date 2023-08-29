import DisplayCards from "@/components/DisplayCards";
import React from "react";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/variants";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="h-full container flex flex-col lg:flex-row justify-center lg:justify-normal items-center mx-auto lg:mt-[-2rem]">
      <div className="flex flex-col gap-4 text-center lg:text-left">
        <m.h1
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="text-3xl "
        >
          My Services
        </m.h1>
        <m.p
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          className="hidden sm:block max-w-xs lg:max-w-xs"
        >
          Crafting responsive websites, powerful backends, and dynamic desktop
          apps for your needs.
        </m.p>
      </div>
      <DisplayCards />
    </div>
  );
};

export default Services;
