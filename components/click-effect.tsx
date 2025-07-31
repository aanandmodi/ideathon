"use client"

import { useEffect } from "react"

export default function ClickEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const blastCount = 16

      for (let i = 0; i < blastCount; i++) {
        const blast = document.createElement("div")
        blast.className = "bomb-blast"

        const angle = (360 / blastCount) * i
        const distance = Math.random() * 60 + 20
        const x = e.clientX + Math.cos((angle * Math.PI) / 180) * distance
        const y = e.clientY + Math.sin((angle * Math.PI) / 180) * distance

        blast.style.left = `${x}px`
        blast.style.top = `${y}px`

        // Enhanced colors for bomb blast effect
        const colors = ["#00ffff", "#ff00ff", "#ffff00", "#ff0080", "#8000ff", "#00ff80"]
        blast.style.color = colors[Math.floor(Math.random() * colors.length)]

        document.body.appendChild(blast)

        setTimeout(() => {
          if (blast.parentNode) {
            blast.parentNode.removeChild(blast)
          }
        }, 600)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
