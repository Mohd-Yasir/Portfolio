'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, Code, Shield, Cpu, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'About', href: '#about', icon: Terminal, label: '> about' },
    { name: 'Skills', href: '#skills', icon: Cpu, label: '> skills' },
    { name: 'Projects', href: '#projects', icon: Code, label: '> projects' },
    { name: 'Certifications', href: '#certifications', icon: BadgeCheck, label: '> certs' },
    { name: 'Contact', href: '#contact', icon: Shield, label: './contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
                isScrolled ? "w-[90%] md:w-auto" : "w-full md:w-auto"
            )}
        >
            <div className={cn(
                "flex items-center justify-between gap-8 px-6 py-3 rounded-full border transition-all duration-500",
                isScrolled
                    ? "bg-black/60 border-white/10 backdrop-blur-xl shadow-2xl shadow-blue-900/10"
                    : "bg-transparent border-transparent"
            )}>
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                        <span className="font-bold text-white text-xs">Y</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors hover:bg-white/10 rounded-full"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:block">
                    <a href="#contact" className="px-4 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-gray-200 transition-colors">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white w-10 h-10 flex items-center justify-center bg-white/10 rounded-full"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-cyber-dark border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-base font-mono text-gray-300 hover:text-cyber-green hover:pl-2 transition-all"
                                >
                                    <span className="text-cyber-green mr-2">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
