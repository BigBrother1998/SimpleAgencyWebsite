import { motion } from "framer-motion";

function Contact({ contactRef }) {
  return (
    <div ref={contactRef} className="bg-gray py-8 sm:py-12">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-violet-700">
          Kontakt
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-balance font-semibold text-center text-4xl tracking-tight text-gray-950 sm:text-5xl">
          Skontaktujmy się 📧
        </p>
        <div className="flex justify-center mt-6">
          <a href="mailto:szymonblasiak2806@gmail.com">
            <motion.button
              className="relative inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300 transition-all duration-300 ease-in-out"
              initial={{ y: 0 }}
              whileHover={{ y: -5, scale: 1.15 }}
              transition={{ duration: 0.3 }}
            >
              Wyślij wiadomość
              <span className="absolute inset-y-0 right-0 flex items-center pr-3"></span>
            </motion.button>
          </a>
        </div>
        <p className="mt-4 text-sm leading-8 text-gray-600 text-center">
          Kliknij na przycisk, aby się ze mną skontaktować.
        </p>
      </div>
    </div>
  );
}

export default Contact;
