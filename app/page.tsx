'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Skills from '@/components/Skills'
import TechShowcase from '@/components/TechShowcase'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className="snap-y snap-proximity h-screen overflow-y-scroll scroll-smooth">
      <Navbar />
      <section className="snap-start scroll-mt-16">
        <HeroSection />
      </section>
      <section className="snap-start scroll-mt-16">
        <Skills />
      </section>
      <section className="snap-start scroll-mt-16">
        <TechShowcase />
      </section>
      <section className="snap-start scroll-mt-16">
        <Projects />
      </section>
      <section className="snap-start scroll-mt-16">
        <Footer />
      </section>
    </div>
  )
}
