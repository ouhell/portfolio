import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion as m } from "framer-motion";
import classNames from "classnames";
export type MessageProps = {
  message?: string;
  id?: string;
  type: "error" | "success";
};

const Message = ({ message, id, type }: MessageProps) => {
  const resetter = React.useRef<ReturnType<typeof setTimeout>>();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (message) {
      clearTimeout(resetter.current);
      if (show) {
        setShow(false);
        setTimeout(() => {
          resetter.current = setTimeout(() => {
            setShow(false);
          }, 3000);
          setShow(true);
        }, 500);
      } else {
        resetter.current = setTimeout(() => {
          setShow(false);
        }, 3000);

        setShow(true);
      }
    }
  }, [id]);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.6,
          }}
          className="fixed top-0 w-full  text-white p-4"
        >
          <div
            className={classNames(
              "w-fit bg-gray-400 rounded-md  mx-auto  p-2 text-xs",
              {
                "bg-red-500": type === "error",
              }
            )}
          >
            {message}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Message;
