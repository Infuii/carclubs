import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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

  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.h2
          className="text-3xl font-extrabold text-black text-left"
          initial="hidden"
          animate={controls}
          variants={headingVariant}
        >
          Contact
        </motion.h2>
        <motion.div
          className="border-t-8 border-black mt-4 mb-8"
          initial="hidden"
          animate={controls}
          variants={textVariant}
        ></motion.div>
        <motion.div
          className="flex justify-between items-center"
          initial="hidden"
          animate={controls}
          variants={textVariant}
        >
          <p className="text-black text-lg font-semibold">
            HHSCARCLUB0@GMAIL.COM
          </p>
          <p className="text-black text-lg">508-202-6778</p>
        </motion.div>
        <motion.form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          initial="hidden"
          animate={controls}
          variants={inputVariant}
        >
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <motion.input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Name"
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                variants={inputVariant}
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Email *"
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                variants={inputVariant}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <motion.input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                placeholder="Phone number"
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                variants={inputVariant}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">
                Comment
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Comment"
                className="block w-full border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-black placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500"
                variants={inputVariant}
              ></motion.textarea>
            </div>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              variants={inputVariant}
            >
              Send
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
