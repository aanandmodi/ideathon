"use client"

import { useEffect } from "react"

export default function FallingParticles() {
  useEffect(() => {
    const createFallingParticle = () => {
      const types = ["star", "blue", "cyan", "green"]
      const type = types[Math.floor(Math.random() * types.length)]

      const particle = document.createElement("div")
      particle.className = `particle-fall particle-${type}`

      const startX = Math.random() * window.innerWidth
      const endX = startX + (Math.random() - 0.5) * 200
      const duration = Math.random() * 12 + 10
      const delay = Math.random() * 5

      particle.style.left = `${startX}px`
      particle.style.top = "-10vh"
      particle.style.setProperty("--random-x", "0px")
      particle.style.setProperty("--random-x-end", `${endX - startX}px`)
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

    const interval = setInterval(createFallingParticle, 400)

    return () => clearInterval(interval)
  }, [])

  return null
}
