'use client';

import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useHelper } from '@react-three/drei'
import { RectAreaLightHelper } from 'three-stdlib'
import { useRef, useMemo } from 'react'

export default function BadgeCard() {
    return (
        <div className="w-full h-full relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-xs z-0 pointer-events-none">
                Loading Lights...
            </div>

            <Canvas
                camera={{ position: [0, 5, -15], fov: 45 }}
                className="z-10 relative"
                style={{ background: 'transparent' }}
                gl={{ alpha: true }}
            >
                <RectAreaLightDemo />
                <OrbitControls target={[0, 5.5, 0]} enableZoom={false} />
            </Canvas>
        </div>
    )
}

function RectAreaLightDemo() {
    // Refs for lights to animate
    // Use non-null assertion to satisfy useHelper's strict Object3D requirement
    const light1 = useRef<THREE.RectAreaLight>(null!)
    const light2 = useRef<THREE.RectAreaLight>(null!)
    const light3 = useRef<THREE.RectAreaLight>(null!)

    // Helpers
    useHelper(light1, RectAreaLightHelper)
    useHelper(light2, RectAreaLightHelper)
    useHelper(light3, RectAreaLightHelper)

    // Roughness Map Texture (Checkerboard)
    const roughnessMap = useMemo(() => {
        if (typeof document === 'undefined') return null; // SSR safety

        const canvas = document.createElement('canvas');
        canvas.width = 2;
        canvas.height = 2;

        const ctx = canvas.getContext('2d');
        if (!ctx) return null;

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, 2, 2);
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, 1, 1);
        ctx.fillRect(1, 1, 1, 1);

        const texture = new THREE.CanvasTexture(canvas);
        texture.repeat.set(400, 400);
        texture.magFilter = THREE.NearestFilter;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        return texture;
    }, [])

    useFrame((state, delta) => {
        if (light1.current) light1.current.rotation.y -= delta;
        if (light2.current) light2.current.rotation.y += delta * 0.5;
        if (light3.current) light3.current.rotation.y += delta;
    })

    return (
        <>
            {/* Lights */}
            <rectAreaLight ref={light1} args={[0xff0000, 5, 4, 10]} position={[-5, 6, 5]} />
            <rectAreaLight ref={light2} args={[0x00ff00, 5, 4, 10]} position={[0, 6, 5]} />
            <rectAreaLight ref={light3} args={[0x0000ff, 5, 4, 10]} position={[5, 6, 5]} />

            {/* Torus Knot */}
            <mesh position={[0, 5.5, 0]}>
                <torusKnotGeometry args={[1.5, 0.5, 200, 16]} />
                <meshStandardMaterial color={0xffffff} roughness={0} metalness={0} />
            </mesh>

            {/* Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2000, 2000]} />
                <meshStandardMaterial
                    color={0x444444}
                    roughnessMap={roughnessMap || undefined}
                />
            </mesh>
        </>
    )
}
