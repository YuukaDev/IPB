import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  AiOutlineInbox,
  AiOutlineSafety,
  AiOutlineGlobal,
} from "react-icons/ai";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="text-navigationColor mb-20">
        <div className="text-center">
          <h1 className="text-lg mt-20 tracking-heroWide uppercase leading-3">
            Why Choose Us
          </h1>
        </div>
        <div className="flex max-w-5xl m-auto gap-20 mt-16 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <AiOutlineInbox
              fontSize="3.3em"
              style={{
                backgroundColor: "rgb(209 213 219)",
                borderRadius: "100px",
                padding: "8px",
              }}
            />
            <h1 className="text-aboutUs mt-5 mb-1">Super Fast</h1>
            <p className="text-aboutParagraph text-center">
              Xquisite is very simple and easy to use and is also very fast and
              functional
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <AiOutlineSafety
              fontSize="3.3em"
              style={{
                backgroundColor: "rgb(209 213 219)",
                borderRadius: "100px",
                padding: "8px",
              }}
            />
            <h1 className="text-aboutUs mt-5 mb-1">Reliable & Safe</h1>
            <p className="text-aboutParagraph text-center">
              Xquisite is very simple and easy to use and is also very fast and
              functional
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <AiOutlineGlobal
              fontSize="3.3em"
              style={{
                backgroundColor: "rgb(209 213 219)",
                borderRadius: "100px",
                padding: "8px",
              }}
            />
            <h1 className="text-aboutUs mt-4 mb-1">Support</h1>
            <p className="text-aboutParagraph text-center">
              Xquisite is very simple and easy to use and is also very fast and
              functional
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
