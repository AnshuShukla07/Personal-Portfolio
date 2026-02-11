import React from "react";
import { Html } from "@react-three/drei";

export default function ProjectCard({ p, position=[0,0,0], onOpen }) {
  // Renders a simple floating 3D card with an HTML overlay
  return (
    <group position={position}>
      <mesh receiveShadow castShadow>
        <boxGeometry args={[2.2, 1.4, 0.06]} />
        <meshStandardMaterial roughness={0.6} metalness={0.1} />
      </mesh>
      <Html transform distanceFactor={1.4} occlude style={{ pointerEvents:"auto" }}>
        <div className="card3d" style={{ width: 260 }}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <div style={{ margin:"10px 0" }}>
            {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <a className="btn" href={p.link} target="_blank" rel="noreferrer" onClick={(e)=>{e.stopPropagation(); onOpen?.(p);}}>
            View project
          </a>
        </div>
      </Html>
    </group>
  );
}