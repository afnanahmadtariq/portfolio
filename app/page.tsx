'use client'

import { useEffect } from 'react';

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Skills from '@/components/Skills'
import TechShowcase from '@/components/TechShowcase'
import Projects from '@/components/Projects'

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-900 relative">
      <Navbar />
      <HeroSection />
      <Skills />
      <TechShowcase />
      <Projects />
      <Footer />
    </div>
  )
}
