import { motion } from "framer-motion";
import Menu from "./Menu.jsx";

function Banner({ offerRef, mainRef, scrollToSection, navigation }) {
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
    <div className="relative min-h-screen">
      <div
        ref={mainRef}
        className="absolute inset-0 -z-10 h-full w-full overflow-hidden"
      >
        <iframe
          src="https://my.spline.design/abstractgradientbackground-f069f6cc5392323e0920cb068113671a/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="h-full w-full"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>

      <Menu scrollToSection={scrollToSection} navigation={navigation} />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-left px-6">
        <div className="text-left max-w-7xl">
          <p className="xl:text-6xl sm:text-4xl font-semibold text-balance tracking-tight text-gray-950">
            Cześć
            <span className="ml-2 inline-block animate-wave origin-bottom-right">
              👋
            </span>
          </p>
          <h1 className="mt-8 xl:text-5xl sm:text-3xl text-gray-950 tracking-tight leading-loose text-pretty">
            Jestem
            <span className="text-violet-700 font-semibold"> Szymon</span>. Web
            developer, który tworzy strony oraz programy wyróżniające się na tle
            innych pod względem jakości i innowacyjności.
          </h1>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection(offerRef)}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          variants={arrowVariants}
          animate="float"
          className="flex items-center justify-center"
        >
          <svg
            className="w-10 h-10 text-violet-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </motion.div>
      </button>
    </div>
  );
}

export default Banner;
