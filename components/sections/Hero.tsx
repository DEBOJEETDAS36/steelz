'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const fullText =
    'Manufacturing and supplying industrial-grade steel worldwide.'
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)

      return () => clearTimeout(timeout)
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, 2000)

      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-100/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20">
        <div
          className="
            backdrop-blur-md bg-white/20 border border-white/30
            rounded-2xl shadow-2xl
            p-8 sm:p-12 lg:p-20
            max-w-7xl mx-auto
            flex flex-col lg:flex-row
            items-center gap-10
          "
        >
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-gray-900">
              Strength Built in Steel
            </h1>

            <p className="text-gray-700 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Image */}
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1170&q=80"
              alt="Steel manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
