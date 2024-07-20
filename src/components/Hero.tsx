import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.75,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.25,
    },
  },
};

const Hero = () => {
  return (
    <Link to="/gallery" className="block relative overflow-x-hidden">
      <div className="relative overflow-x-hidden flex z-1 items-center justify-center sm:py-8 sm:px-8 md:py-16 md:px-16 py-8 px-8 bg-white">
        <div className="relative mx-auto w-full h-[550px]">
          <img
            src="carclubbing2.png"
            alt="Car Clubbing"
            className="absolute object-cover w-full h-full inset-0 z-0"
          />
          <div className="relative z-10 text-center text-white p-4 flex flex-col items-center justify-center h-full uppercase">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              1st cars & coffee
            </motion.h1>
            <motion.p
              className="mt-4 text-xl md:text-2xl uppercase"
              initial="hidden"
              animate="visible"
              variants={paragraphVariants}
            >
              Cars & Coffee April 27th 2024
            </motion.p>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
    </Link>
  );
};

export default Hero;
