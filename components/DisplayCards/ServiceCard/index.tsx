import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  children: string;
};

const ServiceCard = ({ children, icon: Icon, title }: Props) => {
  return (
    <div className="w-full h-full flex sm:flex-col bg-purple-700/10 rounded-md p-4 cursor-pointer">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-center">
        <Icon className=" w-5 h-5 text-accent mb-4" />
      </div>
      <div className="flex flex-col gap-4  ">
        <h1 className="text-lg text-center">{title}</h1>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
