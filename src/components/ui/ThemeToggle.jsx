import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("classic");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "lollipop") {
      root.setAttribute("data-theme", "lollipop");
    } else {
      root.removeAttribute("data-theme");
    }
  }, [theme]);

  const PaletteIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" 
      strokeLinecap="round" strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.109 0-1.422 1.153-2.5 2.578-2.5H16c2.209 0 4-1.79 4-4 0-3.25-6-8-6-8z"/>
    </svg>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-center gap-4">
      
      <motion.button
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 bg-gb-accent text-gb-bg rounded-full shadow-[2px_2px_0px_#000] border-2 border-gb-bg hover:brightness-110 transition-all"
      >
        <PaletteIcon />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-3 mb-2"
          >
            <button
              onClick={() => { setTheme("classic"); setIsOpen(false); }}
              className="relative group flex items-center gap-2"
            >
              <span className="absolute right-full ml-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-pixel">
                Classic
              </span>
              <div className={`w-10 h-10 rounded-full border-2 border-white shadow-md bg-[#051b14] flex items-center justify-center ${theme === 'classic' ? 'ring-2 ring-yellow-400' : ''}`}>
                 <div className="w-4 h-4 bg-[#8bac0f] rounded-full"></div>
              </div>
            </button>

            <button
              onClick={() => { setTheme("lollipop"); setIsOpen(false); }}
              className="relative group flex items-center gap-2"
            >
               <span className="absolute right-full ml-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-pixel">
                Lollipop
              </span>
              <div className={`w-10 h-10 rounded-full border-2 border-white shadow-md bg-[#151640] flex items-center justify-center ${theme === 'lollipop' ? 'ring-2 ring-yellow-400' : ''}`}>
                 <div className="w-4 h-4 bg-[#f783b0] rounded-full"></div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}