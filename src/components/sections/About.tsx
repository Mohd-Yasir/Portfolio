'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Layout, Shield, Smartphone, Terminal, Zap } from 'lucide-react';

const features = [
    {
        title: "Flutter Development",
        description: "Building scalable, user-friendly apps with GetX/Provider state management and Clean Architecture. Experienced in MVC pattern and Firebase integration.",
        icon: Smartphone,
        color: "text-flutter-blue"
    },
    {
        title: "Problem Solving",
        description: "5-star Problem Solver on HackerRank. Solved 400+ coding questions across LeetCode and GeeksForGeeks. Strong grasp of DSA and OOP.",
        icon: Zap,
        color: "text-yellow-400"
    },
    {
        title: "Cyber Security",
        description: "Exploring Network Security and Ethical Hacking. Proficient with Linux, networking fundamentals, and building secure software systems.",
        icon: Shield,
        color: "text-green-400"
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-cyber-dark relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-cyber-green font-mono text-sm">01.</span>
                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            About Me
                        </h2>
                        <div className="h-px bg-gray-800 flex-grow ml-4" />
                    </div>

                    <div className="space-y-6 text-gray-400 text-lg max-w-2xl leading-relaxed">
                        <p>
                            I am a <span className="text-white font-medium">Flutter Developer</span>, <span className="text-cyber-green">cybersecurity enthusiast</span>, and strong problem solver focused on building high-quality, scalable mobile applications with clean architecture, security awareness, and solid fundamentals. I enjoy transforming ideas into reliable products using <span className="text-flutter-blue">Flutter</span>, Dart, Firebase, and modern state-management techniques.
                        </p>
                        <p>
                            Along with application development, I have working knowledge of <span className="text-white">computer networking</span>, which helps me better understand system communication, security principles, and real-world application behavior. I have hands-on experience building chat applications, AI-powered learning tools, and productivity apps, and I continuously improve my skills through learning and experimentation.
                        </p>
                        <p>
                            I’m driven by curiosity, consistency, and the goal of creating <span className="text-white">secure, impactful, and user-focused software</span>.
                        </p>
                    </div>

                    {/* Education Mini-Section */}
                    <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10 w-fit">
                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" /> Education
                        </h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                            <li>B.Tech CSE - PSIT (AKTU) • 2021-2025</li>
                            <li>Intermediate - Halim Muslim English School</li>
                        </ul>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="p-6 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 hover:bg-white/10 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-200 mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
