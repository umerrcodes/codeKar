"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-[#1a1a1a] min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-white text-sm font-medium">Workshops Open</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight text-white">
              Learn Coding with AI<br />
              In 2 Days. Build Real<br /> 
              Apps & Websites.<br />
              Karachi, Pakistan.
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              Join our 2-day in-person workshop in Karachi. We teach beginners how to code with AI tools and build working apps for personal projects, school, or to kickstart your career.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-6">
              <Link href="/sign_up">
                <Button className="group relative overflow-hidden bg-[#2a2a2a] hover:bg-[#323232] text-white rounded-full flex items-center gap-3 pl-5 pr-2 h-10 text-base font-medium tracking-tight ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition-colors">
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" aria-hidden="true"></span>
                  <span className="relative">Register for Workshop</span>
                  <span className="relative inline-flex items-center justify-center rounded-full bg-white text-black h-7 w-7 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </Link>

              {/* Corporate Inquiry Button with light gold gradient style */}
              {/* <CorporateInquiryDialog>
                <Button className="group relative overflow-hidden rounded-full h-10 pl-4 pr-2 text-base font-medium bg-gradient-to-r from-[#fffbe6] via-[#ffe066] to-[#ffd700] text-black ring-1 ring-[#ffe066]/40 shadow-[0_8px_24px_rgba(255,215,0,0.15)]">
                  <span className="relative mr-2">For Teams: Get Custom Proposal</span>
                  <span className="relative inline-flex items-center justify-center rounded-full bg-[#bfae32] text-white h-7 w-7 transition-transform duration-200 group-hover:scale-105">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13l3-3 3 3M10 10V4" />
                    </svg>
                  </span>
                </Button>
              </CorporateInquiryDialog> */}
            </div>
          </div>

          {/* Right Image with Testimonial */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/assets/images/codekar-img.png"
                alt="Modern kitchen interior"
                width={800}
                height={700}
                className="object-cover w-full h-[700px]"
              />
            </div>
            
            {/* Testimonial Card */}
            <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white text-sm leading-relaxed">
                &quot;The workshop was highly insightful, well-organized, and provided valuable hands-on experience that exceeded my expectations.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}