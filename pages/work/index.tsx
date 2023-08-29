import Projects from "@/components/Projects";
import React from "react";

type Props = {};

const Work = (props: Props) => {
  return (
    <main className="h-full">
      <div className="h-full container flex flex-col lg:flex-row mx-auto justify-center lg:justify-normal items-center gap-8 lg:gap-32 w-full mt-24 md:mt-36 lg:mt-0 ">
        <div className="flex flex-col gap-4 lg:pt-0">
          <h1 className="text-3xl">My Projects</h1>
          <p className="max-w-xs">Discover What I&apos;ve Built</p>
        </div>
        <Projects />
      </div>
    </main>
  );
};

export default Work;
