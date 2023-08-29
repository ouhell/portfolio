import React, { ReactNode } from "react";
import { Inter, Sora } from "next/font/google";
import classNames from "classnames";
import Header from "@/components/Header";
import TopLefImg from "@/components/TopLeftImg";
import Nav from "../Nav";
import { useRouter } from "next/router";
import { AnimatePresence, Variants, motion as m } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

type Props = {
  children: ReactNode;
};

const Layout = (props: Props) => {
  const { route } = useRouter();
  return (
    <div
      className={
        (classNames(sora.className),
        "page bg-site bg-cover bg-no-repeat bg-cover text-white relative")
      }
    >
      <TopLefImg />

      <Nav />
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          variants={animations}
          initial="hidden"
          animate="shown"
          exit="exit"
          className="h-full   bg-site bg-no-repeat bg-cover pb-[8.5rem] lg:pb-0 lg:pr-16  flex flex-col"
          key={route}
        >
          <Header />
          <AnimatePresence>{props.children}</AnimatePresence>
        </m.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;

const animations: Variants = {
  hidden: {
    // y: "10%",
    opacity: 0,
  },
  shown: {
    // y: "0%",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    // y: "-10%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
