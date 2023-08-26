import { Variants } from "framer-motion";
import React from "react";
import { motion as m } from "framer-motion";
import { IconType } from "react-icons";

type Animated =
  | {
      animate: false;
    }
  | {
      animate: true;
      animateProps: {
        delay?: number;
        duration?: number;
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
      };
    };

type Props = {
  icon: IconType;
} & Animated;

const Skill = (props: Props) => {
  const { animate, icon: Icon } = props;
  return (
    <m.div
      className="h-12 w-12 flex justify-center items-center bg-white text-black rounded-full absolute cursor-pointer"
      variants={
        animate
          ? getPopIn(
              {
                top: props.animateProps.top ?? "auto",
                left: props.animateProps.left ?? "auto",
                bottom: props.animateProps.bottom ?? "auto",
                right: props.animateProps.right ?? "auto",
              },
              props.animateProps.delay,
              props.animateProps.duration
            )
          : undefined
      }
      whileHover={{
        scale: 1.4,
      }}
      initial="init"
      animate="animate"
    >
      <span>
        <Icon className="h-5 w-5 " />
      </span>
    </m.div>
  );
};

export default Skill;

type Distances = {
  top: string;
  left: string;
  bottom: string;
  right: string;
};
const getPopIn = (dist: Distances, delay = 0, duration = 0.8): Variants => {
  const PopIn: Variants = {
    init: {
      top: "50%",
      left: "50%",
      bottom: "auto",
      right: "auto",
      translateX: "-50%",
      translateY: "-50%",
    },
    animate: {
      top: dist.top,
      left: dist.left,
      bottom: dist.bottom,
      right: dist.right,
      translateX: "0%",
      translateY: "0%",

      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };
  return PopIn;
};
