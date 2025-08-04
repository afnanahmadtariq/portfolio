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
    const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const offsetTop = entry.target.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <TechShowcase />
      <Projects />
      <Footer />
    </>
  )
}
