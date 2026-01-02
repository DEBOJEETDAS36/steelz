import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Services from "@/components/sections/Services"
import CTA from "@/components/sections/CTA"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
