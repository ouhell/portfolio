import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/variants";
type Props = {};

const baseDelay = 0.5;

const projects = [
  {
    name: "ChatEasy",
    link: "",
    image: "/projects/chateasy.png",
    animation: "right" as const,
  },
  {
    name: "ChatEasy",
    link: "",
    image: "/projects/chateasy.png",
    animation: "down" as const,
  },
  {
    name: "ChatEasy",
    link: "",
    image: "/projects/chateasy.png",
    animation: "up" as const,
  },
  {
    name: "ChatEasy",
    link: "",
    image: "/projects/chateasy.png",
    animation: "left" as const,
  },
];

const Projects = (props: Props) => {
  return (
    <div className=" mb-16   lg:mb-0 mx-auto lg:mr-16 xl:mr-auto">
      <div className="grid grid-cols-2 grid-rows-2   gap-4 h-f  m-4">
        {projects.map((proj, i) => {
          return (
            <m.div
              variants={fadeIn(proj.animation, 0.5 + 0.2 * i)}
              initial="hidden"
              animate="show"
              key={proj.name}
              className="relative cursor-pointer flex justify-center items-center w-fit "
            >
              <a href={proj.link} target="_blank">
                <m.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/70 flex justify-center items-center font-bold"
                >
                  {proj.name}
                </m.div>
              </a>

              <Image
                alt={proj.name}
                height={250}
                width={250}
                src={proj.image}
                className="rounded-sm"
              />
            </m.div>
          );
        })}

        {/* <div className="relative cursor-pointer flex justify-center items-center w-fit">
          <m.div
            initial={{
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
            }}
            className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/70 flex justify-center items-center font-bold"
          >
            {"ChatEasy"}
          </m.div>
          <Image
            alt="chateasy"
            height={250}
            width={250}
            src={"/projects/chateasy.png"}
          />
        </div>
        <div className="relative cursor-pointer flex justify-center items-center w-fit">
          <m.div
            initial={{
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
            }}
            className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/70 flex justify-center items-center font-bold"
          >
            {"ChatEasy"}
          </m.div>
          <Image
            alt="chateasy"
            height={250}
            width={250}
            src={"/projects/chateasy.png"}
          />
        </div>
        <div className="relative cursor-pointer flex justify-center items-center w-fit">
          <m.div
            initial={{
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
            }}
            className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/70 flex justify-center items-center font-bold"
          >
            {"ChatEasy"}
          </m.div>
          <Image
            alt="chateasy"
            height={250}
            width={250}
            src={"/projects/chateasy.png"}
          />
        </div> */}

        {/* 
        <div className="bg-[url('/projects/chateasy-1.png')]  bg-repeat-round lg:col-span-2"></div>
        <div className="bg-[url('/projects/chateasy-3.png')]  bg-repeat-round lg:col-span-2"></div>
        <div className="bg-[url('/projects/chateasy-2.png')]  bg-repeat-round lg:col-span-3"></div>
        <div className="bg-[url('/projects/chateasy-4.png')]  bg-repeat-round "></div> */}

        {/* <m.div
          variants={fadeIn("right", baseDelay + 0.3)}
          initial="hidden"
          animate="show"
          className="col-span-1 rounded-md relative"
        >
          <Image
            className="h-full w-full"
            src={"/projects/chateasy-3.png"}
            alt="p2"
            fill={true}
          />
        </m.div>
        <m.div
          variants={fadeIn("down", baseDelay + 0)}
          initial="hidden"
          animate="show"
          className="col-span-3 rounded-md relative"
        >
          <Image
            className="h-full w-full"
            src={"/projects/chateasy-1.png"}
            alt="p1"
            width={1200}
            height={1700}
          />
        </m.div>
        <m.div
          variants={fadeIn("up", baseDelay + 0.6)}
          initial="hidden"
          animate="show"
          className="col-span-3 rounded-md relative"
        >
          <Image
            className="h-full w-full"
            src={"/projects/chateasy-2.png"}
            alt="p3"
            fill={true}
          />
        </m.div>
        <m.div
          variants={fadeIn("left", baseDelay + 0.9)}
          initial="hidden"
          animate="show"
          className="col-span-1 rounded-md relative"
        >
          <Image
            className="h-full w-full"
            src={"/projects/chateasy-4.png"}
            alt="p4"
            fill={true}
          />
        </m.div> */}
      </div>
    </div>
  );
};

export default Projects;
