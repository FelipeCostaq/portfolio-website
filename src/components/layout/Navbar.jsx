import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar({ activeSection, setSection, isScrolled, isHidden }) {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { id: "home", name: t.navbar.home },
    { id: "sobre", name: t.navbar.about },
    { id: "trabalhos", name: t.navbar.work },
    { id: "projetos", name: t.navbar.projects },
    { id: "contato", name: t.navbar.contact },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const glassEffect = isScrolled || isMobileMenuOpen
    ? "bg-gb-surface/20 border-transparent shadow-none backdrop-blur-[2px] hover:bg-gb-surface/90 hover:backdrop-blur-md hover:shadow-lg"
    : "bg-gb-surface/90 border-gb-dim/30 shadow-lg backdrop-blur-md";

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 md:px-0 pointer-events-none"
        >
          <nav
            className={`
              pointer-events-auto
              relative flex items-center justify-between md:justify-center
              rounded-full px-4 py-3 
              transition-all duration-500 border
              ${glassEffect}
              ${isMobileMenuOpen ? "bg-gb-surface/95 backdrop-blur-xl border-gb-dim/30" : ""}
            `}
          >
            <ul className="hidden md:flex items-center gap-1">
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
                          className="absolute inset-0 bg-gb-text rounded-full shadow-[0_0_10px_var(--color-gb-dim)] z-0"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <span className="md:hidden font-pixel text-gb-text text-sm ml-2">
               {links.find(l => l.id === activeSection)?.name || "Menu"}
            </span>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gb-text hover:text-gb-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto mt-2 w-full max-w-xs md:hidden"
              >
                <ul className="flex flex-col gap-2 p-2 bg-gb-surface/95 backdrop-blur-xl border-2 border-gb-dim rounded-xl shadow-2xl">
                  {links.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <li key={link.id}>
                        <button
                          onClick={() => {
                            setSection(link.id);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`
                            w-full text-center px-4 py-3 rounded-lg font-pixel text-lg transition-all
                            ${isActive 
                              ? "bg-gb-text text-gb-surface shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]" 
                              : "text-gb-text hover:bg-gb-dim/10 hover:text-gb-accent"
                            }
                          `}
                        >
                          {isActive && <span className="mr-2 text-xs">▶</span>}
                          {link.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}