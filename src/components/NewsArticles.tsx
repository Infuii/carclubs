import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NewsArticles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const articleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* HopNews Article Card */}
          <motion.div
            variants={articleVariants}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-100"
          >
            <img
              src="/cars32.png"
              alt="Car Show"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                First HHS Car Show Cruises to Success
              </h3>
              <p className="text-gray-600 mb-4">
                The inaugural Hopkinton High School car show drew hundreds of spectators 
                and dozens of unique vehicles, marking a successful debut for the school's 
                car club...
              </p>
              <a
                href="https://hopnews.com/first-hhs-car-show-cruises-to-success/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#186F48] text-white py-2 px-4 rounded-md hover:bg-green-700 hover:text-white transition-colors duration-300"
              >
                Read Full Article
              </a>
            </div>
          </motion.div>

          {/* HHS Press Article Card */}
          <motion.div
            variants={articleVariants}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-gray-100"
          >
            <img
              src="/cars2.jpg"
              alt="Car Club Meeting"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Shifting Gears: Hopkinton High's New Car Club
              </h3>
              <p className="text-gray-600 mb-4">
                From a passionate idea to a thriving community, discover how the 
                Hopkinton Car Club has become one of the school's most exciting 
                new organizations...
              </p>
              <a
                href="https://hhspress.org/21279/student-life/shifting-gears-hopkinton-highs-new-car-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#186F48] text-white py-2 px-4 rounded-md hover:bg-green-700 hover:text-white transition-colors duration-300"
              >
                Read Full Article
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg">
            Stay tuned for more updates and upcoming events!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsArticles;
