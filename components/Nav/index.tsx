import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

type NavEntry = {
  name: string;
  id: string;
  icon: IconType;
};

// nav data - using IDs for sections
export const navData: Array<NavEntry> = [
  { name: "home", id: "home", icon: HiHome },
  { name: "about", id: "about", icon: HiUser },
  { name: "services", id: "services", icon: HiRectangleGroup },
  { name: "work", id: "work", icon: HiViewColumns },
  { name: "contact", id: "contact", icon: HiEnvelope },
];

type Props = {};

const Nav = (props: Props) => {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to section handling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Active section detection using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
        threshold: 0,
      }
    );

    navData.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed lg:right-[2%] z-50 bottom-0 w-full lg:w-16 lg:max-w-md lg:h-screen flex items-center justify-center pointer-events-none">
      <div className="flex w-full lg:flex-col items-center justify-between lg:justify-center gap-y-10 px-4 md:px-40 lg:px-0 h-[80px] lg:h-max bg-white/10 backdrop-blur-sm text-3xl xl:text-xl lg:rounded-full py-8 pointer-events-auto">
        {navData.map((link) => {
          const isActive = link.id === activeSection;
          return (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={classNames(
                "relative flex items-center group hover:text-accent transition-all duration-300",
                {
                  "text-accent": isActive,
                  "text-white": !isActive,
                }
              )}
            >
              {/* Tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>

              {/* Icon */}
              <div>
                <link.icon className="w-6 h-6 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
