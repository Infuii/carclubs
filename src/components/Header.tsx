import { Link } from "react-scroll";
import { motion } from "framer-motion";

const linkVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Header = () => {
  const headerText = "HHS CAR CLUB";

  return (
    <motion.header
      className="bg-white text-black py-8 w-full z-10 border-b border-gray-300 overflow-x-hidden"
      initial="hidden"
      animate="visible"
      style={{ top: 0 }}
    >
      <nav className="container mx-auto flex flex-col items-center px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="text-2xl font-bold relative flex-nowrap overflow-hidden">
          {headerText.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="border-t border-b border-black mt-4 w-full"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 2 }}
        />
        <ul className="flex space-x-4 mt-4">
          <motion.li variants={linkVariants}>
            <Link
              to="gallery"
              smooth={true}
              duration={1}
              className="cursor-pointer uppercase text-black"
            >
              Gallery
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              to="about"
              smooth={true}
              duration={1}
              className="cursor-pointer uppercase text-black"
            >
              About
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              to="team"
              smooth={true}
              duration={1}
              className="cursor-pointer uppercase text-black"
            >
              Team
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              to="contact"
              smooth={true}
              duration={1}
              className="cursor-pointer uppercase text-black"
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
