"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { AdaptiveDpr, Float, ContactShadows } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Arcbig hero: a field of arches orbiting one large glossy ring.
 * Content never lives in the canvas; this is a decorative layer behind HTML.
 */

const KLEIN = new THREE.Color("#1226d9");
const CHALK = new THREE.Color("#f3f1ea");
const FLARE = new THREE.Color("#e6ff4a");

function usePointer() {
  const target = useRef(new THREE.Vector2(0, 0));
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return target;
}

function Arches({ count = 14, animate }: { count?: number; animate: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = usePointer();
  const items = useMemo(() => {
    const rng = mulberry32(7);
    return Array.from({ length: count }, (_, i) => {
      const radius = 2.4 + rng() * 3.2;
      const angle = (i / count) * Math.PI * 2 + rng() * 0.4;
      const scale = 0.35 + rng() * 0.6;
      return {
        position: [Math.cos(angle) * radius, (rng() - 0.5) * 2.4, Math.sin(angle) * radius] as [number, number, number],
        rotation: [rng() * 0.6 - 0.3, angle, rng() * 0.4 - 0.2] as [number, number, number],
        scale,
        speed: 0.2 + rng() * 0.5,
        color: i % 5 === 0 ? FLARE : i % 2 === 0 ? CHALK : KLEIN,
      };
    });
  }, [count]);

  const geometry = useMemo(() => new THREE.TorusGeometry(1, 0.22, 24, 64, Math.PI), []);
  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((state, delta) => {
    if (!group.current || !animate) return;
    group.current.rotation.y += delta * 0.06;
    const px = pointer.current.x * 0.18;
    const py = pointer.current.y * 0.12;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -py, 2, delta);
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, px, 2, delta);
    group.current.children.forEach((child, i) => {
      child.rotation.x += delta * items[i].speed * 0.4;
    });
  });

  return (
    <group ref={group}>
      {items.map((it, i) => (
        <mesh key={i} geometry={geometry} position={it.position} rotation={it.rotation} scale={it.scale} castShadow>
          <meshStandardMaterial color={it.color} roughness={0.35} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function Ring({ animate }: { animate: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current || !animate) return;
    ref.current.rotation.y += delta * 0.12;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.25 + 0.9;
  });
  return (
    <Float speed={animate ? 1.2 : 0} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={ref} rotation={[0.9, 0, 0]} castShadow>
        <torusGeometry args={[1.7, 0.42, 48, 128]} />
        <meshPhysicalMaterial color={KLEIN} roughness={0.18} metalness={0.05} clearcoat={1} clearcoatRoughness={0.15} sheen={0.4} sheenColor={CHALK} />
      </mesh>
    </Float>
  );
}

function Rig() {
  const { camera, size } = useThree();
  useEffect(() => {
    // Pull the camera back on tall (portrait) canvases so the ring stays framed.
    const aspect = size.width / Math.max(size.height, 1);
    const z = aspect < 1 ? 9.5 / Math.max(aspect, 0.45) : 9.5;
    camera.position.set(0, 0.6, z);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height]);
  return null;
}

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function ArcScene({ className = "" }: { className?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!wrap.current) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.05 });
    io.observe(wrap.current);
    return () => io.disconnect();
  }, []);

  const animate = visible && !reduced;

  return (
    <div ref={wrap} className={className} aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={animate ? "always" : "demand"}
        camera={{ fov: 32, near: 0.1, far: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        shadows
        style={{ background: "transparent" }}
      >
        <Rig />
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 6]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
        <directionalLight position={[-6, -2, -4]} intensity={0.7} color={FLARE} />
        <Ring animate={animate} />
        <Arches animate={animate} />
        <ContactShadows position={[0, -2.6, 0]} opacity={0.35} scale={14} blur={2.6} far={4} color="#0b169a" />
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}
