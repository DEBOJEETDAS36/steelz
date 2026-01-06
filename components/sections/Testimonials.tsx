"use client"

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
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          What our clients say
        </h2>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex w-[200%] gap-8 animate-testimonial hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="w-95 shrink-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
              >
                <div className="text-5xl text-blue-400 mb-6">“</div>
                <p className="text-gray-200 mb-6">{t.quote}</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
