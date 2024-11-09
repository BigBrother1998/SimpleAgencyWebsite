import { motion } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
function ProgramCard() {
  return (
    <div className="overflow-hidden bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-violet-700">
                Programy
              </h2>
              <p className="mt-2 text-3xl text-pretty font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Zostaw formuły kierowcą 🏎️
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Rozwiązania, które tworze stają się nieocenionym narzędziem w
                różnych dziedzinach, ułatwiając pracę zarówno profesjonalistom,
                jak i amatorom oferując:
              </p>
              <ul className="space-y-4 mt-9 font-semibold text-left text-gray-900">
                {[
                  "Automatyzację obliczeń",
                  "Łatwość obsługi",
                  "Wyższą dokładność",
                  "Efektywność czasową",
                  "Wsparcie wizualizacji danych",
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
          <motion.div
            className="relative xl:w-[48rem] sm:w-[35rem] rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-400/10 cursor-pointer justify-self-center"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="src/assets/images/Spreadsheet.png"
                  alt="First Image"
                  className="w-full h-full object-contain"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="src/assets/images/Program.png"
                  alt="Second Image"
                  className="w-full h-full object-contain"
                />
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;
