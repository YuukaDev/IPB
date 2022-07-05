import { motion } from "framer-motion";

import {
  AiOutlineInbox,
  AiOutlineSafety,
  AiOutlineGlobal,
} from "react-icons/ai";

export default function About() {
  return (
    <div className="h-aboutContainer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E5E5E5"
          fillOpacity="1"
          d="M0,224L30,218.7C60,213,120,203,180,192C240,181,300,171,360,144C420,117,480,75,540,96C600,117,660,203,720,202.7C780,203,840,117,900,90.7C960,64,1020,96,1080,122.7C1140,149,1200,171,1260,181.3C1320,192,1380,192,1410,192L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
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
        <div className="text-navigationColor -mt-32">
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
                We are one of the most fastest providing gaming services in the
                world
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
                We are an eCommerce website that provides the most reliable and
                safest
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
                We provide very fast support and instant responses from our team
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#E5E5E5"
          fillOpacity="1"
          d="M0,224L30,218.7C60,213,120,203,180,192C240,181,300,171,360,144C420,117,480,75,540,96C600,117,660,203,720,202.7C780,203,840,117,900,90.7C960,64,1020,96,1080,122.7C1140,149,1200,171,1260,181.3C1320,192,1380,192,1410,192L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
