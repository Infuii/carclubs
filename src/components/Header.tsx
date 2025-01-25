import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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

const underlineVariants = {
  // hidden: { width: 0 }, removed for now since navbar coming down from top removed
  // visible: { width: "100%", transition: { duration: 0.5 } },
};

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const headerTexts = ["HOPKINTON", "CAR", "CLUB"];

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/gallery") {
      setActiveLink("gallery");
    } else if (location.hash === "#about") {
      setActiveLink("about");
    } else if (location.hash === "#tickets") {
      setActiveLink("tickets");
    } else if (location.hash === "#contact") {
      setActiveLink("contact");
    } else {
      setActiveLink("home");
    }
  }, [location]);

  return (
    <motion.header
      className="bg-gradient-to-r from-green-900 to-green-600 text-white py-6 w-full z-10 border-b border-green-400 overflow-x-hidden shadow-lg relative top-0"
      initial="hidden"
      animate="visible"
    >
      <nav className="container mx-auto flex flex-col items-center px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="text-2xl font-bold relative flex-nowrap overflow-hidden">
          {headerTexts
            .join(" ")
            .split("")
            .map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
        </div>
        <motion.div
          className="border-t border-b border-green-300 mt-4 w-full"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 2 }}
        />
        <ul className="flex space-x-4 m-3 justify-center">
          <motion.li variants={linkVariants} className="relative">
            {location.pathname === "/" ? (
              <HashLink
                smooth
                to="/#home"
                className="cursor-pointer uppercase text-green-100 hover:text-green-300 transition-colors duration-300"
              >
                Home
                <AnimatePresence>
                  {activeLink === "home" && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-green-300"
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={underlineVariants}
                      key="home-underline"
                    />
                  )}
                </AnimatePresence>
              </HashLink>
            ) : (
              <Link
                to="/"
                className="cursor-pointer uppercase text-green-100 hover:text-green-300 transition-colors duration-300"
              >
                Home
              </Link>
            )}
          </motion.li>
          <motion.li variants={linkVariants} className="relative">
            <Link
              to={"/gallery"}
              className="cursor-pointer uppercase text-green-100 hover:text-green-300 transition-colors duration-300"
            >
              Gallery
              <AnimatePresence>
                {activeLink === "gallery" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-green-300"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={underlineVariants}
                    key="gallery-underline"
                  />
                )}
              </AnimatePresence>
            </Link>
          </motion.li>
          <motion.li variants={linkVariants} className="relative">
            <HashLink
              smooth
              to="/#tickets"
              className="cursor-pointer uppercase text-green-100 hover:text-green-300 transition-colors duration-300"
            >
              Tickets
              <AnimatePresence>
                {activeLink === "tickets" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-green-300"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={underlineVariants}
                    key="tickets-underline"
                  />
                )}
              </AnimatePresence>
            </HashLink>
          </motion.li>
          <motion.li variants={linkVariants} className="relative">
            <HashLink
              smooth
              to="/#about"
              className="cursor-pointer uppercase text-green-100 hover:text-green-300 transition-colors duration-300"
            >
              About
              <AnimatePresence>
                {activeLink === "about" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-green-300"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={underlineVariants}
                    key="about-underline"
                  />
                )}
              </AnimatePresence>
            </HashLink>
          </motion.li>

          <motion.li variants={linkVariants} className="relative">
            <HashLink
              smooth
              to="/#contact"
              className="cursor-pointer uppercase text-green-100 hover:text-green-300 transition-colors duration-300"
            >
              Contact
              <AnimatePresence>
                {activeLink === "contact" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-green-300"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={underlineVariants}
                    key="contact-underline"
                  />
                )}
              </AnimatePresence>
            </HashLink>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
