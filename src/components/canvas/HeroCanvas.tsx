'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Stars, TorusKnot, Text, Trail, ScrollControls, Scroll } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { ExperienceScene } from './ExperienceScene';


function Rig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.05)
        camera.lookAt(0, 0, 0)
    })
}

export default function HeroCanvas() {
    return (
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
            <Canvas
                dpr={[1, 2]}
                camera={{ position: [0, 0, 10], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <fog attach="fog" args={['#030014', 5, 30]} />
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#4FC3F7" />
                <pointLight position={[-10, -10, -5]} color="#bd00ff" intensity={5} />
                <pointLight position={[5, 0, 5]} color="#FF0080" intensity={3} />

                {/* Main 3D Experience (Mobile & Laptop) */}
                <ExperienceScene />

                <Rig />
            </Canvas>
        </div>
    );
}
