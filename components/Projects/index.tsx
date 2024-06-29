import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { fadeIn } from "@/variants";
import Project, { Proj } from "./Project";
type Props = {};

const baseDelay = 0.5;

const projects: Proj[] = [
  {
    name: "ChatEasy",
    link: "https://shutapp.onrender.com",
    image: "/projects/chateasy.png",
    animation: "right" as const,
    video: "https://www.youtube.com/embed/vbHu3gFQKN0?si=IdvD8loODpvj_wgg",
  },
  {
    name: "Traffic Displayer",
    link: "",
    image: "/projects/traffic_displayer.png",
    animation: "down" as const,
    video: "https://www.youtube.com/embed/Wb0BfhuCeKU?si=kokuHxlWzZuUABFS",
  },
  {
    name: "Pharma Connect",
    link: "",
    image: "/projects/pharma_connect.png",
    animation: "up" as const,
    video: "https://www.youtube.com/embed/WVlLvRjhPdY?si=jyiG_FYuH01CQ_YM",
  },
  {
    name: "Blood Bank",
    link: "",
    image: "/projects/blood_bank.png",
    animation: "left" as const,
  },
];

const Projects = (props: Props) => {
  return (
    <div className=" mb-16   lg:mb-0 mx-auto lg:mr-16 xl:mr-auto ">
      <div className="grid sm:grid-cols-2 sm:grid-rows-2   gap-4 h-f  m-4">
        {projects.map((proj, i) => {
          return <Project key={proj.name} i={i} proj={proj} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
