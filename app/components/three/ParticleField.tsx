"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = particles[i].x;
      pos[i3 + 1] = particles[i].y;
      pos[i3 + 2] = particles[i].z;
    }
    return pos;
  }, [count, particles]);

  useFrame((state) => {
    if (!ref.current) return;

    const positions = ref.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.getElapsedTime() * 0.5;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const particle = particles[i];

      positions[i3] = particle.x + Math.sin(time * particle.speed + particle.time) * 2;
      positions[i3 + 1] = particle.y + Math.cos(time * particle.speed + particle.time) * 2;
      positions[i3 + 2] = particle.z + Math.sin(time * particle.speed * 0.5 + particle.time) * 1;
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = time * 0.05;
    ref.current.rotation.x = Math.sin(time * 0.1) * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function MagicOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2.5, 1]} />
      <meshBasicMaterial
        color="#8b5cf6"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
  showOrb?: boolean;
}

export function ParticleField({
  className = "",
  particleCount = 500,
  showOrb = true,
}: ParticleFieldProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight distance={40} intensity={8} color="#8b5cf6" />
        <Particles count={particleCount} />
        {showOrb && <MagicOrb />}
      </Canvas>
    </div>
  );
}
