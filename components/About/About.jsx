import { motion } from "framer-motion";

import {
  AiOutlineInbox,
  AiOutlineSafety,
  AiOutlineGlobal,
} from "react-icons/ai";

export default function About() {
  return (
    <div className="h-aboutContainer">
      <svg
        className="wave-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,224L48,234.7C96,245,192,267,288,234.7C384,203,480,117,576,74.7C672,32,768,32,864,64C960,96,1056,160,1152,160C1248,160,1344,96,1392,64L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
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
        <div className="text-navigationColor -mt- mb-36">
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
                Xquisite is very simple and easy to use and is also very fast
                and functional
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
                Xquisite is very simple and easy to use and is also very fast
                and functional
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
                Xquisite is very simple and easy to use and is also very fast
                and functional
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <svg
        className="wave-2 -mt-32"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,224L48,234.7C96,245,192,267,288,234.7C384,203,480,117,576,74.7C672,32,768,32,864,64C960,96,1056,160,1152,160C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
