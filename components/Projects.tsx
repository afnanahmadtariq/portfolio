import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects() {
  const projects = [
    {
      "tech": "Next.js | TailwindCSS | FramerMotion | Emailjs | MongoDB",
      "title": "Devstract",
      "description": "Devstract is a modern web platform featuring responsive design, dynamic animations, reusable UI components, and robust APIs for user subscription and email communication. It includes dedicated pages for contact, FAQs, legal policies, and an engaging carousel, delivering a seamless and interactive user experience.",
      "image": "/screenshots/devstract.png",
      "url": "https://devstract.vercel.app/"
    },
    {
      "tech": "NextJs | ShacdCN UI",
      "title": "News Hub",
      "description": "A dynamic news aggregation platform designed for efficient content delivery and user engagement. Features a structured layout to present diverse articles, ensuring a seamless Browse experience.",
      "image": "/screenshots/news-hub-site.png",
      "url": "https://news-hub-site.vercel.app/"
    },
    {
      "tech": "NextJs | MongoDB",
      "title": "Learn Hub",
      "description": "An educational platform focusing on personalized learning paths with intelligent feedback. Designed for practical skill development and industry-relevant projects, fostering rapid progress for users.",
      "image": "/screenshots/learn-hub-site.png",
      "url": "https://learn-hub-site.vercel.app/"
    },
    {
      "tech": "Next.js | MongoDB | Express.js",
      "title": "Modern Shop",
      "description": "A premium e-commerce store with a focus on a seamless shopping experience and modern design. Features product catalog display, shopping cart functionality, and dynamic total calculation.",
      "image": "/screenshots/modern-shop-site.png",
      "url": "https://modern-shop-site.vercel.app/"
    },
    {
      "tech": "Next.js | MongoDB",
      "title": "Track Pro",
      "description": "A professional vehicle tracking solution offering real-time GPS tracking and fleet management capabilities. Includes features for detailed analytics, maintenance alerts, and driver behavior monitoring.",
      "image": "/screenshots/track-pro-site.png",
      "url": "https://track-pro-site.vercel.app/"
    },
    {
      "tech": "NextJs | Tailwind CSS",
      "title": "Business Website",
      "description": "A comprehensive business website offering services such as digital marketing and business consulting. Showcases a range of custom solutions and data analytics, emphasizing personalized strategies and measurable results.",
      "image": "/screenshots/business-website-site.png",
      "url": "https://business-website-site.vercel.app/"
    }
  ]
  return (
    // ...existing code...
    // Projects
    <section id="projects" className="w-full h-[calc(100vh-4rem)] bg-gradient-to-br from-white to-blue-100 flex items-center justify-center relative">
      <div className="w-full h-full flex items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="h-full w-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-full">
              <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-full px-8 max-w-5xl mx-auto">
                {/* Info on left */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start text-left py-8 md:py-0">
                  <h3 className="text-sm mb-2 text-blue-500 font-medium">{project.tech}</h3>
                  <h4 className="text-2xl font-bold mb-4 text-blue-900">{project.title}</h4>
                  <p className="text-base text-gray-700 mb-6">{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Visit Site</a>
                </div>
                {/* Image on right */}
                <div className="relative w-full md:w-1/2 h-64 md:h-[28rem] flex items-center justify-end">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-2xl shadow-lg border border-blue-200"
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom Swiper navigation arrows at bottom right with circular bg */}
      <div className="absolute bottom-8 right-8 flex gap-4 z-50">
        <button
          className="swiper-button-prev w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center border border-blue-200 hover:bg-blue-100 transition"
          aria-label="Previous project"
          type="button"
        >
          <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          className="swiper-button-next w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center border border-blue-200 hover:bg-blue-100 transition"
          aria-label="Next project"
          type="button"
        >
          <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </div>
    </section>
  )
}