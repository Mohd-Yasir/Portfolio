'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, useGLTF, PresentationControls, Center, Environment, Lightformer, useTexture, RoundedBox } from '@react-three/drei';
import { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';

interface FigureProps {
    scale?: number;
    position?: [number, number, number];
    rotation?: [number, number, number];
}

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <Lightformer form="rect" intensity={10} position={[-1, 0, -10]} scale={10} color={"#495057"} />
                    <Lightformer form="rect" intensity={10} position={[-10, 2, 1]} scale={10} rotation-y={Math.PI / 2} />
                    <Lightformer form="rect" intensity={10} position={[10, 0, 1]} scale={10} rotation-y={Math.PI / 2} />
                </group>
            </Environment>

            <spotLight
                position={[-2, 10, 5]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI * 0.2}
                color={"#f8f9fa"}
            />
            <spotLight
                position={[0, -25, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI * 0.2}
                color={"#f8f9fa"}
            />
            <spotLight position={[0, 15, 5]} angle={0.15} penumbra={1} decay={0.1} intensity={Math.PI * 3} />
        </group>
    );
};

function MobileModel(props: FigureProps) {
    const { scene, materials } = useGLTF('/models/scene.glb');

    useEffect(() => {
        if (materials) {
            Object.entries(materials).forEach(([name, material]) => {
                if (
                    name !== "zFdeDaGNRwzccye" &&
                    name !== "ujsvqBWRMnqdwPx" &&
                    name !== "hUlRcbieVuIiOXG" &&
                    name !== "jlzuBkUzuJqgiAK" &&
                    name !== "xNrofRCqOXXHVZt"
                ) {
                    (material as THREE.MeshStandardMaterial).color = new THREE.Color("#C9C8C2");
                    (material as THREE.MeshStandardMaterial).needsUpdate = true;
                }
            });
        }
    }, [materials]);

    return (
        <Center {...props}>
            <primitive object={scene} />
        </Center>
    );
}

useGLTF.preload('/models/scene.glb');

function LaptopModel({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: FigureProps) {
    const group = useRef<THREE.Group>(null!);

    const metalMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#E2E2E2", // White Silver
        roughness: 0.15, // Smooth/Shiny
        metalness: 1.0,
        envMapIntensity: 2.0
    }), []);

    const screenTexture = useTexture('/windows_wallpaper.png');

    // Procedural RGB Keys
    const keys = useMemo(() => {
        const k = [];
        const rows = 5;
        const cols = 14;
        const keySize = 0.16;
        const gap = 0.03;

        // Simple QWERTY Layout Approximation
        const qwerty = [
            "1234567890-=",
            "QWERTYUIOP[]",
            "ASDFGHJKL;'",
            "ZXCVBNM,./",
            "SPACE"
        ];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // Subtle Cyber Blue/Purple Gradient (Professional Look)
                // Hue range: 0.55 (Blue) -> 0.7 (Purple)
                const hue = 0.55 + (c / cols) * 0.15;
                // Lower Saturation (0.6) and Medium Lightness (0.5)
                const color = new THREE.Color().setHSL(hue, 0.6, 0.5);

                // Determine Character
                let char = "";
                let width = keySize;

                if (r < qwerty.length) {
                    const rowStr = qwerty[r];
                    if (r === 4) { // Spacebar row
                        if (c > 3 && c < 10) continue; // Skip middle keys
                        if (c === 3) {
                            width = keySize * 6 + gap * 5; // Wide spacebar
                            // char = ""; // No text on spacebar
                        }
                    } else {
                        // Center align map roughly to row
                        const charIndex = c - 1;
                        if (charIndex >= 0 && charIndex < rowStr.length) {
                            char = rowStr[charIndex];
                        }
                    }
                }

                k.push(
                    <group
                        key={`${r}-${c}`}
                        position={[
                            (c - (cols - 1) / 2) * (keySize + gap),
                            0.06,
                            (r - (rows - 1) / 2) * (keySize + gap) - 0.2
                        ]}
                    >
                        {/* Key Cap */}
                        <mesh>
                            <boxGeometry args={[width, 0.03, keySize]} />
                            <meshStandardMaterial
                                color="#111"
                                emissive={color}
                                emissiveIntensity={0.5} // Reduced intensity
                                roughness={0.4}
                            />
                        </mesh>


                    </group>
                )
            }
        }
        return k;
    }, []);

    return (
        <Center position={position} rotation={rotation} scale={scale}>
            <group ref={group}>

                {/* === BOTTOM CHASSIS === */}
                <RoundedBox args={[3.2, 0.12, 2.2]} radius={0.05} smoothness={8}>
                    <primitive object={metalMaterial} attach="material" />
                </RoundedBox>

                {/* Keyboard Well */}
                <mesh position={[0, 0.061, -0.2]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[2.8, 1.1]} />
                    <meshStandardMaterial color="#111" roughness={1} />
                </mesh>

                {keys}

                {/* Trackpad */}
                <mesh position={[0, 0.061, 0.65]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[1.1, 0.65]} />
                    <meshStandardMaterial color="#222" roughness={0.3} metalness={0.2} />
                </mesh>

                {/* Rubber Feet */}
                {[[-1.3, 0.8], [1.3, 0.8], [-1.3, -0.8], [1.3, -0.8]].map(([x, z], i) => (
                    <mesh key={i} position={[x, -0.06, z]}>
                        <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
                        <meshStandardMaterial color="#000" />
                    </mesh>
                ))}

                {/* === SCREEN UNIT === */}
                {/* Hinge positioned at the back edge of the base */}
                <group position={[0, 0.06, -1.1]} rotation={[-Math.PI / 4, 0, 0]}>

                    {/* Hinge Cylinder */}
                    <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.04, 0.04, 3.1, 32]} />
                        <meshStandardMaterial color="#111" metalness={0.8} />
                    </mesh>

                    {/* Screen Lid (Vertical when parent rotation is -PI/2) */}
                    <group position={[0, 1.05, 0]}>
                        <RoundedBox args={[3.2, 2.1, 0.06]} radius={0.05} smoothness={8}>
                            <primitive object={metalMaterial} attach="material" />
                        </RoundedBox>

                        {/* Bezel */}
                        <mesh position={[0, 0, 0.031]}>
                            <planeGeometry args={[3.1, 2.0]} />
                            <meshStandardMaterial color="#000" roughness={0.1} />
                        </mesh>

                        {/* Display Area */}
                        <mesh position={[0, 0, 0.032]}>
                            <planeGeometry args={[2.95, 1.85]} />
                            <meshStandardMaterial
                                map={screenTexture}
                                toneMapped={false}
                                emissiveMap={screenTexture}
                                emissiveIntensity={0.5}
                                color="#fff"
                            />
                        </mesh>
                    </group>
                </group>

            </group>
        </Center>
    );
}

export function ExperienceScene() {
    const group = useRef<THREE.Group>(null!);

    useFrame((state) => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollOffset = maxScroll > 0 ? scrollY / maxScroll : 0;

        if (group.current) {
            group.current.rotation.y = scrollOffset * Math.PI * 2;
        }
    });

    return (
        <group ref={group}>
            <StudioLights />

            {/* Mobile Model */}
            <Float speed={3} rotationIntensity={0.5} floatIntensity={1} position={[-4, 0, 0]}>
                <PresentationControls
                    global={false}
                    cursor={true}
                    snap={false}
                    speed={2}
                    zoom={1}
                    rotation={[0, 0, 0]}
                    polar={[-Infinity, Infinity]}
                    azimuth={[-Infinity, Infinity]}
                    config={{ mass: 1, tension: 170, friction: 26 }}
                >
                    <MobileModel
                        position={[0, 0, 0]}
                        scale={20}
                        rotation={[0, 0.3, 0]}
                    />
                </PresentationControls>
            </Float>

            {/* Laptop Model */}
            <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1} position={[4, 0, 0]}>
                <PresentationControls
                    global={false}
                    cursor={true}
                    snap={false}
                    speed={2}
                    zoom={1}
                    rotation={[0, 0, 0]}
                    polar={[-Infinity, Infinity]}
                    azimuth={[-Infinity, Infinity]}
                    config={{ mass: 1, tension: 170, friction: 26 }}
                >
                    <LaptopModel
                        position={[0, 0, 0]}
                        scale={1.5}
                        rotation={[0, 0, 0]}
                    />
                </PresentationControls>
            </Float>

            <Stars radius={50} depth={50} count={3000} factor={6} saturation={1} fade speed={2} />
        </group>
    );
}