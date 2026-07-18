"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDown, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo, highlightTags } from "@/lib/data"

const bootLines = [
  "> booting portfolio v2.0...",
  "> loading stack: react · node · azure · typescript",
  "> syncing brown & brown intern pipeline...",
  "> rendering experience modules...",
  "> status: ready.",
]

const stats = [
  { value: "3+", label: "Projects shipped" },
  { value: "2026", label: "Tech intern @ B&B" },
  { value: "UCF", label: "Computer Science" },
]

export function Hero() {
  const [bootComplete, setBootComplete] = useState(false)
  const [visibleLines, setVisibleLines] = useState<string[]>([])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  useEffect(() => {
    let lineIndex = 0
    const interval = window.setInterval(() => {
      if (lineIndex < bootLines.length) {
        setVisibleLines((prev) => [...prev, bootLines[lineIndex]])
        lineIndex += 1
      } else {
        window.clearInterval(interval)
        window.setTimeout(() => setBootComplete(true), 400)
      }
    }, 420)

    return () => window.clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleCardMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handleCardLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                {personalInfo.role}
              </span>
            </motion.div>

            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(3.5rem,12vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.04em]"
              >
                <span className="hero-outline-text block">NURLAN</span>
                <span className="gradient-text block">MAMMADLI</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="code-snippet max-w-xl"
            >
              {visibleLines.map((line, index) => (
                <div key={line} className="flex items-center gap-2">
                  <span className="syntax-comment">{line}</span>
                  {index === visibleLines.length - 1 && !bootComplete && (
                    <span className="animate-blink inline-block h-4 w-2 bg-primary" />
                  )}
                </div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {highlightTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + index * 0.06 }}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="group rounded-full px-8 shadow-lg shadow-primary/20"
              >
                Explore projects
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full border-border/70 bg-card/40 backdrop-blur-sm"
              >
                <a href={personalInfo.resume} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid max-w-xl grid-cols-3 gap-3 pt-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-2xl px-4 py-3 text-center"
                >
                  <p className="font-display text-xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none"
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/20 blur-3xl" />

            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative animate-float"
            >
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-primary via-accent/60 to-primary opacity-70 blur-sm" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-card/80 p-2 glow-ring backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-muted">
                  <img
                    src="/images/profile.jpg"
                    alt={personalInfo.name}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl px-4 py-3">
                    <p className="font-mono text-xs text-primary">
                      {"// currently building"}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold">
                      AI dev tools & mobile apps
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -right-6 top-8 hidden h-24 w-24 rounded-full border border-dashed border-primary/30 lg:block"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute -left-8 bottom-10 hidden h-16 w-16 rounded-full border border-dashed border-accent/40 lg:block"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to projects"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </motion.div>
    </section>
  )
}
