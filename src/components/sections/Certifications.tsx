'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Smartphone, Globe, Shield, Database, Code, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
    {
        title: "Flutter Development",
        filterKey: "Flutter",
        count: "1 Cert",
        icon: Smartphone,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        title: "Cyber Security",
        filterKey: "Cyber Security",
        count: "3 Certs",
        icon: Shield,
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        title: "Web Development",
        filterKey: "Web Dev",
        count: "3 Certs",
        icon: Globe,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20"
    },
    {
        title: "Programming Languages",
        filterKey: "Languages",
        count: "4 Certs",
        icon: Code,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-black relative border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-cyber-green font-mono text-sm">03.</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
                        </div>
                        <p className="text-gray-400 max-w-lg">
                            Verified expertise across multiple domains. Explore my credentials by category.
                        </p>
                    </div>

                    <Link
                        href="/certifications"
                        className="flex items-center gap-2 text-sm font-bold text-white bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 hover:border-white/30 transition-all group"
                    >
                        View All Certifications <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <Link href={`/certifications?category=${encodeURIComponent(cat.filterKey)}`} key={index} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl border ${cat.border} bg-white/5 hover:bg-white/10 transition-all group h-full cursor-pointer relative overflow-hidden`}
                            >
                                {/* Background Gradient */}
                                <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full ${cat.bg} blur-2xl group-hover:blur-xl transition-all opacity-50`} />

                                <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <cat.icon className={`w-6 h-6 ${cat.color}`} />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white/90">
                                    {cat.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                                    <span>{cat.count}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                                    <span className="flex items-center gap-1 group-hover:gap-2 transition-all text-white/40 group-hover:text-white/80">
                                        View <ArrowRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
