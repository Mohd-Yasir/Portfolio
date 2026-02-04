'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Lock, Github, ExternalLink, Terminal } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: "SmartPath AI",
        category: "Flutter",
        description: "AI-powered chat app offering personalized learning paths, career guidance, and interactive interview practice. Features secure authentication and intelligent recommendations.",
        tech: ["Flutter", "GetX", "Firebase", "LLM API", "MVC"],
        links: { github: "https://github.com/Mohd-Yasir/SmartPathAI", demo: "#" },
        image: "/placeholder-app.jpg"
    },
    {
        id: 2,
        title: "Flash Chat",
        category: "Flutter",
        description: "Real-time messaging application with seamless UI, secure authentication, and instant message synchronization across devices using Firestore.",
        tech: ["Flutter", "Provider", "Firebase", "Cloud Messaging"],
        links: { github: "https://github.com/Mohd-Yasir/flashchat", demo: "#" },
        image: "/placeholder-fintech.jpg"
    },
    {
        id: 3,
        title: "Multithreaded Port Scanner",
        category: "Security",
        description: "A Python-based CLI tool for rapid network reconnaissance. Features multi-threaded scanning, an ethical warning system for public IPs, and a modular design published on PyPI.",
        tech: ["Python", "Sockets", "Threading", "CLI", "Networking"],
        links: { github: "https://github.com/Mohd-Yasir/Multithreaded-Port-Scanner", demo: "#" },
        image: "/placeholder-security.jpg"
    },
    {
        id: 4,
        title: "Green Thumb Garden",
        category: "ML/AI",
        description: "Intelligent crop recommendation system using Machine Learning algorithms (Random Forest, Decision Tree) to analyze geographic and soil data for optimal agriculture planning.",
        tech: ["Python", "Flask", "Scikit-Learn", "Pandas", "Random Forest"],
        links: { github: "https://github.com/Mohd-Yasir/Green-Thumb-Garden", demo: "#" },
        image: "/placeholder-ml.jpg" // You might want to add a real image later
    }
];

export default function Projects() {
    const [filter, setFilter] = useState<'All' | 'Flutter' | 'Security' | 'ML/AI'>('All');

    const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

    return (
        <section id="projects" className="py-24 bg-black relative">
            {/* Decorative binary background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden font-mono text-xs break-all text-green-500 select-none">
                {Array(50).fill(0).map((_, i) => (
                    <div key={i}>01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100</div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-cyber-green font-mono text-sm">02.</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Projects</h2>
                        </div>
                        <p className="text-gray-400">Deployed experiments and production systems.</p>
                    </div>

                    <div className="flex gap-2 p-1 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                        {['All', 'Flutter', 'Security', 'ML/AI'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat as any)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${filter === cat
                                    ? 'bg-flutter-blue text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-300 hover:transform hover:scale-[1.02] hover:-translate-y-2 border border-white/5"
                            >
                                {/* Gradient Border Glow */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-1000 group-hover:duration-200" />

                                {/* Image Area */}
                                <div className="h-56 w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative overflow-hidden z-10 rounded-t-2xl">
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                                    <div className="text-6xl font-black text-white/5 select-none transform transition-transform group-hover:scale-110 duration-700">
                                        PROJECT
                                    </div>
                                    {project.category === 'Flutter' ? (
                                        <Smartphone className="w-16 h-16 text-flutter-blue opacity-50 group-hover:scale-110 transition-transform duration-500 absolute" />
                                    ) : (
                                        <Terminal className="w-16 h-16 text-cyber-green opacity-50 group-hover:scale-110 transition-transform duration-500 absolute" />
                                    )}

                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                                        <a href={project.links.github} className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all">
                                            <Github className="w-6 h-6" />
                                        </a>
                                        <a href={project.links.demo} className="p-2 bg-flutter-blue rounded-full text-white hover:bg-blue-600 hover:scale-110 transition-all">
                                            <ExternalLink className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>

                                <div className="relative p-6 space-y-4 z-10 bg-cyber-dark/90 rounded-b-2xl h-full">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="text-xs font-mono text-neon-pink mb-1 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-neon-pink inline-block animate-pulse" />
                                                {project.category.toUpperCase()}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">{project.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs font-mono rounded bg-white/5 text-gray-300 border border-white/5 group-hover:border-neon-pink/30 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
