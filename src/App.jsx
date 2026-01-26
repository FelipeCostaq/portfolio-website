import "./styles/global.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Navbar from "./components/layout/Navbar";
import LoadingScreen from "./components/layout/LoadingScreen";

// Sections 
import Home from "./sections/Home";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("home"); 

  const renderSection = () => {
    switch (currentSection) {
      case "home": return <Home />;
      case "sobre": return <div className="p-20 text-gb-text font-pixel">Sobre (Em breve)</div>; 
      case "trabalhos": return <div className="p-20 text-gb-text font-pixel">Trabalhos (Em breve)</div>;
      case "projetos": return <div className="p-20 text-gb-text font-pixel">Projetos (Em breve)</div>;
      case "contato": return <div className="p-20 text-gb-text font-pixel">Contato (Em breve)</div>;
      default: return <Home />;
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
        
        <Navbar 
          activeSection={currentSection} 
          setSection={setCurrentSection} 
        />

        <main className="pt-24 h-screen flex flex-col relative z-10">
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
      
    </div>
  );
}