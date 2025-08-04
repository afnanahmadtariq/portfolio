import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiFigma, SiVisualstudiocode, SiGit, SiPython, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si'
import Image from "next/image"

export default function TechShowcase() {
  
  return (
    <>
    {/* Tech Showcase */}
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
            {[SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiFigma, SiVisualstudiocode, SiGit, SiPython,  
              SiMongodb, SiNodedotjs, SiExpress].map((Icon, i) => (
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
      </section>
    </>
  )
}