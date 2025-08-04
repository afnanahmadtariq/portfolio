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
    <>
    {/* Projects */}
      <section id="projects" className="w-full h-[calc(100vh-4rem)] bg-black">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="h-full"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-full">
              <div className="flex flex-col md:flex-row items-center justify-center w-full h-full px-8">
                <div className="relative w-full md:w-2/3 h-2/3 md:h-full">
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
                      className="rounded-lg"
                    />
                  </a>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8 w-full md:w-1/3 text-center md:text-left">
                  <h3 className="text-sm mb-2 text-gray-500">{project.tech}</h3>
                  <h4 className="text-xl font-bold mb-4 text-gray-800">{project.title}</h4>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}