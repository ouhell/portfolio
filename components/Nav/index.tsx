import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

type NavEntry = {
  name: string;
  path: string;
  icon: IconType;
};

// nav data
export const navData: Array<NavEntry> = [
  { name: "home", path: "/", icon: HiHome },
  { name: "about", path: "/about", icon: HiUser },
  { name: "services", path: "/services", icon: HiRectangleGroup },
  { name: "work", path: "/work", icon: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    icon: HiEnvelope,
  },
];

type Props = {};

const Nav = (props: Props) => {
  const { pathname } = useRouter();
  return (
    <nav className="fixed  h-10  lg:h-full flex justify-center items-center  w-full lg:w-fit bottom-0 lg:right-8 z-10">
      <div className="flex lg:flex-col items-center justify-evenly lg:justify-center h-full lg:h-fit w-full  lg:gap-4 group flex-grow lg:rounded-full bg-white/10 p-2">
        {navData.map((data) => {
          const isActive = data.path === pathname;
          return (
            <Link key={data.name} href={data.path}>
              <div
                className={classNames("hover:text-accent lg:p-2 ", {
                  "text-accent ": isActive,
                })}
              >
                {<data.icon className="w-6 h-6 lg:w-5 lg:h-5" />}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
