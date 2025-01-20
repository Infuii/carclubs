import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Sponsors = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delayChildren: 0.2, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="py-16 bg-white overflow-x-hidden"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 text-black"
          variants={itemVariants}
        >
          2024 Partners
        </motion.h2>
        <div className="flex flex-wrap justify-center items-center">
          <motion.div className="w-full md:w-1/4 p-4" variants={itemVariants}>
            <img
              src="sponsor.png"
              alt="Sponsor 1"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div className="w-full md:w-1/4 p-4" variants={itemVariants}>
            <img
              src="sponsor2.png"
              alt="Sponsor 2"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <motion.div className="w-full md:w-1/4 p-4" variants={itemVariants}>
            <img
              src="sponsor3.jpg"
              alt="Sponsor 3"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sponsors;
