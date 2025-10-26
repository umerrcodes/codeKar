"use client"

import React from "react"

export const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white text-black py-24 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Badge and Title */}
          <div className="space-y-3">
            {/* About us badge */}
            <div className="inline-flex">
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                About us
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
              CodeKar is for beginners ready to build
            </h2>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 lg:pt-16">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              Our 2-day workshop in Karachi is designed for complete beginners. No coding experience needed. We teach you how to use AI as your coding assistant to build real, working apps and websites. Whether it&apos;s for a personal project, school assignment, or to start your journey into tech careers—we&apos;ll help you get there.
            </p>
            
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              By the end of the workshop, you&apos;ll have a live app you can show off and the confidence to keep building. Plus, you&apos;ll join our community for continued learning and networking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 