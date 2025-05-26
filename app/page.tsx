'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiHtml5, SiFigma, SiAdobephotoshop, SiGit, SiFlutter,
  SiMongodb, SiExpress, SiPython
} from 'react-icons/si'
import { ExternalLink, Github, Globe } from 'lucide-react'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {  const [currentRole, setCurrentRole] = useState('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ['Web Developer', 'UI/UX Designer', 'Mobile Developer', 'Software Engineer', 'Problem Solver', 'AI Enthusiast']
  const [roleIndex, setRoleIndex] = useState(0)
  const [typing, setTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let typingTimeout: string | number | NodeJS.Timeout | undefined
    let roleChangeTimeout: string | number | NodeJS.Timeout | undefined

    const currentString = roles[roleIndex]

    // Function to type out the current role
    const typeRole = () => {
      if (typing) {
        // Typing effect
        typingTimeout = setInterval(() => {
          // Add one character at a time until the full word is typed
          if (charIndex < currentString.length) {
            setCurrentRole((prev) => prev + currentString[charIndex])
            setCharIndex((prev) => prev + 1)
          } else {
            // After fully typing the role, stop typing and start deleting
            clearInterval(typingTimeout)
            setTimeout(() => {
              setTyping(false)
            }, 1000) // Delay before starting to delete
          }
        }, 150) // Speed of typing effect
      } else {
        // Deleting effect
        typingTimeout = setInterval(() => {
          setCurrentRole((prev) => prev.slice(0, prev.length - 1))
          
          if (currentRole.length === 0) {
            clearInterval(typingTimeout)
            setTimeout(() => {
              // After deleting, switch to next role
              setRoleIndex((prev) => (prev + 1) % roles.length)
              setTyping(true) // Start typing the next role
              setCharIndex(0)
            }, 1000) // Delay before switching role
          }
        }, 100) // Speed of deleting effect
      }
    }

    typeRole()

    return () => {
      clearInterval(typingTimeout)
      clearTimeout(roleChangeTimeout)
    }
  }, [roleIndex, typing, charIndex, currentRole, roles])

 
  // Redesigned skills section for web development
  const webSkills = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', icon: SiReact, level: 'Advanced' },
        { name: 'Next.js', icon: SiNextdotjs, level: 'Advanced' },
        { name: 'TypeScript', icon: SiTypescript, level: 'Advanced' },
        { name: 'HTML5', icon: SiHtml5, level: 'Advanced' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiExpress, level: 'Intermediate' },
        { name: 'Express.js', icon: SiExpress, level: 'Intermediate' },
        { name: 'MongoDB', icon: SiMongodb, level: 'Intermediate' },
      ]
    },
    {
      category: 'UI/UX & Tools',
      skills: [
        { name: 'Figma', icon: SiFigma, level: 'Intermediate' },
        { name: 'Adobe Photoshop', icon: SiAdobephotoshop, level: 'Intermediate' },
        { name: 'Git', icon: SiGit, level: 'Advanced' },
      ]
    },
    {
      category: 'Other',
      skills: [
        { name: 'Python', icon: SiPython, level: 'Intermediate' },
        { name: 'Flutter', icon: SiFlutter, level: 'Intermediate' },
      ]
    }
  ];
  

  const projects = [
    {
      tech:'Flutter | Python',
      title: 'Agen',
      description: 'Agen is an innovative app that automates the process of generating assignments by scraping relevant content from across the internet. Imagine a tool that can pull up-to-date information, organize it, and generate structured assignments in a matter of seconds. Whether you\'re a student, educator, or content creator, Agen will save you tons of time by doing the heavy lifting for you!',
      image: '/screenshots/agen.png', 
      url: 'https://github.com/afnanahmadtariq/Agen/releases'
    },
    {
      tech:'ReactJs | Bootstrap',
      title: 'Weather Forecast',
      description: 'This Weather Forecast App provides users with real-time weather information based on geographic coordinates (latitude and longitude). Built with React and Bootstrap, the app features a clean, user-friendly interface where users can input location details and view weather forecasts for that area.',
      image: '/screenshots/weather.png',
      url: 'https://weather-forecast-ruddy-gamma.vercel.app/'
    },
    {
      tech:'Java | JavaFX',
      title: 'Tic Tac Ultimate | Quixo',
      description: 'This project brings three iconic games into one seamless experience; Tic Tac Toe: The classic 3x3 grid. Ultimate Tic Tac Toe: A more complex version with 9 smaller grids, adding layers of strategy. Quixo: A fun variation with shifting tiles that adds a unique twist to traditional Tic Tac Toe!',
      image: '/screenshots/uttt.png',
      url: 'https://github.com/afnanahmadtariq/Tic-Tac-Ultimate.git'
    },
    {      tech:'Vanilla Js',
      title: 'Catch Me',
      description: 'Built entirely with Vanilla JavaScript, this simple yet fun game showcases the power of JavaScript in creating interactive experiences from scratch. Objective: Click on the moving icon to score points. Two Modes; Timed Mode: Rack up as many points as possible within a set time limit.Levels Mode: Icons move faster as you level up, challenging your reflexes!',
      image: '/screenshots/catch-me.png', 
      url: 'https://catchme-game.vercel.app/'
    }
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 text-gray-900 relative">
      <Navbar />
      {/* Custom Particle Background */}
      <ParticleBackground />
      <div className='main relative z-10'>{/* Hero Section */}
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 pt-32">
          {/* Hero Content */}
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <div className="w-32 h-32 lg:w-64 lg:h-64 mx-auto mb-6 relative flex items-center justify-center bg-white border-4 border-blue-100 shadow-lg rounded-full overflow-hidden">
              <Image
                src="/pic.jpg"
                alt="Avatar"
                width={512}
                height={512}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-xl lg:text-3xl font-bold mb-4 animate-fade-in-down">
              Hello! I Am <span className="text-blue-600">Afnan Ahmad Tariq</span>
            </h1>
            <h2 className="text-xl lg:text-3xl font-bold mb-4 animate-fade-in-up">
              I&apos;m a <span className="text-blue-600">{currentRole}</span>
              <span className="animate-blink text-blue-600">|</span> 
            </h2>
            <p className="text-sm lg:text-base text-gray-500 animate-fade-in-up">
              I&apos;m a Web Developer specializing in <span className="text-blue-600">MERN</span>
            </p>            <p className="text-sm lg:text-base text-gray-500 mt-4 max-w-xl mx-auto animate-fade-in-up">
            I&apos;m a passionate Web Developer with a focus on creating scalable, secure, and intelligent 
            applications. With hands-on experience in Nextjs, Express, MongoDB and PostgreSQL. I build applications that not only 
            meet user needs but also integrate cutting-edge AI solutions to drive automation and innovation.
            </p>
          </div>
        </section>        {/* Skills Section */}
        <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 lg:py-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 animate-fade-in-down text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 xl:gap-6 2xl:gap-8">            {webSkills.map((group) => (
              <div key={group.category} className="mb-4 sm:mb-6 lg:mb-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6 lg:mb-6 justify-center sm:justify-start lg:justify-center xl:justify-start">
                  {/* Category Icon with color */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-12 xl:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border border-blue-200/50">
                    {group.category === 'Frontend' && <SiReact className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" color="#61DAFB" />}
                    {group.category === 'Backend' && <SiExpress className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" color="#000000" />}
                    {group.category === 'UI/UX & Tools' && <SiFigma className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" color="#A259FF" />}
                    {group.category === 'Other' && <SiPython className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-6 xl:h-6" color="#3776AB" />}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl xl:text-lg 2xl:text-xl font-bold text-blue-700">{group.category}</h3>
                </div>                <div className="skills-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-2 sm:gap-3 lg:gap-4 xl:gap-3 2xl:gap-4">
                  {group.skills.map((skill, index) => {
                    // ...existing code...
                    let iconColor = '#60A5FA'; // default blue
                    if (skill.name === 'React.js') iconColor = '#61DAFB';
                    else if (skill.name === 'Next.js') iconColor = '#000000';
                    else if (skill.name === 'TypeScript') iconColor = '#3178C6';
                    else if (skill.name === 'HTML5') iconColor = '#E34F26';
                    else if (skill.name === 'Tailwind CSS') iconColor = '#38BDF8';
                    else if (skill.name === 'Node.js') iconColor = '#339933';
                    else if (skill.name === 'Express.js') iconColor = '#000000';
                    else if (skill.name === 'MongoDB') iconColor = '#47A248';
                    else if (skill.name === 'Figma') iconColor = '#A259FF';
                    else if (skill.name === 'Adobe Photoshop') iconColor = '#31A8FF';
                    else if (skill.name === 'Git') iconColor = '#F05032';
                    else if (skill.name === 'Python') iconColor = '#3776AB';
                    else if (skill.name === 'Flutter') iconColor = '#02569B';
                    return (
                      <div 
                        key={skill.name} 
                        className={`skill-card flex flex-col items-center bg-white/90 backdrop-blur-sm border border-blue-100/50 rounded-xl px-2 py-3 sm:px-3 sm:py-4 lg:px-4 lg:py-5 xl:px-3 xl:py-4 2xl:px-4 2xl:py-5 shadow-lg hover:shadow-xl hover:shadow-blue-200/60 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] xl:min-h-[140px] 2xl:min-h-[160px] group relative overflow-hidden`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* ...existing code... */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/30 transition-all duration-500 rounded-xl"></div>
                        
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 flex items-center justify-center mb-1 sm:mb-2 lg:mb-3 xl:mb-2 2xl:mb-3 relative z-10 group-hover:scale-110 transition-transform duration-300">
                          <skill.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" color={iconColor} />
                        </div>
                        <span className="font-semibold text-xs sm:text-sm lg:text-base xl:text-sm 2xl:text-base mb-1 sm:mb-2 lg:mb-3 xl:mb-2 2xl:mb-3 text-center leading-tight px-1 relative z-10">{skill.name}</span>
                        {/* ...existing code... */}
                        <div className="w-full h-1.5 sm:h-2 lg:h-2.5 xl:h-2 2xl:h-2.5 bg-blue-100 rounded-full overflow-hidden mb-1 sm:mb-2 lg:mb-3 xl:mb-2 2xl:mb-3 relative z-10">
                          <div
                            className={
                              skill.level === 'Advanced'
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full w-full animate-fade-in-right'
                                : skill.level === 'Intermediate'
                                ? 'bg-gradient-to-r from-blue-400 to-blue-500 h-full rounded-full w-2/3 animate-fade-in-right'
                                : 'bg-gradient-to-r from-blue-300 to-blue-400 h-full rounded-full w-1/3 animate-fade-in-right'
                            }
                          ></div>
                        </div>
                        <span className={`relative z-10 font-bold text-xs ${
                          skill.level === 'Beginner' ? 'text-red-500' :
                          skill.level === 'Intermediate' ? 'text-yellow-500' :
                          'text-green-600'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Tech Stack */}
        <section className="container mx-auto px-4 py-20 text-center">
          <p className="text-xl mb-8 animate-fade-in-down">
            I&apos;m currently looking to join a <span className="text-blue-600">cross-functional</span> team
          </p>
          <p className="text-gray-500 mb-12 animate-fade-in-up">that values improving people&apos;s lives through accessible design</p>
          <div className="relative w-64 h-64 lg:h-96 lg:w-96 mx-auto">
            <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl animate-float">
              <Image
                    src="/a.svg"
                    alt={`A`}
                    width={60}
                    height={95}
                    className="rounded-lg"
                  />
              </span>
            </div>
            <div className="absolute inset-0 animate-spin-slow">
              {[SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiHtml5, SiFigma, SiAdobephotoshop, SiGit, SiPython,  
                SiMongodb, SiFlutter, SiExpress].map((Icon, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 lg:w-10 lg:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center"
                  style={{
                    left: `${50 + 40 * Math.cos(2 * Math.PI * i / 12)}%`,
                    top: `${50 + 40 * Math.sin(2 * Math.PI * i / 12)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Icon className="text-blue-600 w-4 h-4 lg:w-6 lg:h-6 animate-spin-reverse-slow" />
                </div>
              ))}
            </div>
          </div>
        </section>        {/* Projects */}
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
      </div>
      <Footer />
    </div>
  )
}
