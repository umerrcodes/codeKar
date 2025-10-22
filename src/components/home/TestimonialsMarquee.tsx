"use client"

import React from "react"
import Image from "next/image"

type Testimonial = {
  name: string
  role: string
  avatar: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Muslim",
    role: "Founder - Marketing Agency",
    avatar: "https://placehold.co/100x100/2a2a2a/ffffff?text=M",
    quote:
      "This course was an absolute game-changer for me! It was super productive, and since I'm totally new to coding, picking up stuff like using Cursor, building layouts, and tweaking them felt like a big win. Honestly, it was awesome to see it all come together. I'd love to keep in touch because I'm really excited to dive into app development with the same clear, hands-on vibe. Thanks for making it such a great experience!",
  },
  {
    name: "Sohni",
    role: "Social Media Manager",
    avatar: "https://placehold.co/100x100/2a2a2a/ffffff?text=S",
    quote:
      "The workshop was highly insightful, well-organized, and provided valuable hands-on experience that exceeded my expectations.",
  },
  {
    name: "Ali",
    role: "Sales Development Representative",
    avatar: "https://placehold.co/100x100/2a2a2a/ffffff?text=A",
    quote:
      "Honestly been quite a while since I participated in a workshop as creative and engaging as CodeKar. The spirit of the class and the learning curve was at the top. The whole team of CodeKar were at their toes throughout the 8 hour workshop. Would like express my thanks to team CodeKar. Keep up the great work.",
  },
  {
    name: "Shayan",
    role: "Founder - Warehouse Management",
    avatar: "https://placehold.co/100x100/2a2a2a/ffffff?text=SH",
    quote:
      "Pretty insightful session. Didnt know I will be able to code a webpage myself, Nasar has helped open up a whole new world for me. Really excited to take this knowledge further and go deeper.",
  },
  {
    name: "Shanzeh",
    role: "Student",
    avatar: "https://placehold.co/100x100/2a2a2a/ffffff?text=SZ",
    quote:
      "At first i thought its not possible to do something related to AI in less than 2 days but I am amazed by the session and instructors and technologies shared that its great and worth invest it i learned a lot of new things and started my own little startup in just 2 days",
  },

  {
    name: "Eraj",
    role: "Climate Researcher",
    avatar: "https://placehold.co/100x100/2a2a2a/ffffff?text=E",
    quote:
    "The workshop was really beginner friendly. I have no background in coding but was still able to keep up with the class. Would recommend this workshop to marketing professionals looking to upskill.",
  },

  {
    name: "Zain",
    role: "Lawyer",
    avatar: "https://placehold.co/100x100/2a2a2a/ffffff?text=Z",
    quote:
    "Within the span of a weekend, I was able to develop an entire idea from scratch, having no prior coding experience. Very helpful workshop and I plan to take what I've learnt forward and develop more personalised projects",
  },

]

export function TestimonialsMarquee() {
  // Duplicate the list to create a seamless marquee loop
  const loopData = [...testimonials, ...testimonials]

  return (
    <section aria-label="Testimonials" className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div
          className="relative overflow-hidden group"
          // style={{
          //   WebkitMaskImage:
          //     "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          //   maskImage:
          //     "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          // }}
        >
          <div className="flex gap-6 min-w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
            {loopData.map((t, idx) => (
              <article
                key={`${t.name}-${idx}`}
                className="flex-shrink-0 w-[320px] md:w-[360px] h-[380px] md:h-[420px] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-sm p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={`${t.name} avatar`}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-100 truncate">{t.name}</p>
                    <p className="text-xs text-gray-400 truncate">{t.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-gray-200 text-sm leading-relaxed">{t.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMarquee


