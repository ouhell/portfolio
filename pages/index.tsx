import Image from "next/image";
import { Inter, Sora } from "next/font/google";
import classNames from "classnames";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <main
      className={
        "h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10"
      }
    >
      <Particles />
      <div className=" lg:bg-explosion absolute h-full w-full lg:bg-cover lg:bg-no-repeat lg:bg-right mix-blend-color-dodge translate-z-0 "></div>
      <div className="text-center flex flex-col justify-center  lg:pt-40 lg:text-left container h-full mx-auto">
        <h1 className="text-4xl">
          {" "}
          Transforming Ideas <br /> Into{" "}
          <span className="text-accent">Digital Realities</span>{" "}
        </h1>
        <p className="max-w-sm lg:max-w-xl mx-auto lg:mx-0 mb-10 xl:mb-16 mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          rerum, quis qui ea odit iste amet sapiente debitis nihil unde.
        </p>
      </div>
    </main>
  );
}
