import { useEffect } from "react";
import { motion } from "framer-motion";

const images = Array.from({ length: 30 }, (_, index) => `cars${index + 1}.jpg`);

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: "100%" }} // Maintains square aspect ratio
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <img
              src={image}
              alt={`Car ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
