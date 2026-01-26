import { useGLTF, Float, Center } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export function GameboyModel() {
  const { scene } = useGLTF("/models/gameboy.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        const newMaterial = child.material.clone();
        newMaterial.side = THREE.DoubleSide;
        newMaterial.transparent = false;
        newMaterial.opacity = 1.0;
        newMaterial.depthWrite = true;
        newMaterial.alphaTest = 0.5;

        child.material = newMaterial;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
      floatingRange={[-0.1, 0.1]}
    >
      <Center top position={[0, -1, 0]}>
        <primitive object={scene} scale={0.1} rotation={[0.1, -0.6, 0]} />
      </Center>
    </Float>
  );
}

useGLTF.preload("/models/gameboy_classic.glb");
