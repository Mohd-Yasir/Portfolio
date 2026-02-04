'use client';

import { motion } from 'framer-motion';
import { Shield, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TryHackMe() {
    return (
        <section className="py-20 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements</h2>
                        </div>
                        <p className="text-gray-400 max-w-lg">
                            Gamified cybersecurity progress and verified room completions on TryHackMe.
                        </p>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group p-[1px] rounded-2xl bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20"
                >
                    <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-white/10 relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Badge Container */}
                            <div className="w-full md:w-2/3 h-[200px] flex justify-center items-center overflow-hidden relative bg-white/5 rounded-2xl border border-white/10">
                                <iframe
                                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=5525609"
                                    style={{ border: 'none', width: '450px', height: '140px', transform: 'scale(1.5)' }}
                                    title="TryHackMe Badge"
                                    scrolling="no"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    I <span className="text-red-500">AM</span> on TryHackMe
                                </h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Consistently solving CTF challenges and completing learning paths. Verify my real-time profile and badge collection.
                                </p>

                                <Link
                                    href="/badges"
                                    className="inline-flex items-center gap-2 bg-red-600/10 text-red-500 border border-red-600/20 px-8 py-3 rounded-full hover:bg-red-600 hover:text-white transition-all group font-bold"
                                >
                                    View All Badges <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
