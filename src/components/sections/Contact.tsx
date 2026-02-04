'use client';

import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-black relative flex flex-col items-center">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-20">
                <div className="bg-cyber-gray border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-black/50">
                    {/* Top Bar Terminal Style */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 text-xs font-mono text-gray-500">user@yasir-portfolio: ~/contact-me</span>
                    </div>

                    <div className="mt-8 text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="inline-block p-4 rounded-full bg-green-500/10 mb-4"
                        >
                            <Mail className="w-8 h-8 text-cyber-green" />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Establish Connection</h2>
                        <p className="text-gray-400">
                            Whether you have a question, a project idea, or just want to discuss the latest in Flutter or InfoSec, my inbox is always encrypted and open.
                        </p>
                    </div>

                    {/* 
                        IMPORTANT: To make this form work with direct sending:
                        1. Go to https://formspree.io/ and create a free account.
                        2. Create a new form and copy your Form ID URL (e.g., https://formspree.io/f/mqaklzad).
                        3. Paste it below as the 'action'.
                    */}
                    <form
                        action={process.env.NEXT_PUBLIC_FORMSPREE_URL}
                        method="POST"
                        className="space-y-6 max-w-lg mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 ml-1">VAR_NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500 ml-1">VAR_EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-gray-500 ml-1">VAR_MESSAGE</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                placeholder="Initialize handshake protocols..."
                                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-green focus:outline-none focus:ring-1 focus:ring-cyber-green transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-cyber-green/10 border border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black font-mono py-4 rounded-lg flex items-center justify-center gap-2 group transition-all"
                        >
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <span>&gt; execute_send_msg()</span>
                        </button>
                    </form>

                    <div className="mt-12 flex justify-center gap-6">
                        <a href="https://github.com/Mohd-Yasir" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/mohdxyasir/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:mohdxyasir@gmail.com" className="text-gray-500 hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Simple Footer Block */}
            <div className="flex flex-col items-center justify-center text-center pb-12 z-0">
                <p className="text-gray-700 text-xs font-mono">&copy; {new Date().getFullYear()} Yasir Portfolio. System Secure.</p>
            </div>
        </section>
    );
}
