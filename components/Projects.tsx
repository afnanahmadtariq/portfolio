import { Github, Globe, ExternalLink } from "lucide-react"
import Image from "next/image"

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
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-8 animate-fade-in-down">Featured Projects</h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center group">
                <div className={`order-2 ${index % 2 === 0 ? 'md:order-none' : ''}`}>
                  <h3 className="text-sm text-blue-600 mb-2 animate-fade-in-left">{project.tech}</h3>
                  <h4 className="text-xl font-bold mb-4 animate-fade-in-left group-hover:text-blue-600 transition-colors duration-300">{project.title}</h4>
                  <p className="text-gray-500 mb-4 animate-fade-in-left">{project.description}</p>
                    {/* CTA Button - always visible on mobile, hover effect on desktop */}
                  <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 animate-fade-in-left">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      {project.url.includes('github.com') ? (
                        <>
                          <Github className="w-4 h-4" />
                          View Code
                        </>
                      ) : (
                        <>
                          <Globe className="w-4 h-4" />
                          Visit Site
                        </>
                      )}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                  {/* Enhanced project card */}
                <div className="project-card bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-4 shadow-lg relative overflow-hidden">
                  {/* Hover overlay with gradient - desktop only */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 md:group-hover:from-blue-500/10 md:group-hover:to-purple-500/10 transition-all duration-500 rounded-3xl"></div>
                  
                  {/* External link indicator - top right - always visible on mobile */}
                  <div className="project-indicator-right absolute top-6 right-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-x-0 md:translate-x-2 md:group-hover:translate-x-0 z-10">
                    <div className="project-icon bg-blue-600 text-white p-2 rounded-full shadow-lg">
                      {project.url.includes('github.com') ? (
                        <Github className="w-4 h-4" />
                      ) : (
                        <Globe className="w-4 h-4" />
                      )}
                    </div>
                  </div>                    {/* Click to view indicator - bottom left - always visible on mobile */}
                  <div className="project-indicator-bottom absolute bottom-6 left-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 z-10">
                    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
                      <ExternalLink className="w-3 h-3 text-blue-600" />
                      <span className="text-xs font-medium text-gray-700">
                        {project.url.includes('github.com') ? 'View Code' : 'Visit Site'}
                      </span>
                    </div>
                  </div>

                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative z-0"
                  >
                    <Image
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      width={800}
                      height={400}
                      className="project-image rounded-2xl transition-all duration-500 overflow-hidden"
                    />
                  </a>
                </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}