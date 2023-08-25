import React from "react";
import { motion as m, Variants } from "framer-motion";
type Props = {};

const Transition = (props: Props) => {
  return (
    <>
      <m.div
        variants={parentAnimation}
        initial="shown"
        animate="hidden"
        exit="exit"
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 bottom-0 right-full h-screen w-full bg-[#2a1c51] z-30"
      ></m.div>
      <m.div
        variants={parentAnimation}
        initial="shown"
        animate="hidden"
        exit="exit"
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 bottom-0 right-full h-screen w-full bg-[#2f1f56] z-20"
      ></m.div>
      <m.div
        variants={parentAnimation}
        initial="shown"
        animate="hidden"
        exit="exit"
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 bottom-0 right-full h-screen w-full bg-[#3c2765]  z-10"
      ></m.div>
    </>
  );
};

const parentAnimation: Variants = {
  hidden: {
    x: "-100%",
    width: "0%",
    opacity: 0.3,
  },
  shown: {
    x: "0%",
    width: "100%",
    opacity: 1,
  },
  exit: {
    x: "0%",
    width: "100%",
    opacity: 1,
    transition: {
      opacity: {
        duration: 0,
      },
    },
  },
};

export default Transition;
