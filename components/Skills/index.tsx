import React from "react";
import { motion as m } from "framer-motion";
import {
  BiLogoReact,
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoSpringBoot,
  BiLogoJava,
} from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import Skill from "./Skill";
type Props = {};

const baseDelay = 1;

const Skills = (props: Props) => {
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      }}
      className="hidden lg:block flex-1 mx-auto"
    >
      <m.div
        initial={{
          rotateX: "0deg",
        }}
        animate={{
          rotate: "360deg",
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 24,
          },
        }}
        className="border-white w-96 h-96 border-solid border rounded-full mx-auto flex items-center justify-center relative "
      >
        <m.div
          animate={{
            rotate: "360deg",
            transition: {
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: 24,
            },
          }}
          className="border-white w-52 h-52 border-solid border rounded-full relative flex justify-center items-center z-20 "
        >
          <m.div
            animate={{
              rotate: "360deg",
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                duration: 24,
              },
            }}
            className="p-4 flex justify-center items-center bg-white text-black rounded-full z-10"
          >
            <Skill animate={false} icon={DiJavascript1} />
          </m.div>
          <Skill
            animate={true}
            icon={BiLogoReact}
            animateProps={{
              delay: baseDelay,
              top: "2%",
              left: "3%",
            }}
          />
          <Skill
            animate={true}
            icon={BiLogoTypescript}
            animateProps={{
              delay: baseDelay + 0.3,
              bottom: "2%",
              right: "3%",
            }}
          />
          <Skill
            animate={true}
            icon={SiExpress}
            animateProps={{
              delay: baseDelay + 0.7,
              bottom: "2%",
              left: "3%",
            }}
          />
        </m.div>

        <Skill
          animate={true}
          icon={SiNextdotjs}
          animateProps={{
            delay: baseDelay + 0.9,
            bottom: "12%",
            right: "3%",
          }}
        />
        <Skill
          animate={true}
          icon={SiMongodb}
          animateProps={{
            delay: baseDelay + 1.1,
            top: "12%",
            right: "3%",
          }}
        />
        <Skill
          animate={true}
          icon={BiLogoPostgresql}
          animateProps={{
            delay: baseDelay + 1.4,
            top: "12%",
            left: "3%",
          }}
        />
        <Skill
          animate={true}
          icon={IoLogoElectron}
          animateProps={{
            delay: baseDelay + 2,
            bottom: "12%",
            left: "3%",
          }}
        />

        <Skill
          animate={true}
          icon={BiLogoSpringBoot}
          animateProps={{
            delay: baseDelay + 2.4,
            bottom: "45%",
            left: "-5%",
          }}
        />

        <Skill
          animate={true}
          icon={BiLogoJava}
          animateProps={{
            delay: baseDelay + 2.8,
            top: "-7%",
            // right: "-5%",
          }}
        />
      </m.div>
    </m.div>
  );
};

export default Skills;
