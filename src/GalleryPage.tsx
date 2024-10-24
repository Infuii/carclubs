import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = Array.from({ length: 36 }, (_, index) => `cars${index + 1}.jpg`);

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const GalleryPage = () => {
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const validImagesList: string[] | ((prevState: never[]) => never[]) = [];

      await Promise.all(
        images.map((image) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = image;
            img.onload = () => {
              validImagesList.push(image);
              resolve();
            };
            img.onerror = () => {
              resolve(); // Skip this image if it fails to load
            };
          });
        })
      );

      setValidImages(validImagesList as never);
    };

    loadImages();
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {validImages.map((image, index) => (
          <motion.div
            key={index}
            className="w-full h-64 bg-gray-200"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt={`Car ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
