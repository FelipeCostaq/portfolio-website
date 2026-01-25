import { motion } from "framer-motion";
import { useEffect } from "react";

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-gb-bg text-gb-text"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="font-pixel text-xl tracking-widest text-gb-dim uppercase"
      >
        Iniciando...
      </motion.p>

      <div className="w-64 h-4 border-2 border-gb-dim mt-4 rounded p-1">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "linear" }} 
          className="h-full bg-gb-accent"
        />
      </div>
    </motion.div>
  );
}
