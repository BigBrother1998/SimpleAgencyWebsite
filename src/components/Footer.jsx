import { motion } from "framer-motion";

function Footer({ scrollToSection, mainRef }) {
  const arrowVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <footer className="relative bg-violet-700 text-white py-4">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <h1 className="lg:text-6xl sm:text-3xl font-bold uppercase">
          Stwórzmy wspólnie twoją wizję ✨
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 mx-auto text-center relative z-10">
        <div>
          <button type="button" onClick={() => scrollToSection(mainRef)}>
            <motion.div
              variants={arrowVariants}
              animate="float"
              className="flex items-end justify-end"
            >
              <svg
                className="w-10 h-10 text-white "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 16V4m0 0l-4 4m4-4l4 4"
                />
              </svg>
            </motion.div>
          </button>
        </div>
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} SB Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
