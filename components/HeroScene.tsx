"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float } from "@react-three/drei";
import * as THREE from "three";

// Main amber icosahedron — flat-shaded, black edge lines
function Icosahedron() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.22;
    ref.current.rotation.x += delta * 0.07;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.55}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.55, 0]} />
        <meshStandardMaterial color="#FFD200" flatShading roughness={0.88} metalness={0} />
        <Edges color="#000000" threshold={10} />
      </mesh>
    </Float>
  );
}

// Coral orbiting cube
function SatelliteCube() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    ref.current.position.x = Math.cos(t * 0.55) * 2.9;
    ref.current.position.y = Math.sin(t * 0.55) * 1.25;
    ref.current.position.z = Math.sin(t * 0.35) * 0.6;
    ref.current.rotation.x += 0.018;
    ref.current.rotation.y += 0.014;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.38, 0.38, 0.38]} />
      <meshStandardMaterial color="#FF4D4D" flatShading roughness={1} metalness={0} />
      <Edges color="#000000" />
    </mesh>
  );
}

// Blue orbiting torus (low-poly)
function SatelliteTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime + Math.PI;
    ref.current.position.x = Math.cos(t * 0.48) * 2.65;
    ref.current.position.y = Math.sin(t * 0.48) * 1.45;
    ref.current.position.z = Math.cos(t * 0.28) * 0.55;
    ref.current.rotation.x += 0.016;
    ref.current.rotation.z += 0.011;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.28, 0.11, 4, 8]} />
      <meshStandardMaterial color="#4361EE" flatShading roughness={1} metalness={0} />
      <Edges color="#000000" />
    </mesh>
  );
}

// Teal orbiting octahedron
function SatelliteOct() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.72 + Math.PI / 3;
    ref.current.position.x = Math.sin(t * 0.68) * 2.5;
    ref.current.position.y = Math.cos(t * 0.68) * 1.6;
    ref.current.rotation.y += 0.02;
    ref.current.rotation.x += 0.013;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.3, 0]} />
      <meshStandardMaterial color="#00C2B2" flatShading roughness={1} metalness={0} />
      <Edges color="#000000" />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.8], fov: 44 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 4]} intensity={1.3} />
      <directionalLight position={[-3, -2, -3]} intensity={0.25} color="#FFD200" />
      <Icosahedron />
      <SatelliteCube />
      <SatelliteTorus />
      <SatelliteOct />
    </Canvas>
  );
}
