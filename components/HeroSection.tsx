import Image from "next/image"
import { useState, useEffect } from "react"
import ParticleBackground from "./ParticleBackground"

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState('')
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Software Engineer', 'Problem Solver', 'Cyber Enthusiast', 'AI Enthusiast']
  const [roleIndex, setRoleIndex] = useState(0)
  const [typing, setTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let typingTimeout: string | number | NodeJS.Timeout | undefined
    let roleChangeTimeout: string | number | NodeJS.Timeout | undefined

    const currentString = roles[roleIndex]

    const typeRole = () => {
      if (typing) {
        typingTimeout = setInterval(() => {
          if (charIndex < currentString.length) {
            setCurrentRole((prev) => prev + currentString[charIndex])
            setCharIndex((prev) => prev + 1)
          } else {
            clearInterval(typingTimeout)
            setTimeout(() => {
              setTyping(false)
            }, 1000)
          }
        }, 150)
      } else {
        typingTimeout = setInterval(() => {
          setCurrentRole((prev) => prev.slice(0, prev.length - 1))
          
          if (currentRole.length === 0) {
            clearInterval(typingTimeout)
            setTimeout(() => {
              setRoleIndex((prev) => (prev + 1) % roles.length)
              setTyping(true)
              setCharIndex(0)
            }, 1000)
          }
        }, 100)
      }
    }

    typeRole()

    return () => {
      clearInterval(typingTimeout)
      clearTimeout(roleChangeTimeout)
    }
  }, [roleIndex, typing, charIndex, currentRole, roles])

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-white to-blue-100 w-full flex items-center justify-center px-4 py-20 pt-32">
        <ParticleBackground />
        <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto mb-6 relative flex items-center justify-center shadow-lg rounded-full overflow-hidden">
            <Image
            src="/media/photo.png"
            alt="Avatar"
            width={512}
            height={512}
            className="object-cover w-full h-full"
            />
        </div>
        <h1 className="text-xl lg:text-3xl font-bold mb-4 animate-fade-in-down">
            Hello! I Am <span className="text-blue-500">Afnan Ahmad Tariq</span>
        </h1>
        <h2 className="text-xl lg:text-3xl font-bold mb-4 animate-fade-in-up">
            I&apos;m a <span className="text-purple-500">{currentRole}</span>
            <span className="animate-blink text-purple-500">|</span> 
        </h2>          
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-4 max-w-4xl mx-auto animate-fade-in-up">
        Full Stack Developer passionate about building scalable web and mobile applications with modern technologies. Experienced in Next.js, Tailwind CSS, Node.js, MongoDB, Docker, and Azure. I create intuitive user experiences, integrate AI tools, and thrive in collaborative, cross-functional teams. Proven problem solver with a track record in coding competitions and hackathons. Open to new opportunities and challenges.
        </p>
        </div>
    </section> 
  )
}