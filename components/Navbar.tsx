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

  // Function to close the sidebar and scroll to the section
  const handleMenuClick = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false) // Close the sidebar after clicking
  }

  return (
    <nav id='navbar' className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D0B1F] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            <Image
              src="/a.svg"
              alt={`A`}
              width={35}
              height={95}
              className="rounded-lg"
            />
          </Link>

          {/* Mobile Hamburger Icon */}
          <div className="flex md:hidden lg:hidden  items-center" onClick={() => setIsMobileMenuOpen(true)}>
            <span className="text-white text-2xl">&#9776;</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex lg:flex gap-6">
            <Link href="/#home" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/#about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link href="/#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="/#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-[#0D0B1F] text-white z-40 transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white text-3xl">×</button>
        </div>
        <div className="flex flex-col items-center space-y-8 py-10">
          <button onClick={() => handleMenuClick('home')} className="hover:text-blue-400 transition-colors">Home</button>
          <button onClick={() => handleMenuClick('about')} className="hover:text-blue-400 transition-colors">About</button>
          <button onClick={() => handleMenuClick('projects')} className="hover:text-blue-400 transition-colors">Projects</button>
          <button onClick={() => handleMenuClick('contact')} className="hover:text-blue-400 transition-colors">Contact</button>
        </div>
      </div>

      {/* Overlay Background (for when sidebar is open) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
    </nav>
  )
}
