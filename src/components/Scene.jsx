import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Float, Environment, Text3D } from "@react-three/drei";
import { Suspense } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { projects, profile } from "../data.js";

function FloatingKnot(props){
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
      <mesh castShadow {...props}>
        <torusKnotGeometry args={[0.55, 0.18, 160, 24]} />
        <meshStandardMaterial metalness={0.75} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function Scene(){
  return (
    <div className="canvas-wrap" aria-hidden>
      <Canvas shadows camera={{ position: [4, 3, 6], fov: 45 }}>
        <color attach="background" args={["#0b0f14"]} />
        <hemisphereLight intensity={0.6} />
        <directionalLight position={[5,5,5]} castShadow intensity={1.3} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <FloatingKnot position={[-1.6, 1.2, 0]} />
          <group position={[0, -0.1, 0]}>
            
          </group>
          {/* Arrange 3D project cards */}
          <group position={[0, -0.2, 0]}>
            <ProjectCard p={projects[0]} position={[ -2.6, -0.2, 0]} />
            <ProjectCard p={projects[1]} position={[  0.0, -0.2, 0]} />
            <ProjectCard p={projects[2]} position={[  2.6, -0.2, 0]} />
            <ProjectCard p={projects[3]} position={[  0.0, -1.7, 0]} />
          </group>
          <ContactShadows opacity={0.45} blur={2.8} scale={10} position={[0, -2, 0]} />
        </Suspense>
        <OrbitControls enableDamping makeDefault minDistance={3} maxDistance={12} />
      </Canvas>
    </div>
  );
}