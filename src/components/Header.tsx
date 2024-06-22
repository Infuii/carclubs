import { Link } from "react-scroll";
import { motion } from "framer-motion";

const lineVariants = {
  hidden: { width: "100%" },
  visible: { width: 0 },
};

const linkVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
};

const textVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%", transition: { duration: 1 } },
};

const Header = () => {
  return (
    <motion.header
      className="bg-white text-black py-8  w-full z-10 border-b border-gray-300 overflow-x-hidden"
      initial="hidden"
      animate="visible"
      style={{ top: 0 }}
    >
      <nav className="container mx-auto flex flex-col items-center px- sm:px-8 lg:px-16 xl:px-24">
        <motion.div
          className="text-2xl font-bold relative flex-nowrap overflow-hidden"
          variants={textVariants}
        >
          <motion.div
            className="absolute inset-y-0 left-0 right-0 bg-white"
            variants={lineVariants}
          ></motion.div>
          HHS CAR CLUB
        </motion.div>
        <motion.div
          className="border-t border-b border-black mt-4 w-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1 }}
        />
        <ul className="flex space-x-4 mt-4">
          <motion.li variants={linkVariants}>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer uppercase"
            >
              Home
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="cursor-pointer uppercase"
            >
              Gallery
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer uppercase"
            >
              About
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              to="team"
              smooth={true}
              duration={500}
              className="cursor-pointer uppercase"
            >
              Team
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer uppercase"
            >
              Contact
            </Link>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
