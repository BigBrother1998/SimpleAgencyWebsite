import { motion } from "framer-motion";
import React, { useRef } from "react";

function WebsiteCard({ offerRef }) {
  // Reference to the video element
  const videoRef = useRef(null);

  // Function to play video on hover
  const handleHoverStart = () => {
    videoRef.current.play();
  };

  // Function to pause video when hover ends
  const handleHoverEnd = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div ref={offerRef} className="overflow-hidden bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            className="relative w-full xl:w-[48rem] sm:w-[35rem] ring-1 ring-gray-400/10 rounded-2xl shadow-xl overflow-hidden cursor-pointer justify-self-center"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
          >
            <video
              ref={videoRef}
              src="../src/assets/video/website_presentation.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              preload="metadata"
            />
          </motion.div>

          <div className="lg:pl-56 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-violet-700">
                Strony internetowe
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Twój wyjątkowy styl 💎
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Każdy projekt jest starannie przemyślany i dostosowany do
                indywidualnych potrzeb, odzwierciedlając charakter oraz wartości
                Twojej marki poprzez:
              </p>

              <ul className="space-y-4 mt-9 font-semibold text-left text-gray-900">
                {[
                  "Atrakcyjny design",
                  "Personalizowana struktura",
                  "Unikalne elementy",
                  "Wyróżniająca się kolorystyka",
                  "Interaktywne animacje",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                  >
                    <svg
                      className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span className="text-sm/2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteCard;
