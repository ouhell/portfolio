import React from "react";
import ServiceCard from "./ServiceCard";
import { CgWebsite, CgDesktop, CgServer } from "react-icons/cg";
import { BiDesktop } from "react-icons/bi";
import { motion as m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Pagination } from "swiper";

import "swiper/css";
import { fadeIn } from "@/variants";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

const cards = [
  {
    title: "Websites",
    Icon: CgWebsite,
    text: "Crafting dynamic websites with React and Next.js. Elevate your online presence with seamless user experiences and modern design.",
  },
  {
    title: "Backend Servers",
    Icon: CgServer,
    text: "Powering your digital ambitions with Node.js backend solutions. ",
  },

  {
    title: "Desktop Apps",
    Icon: BiDesktop,
    text: "Bringing your ideas to the desktop with Electron.js. Creating cross-platform desktop apps that combine functionality and user-friendly design.",
  },
];

type Props = {};

const DisplayCards = (props: Props) => {
  return (
    <div className="lg:flex-1 p-4 overflow-y-auto">
      <div className=" grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-4">
        {cards.map((card, i) => {
          return (
            <m.div
              key={card.title}
              whileHover={{
                scale: 0.95,
              }}
              variants={fadeIn("down", 0.8 + 0.2 * i)}
              initial="hidden"
              animate="show"
            >
              <ServiceCard title={card.title} icon={card.Icon}>
                {card.text}
              </ServiceCard>
            </m.div>
          );
        })}
      </div>
      {/* <div className=" sm:hidden  p-4 h-max full ">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
        >
          {cards.map((card) => {
            return (
              <SwiperSlide key={card.title}>
                <m.div className="w-full min-w-full ">
                  <ServiceCard title={card.title} icon={card.Icon}>
                    {card.text}
                  </ServiceCard>
                </m.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
    </div>
  );
};

export default DisplayCards;
