/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-[#0D0B1F] to-[#1A1830] text-white py-12 mt-20 overflow-hidden">
      {/* Animated blurred background */}
      <div className="absolute left-[-60px] bottom-[-60px] blur-effect animate-float z-0" />
      <div className="absolute right-[-60px] top-[-60px] blur-effect bg-blue-500 opacity-40 animate-spin-slow z-0" />
      <div className="container mx-auto px-4 md:px-10 lg:px-40 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 animate-fade-in-up">
          <section className="flex-1 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">Contact</h2>
            <p className="mb-2">Email:
              <a href="mailto:afnanahmadtariq@hotmail.com" className="text-blue-400 hover:underline ml-1">
                afnanahmadtariq@hotmail.com
              </a>
            </p>
            <p className="text-xs text-gray-400">Open to freelance & collaboration opportunities!</p>
          </section>
          <section className="flex-1 flex flex-col items-center md:items-end">
            <h2 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">Follow Me</h2>
            <div className="flex gap-6 justify-center md:justify-end">
              <Link href="https://github.com/afnanahmadtariq" passHref>
                <img src="/icons/github.png" alt="GitHub" className="w-9 h-9 invert hover:scale-125 transition-transform duration-300 hover:drop-shadow-lg" />
              </Link>
              <Link href="https://linkedin.com/in/afnanahmadtariq" passHref>
                <img src="/icons/linkedin-icon.svg" alt="LinkedIn" className="w-9 h-9 hover:scale-125 transition-transform duration-300 hover:drop-shadow-lg" />
              </Link>
            </div>
          </section>
        </div>
        <div className="flex flex-col items-center gap-2 animate-fade-in-up">
          <div className="flex gap-2 items-center">
            <span className="text-blue-400 animate-blink">●</span>
            <span className="text-xs text-gray-400">Coded with Next.js & Tailwind CSS</span>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Afnan Ahmad Tariq</span> | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
