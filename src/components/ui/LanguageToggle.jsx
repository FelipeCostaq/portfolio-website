import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const languages = [
  { code: "pt", label: "Português", src: "/flag/brazil.png" },
  { code: "en", label: "English", src: "/flag/uk.png" },
];

export default function LanguageToggle({ isOpen, onToggle }) {
  const { language, setLanguage } = useLanguage();
  const currentFlag = languages.find((l) => l.code === language)?.src;

  return (
    <div className="relative w-12 h-12">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-full mb-4 -left-2 flex flex-col gap-3 pb-2"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  onToggle(); 
                }}
                className="relative group flex items-center justify-center"
              >
                <span className="absolute right-full mr-3 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-pixel pointer-events-none">
                  {lang.label}
                </span>
                <div
                  className={`w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden flex items-center justify-center ${language === lang.code ? "ring-2 ring-yellow-400" : ""}`}
                >
                  <img
                    src={lang.src}
                    alt={lang.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onToggle}
        className={`
          w-12 h-12 p-1 rounded-full 
          shadow-[2px_2px_0px_#000] border-2 border-gb-bg 
          flex items-center justify-center overflow-hidden transition-all
          ${isOpen ? "brightness-110 ring-2 ring-gb-accent" : "bg-gb-surface hover:brightness-110"}
        `}
      >
        <img
          src={currentFlag}
          alt="Current Language"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.button>
    </div>
  );
}