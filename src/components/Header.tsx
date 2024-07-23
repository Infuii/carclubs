import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 0.5 } },
};

const Header = () => {
  const headerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const headerText = "HHS CAR CLUB";
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setIsFixed(
          window.scrollY >
            (headerRef.current as HTMLElement).offsetTop +
              (headerRef.current as HTMLElement).offsetHeight
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section, #home");
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    // Set the active link based on the current pathname
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
      ref={headerRef}
      className="bg-gray-800 text-white py-8 w-full z-10 border-b border-gray-300 overflow-x-hidden"
      initial="hidden"
      animate="visible"
      style={{ top: 0 }}
      id="home"
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
          className="border-t border-b border-white mt-4 w-full"
          initial={{ width: 0 }}
          animate={{ width: "50%" }}
          transition={{ duration: 2 }}
        />
      </nav>
      <nav
        className={`w-full ${isFixed ? "fixed top-0 bg-gray-800 z-50" : ""}`}
      >
        <ul
          className={`flex space-x-4 m-3 justify-center ${
            isFixed ? "p-4" : ""
          }`}
        >
          <motion.li variants={linkVariants} className="relative">
            {location.pathname === "/" ? (
              <HashLink
                smooth
                to="/#home"
                className="cursor-pointer uppercase text-white"
              >
                Home
                <AnimatePresence>
                  {activeLink === "home" && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-white"
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
              <Link to="/" className="cursor-pointer uppercase text-white">
                Home
              </Link>
            )}
          </motion.li>
          <motion.li variants={linkVariants} className="relative">
            <Link
              to={"/gallery"}
              className="cursor-pointer uppercase text-white"
            >
              Gallery
              <AnimatePresence>
                {activeLink === "gallery" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-white"
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
              to="/#about"
              className="cursor-pointer uppercase text-white"
            >
              About
              <AnimatePresence>
                {activeLink === "about" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-white"
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
              to="/#tickets"
              className="cursor-pointer uppercase text-white"
            >
              Tickets
              <AnimatePresence>
                {activeLink === "tickets" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-white"
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
              to="/#contact"
              className="cursor-pointer uppercase text-white"
            >
              Contact
              <AnimatePresence>
                {activeLink === "contact" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-white"
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
