"use client"

import { useEffect, useState } from "react"

export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")
    setEnabled(media.matches)

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    if (media.matches) {
      window.addEventListener("mousemove", handleMove)
    }

    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[5] hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.08), transparent 45%)`,
      }}
    />
  )
}
