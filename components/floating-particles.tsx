"use client"

import { useEffect } from "react"

export default function FloatingParticles() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div")
      const isGlow = Math.random() > 0.7
      particle.className = isGlow ? "particle-glow" : "particle-dot"

      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const delay = Math.random() * 5

      particle.style.left = `${x}px`
      particle.style.top = `${y}px`
      particle.style.animationDelay = `${delay}s`

      document.body.appendChild(particle)

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 8000)
    }

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(createParticle, i * 200)
    }

    const interval = setInterval(createParticle, 2000)
    return () => clearInterval(interval)
  }, [])

  return null
}
