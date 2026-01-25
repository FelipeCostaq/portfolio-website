import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#work");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Trabalho", href: "#work" },
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit">
      <nav
        className={`
          flex items-center gap-1 rounded-full px-4 py-3
          transition-all duration-300 border
          ${
            isScrolled
              ? "bg-[#0f380f]/95 border-[#8bac0f]/30 shadow-lg backdrop-blur-md" 
              : "bg-[#0f380f]/80 border-transparent backdrop-blur-sm"
          }
        `}
      >
        <ul className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`
                    relative 
                    px-6 py-2     
                    text-lg md:text-xl
                    font-medium rounded-full transition-colors duration-300
                    font-pixel tracking-wide
                    ${isActive ? "text-[#0f380f]" : "text-[#e0f8cf] hover:text-white"} 
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#e0f8cf] rounded-full shadow-[0_0_10px_#8bac0f] z-0"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{link.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}