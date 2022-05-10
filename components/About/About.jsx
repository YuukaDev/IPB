import { motion } from "framer-motion";

import {
  AiOutlineInbox,
  AiOutlineSafety,
  AiOutlineGlobal,
} from "react-icons/ai";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 0.3,
        },
      }}
      viewport={{ once: true }}
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
