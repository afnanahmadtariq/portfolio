'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speedX: number
  speedY: number
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        })
      }
      setParticles(newParticles)
    }

    createParticles()

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY
          
          if (newX > 100) newX = 0
          if (newX < 0) newX = 100
          if (newY > 100) newY = 0
          if (newY < 0) newY = 100
          
          return {
            ...particle,
            x: newX,
            y: newY,
          }
        })
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-400 transition-all duration-1000 ease-linear"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
      
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-xl animate-float" />
      <div className="absolute top-60 right-20 w-24 h-24 bg-purple-300 rounded-full opacity-15 blur-lg animate-pulse" />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-indigo-300 rounded-full opacity-25 blur-md animate-bounce" />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-300 rounded-full opacity-20 blur-lg animate-ping" />
      
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
