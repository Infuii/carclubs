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

const underlineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 0.5 } },
  hover: { width: "100%", transition: { duration: 0.3 } },
};

const buttonHoverVariants = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: 1.05, opacity: 0.9, transition: { duration: 0.3 } },
};

const Hero = () => {
  return (
    <Link
      to="/gallery"
      className="block relative w-full h-screen overflow-hidden"
    >
      <motion.div
        className="relative flex z-1 items-center justify-center w-full h-full bg-white"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={buttonHoverVariants}
      >
        <div className="relative w-full h-full">
          <img
            src="carclubbing2.png"
            alt="Car Clubbing"
            className="absolute object-cover w-full h-full inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white p-4 flex flex-col items-center justify-center h-full uppercase">
            <motion.h1
              className="text-4xl md:text-5xl font-bold relative"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Hopkinton Car Club
              <motion.div
                className="absolute m-2 h-1 bg-white"
                initial="hidden"
                animate="visible"
                variants={underlineVariants}
              />
            </motion.h1>
            <motion.p
              className="mt-4 text-xl md:text-2xl uppercase relative"
              initial="hidden"
              animate="visible"
              variants={paragraphVariants}
            >
              View our First Cars & Coffee
            </motion.p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Hero;
