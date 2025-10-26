"use client";

import { Laptop, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
    {
        title: "Your Laptop",
        description: "Bring your laptop and charger. Any modern laptop will work - Windows, Mac, or Linux. Don't worry about software—we'll help you set up all the AI coding tools during the first session.",
        icon: <Laptop className="w-8 h-8 text-white" />,
    },
    {
        title: "Note-Taking Tools",
        description: "Bring a notebook and pen, or use your favorite note-taking app. We'll share lots of tips, shortcuts, and resources throughout the 2-day workshop that you'll want to remember!",
        icon: <BookOpen className="w-8 h-8 text-white" />,
    }
];

export function WhatYouNeed() {
    return (
        <section id="whatYouNeed" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                        What You&apos;ll Need
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        We&apos;ve got everything set up at our Karachi venue. Just bring these two things to get the most out of your 2-day coding journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ 
                                y: -8,
                                scale: 1.02,
                                boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.15)"
                            }}
                            className="bg-[#111111] rounded-3xl p-8 lg:p-10 shadow-2xl border border-white/10 relative overflow-hidden group"
                        >
                            {/* Monochrome: removed decorative gradients */}

                            <div className="relative z-10">
                                <div className="w-20 h-20 mb-8 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/40 shadow-lg border border-white/10">
                                        {item.icon}
                                    </div>
                                </div>
                                
                                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white transition-colors duration-300">
                                    {item.title}
                                </h3>
                                
                                <p className="text-white/80 leading-relaxed text-lg transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 