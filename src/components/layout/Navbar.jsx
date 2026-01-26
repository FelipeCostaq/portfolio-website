import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ activeSection, setSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", name: "Home" },
    { id: "sobre", name: "Sobre" },
    { id: "trabalhos", name: "Experiências" },
    { id: "projetos", name: "Projetos" },
    { id: "contato", name: "Contato" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit">
      <nav className="flex items-center gap-1 rounded-full px-4 py-3 bg-gb-surface/90 border-gb-dim/30 shadow-lg backdrop-blur-md transition-all">
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
    </div>
  );
}