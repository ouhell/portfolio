import { fadeIn } from "@/variants";
import React from "react";
import Image from "next/image";
import { motion as m } from "framer-motion";

export type Proj = {
  name: string;
  link: string;
  image: string;
  animation: "right" | "left" | "down" | "up";
  video?: string;
};

type Props = {
  proj: Proj;
  i: number;
};

const Project = ({ proj, i }: Props) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="flex top-0 right-0 left-0 bottom-0 bg-gray-700/70 fixed z-[100] justify-center items-center p-4 sm:p-20 overflow-auto"
          onClick={() => {
            setOpen(false);
          }}
        >
          <div className="w-full h-full grid place-items-center ">
            {proj.video ? (
              <iframe
                //   width="560"
                //   height="315"

                className="h-80 md:h-[30rem] lg:h-[40rem]  w-full"
                src={proj.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                style={{
                  backgroundImage: `url(${proj.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "cover",
                }}
                className="h-full w-full bg-cover"
              ></div>
            )}
          </div>
        </div>
      )}
      <m.div
        variants={fadeIn(proj.animation, 0.5 + 0.2 * i)}
        initial="hidden"
        animate="show"
        key={proj.name}
        className="relative cursor-pointer flex justify-center items-center w-fit "
      >
        <div>
          <m.div
            initial={{
              opacity: 0,
            }}
            whileHover={{
              opacity: 1,
            }}
            className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/70 flex justify-center items-center font-bold"
            onClick={() => {
              setOpen(true);
            }}
          >
            <a
              href={proj.link}
              target="_blank"
              className="hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {proj.name}
            </a>
          </m.div>
        </div>

        <Image
          alt={proj.name}
          height={250}
          width={250}
          src={proj.image}
          className="rounded-sm w-60 h-48"
        />
      </m.div>
    </>
  );
};

export default Project;
