import React, { ReactNode } from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  children: string;
};

const ServiceCard = ({ children, icon: Icon, title }: Props) => {
  return (
    <div className="group w-full h-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 rounded-xl p-6 lg:p-8 cursor-pointer transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-accent/20 flex flex-col items-center text-center gap-4 lg:gap-6">
      <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
        <Icon className="w-8 h-8" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm font-light leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-300">
          {children}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
