'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BadgeCheck, ArrowLeft, ExternalLink, Shield, Code, Database, Smartphone, Globe, Terminal } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Real Data provided by User
const allCertificates = [
    // --- Flutter ---
    {
        id: 1,
        title: "The Complete Flutter Development Bootcamp with Dart",
        issuer: "Dr. Angela Yu & Google Flutter Team",
        date: "2023",
        category: "Flutter",
        description: "The official bootcamp created in collaboration with the Google Flutter team. Mastered building beautiful, native-quality iOS and Android apps using Dart and modern state management.",
        image: "/certs/flutter-bootcamp.jpg",
        link: "https://www.udemy.com/certificate/UC-76bcc7cc-6a7e-4f44-8fe4-053b0201cfa7/"
    },

    // --- Web Dev ---
    {
        id: 2,
        title: "HTML5",
        issuer: "Infosys Springboard",
        date: "2023",
        category: "Web Dev",
        description: "Comprehensive training on HTML5 semantics, distinct structure, and modern web accessibility standards.",
        image: "/certs/html.jpg",
        link: "https://drive.google.com/file/d/1dMRu7wLSdgIXFivCd2oce-83NuZzW_8S/view?usp=sharing"
    },
    {
        id: 3,
        title: "CSS",
        issuer: "Infosys Springboard",
        date: "2023",
        category: "Web Dev",
        description: "Mastery of Cascading Style Sheets for responsive design, layout techniques, and visual styling of web applications.",
        image: "/certs/css.jpg",
        link: "https://drive.google.com/file/d/1LqX0FDa1-CLJdN98NfpidVZR5e37Q9Fj/view?usp=sharing"
    },
    {
        id: 4,
        title: "JavaScript",
        issuer: "Infosys Springboard",
        date: "2023",
        category: "Web Dev",
        description: "Core JavaScript programming including ES6 features, DOM manipulation, and asynchronous programming concepts.",
        image: "/certs/js.jpg",
        link: "https://drive.google.com/file/d/1QgtGJl5iH2vrwO21SuEO3rrgXS9573S5/view?usp=sharing"
    },

    // --- Cyber Security ---
    {
        id: 5,
        title: "Introduction to Cybersecurity",
        issuer: "Cisco",
        date: "2023",
        category: "Cyber Security",
        description: "Verified understanding of global cyber threats, vulnerabilities, threat detection, and defense strategies. Covered industry implications and career pathways in cybersecurity.",
        image: "/certs/cisco-cyber.jpg",
        link: "https://www.credly.com/badges/e4288aaa-1dcf-4dfc-887f-e27571eac44b"
    },
    {
        id: 6,
        title: "Learning Linux Command Line",
        issuer: "LinkedIn Learning",
        date: "2023",
        category: "Cyber Security",
        description: "Proficiency in Linux file systems, permissions, process management, and the bash shell environment. Validated by LinkedIn/CompTIA approved coursework.",
        image: "/certs/linux-cmd.jpg",
        link: "https://drive.google.com/file/d/1mJ69iPsv_XtH0m95vmPL51BGqzhuOSFb/view?usp=sharing"
    },
    {
        id: 7,
        title: "Learning Linux Shell Scripting",
        issuer: "LinkedIn Learning",
        date: "2023",
        category: "Cyber Security",
        description: "Advanced automation skills using Bash scripting. Covered logic control, loops, and user interaction scripts for system administration.",
        image: "/certs/linux-shell.jpg",
        link: "https://drive.google.com/file/d/1dPKj4Lx_yrlaK8BfZxRPHZVcihFWPLGI/view?usp=sharing"
    },

    // --- Languages & Problem Solving ---
    {
        id: 8,
        title: "Problem Solving (Basic)",
        issuer: "HackerRank",
        date: "2023",
        category: "Languages",
        description: "Validated core proficiency in logic building, data structures, and algorithms. Successfully solved rigorous coding challenges involving array manipulation and sorting.",
        image: "/certs/hackerrank.jpg",
        link: "https://www.hackerrank.com/certificates/iframe/3cf517a39d4a"
    },
    {
        id: 9,
        title: "TCS CodeVita Season 12",
        issuer: "Tata Consultancy Services",
        date: "2024",
        category: "Languages",
        description: "Participation and competitive performance in Season 12 of CodeVita, a global coding contest testing complex problem-solving abilities under time constraints.",
        image: "/certs/codevita.jpg",
        link: "https://drive.google.com/file/d/1wWCzuxXDmia7TChJUXpVoMan4s3C7AYE/view?usp=sharing"
    },
    {
        id: 10,
        title: "Object Oriented Programming using Python",
        issuer: "Infosys Springboard",
        date: "2023",
        category: "Languages",
        description: "Deep dive into OOP concepts (Classes, Inheritance, Polymorphism) implemented in Python, ensuring modular and scalable code design.",
        image: "/certs/python-oop.jpg",
        link: "https://drive.google.com/file/d/1UP4algwhZXxdohBogbAIdZqgXayVz4-i/view?usp=sharing"
    },
    {
        id: 11,
        title: "Learning Java",
        issuer: "LinkedIn Learning",
        date: "2023",
        category: "Languages",
        description: "Comprehensive foundation in Java programming, covering syntax, object-oriented principles, and application structure.",
        image: "/certs/java.jpg",
        link: "https://drive.google.com/file/d/1GhUrSJVIv8P9CEOyJLY29wBZPnnq1Zhj/view?usp=sharing"
    },

    // --- Database ---
    {
        id: 12,
        title: "SQL (Basic)",
        issuer: "HackerRank",
        date: "2023",
        category: "Database",
        description: "Verified competence in SQL queries, relational database concepts, and aggregations. Demonstrated ability to execute complex data retrieval operations.",
        image: "/certs/hackerrank-sql.jpg",
        link: "https://www.hackerrank.com/certificates/iframe/cb652339e6ab"
    }
];

const categories = ['All', 'Flutter', 'Web Dev', 'Cyber Security', 'Languages', 'Database'];

function CertificationsContent() {
    const searchParams = useSearchParams();
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
            setFilter(categoryParam);
        }
    }, [searchParams]);

    const filteredCerts = allCertificates.filter(
        (c) => filter === 'All' || c.category === filter
    );

    return (
        <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex items-center gap-2">
                            <BadgeCheck className="w-8 h-8 text-cyber-green" />
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Certifications
                            </h1>
                        </div>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Validating skills through recognized credentials across Development, Security, and Engineering.
                        </p>
                    </motion.div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${filter === cat
                                    ? 'bg-white/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                                    : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Cert Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredCerts.map((cert) => (
                            <motion.div
                                key={cert.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/10 transition-all flex flex-col"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="p-6 relative z-10 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-lg bg-black/40 border border-white/10`}>
                                            {/* Dynamic Icon based on Category */}
                                            {cert.category === 'Flutter' && <Smartphone className="w-6 h-6 text-blue-400" />}
                                            {cert.category === 'Web Dev' && <Globe className="w-6 h-6 text-yellow-400" />}
                                            {cert.category === 'Cyber Security' && <Shield className="w-6 h-6 text-green-400" />}
                                            {cert.category === 'Languages' && <Code className="w-6 h-6 text-purple-400" />}
                                            {cert.category === 'Database' && <Database className="w-6 h-6 text-orange-400" />}
                                        </div>
                                        <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded bg-black/20">
                                            {cert.date}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                        {cert.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 mb-2">
                                        Issued by {cert.issuer}
                                    </p>

                                    {/* Description Rendering */}
                                    {cert.description && (
                                        <p className="text-xs text-gray-500 mb-4 line-clamp-3 leading-relaxed">
                                            {cert.description}
                                        </p>
                                    )}

                                    {/* Spacer/Push down */}
                                    <div className="flex-grow" />

                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-300 transition-colors mt-4"
                                    >
                                        View Credential <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* No Extra Sections Here (Clean Certs Page) */}

            </div>
        </main>
    );
}

export default function CertificationsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading Certificates...</div>}>
            <CertificationsContent />
        </Suspense>
    );
}
