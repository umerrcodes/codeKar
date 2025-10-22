"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const learnItems = [
  {
    title: "Beginner-Friendly AI Coding",
    description:
      "Start from zero. We teach you how to code using AI tools like Cursor and v0. No prior experience needed—just bring your curiosity. You'll learn by doing, building real features from day one with AI as your guide.",
    imageSrc: "https://placehold.co/800x700/1a1a1a/ffffff?text=AI+Coding",
  },
  {
    title: "Build Real Apps & Websites",
    description:
      "Create working applications using modern tools like Next.js and Supabase. By the end of our 2-day workshop, you'll have a live, functional app or website—perfect for personal projects, school assignments, or your portfolio.",
    imageSrc: "https://placehold.co/800x700/1a1a1a/ffffff?text=Build+Apps",
  },
  {
    title: "Ready for Your Next Step",
    description:
      "Whether you're building for fun, school, or preparing to enter the job market, we equip you with practical skills. Leave with confidence to tackle your own projects and continue your coding journey independently.",
    imageSrc: "https://placehold.co/800x700/1a1a1a/ffffff?text=Next+Step",
  },
];

export const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % learnItems.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="whatWeDo" className="w-full bg-white text-black py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What You&apos;ll Learn</h2>
          <p className="text-lg text-gray-600">A weekend of hands-on building. Here&apos;s the path we follow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left: rolling step */}
          <div className="md:col-span-2">
            <div className="relative h-[420px] overflow-hidden bg-[rgb(28,28,28)] rounded-2xl border-b border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 grid grid-cols-1 md:grid-cols-2"
                >
                  <div className="p-10 md:p-12 flex flex-col justify-center gap-5">
                    <div className="inline-flex items-center gap-2 text-xs text-gray-400">
                      {/* <span className="h-2 w-2 rounded-full bg-gray-900" /> */}
                      {/* <span className="uppercase tracking-wide">Step {activeIndex + 1}</span> */}
                    </div>
                    <h3 className="text-3xl md:text-1xl font-bold tracking-tight text-white">{learnItems[activeIndex].title}</h3>
                    <p className="text-gray-300 leading-relaxed max-w-prose text-base">{learnItems[activeIndex].description}</p>
                  </div>
                  <div className="relative">
                    <Image
                      src={learnItems[activeIndex].imageSrc}
                      alt={learnItems[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* Progress bar */}
              <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-white/10">
                <motion.div
                  key={`progress-${activeIndex}`}
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              </div>
            </div>
          </div>

          {/* Right: indicator list */}
          <div className="flex flex-col gap-2">
            {learnItems.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-3 rounded-lg p-2 text-left transition-colors ${
                  activeIndex === idx ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    activeIndex === idx ? "bg-gray-900" : "bg-gray-300"
                  }`}
                />
                <span className={`truncate text-sm ${activeIndex === idx ? "font-medium" : ""}`}>
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 