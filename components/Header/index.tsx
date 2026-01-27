import React from "react";
import Image from "next/image";
import Socials from "./Socials";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="relative p-4 z-[80] w-full min-h-[6rem] h-[6rem] lg:min-h-[4rem] lg:h-[4rem] overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row justify-normal gap-4 lg:justify-between items-center ">
        <Image
          src="/logo.svg"
          height={48}
          width={180}
          alt="logo"
          className="lg:w-32 lg:h-12"
        />

        <Socials />
      </div>
    </header>
  );
};

export default Header;
