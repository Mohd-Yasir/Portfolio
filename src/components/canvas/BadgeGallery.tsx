'use client';

import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Html, useCursor, OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'

const BADGES_DATA = [
    { name: "First Four", desc: "Completing four rooms in your first week of joining!", img: "https://assets.tryhackme.com/img/badges/firstfour.png" },
    { name: "Webbed", desc: "Understands how the world wide web works", img: "https://assets.tryhackme.com/img/badges/webbed.png" },
    { name: "World Wide Web", desc: "Completing the 'How The Web Works' module", img: "https://assets.tryhackme.com/img/badges/howthewebworks.png" },
    { name: "cat linux.txt", desc: "Being competent in Linux", img: "https://assets.tryhackme.com/img/badges/linux.png" },
    { name: "Blue", desc: "Hacking into Windows via EternalBlue", img: "https://assets.tryhackme.com/img/badges/blue.png" },
    { name: "Raffle Royalty", desc: "Participating in Hack2Win 2025!", img: "https://assets.tryhackme.com/img/badges/hack2win.png" },
    { name: "OWASP Top 10", desc: "Understanding every OWASP vulnerability", img: "https://assets.tryhackme.com/img/badges/owasptop10.png" },
    { name: "Cyber Ready", desc: "Understanding impact of training on teams", img: "https://assets.tryhackme.com/img/badges/careerready.png" },
    { name: "90 Day Streak", desc: "Hacking for 90 days in a row", img: "https://assets.tryhackme.com/img/badges/streak90.png" },
]

export default function BadgeGallery() {
    return (
        <div className="w-full h-[600px] relative font-sans">
            <Canvas camera={{ position: [0, 0, 14], fov: 30 }} className="z-10 relative" gl={{ alpha: true }} style={{ background: 'transparent' }}>
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <BadgeGrid />
                <OrbitControls enableZoom={false} enablePan={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
            </Canvas>
        </div>
    )
}

function BadgeGrid() {
    return (
        <group position={[0, -0.5, 0]}>
            {BADGES_DATA.map((badge, i) => {
                // Layout: 5 items on top, 4 items on bottom
                const isTopRow = i < 5
                const row = isTopRow ? 0 : 1
                const col = isTopRow ? i : (i - 5)

                const spacingX = 2.8
                const spacingY = 3.0

                let x = 0
                if (isTopRow) {
                    x = (col - 2) * spacingX
                } else {
                    x = (col - 1.5) * spacingX
                }

                const y = isTopRow ? spacingY * 0.5 : -spacingY * 0.5

                return (
                    <BadgeItem
                        key={i}
                        badge={badge}
                        position={[x, y, 0]}
                    />
                )
            })}
        </group>
    )
}

function BadgeItem({ badge, position }: { badge: typeof BADGES_DATA[0], position: [number, number, number] }) {
    const ref = useRef<THREE.Group>(null)
    const [hovered, setHover] = useState(false)
    useCursor(hovered)

    useFrame((state, delta) => {
        if (!ref.current) return
        const targetScale = hovered ? 1.15 : 1
        ref.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 6)
    })

    return (
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.4}>
            <group ref={ref} position={position}>
                {/* Hit Box */}
                <mesh
                    position={[0, 0, 0]}
                    visible={false}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}
                >
                    <planeGeometry args={[2.0, 2.0]} />
                    <meshBasicMaterial transparent opacity={0} />
                </mesh>

                {/* Visual */}
                <Html transform className="pointer-events-none" position={[0, 0, 0.1]} scale={0.5}>
                    <div
                        className="relative flex flex-col items-center justify-center w-48 select-none"
                        style={{ transform: 'translate(-50%, -50%)' }}
                    >
                        <img
                            src={badge.img}
                            alt={badge.name}
                            className="w-20 h-20 object-contain drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-500 ease-out"
                            style={{ filter: hovered ? 'drop-shadow(0 0 20px rgba(34,197,94,0.6))' : undefined }}
                        />

                        {/* Absolute Tooltip to keep center of gravity on Image */}
                        <div className={`absolute top-20 mt-2 bg-black/90 backdrop-blur-md border border-green-500/30 p-2 rounded-lg w-40 text-center transition-all duration-300 ease-out z-50 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                            <h3 className="text-green-400 font-bold text-sm mb-0.5">{badge.name}</h3>
                            <p className="text-gray-300 text-[10px] leading-tight">{badge.desc}</p>
                        </div>
                    </div>
                </Html>
            </group>
        </Float>
    )
}
