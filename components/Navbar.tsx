'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav id='navbar' className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'} border-b border-gray-200`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/a.svg"
              alt={`A`}
              width={35}
              height={95}
              className="rounded-lg"
            />
          </Link>

          <div className="flex md:hidden lg:hidden items-center" onClick={() => setIsMobileMenuOpen(true)}>
            <span className="text-gray-900 text-2xl">&#9776;</span>
          </div>

          <div className="hidden md:flex lg:flex gap-6">
            <Link href="/#home" className="text-gray-900 transition-colors underline-animation">Home</Link>
            <Link href="/#skills" className="text-gray-900 transition-colors underline-animation">Skills</Link>
            <Link href="/#projects" className="text-gray-900 transition-colors underline-animation">Projects</Link>
            <Link href="/#contact" className="text-gray-900 transition-colors underline-animation">Contact</Link>
          </div>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-64 h-full bg-white text-gray-900 z-40 transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} border-r border-gray-200`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 text-3xl">×</button>
        </div>
        <div className="flex flex-col items-center space-y-8 py-10">
          <button onClick={() => handleMenuClick('home')} className="hover:text-blue-600 text-gray-900 transition-colors">Home</button>
          <button onClick={() => handleMenuClick('skills')} className="hover:text-blue-600 text-gray-900 transition-colors">Skills</button>
          <button onClick={() => handleMenuClick('projects')} className="hover:text-blue-600 text-gray-900 transition-colors">Projects</button>
          <button onClick={() => handleMenuClick('contact')} className="hover:text-blue-600 text-gray-900 transition-colors">Contact</button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-30 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </nav>
  )
}
