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

      <m.div className="h-full max-h-full  bg-site bg-no-repeat bg-cover  lg:pb-0 lg:pr-16   flex flex-col ">
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            variants={animations}
            initial="hidden"
            animate="shown"
            exit="exit"
            className="flex-1 flex flex-col max-h-full overflow-auto"
            key={route}
          >
            <AnimatePresence>
              <main className="flex-1 overflow-auto flex flex-col">
                {props.children}
              </main>
            </AnimatePresence>
          </m.div>
        </AnimatePresence>
        <Nav />
      </m.div>
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
