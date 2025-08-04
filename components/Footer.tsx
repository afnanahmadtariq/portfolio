/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative bottom-0 left-0 bg-gradient-to-br from-white/80 to-blue-100/80 backdrop-blur-lg text-gray-900 border-t border-gray-200 shadow-lg h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden"
      style={{ minHeight: '32vh' }}
    >
      <div className="absolute left-[-60px] bottom-[-60px] blur-2xl animate-float z-0 bg-blue-200/60 rounded-full w-60 h-60" />
      <div className="absolute right-[-60px] top-[-60px] blur-2xl bg-blue-300/40 animate-spin-slow z-0 rounded-full w-60 h-60" />
      <div className="container mx-auto px-4 md:px-10 lg:px-40 relative z-10 flex flex-col sm:flex-row justify-between flex-grow py-8">
        <div className="flex flex-col justify-between items-center gap-8 mb-8 animate-fade-in-up">
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
            <div className="flex gap-2 items-center">
              <span className="text-blue-600 animate-blink">●</span>
              <span className="text-xs text-gray-500">Coded with Next.js & Tailwind CSS</span>
            </div>
            <p className="text-center text-xs text-gray-400 mt-2">
              © {new Date().getFullYear()} <span className="font-semibold text-gray-900">Afnan Ahmad Tariq</span> | All rights reserved
            </p>
          </section>
        </div>
        <div className="flex flex-col items-center gap-8 animate-fade-in-up">
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
  );
};

export default Footer;
