'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const fullText = "Manufacturing and supplying industrial-grade steel worldwide."
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100) // Adjust speed here (100ms per character)

      return () => clearTimeout(timeout)
    } else {
      // Wait 2 seconds then reset
      const resetTimeout = setTimeout(() => {
        setDisplayText('')
        setCurrentIndex(0)
      }, 2000)

      return () => clearTimeout(resetTimeout)
    }
  }, [currentIndex, fullText])

  return (
    <section id="hero" className="h-screen flex items-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      <div className="absolute inset-0 bg-gray-100 opacity-40"></div>
      <div className="relative z-10 px-6 ml-60">
        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl py-36 px-12 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:bg-white/30 max-w-6xl flex items-center gap-12">
          <div className="flex-1">
            <h1 className="text-7xl font-bold mb-8 text-gray-900">
              Strength Built in Steel
            </h1>
            <p className="text-gray-700 max-w-2xl text-xl">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
              alt="Steel manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
