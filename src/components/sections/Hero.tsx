'use client';

import { motion } from 'framer-motion';
import HeroCanvas from '@/components/canvas/HeroCanvas';
import { ArrowDown, Terminal } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-cyber-dark text-foreground">
            {/* 3D Background */}
            <HeroCanvas />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center justify-center space-x-2 mb-4 pointer-events-auto"
                >
                    <div className="glass-card px-4 py-1.5 rounded-full flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse shadow-[0_0_10px_#00ff41]" />
                        <span className="text-xs md:text-sm font-mono text-cyber-green font-medium tracking-wide">
                            SYSTEM ONLINE // READY
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter"
                >
                    <span className="text-gradient-holo drop-shadow-2xl">
                        MOHD YASIR
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-3 text-xl md:text-3xl font-light text-gray-200"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-bold">Flutter</span> Engineer
                    </span>
                    <span className="hidden md:inline text-white/30">×</span>
                    <span className="flex items-center gap-2">
                        Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 font-mono font-bold">Enthusiast</span>
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="pt-8 flex flex-col md:flex-row gap-4 justify-center pointer-events-auto"
                >
                    <Link
                        href="#projects"
                        className="group relative px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all backdrop-blur-md border border-white/10 hover:border-white/30 hover:scale-105"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects
                        </span>
                    </Link>

                    <Link
                        href="#contact"
                        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full font-mono transition-all shadow-lg hover:shadow-blue-500/50 hover:scale-105 border border-transparent"
                    >
                        ./contact_me.sh
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2 text-gray-500">
                    <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
                    <ArrowDown className="w-5 h-5 animate-bounce text-cyber-green" />
                </div>
            </motion.div>
        </section>
    );
}
