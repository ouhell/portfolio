import clsx from "clsx";
import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
function MainImage() {
  const [hidden, setHidden] = React.useState(true);

  useEffect(() => {
    const image = document.createElement("img");
    image.src = "/bg-explosion.png";
    image.addEventListener("load", () => {
      console.log("image loaded");
      setHidden(false);
    });
  }, []);
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 2,
        },
      }}
      className={clsx(
        "   absolute top-0 left-0 right-0 bottom-0  lg:bg-cover lg:bg-no-repeat lg:bg-right mix-blend-color-dodge  ",
        {
          "bg-explosion": hidden,
          "bg-explosion_big": !hidden,
        },
      )}
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
      }}
    ></m.div>
  );
}

export default MainImage;
