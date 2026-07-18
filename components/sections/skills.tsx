"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { SectionHeader } from "@/components/section-header"

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[]
  reverse?: boolean
}) {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div
        className={`flex w-max gap-3 ${reverse ? "[animation-direction:reverse]" : ""} animate-marquee`}
      >
        {doubled.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="whitespace-nowrap rounded-full border border-border/70 bg-card/60 px-4 py-2 font-mono text-sm text-foreground/90 backdrop-blur-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const allSkills = skills.flatMap((category) => category.skills)
  const rowOne = allSkills.filter((_, index) => index % 2 === 0)
  const rowTwo = allSkills.filter((_, index) => index % 2 === 1)

  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="02 — Skills"
          title="Tools I reach for when shipping."
          align="center"
        />

        <div className="mb-12 space-y-4">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.06 }}
              className="glass-panel card-hover rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-xs text-primary">#</span>
                <h3 className="font-display text-xl font-semibold">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-primary/15 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
