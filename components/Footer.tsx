/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isInProjectsSection, setIsInProjectsSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Check if projects section is visible in viewport
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        setIsInProjectsSection(isVisible);
      }
    };

    // Listen to both window scroll and scroll container
    const scrollContainer = document.querySelector('.snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Chat Button */}
      <button
        onClick={() => setIsContactFormOpen(true)}
        className={`fixed ${isInProjectsSection ? 'bottom-6 left-6' : 'bottom-6 right-6'} z-50 md:hidden bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300`}
        aria-label="Open contact form"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path 
            d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Contact Form Popup */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white/95 backdrop-blur-lg border border-blue-200 rounded-2xl shadow-2xl w-full max-w-md relative">
            <button
              onClick={() => setIsContactFormOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close contact form"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <form className="p-6 flex flex-col gap-4">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">Get in Touch</h3>
              <div className="mb-2">
                <label htmlFor="popup-name" className="block text-sm font-medium text-blue-700 mb-1">Name</label>
                <input
                  type="text"
                  id="popup-name"
                  name="name"
                  className="w-full px-4 py-2 rounded-full border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder:text-gray-400 shadow-sm transition"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="popup-email" className="block text-sm font-medium text-blue-700 mb-1">Email</label>
                <input
                  type="email"
                  id="popup-email"
                  name="email"
                  className="w-full px-4 py-2 rounded-full border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder:text-gray-400 shadow-sm transition"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="popup-message" className="block text-sm font-medium text-blue-700 mb-1">Message</label>
                <textarea
                  id="popup-message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-2xl border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder:text-gray-400 shadow-sm transition resize-none"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:scale-[1.03] hover:from-blue-600 hover:to-blue-800 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

    <footer
      id="contact"
      className="relative bottom-0 left-0 bg-gradient-to-br from-white/80 to-blue-100/80 backdrop-blur-lg text-gray-900 border-t border-gray-200 shadow-lg h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden"
      style={{ minHeight: '32vh' }}
    >
      <div className="absolute left-[-60px] bottom-[-60px] blur-2xl animate-float z-0 bg-blue-200/60 rounded-full w-60 h-60" />
      <div className="absolute right-[-60px] top-[-60px] blur-2xl bg-blue-300/40 animate-spin-slow z-0 rounded-full w-60 h-60" />
      <div className="container mx-auto sm:px-24 relative z-10 flex flex-col sm:flex-row justify-between flex-grow py-24 sm:py-0">
        <div className="flex flex-col sm:pl-36 justify-center items-center w-full sm:w-auto mb-8 sm:mb-0 animate-fade-in-up">
          <section className="mb-8 text-center">
            <h2 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">Contact</h2>
            <p className="mb-2">Email:
              <a href="mailto:afnanahmadtariq@hotmail.com" className="text-blue-600 hover:underline ml-1">
                afnanahmadtariq@hotmail.com
              </a>
            </p>
            <p className="text-xs text-gray-500">Open to freelance & collaboration opportunities!</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">Follow Me</h2>
            <div className="flex gap-6">
              <Link href="https://github.com/afnanahmadtariq" passHref target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.png" alt="GitHub" className="w-9 h-9 hover:scale-125 transition-transform duration-300 hover:drop-shadow-lg" />
              </Link>
              <Link href="https://linkedin.com/in/afnanahmadtariq" passHref target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin-icon.svg" alt="LinkedIn" className="w-9 h-9 hover:scale-125 transition-transform duration-300 hover:drop-shadow-lg" />
              </Link>
            </div>
          </section>
          
          <section className='mt-24'>
            <div className="flex gap-2 items-center justify-center mb-2">
              <span className="text-blue-600 animate-blink">●</span>
              <span className="text-xs text-gray-500">Coded with Next.js & Tailwind CSS</span>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">
              © {new Date().getFullYear()} <span className="font-semibold text-gray-900">Afnan Ahmad Tariq</span> | All rights reserved
            </p>
          </section>
        </div>
        <div className="hidden sm:flex flex-col items-center gap-8 animate-fade-in-up">
          <form className="w-full max-w-md lg:w-[50rem] bg-white/60 backdrop-blur-lg border border-blue-200 rounded-2xl shadow-xl p-8 flex flex-col gap-4">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">Get in Touch</h3>
            <div className="mb-2">
              <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-full border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder:text-gray-400 shadow-sm transition"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-full border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder:text-gray-400 shadow-sm transition"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-2xl border border-blue-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder:text-gray-400 shadow-sm transition resize-none"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:scale-[1.03] hover:from-blue-600 hover:to-blue-800 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
