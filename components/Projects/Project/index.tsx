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
          className="flex top-0 right-0 left-0 bottom-0 bg-black/80 fixed z-[100] justify-center items-center p-4 sm:p-20 overflow-auto backdrop-blur-sm"
          onClick={() => {
            setOpen(false);
          }}
        >
          <div className="w-full h-full grid place-items-center max-w-6xl mx-auto">
            {proj.video ? (
              <iframe
                className="w-full aspect-video rounded-xl shadow-2xl"
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
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
                className="h-full w-full"
              ></div>
            )}
          </div>
        </div>
      )}
      <m.div
        variants={fadeIn("up", 0.4 + 0.1 * i)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="group relative rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="bg-white/5 border border-white/10 hover:border-accent/50 p-4 rounded-xl transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-accent/20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <Image
              alt={proj.name}
              height={500}
              width={700}
              src={proj.image}
              className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-60" />
          </div>

          {/* Content */}
          <div className="absolute bottom-4 left-4 right-4 p-4 translate-y-2 transition-all duration-500 group-hover:translate-y-0 pointer-events-none">
            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{proj.name}</h3>
            <div className="flex items-center gap-x-2 text-xs tracking-[0.2em] transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="delay-100 text-accent font-bold uppercase">
                View Project
              </span>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Project;
