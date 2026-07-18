"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion"

type CursorMode = "default" | "pointer" | "grab" | "text"

export function DossierCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mode, setMode] = useState<CursorMode>("default")
  const [clicking, setClicking] = useState(false)
  const [pinRipple, setPinRipple] = useState(false)
  const stringRef = useRef<SVGPathElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 380, damping: 30, mass: 0.4 })
  const y = useSpring(rawY, { stiffness: 380, damping: 30, mass: 0.4 })
  const trailX = useSpring(rawX, { stiffness: 90, damping: 18, mass: 0.9 })
  const trailY = useSpring(rawY, { stiffness: 90, damping: 18, mass: 0.9 })

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
      rawX.set(event.clientX)
      rawY.set(event.clientY)
      setVisible(true)
      setMode(resolveMode(event.target))
    }

    const onDown = () => {
      setClicking(true)
      setPinRipple(true)
      window.setTimeout(() => setPinRipple(false), 320)
    }

    const onUp = () => setClicking(false)
    const onLeave = () => setVisible(false)

    window.addEventListener("mousemove", onMove)
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
  }, [rawX, rawY])

  useEffect(() => {
    if (!enabled) return

    const updateString = () => {
      const x1 = trailX.get()
      const y1 = trailY.get()
      const x2 = x.get()
      const y2 = y.get()
      const cx = (x1 + x2) / 2 + (y2 - y1) * 0.15
      const cy = (y1 + y2) / 2 - (x2 - x1) * 0.12
      stringRef.current?.setAttribute(
        "d",
        `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`
      )
    }

    updateString()
    const unsubs = [x, y, trailX, trailY].map((v) => v.on("change", updateString))
    return () => unsubs.forEach((u) => u())
  }, [enabled, x, y, trailX, trailY])

  if (!enabled || !visible) return null

  return (
    <>
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9997] h-full w-full"
      >
        <path
          ref={stringRef}
          className={`dossier-cursor-string ${mode === "pointer" ? "is-taut" : ""} ${mode === "grab" ? "is-grab" : ""}`}
          fill="none"
        />
      </svg>

      <motion.div
        aria-hidden
        className="dossier-cursor-trail-pin pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ x: trailX, y: trailY }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x, y }}
      >
        <motion.div
          animate={{
            scale: clicking ? 0.88 : mode === "pointer" ? 1.08 : 1,
            y: clicking ? 5 : 0,
            rotate: mode === "grab" ? -28 : mode === "pointer" ? 8 : 0,
          }}
          transition={{ type: "spring", stiffness: 520, damping: 26 }}
          className="-translate-x-1/2 -translate-y-full"
        >
          {mode === "text" ? (
            <div className="dossier-cursor-text-bar" />
          ) : (
            <div
              className={`dossier-cursor-pin ${mode === "pointer" ? "is-target" : ""} ${mode === "grab" ? "is-grab" : ""}`}
            >
              <span className="dossier-cursor-pin-head" />
              <span className="dossier-cursor-pin-needle" />
            </div>
          )}

          <AnimatePresence>
            {pinRipple && (
              <motion.span
                initial={{ opacity: 0.7, scale: 0.5 }}
                animate={{ opacity: 0, scale: 2.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="dossier-cursor-pin-ripple absolute left-1/2 top-full -translate-x-1/2"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  )
}
