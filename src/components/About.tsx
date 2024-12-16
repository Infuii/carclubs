import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.1 },
    },
  };

  const imageVariant1 = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  const imageVariant2 = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.4 },
    },
  };

  const imageVariant3 = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <div
      className="relative bg-fixed bg-cover bg-center "
      style={{ backgroundImage: "url('car6.JPG')" }}
    >
      <div className="bg-black bg-opacity-70 md:py-12 py-4">
        <div className="container mx-auto my-16 px-4" id="about">
          <motion.div
            className="flex flex-col md:flex-row items-center md:py-12  py-4"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={headingVariant}
          >
            <motion.div className="md:w-1/2 md:pr-8" variants={textVariant}>
              <motion.h2
                className="text-4xl font-bold text-white mb-4 uppercase"
                variants={headingVariant}
              >
                OUR BEGINNINGS
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 mb-4"
                variants={textVariant}
              >
                Welcome to the official website of the Hopkinton Car Club. We
                are a group of car-fanatic students from Hopkinton High School.
                If you are interested in joining our team or collaborating with
                us in the future, feel free to read further!
              </motion.p>
              <motion.p
                className="text-lg font-medium text-white mb-2"
                variants={textVariant}
              >
                We Embrace Individuals
              </motion.p>
              <motion.p
                className="text-lg text-gray-300 mb-4"
                variants={textVariant}
              >
                First, Surya wanted to create a Car Club at HHS. Although many
                students expressed doubt that this rather unconventional idea
                would work out, they were soon proved wrong. After gathering
                some fellow car enthusiasts at HHS and securing an equally eager
                advisor, the founding members of our club filed a proposal to
                the school office. A few weeks later, HHS Car Club hit the road
                in the beginning of the 2023-2024 school year and has been
                running since.
              </motion.p>
              <motion.h2
                className="text-lg font-medium text-white mb-4 uppercase"
                variants={headingVariant}
              >
                OUR MISSION
              </motion.h2>

              <motion.p
                className="text-lg text-gray-300 mb-4"
                variants={textVariant}
              >
                We strive to make a positive impact on our community. We host
                multiple events in different locations throughout the year that
                are completely free to the public. Our first Cars & Coffee in
                April 2024 brought together hundreds of families and friends
                from dozens of towns. Our events also promote local causes. Our
                events are always in collaboration with various small businesses
                and charity organizations that have gained countless customers,
                donations, and volunteers from our car shows.
              </motion.p>
              <motion.h2
                className="text-lg font-medium text-white mb-4 uppercase"
                variants={headingVariant}
              >
                OUTREACH
              </motion.h2>
              <motion.p
                className="text-lg text-gray-300 mb-4"
                variants={textVariant}
              >
                We are always open to new ways that we can help our community.
                If you would like to join or collaborate with us, DM @hhscarclub
                on Instagram or email us at hhscarclub0@gmail.com.
              </motion.p>
            </motion.div>
            <motion.div className=" flex-col space-y-4 md:w-1/2 md:block hidden">
              <div className="relative">
                <motion.img
                  src="car7.JPG" // Adjust the path as necessary
                  alt="Car Clubbing 1"
                  className="w-3/4 h-auto object-cover shadow-lg mb-4 relative bottom-20 left-20"
                  style={{ zIndex: 10 }}
                  variants={imageVariant1}
                />
                <motion.img
                  src="car6.JPG" // Adjust the path as necessary
                  alt="Car Clubbing 2"
                  className="absolute top-10 left-10 w-3/4 h-auto object-cover shadow-lg"
                  style={{ zIndex: 5 }}
                  variants={imageVariant2}
                />
                <motion.img
                  src="car7.JPG" // Adjust the path as necessary
                  alt="Car Clubbing 3"
                  className="absolute top-20 left-20 w-2/3 h-auto object-cover shadow-lg"
                  style={{ zIndex: 1 }}
                  variants={imageVariant3}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
