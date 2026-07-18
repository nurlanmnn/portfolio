"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center"

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? "mb-16 text-center" : "mb-16"}
    >
      <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        <span className="h-px w-8 bg-primary/60" />
        {label}
        {centered && <span className="h-px w-8 bg-primary/60" />}
      </span>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed ${
            centered ? "mx-auto text-balance" : ""
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
