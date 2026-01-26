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
  return (
    <section className="h-full w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 relative overflow-hidden md:overflow-visible -mt-6">

      <div className="w-full md:w-1/2 h-[50vh] md:h-full relative flex items-center justify-center cursor-grab active:cursor-grabbing">
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

      <div className="w-full md:w-1/2 flex flex-col items-end text-right z-20 mt-4 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl text-gb-text font-pixel mb-2 flex items-center justify-end gap-2">
            Oi, eu sou o Felipe <WavingHand />
          </h2>
          
          <h1 className="text-5xl md:text-7xl font-bold font-pixel leading-tight text-gb-text drop-shadow-[4px_4px_0px_#0f380f]">
            <InteractiveText className="text-gb-accent">
              DESENVOLVEDOR
            </InteractiveText> 
            <br />
            <InteractiveText>
              FULL-STACK
            </InteractiveText>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}