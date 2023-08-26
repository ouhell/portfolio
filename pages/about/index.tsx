import Skills from "@/components/Skills";
import React from "react";

import { loadFull } from "tsparticles";
import { motion as m } from "framer-motion";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";

import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { IoLogoElectron } from "react-icons/io5";
import { fadeIn } from "@/variants";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTypescript,
} from "react-icons/bi";
type Props = {};

const About = (props: Props) => {
  const particlesInit = React.useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async () => {}, []);
  return (
    <main className="h-full">
      <div className="container lg:pt-35 mx-auto h-full flex flex-col lg:flex-row justify-center lg:justify-normal items-center ">
        <div className=" text-center lg:text-left  flex flex-col  justify-center lg:justify-normal items-center lg:items-start">
          <m.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            className="text-4xl"
          >
            I&apos;m <span className="text-accent"> Oussama Hamida </span>
            <br />A Full Stack Dev
          </m.h1>
          <div className="mt-4 w-fit">
            <m.ul
              className="text-left"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
            >
              <m.li className="" variants={fadeIn("right", 0.6)}>
                <p>
                  - Javascript - Typescript{" "}
                  <DiJavascript1 className="inline-block text-white" />{" "}
                  <TbBrandTypescript className="inline-block text-white" />
                </p>
              </m.li>
              <m.li variants={fadeIn("right", 0.7)}>
                <p>
                  - Nodejs - Expressjs{" "}
                  <BiLogoNodejs className="inline-block text-white" />{" "}
                  <SiExpress className="inline-block text-white" />
                </p>
              </m.li>
              <m.li variants={fadeIn("right", 0.8)}>
                <p>
                  - Reactjs - Nextjs{" "}
                  <BiLogoReact className="inline-block text-white" />{" "}
                  <SiNextdotjs className="inline-block text-white" />
                </p>
              </m.li>
              <m.li variants={fadeIn("right", 0.9)}>
                <p>
                  - MongoDb - SQL{" "}
                  <SiMongodb className="inline-block text-white" />{" "}
                  <SiPostgresql className="inline-block text-white" />
                </p>
              </m.li>
              <m.li variants={fadeIn("right", 1)}>
                <p>
                  - Electronjs{" "}
                  <IoLogoElectron className="inline-block text-white" />
                </p>
              </m.li>
            </m.ul>
          </div>
        </div>
        <Skills />
      </div>
    </main>
  );
};

export default About;
