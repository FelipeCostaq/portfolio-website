import "./styles/global.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Navbar from "./components/layout/Navbar";
import LoadingScreen from "./components/layout/LoadingScreen";
import ThemeToggle from "./components/ui/ThemeToogle";

// Sections
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = (e) => {
    setIsScrolled(e.target.scrollTop > 50);
  };

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
    <div className="relative min-h-screen bg-gb-bg overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className={`
          transition-opacity duration-1000 ease-in-out
          ${isLoading ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
        `}
      >
        <div className="scanlines" />

        <Navbar activeSection={currentSection} setSection={setCurrentSection} isScrolled={isScrolled} isHidden={isModalOpen} />

        <main
          onScroll={handleScroll}
          className="pt-24 h-screen flex flex-col relative z-10 overflow-y-auto overflow-x-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1 w-full h-full"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <ThemeToggle />
    </div>
  );
}
