'use client';

import { motion } from 'framer-motion';
import { Shield, Award, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import BadgeCard from "@/components/canvas/BadgeCard";
import BadgeGallery from "@/components/canvas/BadgeGallery";

export default function BadgesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-8 text-center md:text-left">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="p-2 bg-red-600/20 rounded-lg border border-red-500/30">
                                <Shield className="w-8 h-8 text-red-500" />
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                                TryHackMe Badges
                            </h1>
                        </div>
                    </motion.div>
                </div>

                {/* 1. 3D Model Section (CENTERED) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 flex justify-center"
                >
                    <div className="w-full h-[600px] relative z-10">
                        {/* The Interactive 3D Card */}
                        <BadgeCard />

                        <div className="text-center mt-4 text-gray-500 text-sm animate-pulse">
                            Drag the card to interact! 👆
                        </div>
                    </div>
                </motion.div>

                {/* 2. Live Status Info Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-6 text-center w-fit mx-auto backdrop-blur-sm flex flex-col items-center"
                >
                    {/* Fixed Height Wrapper to contain the Scaled Iframe */}
                    <div className="w-full flex justify-center mb-2 overflow-hidden items-center h-[200px]">
                        <iframe
                            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=5525609"
                            style={{ border: 'none', width: '450px', height: '140px', transform: 'scale(1.5)' }}
                            title="TryHackMe Badge"
                            scrolling="no"
                        />
                    </div>

                    <a
                        href="https://tryhackme.com/p/mohdxyasir"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-all font-medium shadow-lg shadow-red-900/20"
                    >
                        Visit Public Profile <ExternalLink className="w-4 h-4" />
                    </a>
                </motion.div>

                {/* 3. Badges Grid (3D Gallery) */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-red-500 pl-4">All Achievements</h3>

                    <div className="w-full">
                        <BadgeGallery />
                    </div>
                </div>
            </div>
        </main>
    );
}
