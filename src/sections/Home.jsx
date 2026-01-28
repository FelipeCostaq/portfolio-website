import { motion } from "framer-motion";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";

import { GameboyModel } from "../components/3d/Gameboy";
import { useLanguage } from "../context/LanguageContext";

useGLTF.preload("/models/gameboy_classic.glb");

const WavingHand = () => {
  return (
    <motion.span
      style={{
        display: "inline-block",
        transformOrigin: "70% 70%",
      }}
      whileHover={{
        rotate: [0, 14, -8, 14, -4, 10, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
      className="cursor-default"
    >
      👋
    </motion.span>
  );
};

const InteractiveText = ({ children, className }) => {
  return (
    <motion.span
      className={`inline-block cursor-default ${className}`}
      whileHover={{
        x: [0, -2, 2, -2, 1, 0],
        y: [0, 1, -1, 0],
        scale: 1.05,
        textShadow: "2px 2px 0px #0f380f",
      }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      {children}
    </motion.span>
  );
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <section 
      className="
        h-full w-full max-w-7xl mx-auto 
        
        flex flex-col min-[990px]:flex-row 
        justify-start min-[990px]:justify-between
        items-center 
        
        px-6 min-[990px]:px-12 
        pt-24 min-[990px]:pt-0
        
        relative overflow-hidden min-[990px]:overflow-visible
        
        gap-4 min-[990px]:gap-0
      "
    >

      <div 
        className="
          w-full min-[990px]:w-1/2 
          h-[40vh] min-[990px]:h-full 
          relative flex items-center justify-center 
          cursor-grab active:cursor-grabbing 
          order-1
        "
      >
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 1, 8], fov: 45 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />

          <Suspense fallback={null}>
            <GameboyModel />
          </Suspense>

          <ContactShadows
            position={[0, -2.5, 0]}
            opacity={0.5}
            scale={10}
            blur={1.5}
            far={4.5}
          />
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={2}
          />
        </Canvas>
      </div>

      <div 
        className="
          w-full min-[990px]:w-1/2 
          flex flex-col 
          
          items-center text-center min-[990px]:items-end min-[990px]:text-right
          
          z-20 
          
          -mt-6 min-[990px]:mt-0
          
          order-2 
          
          mb-32 min-[990px]:mb-0
        "
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl min-[990px]:text-3xl text-gb-text font-pixel mb-2 flex items-center justify-center min-[990px]:justify-end gap-2">
            {t.home.greeting} <WavingHand />
          </h2>
          
          <h1 className="text-4xl min-[990px]:text-7xl font-bold font-pixel leading-tight text-gb-text drop-shadow-[4px_4px_0px_#0f380f]">
            <InteractiveText className="text-gb-accent">
              {t.home.role1}
            </InteractiveText> 
            <br />
            <InteractiveText>
              {t.home.role2}
            </InteractiveText>
          </h1>
        </motion.div>
      </div>

    </section>
  );
}