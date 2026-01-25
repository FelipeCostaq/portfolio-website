import "./styles/global.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

//Components
import Navbar from "./components/layout/Navbar";
import LoadingScreen from "./components/layout/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="relative min-h-screen">
        <AnimatePresence>
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <>
            <div className="scanlines" />
            <Navbar />
            <main></main>
          </>
        )}
      </div>
    </>
  );
}

export default App;
