import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar({ activeSection, setSection, isScrolled, isHidden }) {
  const { t } = useLanguage();


  const links = [
    { id: "home", name: t.navbar.home },
    { id: "sobre", name: t.navbar.about },
    { id: "trabalhos", name: t.navbar.work },
    { id: "projetos", name: t.navbar.projects },
    { id: "contato", name: t.navbar.contact },
  ];

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit"
        >
          <nav 
            className={`
              flex items-center gap-1 rounded-full px-4 py-3 
              transition-all duration-500 border
              ${isScrolled 
                ? "bg-gb-surface/20 border-transparent shadow-none backdrop-blur-[2px] hover:bg-gb-surface/90 hover:backdrop-blur-md hover:shadow-lg" 
                : "bg-gb-surface/90 border-gb-dim/30 shadow-lg backdrop-blur-md"
              }
            `}
          >
            <ul className="flex items-center gap-1">
              {links.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <li key={link.id}>
                    <button
                      onClick={() => setSection(link.id)} 
                      className={`
                        relative px-5 py-2 text-lg font-medium rounded-full transition-colors duration-300 font-pixel tracking-wide
                        ${isActive ? "text-gb-surface" : "text-gb-text hover:text-white"} 
                        ${isScrolled && !isActive ? "opacity-70 hover:opacity-100" : "opacity-100"}
                      `}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activePill"
                          className="absolute inset-0 bg-gb-text rounded-full shadow-[0_0_10px_#8bac0f] z-0"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}