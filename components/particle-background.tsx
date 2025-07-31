"use client"

import { useEffect } from "react"

export default function ParticleBackground() {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle"

      const size = Math.random() * 4 + 2
      const startX = Math.random() * window.innerWidth
      const duration = Math.random() * 3 + 2
      const delay = Math.random() * 2

      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${startX}px`
      particle.style.animationDuration = `${duration}s`
      particle.style.animationDelay = `${delay}s`

      document.body.appendChild(particle)

      setTimeout(
        () => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle)
          }
        },
        (duration + delay) * 1000,
      )
    }

    const interval = setInterval(createParticle, 200)

    return () => clearInterval(interval)
  }, [])

  return null
}
