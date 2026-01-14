"use client"

import { useEffect, useState } from "react"

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

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  // Mobile auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % testimonials.length)
    }, 3000) // 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
      <div className="max-w-350 mx-auto px-6 lg:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16">
          What our clients say
        </h2>

        {/* MOBILE – Single card slider */}
        <div className="relative md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t, i) => {
              const initials = t.name
                .split(" ")
                .map(n => n[0])
                .join("")

              return (
                <div key={i} className="w-full shrink-0 px-2">
                  <TestimonialCard t={t} initials={initials} />
                </div>
              )
            })}
          </div>
        </div>

        {/* DESKTOP – Marquee */}
        <div className="hidden md:block overflow-hidden">
          <div className="flex w-[200%] gap-8 animate-testimonial hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => {
              const initials = t.name
                .split(" ")
                .map(n => n[0])
                .join("")

              return (
                <div key={i} className="w-96 shrink-0">
                  <TestimonialCard t={t} initials={initials} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

type Testimonial = {
  name: string
  role: string
  quote: string
}

type TestimonialCardProps = {
  t: Testimonial
  initials: string
}

function TestimonialCard({ t, initials }: TestimonialCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-lg font-semibold text-blue-300">
          {initials}
        </div>
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
