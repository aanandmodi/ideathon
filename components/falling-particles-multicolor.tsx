"use client"

import { useEffect } from "react"

export default function FallingParticlesMulticolor() {
  useEffect(() => {
    const createFallingParticle = () => {
      const particle = document.createElement("div")
      particle.className = "particle-multicolor"

      // Different particle types and colors using only primary and secondary
      const types = ["circle", "square", "triangle", "diamond"]
      const colors = [
        "rgb(139, 92, 246)", // primary
        "rgb(6, 182, 212)", // secondary
        "rgb(168, 85, 247)", // primary variant
        "rgb(34, 211, 238)", // secondary variant
        "rgb(124, 58, 237)", // primary darker
        "rgb(8, 145, 178)", // secondary darker
      ]

      const type = types[Math.floor(Math.random() * types.length)]
      const color = colors[Math.floor(Math.random() * colors.length)]
      const size = Math.random() * 6 + 3
      const startX = Math.random() * window.innerWidth
      const endX = startX + (Math.random() - 0.5) * 200
      const duration = Math.random() * 15 + 10
      const delay = Math.random() * 5
      const rotation = Math.random() * 360

      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${startX}px`
      particle.style.top = "-20px"
      particle.style.backgroundColor = color
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}40`
      particle.style.transform = `rotate(${rotation}deg)`
      particle.style.setProperty("--end-x", `${endX}px`)
      particle.style.setProperty("--duration", `${duration}s`)
      particle.style.setProperty("--delay", `${delay}s`)

      // Apply shape based on type
      if (type === "circle") {
        particle.style.borderRadius = "50%"
      } else if (type === "square") {
        particle.style.borderRadius = "2px"
      } else if (type === "triangle") {
        particle.style.width = "0"
        particle.style.height = "0"
        particle.style.backgroundColor = "transparent"
        particle.style.borderLeft = `${size / 2}px solid transparent`
        particle.style.borderRight = `${size / 2}px solid transparent`
        particle.style.borderBottom = `${size}px solid ${color}`
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}40`
      } else if (type === "diamond") {
        particle.style.borderRadius = "0"
        particle.style.transform = `rotate(45deg)`
      }

      particle.style.animation = `fallMulticolor ${duration}s ${delay}s linear forwards`

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

    // Create particles more frequently
    const interval = setInterval(createFallingParticle, 300)

    // Create initial burst
    for (let i = 0; i < 20; i++) {
      setTimeout(createFallingParticle, i * 100)
    }

    return () => clearInterval(interval)
  }, [])

  return null
}
