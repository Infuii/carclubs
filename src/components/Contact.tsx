import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Form submission logic
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Form Submitted Successfully");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
        console.error("Error", result);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 text-left"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          Contact Us
        </motion.h2>
        <motion.div
          className="border-t-4 border-orange-500 mt-4 mb-10"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { width: 0 },
            visible: { width: "100%", transition: { duration: 1 } },
          }}
        />

        {/* Contact Info */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 space-y-4 md:space-y-0"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.1 },
            },
          }}
        >
          <p className="text-gray-700 text-lg font-medium">
            support@hopkintoncarclub.com
          </p>
          <p className="text-gray-700 text-lg font-medium">508-202-6778</p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="space-y-6"
          onSubmit={handleSubmit}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.2 },
            },
          }}
        >
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/* Name */}
            <div className="sm:col-span-1">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <motion.input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Name *"
                required
                className="block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-gray-800 placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.3 },
                  },
                }}
              />
            </div>

            {/* Email */}
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
                required
                className="block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-gray-800 placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.4 },
                  },
                }}
              />
            </div>

            {/* Phone */}
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
                className="block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-gray-800 placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.5 },
                  },
                }}
              />
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="sr-only">
                Comment
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message *"
                required
                className="block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 bg-white text-gray-800 placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.6 },
                  },
                }}
              ></motion.textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-lg font-semibold rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 1, delay: 0.7 },
                },
              }}
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
