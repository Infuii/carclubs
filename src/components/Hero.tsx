import { motion } from "framer-motion";

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
    <div className="overflow-x-hidden relative flex z-1 items-center justify-center sm:py-8 sm:px-8 md:py-16 md:px-16 py-8 px-8 bg-white w-screen">
      <div className="relative mx-auto w-full h-[500px]">
        <img
          src="carclubbing.jpg"
          alt="Car Clubbing"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 text-center text-white p-4 flex flex-col items-center justify-center h-full">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            SPECTACULAR AUTOMOTIVE EXPOSITIONS
          </motion.h1>
          <motion.p
            className="mt-4 text-xl md:text-2xl"
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
          >
            2024 EVENT SERIES | THE SHOW
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    </div>
  );
};

export default Hero;
