import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, ElementRef } from "react";
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
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: HiChatBubbleBottomCenterText,
  // },
  {
    name: "contact",
    path: "/contact",
    icon: HiEnvelope,
  },
];

type Props = {};

const Nav = (props: Props) => {
  const { pathname, push } = useRouter();

  const changePage = (difference: number) => {
    console.log("changing");
    if (Math.abs(difference) > 150) {
      const currentPathIndex = navData.findIndex(
        (data) => data.path === pathname
      );
      if (currentPathIndex === -1) return;

      if (difference > 0) {
        push(navData[(currentPathIndex + 1) % navData.length].path);
      } else {
        push(
          navData[(currentPathIndex - 1 + navData.length) % navData.length].path
        );
      }
    }
  };

  // React.useEffect(() => {
  //   console.log("pathname:", pathname);
  //   let startY = 0;
  //   let currentY = 0;

  //   const touchMove = (e: TouchEvent) => {
  //     currentY = e.touches[0].clientY;
  //     const difference = startY - currentY;
  //     changePage(difference);
  //   };

  //   const touchStop = () => {
  //     startY = 0;
  //     document.removeEventListener("touchmove", touchMove);
  //   };

  //   const touchStart = (e: TouchEvent) => {
  //     startY = e.touches[0].clientY;
  //     document.addEventListener("touchmove", touchMove);
  //   };

  //   document.addEventListener("touchstart", touchStart);
  //   document.addEventListener("touchend", touchStop);

  //   const click = () => {
  //     changePage(-160);
  //   };

  //   // document.addEventListener("click", click);

  //   return () => {
  //     document.removeEventListener("touchstart", touchStart);
  //     document.removeEventListener("touchmove", touchMove);
  //     document.removeEventListener("touchend", touchStop);
  //     // document.removeEventListener("click", click);
  //   };
  // }, [pathname]);

  return (
    <nav
      className=" lg:fixed   h-12  lg:h-full flex justify-center items-center  w-full lg:w-fit bottom-0 lg:right-8 z-10 "
      // onClick={(e) => {
      //   e.stopPropagation();
      //   changePage(160);
      // }}
    >
      <div className="flex lg:flex-col items-center justify-evenly lg:justify-center h-full lg:h-fit w-full   group flex-grow lg:rounded-full bg-white/10 py-2 nav select-none">
        {navData.map((data) => {
          const isActive = data.path === pathname;
          return (
            <Link key={data.name} href={data.path}>
              <div
                className={classNames(
                  "hover:text-accent lg:px-3 lg:py-4 navItem ",
                  {
                    "text-accent ": isActive,
                  }
                )}
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
