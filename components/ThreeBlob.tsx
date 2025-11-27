import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

// Add type definitions for Three.js elements in JSX if they are missing
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
    }
  }
}

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Very slow rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
      <Sphere args={[1, 100, 100]} scale={2} ref={meshRef}>
        <MeshDistortMaterial
          color="#4A9B9B"
          attach="material"
          distort={0.4} // Strength of distortion
          speed={1.5} // Speed of distortion
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
};

const ThreeBlob: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#F5F0E8" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#1E3A5F" />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default ThreeBlob;