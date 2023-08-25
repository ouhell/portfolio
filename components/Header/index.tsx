import React from "react";
import Image from "next/image";
import Socials from "./Socials";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-4 absolute z-[1]  w-full">
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
