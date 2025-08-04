'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import HeroSection from '@/components/HeroSection'
import Skills from '@/components/Skills'
import TechShowcase from '@/components/TechShowcase'
import Projects from '@/components/Projects'

export default function Home() {  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-900 relative">
      <Navbar />
      <ParticleBackground />
      <div className='main relative z-10'>
        <HeroSection />
        <Skills/>
        <TechShowcase />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}
