import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1,
      ease: "easeOut",
    },
  },
};

const underlineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.6, transition: { duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 1.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    opacity: 0.9,
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: { duration: 0.3 },
  },
};

const Hero = () => {
  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden bottom-1"
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src="carclubbing2.png"
        alt="Car Clubbing"
        className="absolute object-cover w-full h-full inset-0"
        variants={imageVariants}
      />
      <motion.div
        className="absolute inset-0 bg-black"
        variants={overlayVariants}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-center"
          variants={textVariants}
        >
          Hopkinton Car Club
          <motion.div
            className="h-1 bg-white mx-auto mt-2"
            variants={underlineVariants}
          />
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl mb-8 text-center"
          variants={paragraphVariants}
        >
          Experience the Thrill of Our First Cars & Coffee
        </motion.p>
        <Link to="/gallery">
          <motion.button
            className="px-8 py-3 bg-white text-black font-bold rounded-full text-lg uppercase tracking-wide"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            View Gallery
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Hero;
