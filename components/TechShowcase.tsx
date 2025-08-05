import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiFigma, SiVisualstudiocode, SiGit, SiPython, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si'
import Image from "next/image"
import { useEffect, useState, useRef } from 'react';

export default function TechShowcase() {
  const [positions, setPositions] = useState<{ left: string; top: string; scale: number }[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const newPositions = Array.from({ length: 12 }, (_, i) => ({
            left: `${50 + 40 * Math.cos((2 * Math.PI * i) / 12)}%`,
            top: `${50 + 40 * Math.sin((2 * Math.PI * i) / 12)}%`,
            scale: 0, // Start with scale 0 for animation
          }));
          setPositions(newPositions);

          // Animate outward one by one
          newPositions.forEach((pos, i) => {
            setTimeout(() => {
              setPositions((prev) => {
                const updated = [...prev];
                updated[i] = { ...pos, scale: 1 }; // Set scale to 1 for animation
                return updated;
              });
            }, i * 100); // Stagger animation by 100ms per icon
          });
        } else {
          // Reset positions when the section exits the viewport
          setPositions((prev) => prev.map((pos) => ({ ...pos, scale: 0 })));
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <>
    {/* Tech Showcase */}
      <section
        id='tech-showcase'
        ref={sectionRef}
        className="w-full py-20 h-[calc(100vh-4rem)] text-center bg-gradient-to-br from-white to-blue-100"
      >
        <p className="text-xl mb-8 animate-fade-in-down">
          I&apos;m currently looking to join a <span className="text-blue-600">cross-functional</span> team
        </p>
        <p className="text-gray-500 mb-12 animate-fade-in-up">that values improving people&apos;s lives through accessible design</p>
        <div className="relative w-64 h-64 lg:h-96 lg:w-96 mx-auto">
          <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl animate-float">
            <Image
                  src="/media/a.svg"
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
                className="absolute w-8 h-8 lg:w-10 lg:h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all ease-in-out"
                style={{
                  left: positions[i]?.left || '50%',
                  top: positions[i]?.top || '50%',
                  transform: `translate(-50%, -50%) scale(${positions[i]?.scale || 0})`,
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