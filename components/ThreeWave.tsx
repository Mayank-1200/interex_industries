import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Add type definitions for Three.js elements in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      fog: any;
      instancedMesh: any;
      sphereGeometry: any;
      meshBasicMaterial: any;
    }
  }
}

const WaveMesh = () => {
  const mesh = useRef<THREE.Mesh>(null);
  
  // Create a plane geometry with high segment count for smooth wave deformation
  // 60x40 size to cover the screen well when tilted
  const geometry = useMemo(() => new THREE.PlaneGeometry(60, 40, 50, 30), []);

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Slow down the time for gentle movement
    const time = state.clock.getElapsedTime() * 0.2;
    
    // Access position attribute
    const { position } = mesh.current.geometry.attributes;
    
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      
      // Calculate wave height (z) using overlapping sine/cosine waves
      // This creates a more organic, fluid surface than a single sine wave
      const z = 
        Math.sin(x * 0.2 + time) * 1.5 + 
        Math.cos(y * 0.3 + time * 0.8) * 1.0 + 
        Math.sin((x + y) * 0.1 + time * 0.5) * 0.5;
      
      position.setZ(i, z);
    }
    
    // Notify Three.js that vertices have been updated
    position.needsUpdate = true;
  });

  return (
    <mesh 
      ref={mesh} 
      position={[0, -2, -10]} 
      rotation={[-Math.PI / 2.5, 0, 0]} 
      geometry={geometry}
    >
      {/* 
        MeshStandardMaterial with wireframe enabled to create the grid look
        Transparent with low opacity for the "ghostly" tech feel
      */}
      <meshStandardMaterial 
        color="#4A9B9B" 
        wireframe={true} 
        transparent={true}
        opacity={0.25}
        roughness={0.4}
        metalness={0.8} // Increased metalness for better light reflection
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// New Component: Light that follows the mouse
const InteractiveLight = () => {
  const light = useRef<THREE.PointLight>(null);
  const { viewport, mouse } = useThree();

  useFrame(() => {
    if (light.current) {
      // Convert mouse position (-1 to 1) to viewport coordinates
      // We use a lerp (linear interpolation) for smooth movement
      const targetX = (mouse.x * viewport.width) / 2;
      const targetY = (mouse.y * viewport.height) / 2;
      
      light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, targetX, 0.1);
      light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, targetY, 0.1);
      
      // Keep z position slightly elevated above the wave
      light.current.position.z = 2;
    }
  });

  return (
    <pointLight 
      ref={light} 
      distance={15} 
      intensity={3} 
      color="#7BC5C5" 
      decay={2} 
    />
  );
};

// New Component: Floating ambient particles
const FloatingParticles = () => {
  const count = 40;
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random initial positions and speeds
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const speed = 0.002 + Math.random() * 0.005; // Very slow drift
      const x = (Math.random() - 0.5) * 30; // Wide spread X
      const y = (Math.random() - 0.5) * 20; // Wide spread Y
      const z = (Math.random() - 0.5) * 10 - 5; // Depth
      const scale = Math.random(); // Random sizes
      temp.push({ t, speed, x, y, z, scale });
    }
    return temp;
  }, []);

  useFrame(() => {
    if (!mesh.current) return;

    particles.forEach((particle, i) => {
      // Update time factor
      particle.t += particle.speed;
      
      // Calculate organic movement (lissajous-like curve)
      const x = particle.x + Math.sin(particle.t * 3) * 0.5;
      const y = particle.y + Math.cos(particle.t * 2) * 0.5;
      const z = particle.z + Math.sin(particle.t * 1) * 0.5;
      
      // Gentle pulsing scale
      const s = particle.scale * (1 + Math.sin(particle.t * 5) * 0.2);
      
      dummy.position.set(x, y, z);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.08, 10, 10]} />
      <meshBasicMaterial color="#4A9B9B" transparent opacity={0.4} />
    </instancedMesh>
  );
};

const ThreeWave: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 4, 10], fov: 60 }} dpr={[1, 2]}>
        {/* Background color to match the site theme */}
        <color attach="background" args={['#FAFAFA']} />
        
        {/* Lighting setup to accentuate the 3D depth */}
        <ambientLight intensity={1.5} color="#F5F0E8" />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#4A9B9B" />
        <pointLight position={[-10, 5, -5]} intensity={0.8} color="#1E3A5F" />
        
        {/* Interactive Elements */}
        <InteractiveLight />
        
        {/* Fog creates depth fading effect */}
        <fog attach="fog" args={['#FAFAFA', 5, 45]} />
        
        <WaveMesh />
        <FloatingParticles />
      </Canvas>
    </div>
  );
};

export default ThreeWave;