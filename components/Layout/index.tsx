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
        "min-h-screen outline-red-400 outline bg-site bg-repeat-y bg-cover text-white relative")
      }
    >
      <TopLefImg />

      <m.div className="">
        <Header />
       
        <main className="flex-1  flex flex-col gap-20">{props.children}</main>
     
        <Nav />
      </m.div>
    </div>
  );
};

export default Layout;


