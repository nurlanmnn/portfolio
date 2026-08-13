"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"

type CursorMode = "default" | "pointer" | "grab" | "text"

export function DossierCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useState<CursorMode>("default")
  const [clicking, setClicking] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (!fine.matches || reduced.matches) return

    setEnabled(true)
    document.documentElement.classList.add("dossier-cursor-active")

    const resolveMode = (target: EventTarget | null): CursorMode => {
      if (!(target instanceof Element)) return "default"
      if (target.closest("input, textarea")) return "text"
      if (target.closest(".puzzle-piece-scatter, [data-cursor='grab']"))
        return "grab"
      if (
        target.closest(
          "a, button, [role='button'], label, summary, [data-cursor='pointer']"
        )
      )
        return "pointer"
      return "default"
    }

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
      setVisible(true)
      setMode(resolveMode(event.target))
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)
    const onLeave = () => setVisible(false)

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    document.documentElement.addEventListener("mouseleave", onLeave)

    return () => {
      document.documentElement.classList.remove("dossier-cursor-active")
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      document.documentElement.removeEventListener("mouseleave", onLeave)
    }
  }, [x, y])

  if (!enabled || !visible) return null

  return (
    <motion.div
      aria-hidden
      className="dossier-cursor-root pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x, y }}
    >
      <motion.div
        animate={{
          scale: clicking ? 0.92 : mode === "pointer" ? 1.06 : 1,
          rotate: mode === "grab" ? -28 : mode === "pointer" ? 8 : 0,
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        className="-translate-x-1/2 -translate-y-[8px] will-change-transform"
      >
        {mode === "text" ? (
          <div className="dossier-cursor-text-bar" />
        ) : (
          <div
            className={`dossier-cursor-pin ${mode === "pointer" ? "is-target" : ""} ${mode === "grab" ? "is-grab" : ""} ${clicking ? "is-pressed" : ""}`}
          >
            <span className="dossier-cursor-pin-head" />
            <span className="dossier-cursor-pin-needle" aria-hidden />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
