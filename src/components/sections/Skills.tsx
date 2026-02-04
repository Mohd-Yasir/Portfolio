'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import * as THREE from 'three';
import { Network } from 'lucide-react';

const skills = [
    // Spread out positions - Wide & Random depth like the reference
    { name: "Flutter", color: "#02569B", pos: [-4.5, 1.5, 0], icon: "https://skillicons.dev/icons?i=flutter" },
    { name: "Dart", color: "#0175C2", pos: [-3, -3, 2], icon: "https://skillicons.dev/icons?i=dart" },

    // Moved to Center area
    { name: "Firebase", color: "#FFCA28", pos: [1.2, 0.5, 1], icon: "https://skillicons.dev/icons?i=firebase" },

    { name: "Python", color: "#3776AB", pos: [6, -1, -3], icon: "https://skillicons.dev/icons?i=python" },
    { name: "Java", color: "#007396", pos: [-7, 0, -5], icon: "https://skillicons.dev/icons?i=java" },
    { name: "C++", color: "#00599C", pos: [2, -4, 0], icon: "https://skillicons.dev/icons?i=cpp" },

    { name: "SQL", color: "#F29111", pos: [-4, 4, -4], icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "HTML", color: "#E34F26", pos: [7, 1, 1], icon: "https://skillicons.dev/icons?i=html" },

    { name: "Linux", color: "#FCC624", pos: [-7, 3.5, -2], icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Networking", color: "#2ea44f", pos: [0, -3.5, -3], icon: null, LucideIcon: Network },

    // Moved to Center area
    { name: "Git", color: "#F05032", pos: [-0.8, 1.8, 0], icon: "https://skillicons.dev/icons?i=git" },

    { name: "GitHub", color: "#181717", pos: [-6, -2, -1], icon: "https://skillicons.dev/icons?i=github" },
    { name: "Security", color: "#000000", pos: [-2, 3, 1], icon: "https://skillicons.dev/icons?i=kali" },

    { name: "Android Studio", color: "#3DDC84", pos: [3, 2, 2], icon: "https://skillicons.dev/icons?i=androidstudio" },
    { name: "VS Code", color: "#007ACC", pos: [-3, -1, 3], icon: "https://skillicons.dev/icons?i=vscode" },

    // Reduced size specifically
    { name: "Postman", color: "#FF6C37", pos: [2, 0, 4], icon: "https://skillicons.dev/icons?i=postman", customScale: 0.8 },
];

function SkillPill({ name, color, position, icon, LucideIcon, customScale = 1 }: any) {
    const [hovered, setHovered] = useState(false);

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
            <group position={position} scale={customScale}>
                {/* 
                   Using HTML Transform to place DOM elements in 3D space.
                */}
                <Html center transform distanceFactor={12}>
                    <div
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className={`
                            flex items-center justify-center w-14 h-14 rounded-full cursor-pointer transition-all duration-300 border
                            ${hovered
                                ? 'bg-white/20 border-white/50 scale-110 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                : 'bg-black/40 border-white/10 shadow-lg hover:border-white/30'
                            }
                            backdrop-blur-md
                        `}
                        style={{
                            boxShadow: hovered ? `0 0 15px ${color}60` : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            borderColor: hovered ? color : 'rgba(255,255,255,0.1)'
                        }}
                        title={name} // Detailed tooltip for UX
                    >
                        {/* Icon Only */}
                        <div className="w-8 h-8 flex items-center justify-center">
                            {icon ? (
                                <img src={icon} alt={name} className="w-full h-full object-contain" />
                            ) : LucideIcon ? (
                                <LucideIcon size={28} className="text-white" />
                            ) : null}
                        </div>
                    </div>
                </Html>
            </group>
        </Float>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="h-[80vh] w-full bg-cyber-dark relative overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
            <div className="absolute top-10 left-0 right-0 z-10 text-center pointer-events-none">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Technical Arsenal
                    </h2>
                </div>
            </div>

            <div className="absolute inset-0 z-0">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 45 }}>
                    <ambientLight intensity={1} />

                    <group>
                        {skills.map((skill, i) => (
                            <SkillPill
                                key={i}
                                {...skill}
                                position={skill.pos as [number, number, number]}
                            />
                        ))}
                    </group>

                    <OrbitControls
                        enableZoom={false}
                        enablePan={true}
                        enableRotate={true}
                        maxAzimuthAngle={Math.PI / 4} // Limit rotation to +/- 45 deg
                        minAzimuthAngle={-Math.PI / 4}
                        maxPolarAngle={Math.PI / 2 + 0.1}
                        minPolarAngle={Math.PI / 2 - 0.1}
                        rotateSpeed={0.2}
                    />
                </Canvas>
            </div>
        </section>
    );
}
