"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-28">
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left" // Centers text on mobile, left-aligns on desktop
        >
          <span className="inline-block mb-4 text-sm font-medium text-gray-400 tracking-wide">
            BUILT FOR MODERN CONSTRUCTION
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Build With Confidence
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-10 text-lg">
            Premium-grade steel solutions designed for reliability, precision,
            and long-term performance — without compromises.
          </p>

          {/* CTA Buttons - Centered on mobile, Start-aligned on desktop */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-white text-black rounded-lg font-medium transition-all duration-300 hover:bg-sky-100 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35)] w-full sm:w-auto">
              Get a Quote
            </button>

            <button className="px-8 py-4 border border-gray-700 rounded-lg font-medium transition-all duration-300 hover:border-sky-400 hover:text-sky-300 w-full sm:w-auto">
              Talk to Sales
            </button>
          </div>

          {/* Trust Row - Centered on mobile, Start-aligned on desktop */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 justify-center md:justify-start">
            <span>ISO Certified</span>
            <span>•</span>
            <span>Pan-India Delivery</span>
            <span>•</span>
            <span>Enterprise Trusted</span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Blue glow ONLY around image */}
          <div className="absolute -inset-6 bg-sky-400/15 blur-3xl rounded-full" />

          <Image
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
            alt="Steel manufacturing"
            width={620}
            height={420}
            className="relative rounded-2xl border border-white/10 shadow-xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}