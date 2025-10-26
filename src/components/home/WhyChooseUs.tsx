"use client";

import React from "react";
import { motion } from "framer-motion";

interface ChooseUsItemProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ChooseUsItem: React.FC<ChooseUsItemProps> = ({ title, icon, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex gap-6 py-6 border-t border-white/10 last:border-b"
    >
      <div className="flex-shrink-0 w-12 h-12 text-white">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};

export const WhyChooseUs = () => {
  const arrowIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );

  const features = [
    {
      title: "Who&apos;s this workshop for?",
      description: "Complete beginners who want to learn coding! Students, professionals looking to upskill, or anyone with a project idea. No coding background required—just bring your laptop and enthusiasm.",
      icon: arrowIcon,
    },
    {
      title: "Do I need to know how to code?",
      description: "Not at all! We start from scratch. You&apos;ll learn to code using AI tools as your assistant. Our 2-day hands-on approach gets you building immediately, no boring theory.",
      icon: arrowIcon,
    },
    {
      title: "What will I actually build?",
      description: "A real, working app or website that you can use, show off, or add to your portfolio. Perfect for personal projects, school assignments, or to showcase when applying for jobs.",
      icon: arrowIcon,
    },
    {
      title: "Is it online or in-person?",
      description: "We host 2-day in-person workshops in Karachi, Pakistan. Face-to-face learning with hands-on support from instructors throughout the entire workshop.",
      icon: arrowIcon,
    },
    {
      title: "What tools are we using?",
      description: "Modern, beginner-friendly tools: v0 + Cursor for AI-assisted coding, Next.js + Supabase for building real apps. We&apos;ll help you set everything up—don&apos;t worry about the technical setup.",
      icon: arrowIcon,
    },
    {
      title: "What if I get stuck?",
      description: "Our instructors are there with you throughout the 2 days! We provide hands-on support, debug together, and make sure everyone succeeds. Plus, you&apos;ll join our community for continued support after the workshop.",
      icon: arrowIcon,
    },
  ];

  return (
    <section id="faq" className="w-full py-24 md:py-32 bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-5"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Frequently Asked 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3e635] to-[#1a2e05]"> Questions</span>
              </h2>
              <p className="text-xl text-white/70">
                Everything you want to know about CodeKar.
              </p>
            </div>

            {/* <div className="hidden md:block mt-8 lg:mt-12">
              <div id="success-stories" className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                <blockquote className="text-gray-200 italic">
                  &quot;Code with Ai help me vuild my own 200k MRR SAAS.&quot;
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex-shrink-0"></div>
                  <div className="ml-3">
                    <p className="font-medium text-white">Nasar </p>
                    <p className="text-gray-400 text-sm">CTO, CodewithAi Innovations</p>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Right Column - Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-0 divide-y divide-[#a3e635]/30 lg:col-span-7"
          >
            {features.map((feature, index) => (
              <ChooseUsItem
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 