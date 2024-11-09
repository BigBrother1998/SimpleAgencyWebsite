import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Menu({ scrollToSection, navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between p-6">
        <div></div>

        <div className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={24}
            duration={0.3}
          />
        </div>

        <div className="hidden lg:flex lg:gap-x-12 lg:ml-auto">
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="pt-6 pr-4 text-xl tracking-tight leading-8 font-normal text-gray-900 hover:text-violet-700 hover:font-semibold"
              initial={{ y: 0 }}
              whileHover={{ y: -5, scale: 1.35 }}
              transition={{ duration: 0.3 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-white bg-opacity-60 backdrop-blur-md border border-gray-300"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center space-y-4 text-gray-900">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  className="text-2xl xl:font-semibold sm:font-normal sm:py-2 hover:text-indigo-400 transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
