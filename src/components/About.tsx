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
    <div className="container mx-auto my-16 px-4">
      <motion.div
        className="flex flex-col md:flex-row items-center"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={headingVariant}
      >
        <motion.div className="md:w-1/2 md:pr-8" variants={textVariant}>
          <motion.h2
            className="text-4xl font-bold text-black mb-4"
            variants={headingVariant}
          >
            Our Club
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-4"
            variants={textVariant}
          >
            Since its beginning in 2020, the HHS Car Club has been about
            automotive enthusiasts coming together to share their passion for
            cars. Our members enjoy perks such as exclusive car meets, track
            days, and social events. We welcome individuals who share our
            interests and support the overall goals of the club.
          </motion.p>
          <motion.p
            className="text-lg font-medium text-black mb-2"
            variants={textVariant}
          >
            We Embrace Individuals
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 mb-4"
            variants={textVariant}
          >
            Who share our interests, welcome the camaraderie, and support the
            overall goals of the club. HHS Car Club members enjoy perks such as
            the grand car show, road trips, and our monthly newsletter.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 mb-4"
            variants={textVariant}
          >
            The HHS Car Club also focuses on community service, organizing
            charity events and fundraisers to give back to the community. Our
            members are dedicated to fostering a sense of belonging and
            inclusivity, ensuring everyone feels welcome.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 mb-4"
            variants={textVariant}
          >
            Whether you are a seasoned car enthusiast or just getting started,
            we invite you to join us and be a part of our community. Our events
            are designed to create lasting memories and provide opportunities
            for learning and growth.
          </motion.p>
          <motion.a
            href="#learn-more"
            className="text-red-500 font-semibold"
            variants={textVariant}
          >
            Learn More &gt;
          </motion.a>
        </motion.div>
        <motion.div className="flex flex-col space-y-4 md:w-1/2 md:block hidden">
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
  );
};

export default About;
