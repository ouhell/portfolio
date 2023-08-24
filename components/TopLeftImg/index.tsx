import Image from "next/image";
import React from "react";

type Props = {};

const TopLefImg = (props: Props) => {
  return (
    <div className="absolute top-0 left-0 mix-blend-color-dodge opacity-60">
      <Image src={"/top-left-img.png"} width={400} height={400} alt="" />
    </div>
  );
};

export default TopLefImg;
