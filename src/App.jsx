import "./styles/global.css";
import { useState, useEffect, useRef } from "react"; 
import { AnimatePresence, motion } from "framer-motion";

// Components
import Navbar from "./components/layout/Navbar";
import LoadingScreen from "./components/layout/LoadingScreen";
import ThemeToggle from "./components/ui/ThemeToggle";

// Sections
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// Lang
import { LanguageProvider } from "./context/LanguageContext";
import LanguageToggle from "./components/ui/LanguageToggle";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(10px) brightness(0%)",
  },
  in: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px) brightness(100%)",
  },
  out: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(10px) brightness(0%)",
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.4,
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeWidget, setActiveWidget] = useState(null);

  const mainRef = useRef(null);

  const handleScroll = (e) => {
    setIsScrolled(e.target.scrollTop > 50);
  };

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Home />;
      case "sobre":
        return <About />;
      case "trabalhos":
        return <Experience />;
      case "projetos":
        return <Projects setModalOpen={setIsModalOpen} />;
      case "contato":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-gb-bg overflow-hidden">
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen
              key="loading"
              onComplete={() => setIsLoading(false)}
            />
          )}
        </AnimatePresence>

        <div
          className={`
            transition-opacity duration-1000 ease-in-out
            ${isLoading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
          `}
        >
          <div className="scanlines" />

          <Navbar
            activeSection={currentSection}
            setSection={setCurrentSection}
            isScrolled={isScrolled}
            isHidden={isModalOpen}
          />

          <main
            ref={mainRef} 
            onScroll={handleScroll}
            className="pt-24 h-screen flex flex-col relative z-10 overflow-y-auto overflow-x-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="flex-1 w-full min-h-full"
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        <div className="fixed bottom-6 right-6 z-50 flex flex-row gap-2 items-end">
          <LanguageToggle
            isOpen={activeWidget === "lang"}
            onToggle={() =>
              setActiveWidget(activeWidget === "lang" ? null : "lang")
            }
          />
          <ThemeToggle
            isOpen={activeWidget === "theme"}
            onToggle={() =>
              setActiveWidget(activeWidget === "theme" ? null : "theme")
            }
          />
        </div>
      </div>
    </LanguageProvider>
  );
}
