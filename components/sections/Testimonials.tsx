"use client"

import { useEffect, useState } from "react"

/* ------------------ DATA ------------------ */

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, SteelForge",
    quote:
      "The attention to detail and execution quality was far beyond expectations."
  },
  {
    name: "Sarah Collins",
    role: "Operations Lead, Buildify",
    quote:
      "Our conversion rate improved within weeks. Extremely professional work."
  },
  {
    name: "Rohit Verma",
    role: "CTO, InfraCore",
    quote:
      "They combine engineering and design better than most teams we’ve worked with."
  },
  {
    name: "Neha Sharma",
    role: "Product Manager, IronWorks",
    quote:
      "Execution speed and clarity were exceptional from day one."
  }
]

/* ------------------ MAIN ------------------ */

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16">
          What our clients say
        </h2>

        {/* MOBILE */}
        <div className="md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full shrink-0 px-2">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block overflow-hidden">
          <div className="flex w-[200%] gap-8 animate-testimonial hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-96 shrink-0">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------ CARD ------------------ */

type Testimonial = {
  name: string
  role: string
  quote: string
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 h-full">
      <div className="flex items-center gap-4 mb-6">
        <HumanAvatar seed={t.name} />

        <div>
          <p className="font-semibold">{t.name}</p>
          <p className="text-sm text-gray-400">{t.role}</p>
        </div>
      </div>

      <div className="text-5xl text-blue-400 mb-4">“</div>
      <p className="text-gray-200 text-sm md:text-base">{t.quote}</p>
    </div>
  )
}

/* ------------------ HUMAN AVATAR (VARIANTS) ------------------ */

function HumanAvatar({ seed }: { seed: string }) {
  const hash = seed
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0)

  const skinTones = ["#f2c9ac", "#e0ac69", "#c68642", "#8d5524"]
  const shirtColors = ["#2563eb", "#7c3aed", "#059669", "#db2777"]
  const hairColors = ["#111827", "#3f3f46", "#78350f"]

  const skin = skinTones[hash % skinTones.length]
  const shirt = shirtColors[hash % shirtColors.length]
  const hair = hairColors[hash % hairColors.length]
  const isFemale = hash % 2 === 0

  return (
    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 bg-neutral-800">
      <svg viewBox="0 0 128 128" className="w-full h-full">
        {/* Hair */}
        {isFemale ? (
          <path
            d="M36 44 C36 20 92 20 92 44 V52 H36 Z"
            fill={hair}
          />
        ) : (
          <rect x="36" y="20" width="56" height="24" rx="12" fill={hair} />
        )}

        {/* Head */}
        <circle cx="64" cy="52" r="26" fill={skin} />

        {/* Eyes */}
        <circle cx="54" cy="52" r="3" fill="#000" />
        <circle cx="74" cy="52" r="3" fill="#000" />

        {/* Mouth */}
        <path
          d="M54 64 Q64 70 74 64"
          stroke="#000"
          strokeWidth="3"
          fill="none"
        />

        {/* Shirt */}
        <path
          d="M28 128 C28 92 100 92 100 128"
          fill={shirt}
        />
      </svg>
    </div>
  )
}
