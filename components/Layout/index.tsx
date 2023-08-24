import React, { ReactNode } from "react";
import { Inter, Sora } from "next/font/google";
import classNames from "classnames";
import Header from "@/components/Header";
import TopLefImg from "@/components/TopLeftImg";
import Nav from "../Nav";
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
  return (
    <div
      className={
        (classNames(sora.className),
        "page bg-site bg-cover bg-no-repeat text-white relative")
      }
    >
      <TopLefImg />
      <Header />
      <Nav />

      {props.children}
    </div>
  );
};

export default Layout;
