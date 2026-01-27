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
  BiLogoJava,
  BiLogoSpringBoot,
} from "react-icons/bi";
import Head from "next/head";
type Props = {};

const About = (props: Props) => {


  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="container mx-auto h-full flex flex-col lg:flex-row justify-center lg:justify-normal items-center relative z-10 ">
        <div className=" text-center lg:text-left  flex flex-col  justify-center lg:justify-normal items-center lg:items-start">
          <m.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl"
          >
            I&apos;m <span className="text-accent"> Oussama Hamida </span>
            <br />A Full Stack Dev
          </m.h1>
          <div className="mt-4 w-fit">
            <m.ul
              className="text-left"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <m.li className="" variants={fadeIn("left", 0.6)}>
                <p>
                  - Javascript - Typescript{" "}
                  <DiJavascript1 className="inline-block text-white" />{" "}
                  <TbBrandTypescript className="inline-block text-white" />
                </p>
              </m.li>
              <m.li className="" variants={fadeIn("left", 0.65)}>
                <p>
                  <span>- Java - SpringBoot</span>{" "}
                  <BiLogoJava className="inline-block text-white " />{" "}
                  <BiLogoSpringBoot className="inline-block text-white" />
                </p>
              </m.li>
              <m.li variants={fadeIn("left", 0.7)}>
                <p>
                  - Nodejs - Expressjs{" "}
                  <BiLogoNodejs className="inline-block text-white" />{" "}
                  <SiExpress className="inline-block text-white" />
                </p>
              </m.li>
              <m.li variants={fadeIn("left", 0.8)}>
                <p>
                  - Reactjs - Nextjs{" "}
                  <BiLogoReact className="inline-block text-white" />{" "}
                  <SiNextdotjs className="inline-block text-white" />
                </p>
              </m.li>
              <m.li variants={fadeIn("left", 0.9)}>
                <p>
                  - MongoDb - SQL{" "}
                  <SiMongodb className="inline-block text-white" />{" "}
                  <SiPostgresql className="inline-block text-white" />
                </p>
              </m.li>
              <m.li variants={fadeIn("left", 1)}>
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
    </>
  );
};

export default About;
