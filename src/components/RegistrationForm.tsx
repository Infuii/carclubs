import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RegistrationForm = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-24" id="registration">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div 
          className="text-center mb-12"
          variants={headingVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Register for BU X Hopkinton Cars & Coffee
          </h2>
          <div className="w-40 h-1.5 bg-gradient-to-r from-[#0B3E27] to-[#186F48] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for an exciting automotive gathering and showcase your vehicle. 
            Fill out the registration form below to secure your spot.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={formVariants}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#0B3E27] to-[#186F48] px-8 py-6">
              <h3 className="text-2xl font-bold text-white">Registration Application</h3>
              <p className="text-green-100 mt-2 text-lg">Complete all fields to register</p>
            </div>
            
            <div className="p-2 bg-gradient-to-b from-gray-50 to-white">
              <iframe
                src="https://docs.google.com/forms/d/1YYod2MapuEnJy7xJl0cMB_gr7uuQYWhldmbwD_LkCc8/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="BU X Hopkinton Cars & Coffee Registration"
                className="w-full border-none bg-white shadow-inner rounded-xl"
              >
                Loading form...
              </iframe>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;