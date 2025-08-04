import { Navigation, Pagination } from 'swiper/modules';
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from 'react-icons/hi2';
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useRef } from 'react';

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

  const [projectTitle, setProjectTitle] = useState('')
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Refs for custom navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section id="projects" className="w-full h-[calc(100vh-4rem)] bg-gradient-to-br from-white to-blue-100 flex items-center justify-center relative">
      <div className="w-full h-full flex items-center justify-center">
        {/* Top left fixed div */}
        <div className="absolute z-10 top-0 left-0 w-[60%] sm:w-[30%] h-[4rem] sm:h-[5rem] bg-white/25 border-b border-r border-blue-300 rounded-br-full flex items-center justify-center">
          <h4 className="text-2xl font-bold text-blue-900">{projectTitle}</h4>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={typeof window !== 'undefined' && window.innerWidth < 640 ? false : { clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="h-full w-full"
          onSlideChange={(swiper) => {
            setProjectTitle(projects[swiper.activeIndex].title);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onInit={(swiper) => {
            setProjectTitle(projects[swiper.activeIndex].title);
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-full">
              <div className="flex flex-col md:flex-row items-center md:justify-between pt-14 sm:pt-20 md:pt-0 w-full h-full px-8 mx-auto">
                {/* Info on left */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start text-left py-4 sm:py-8 md:py-0">
                  <h3 className="text-xs sm:text-sm mb-2 text-blue-500 font-medium">{project.tech}</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-6">{project.description}</p>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 sm:px-5 sm:py-2 rounded-full bg-blue-600 text-white text-sm sm:text-base font-normal sm:font-semibold shadow hover:bg-blue-700 transition">Visit Site</a>
                </div>
                {/* Image on right */}
                <div className="relative w-full md:w-4/5 h-56 md:h-[35rem] flex items-center justify-center md:-mt-[5rem]">
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
        {/* Bottom right fixed div */}
        <div className="absolute z-10 bottom-0 right-0 w-[60%] sm:w-[30%] h-[5rem] bg-white/25 border-t border-l border-blue-300 rounded-tl-full flex items-center justify-center">
          {/* Custom Swiper navigation arrows at bottom right with circular bg */}
          <div className="flex gap-4 justify-center">
            <button
              ref={prevRef}
              className={`custom-swiper-prev w-12 h-12 rounded-full flex items-center justify-center border transition
                ${isBeginning ? 'bg-gray-200 border-gray-300 cursor-not-allowed opacity-50' : 'bg-white/80 border-blue-200 hover:bg-white hover:border-2 hover:border-blue-500'}`}
              aria-label="Previous project"
              type="button"
              disabled={isBeginning}
            >
              <HiOutlineArrowSmallLeft size={32} color={isBeginning ? '#a3b3ff' : '#2563eb'} />
            </button>
            <button
              ref={nextRef}
              className={`custom-swiper-next w-12 h-12 rounded-full flex items-center justify-center border transition
                ${isEnd ? 'bg-gray-200 border-gray-300 cursor-not-allowed opacity-50' : 'bg-white/80 border-blue-200 hover:bg-white hover:border-2 hover:border-blue-500'}`}
              aria-label="Next project"
              type="button"
              disabled={isEnd}
            >
              <HiOutlineArrowSmallRight size={32} color={isEnd ? '#a3b3ff' : '#2563eb'} />
            </button>
          </div>
        </div>  
      </div>
    </section>
  )
}