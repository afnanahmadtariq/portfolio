/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-white to-blue-100 text-gray-900 py-12 overflow-hidden border-t border-gray-200 h-[calc(100vh-4rem)] flex flex-col justify-between">
      <div className="absolute left-[-60px] bottom-[-60px] blur-effect animate-float z-0 bg-blue-200" />
      <div className="absolute right-[-60px] top-[-60px] blur-effect bg-blue-300 opacity-40 animate-spin-slow z-0" />
      <div className="container mx-auto px-4 md:px-10 lg:px-40 relative z-10 flex flex-col justify-between flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 animate-fade-in-up">
          <section className="flex-1 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">Contact</h2>
            <p className="mb-2">Email:
              <a href="mailto:afnanahmadtariq@hotmail.com" className="text-blue-600 hover:underline ml-1">
                afnanahmadtariq@hotmail.com
              </a>
            </p>
            <p className="text-xs text-gray-500">Open to freelance & collaboration opportunities!</p>
          </section>
          <section className="flex-1 flex flex-col items-center md:items-end">
            <h2 className="text-lg md:text-xl font-semibold mb-4 tracking-wide">Follow Me</h2>
            <div className="flex gap-6 justify-center md:justify-end">
              <Link href="https://github.com/afnanahmadtariq" passHref target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.png" alt="GitHub" className="w-9 h-9 hover:scale-125 transition-transform duration-300 hover:drop-shadow-lg" />
              </Link>
              <Link href="https://linkedin.com/in/afnanahmadtariq" passHref target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin-icon.svg" alt="LinkedIn" className="w-9 h-9 hover:scale-125 transition-transform duration-300 hover:drop-shadow-lg" />
              </Link>
            </div>
          </section>
        </div>
        <div className="flex flex-col items-center gap-8 animate-fade-in-up">
          <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Your Name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Your Message" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Send</button>
          </form>
          <div className="flex gap-2 items-center">
            <span className="text-blue-600 animate-blink">●</span>
            <span className="text-xs text-gray-500">Coded with Next.js & Tailwind CSS</span>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-900">Afnan Ahmad Tariq</span> | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
