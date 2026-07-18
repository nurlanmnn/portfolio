"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { experiences } from "@/lib/data"
import { SectionHeader } from "@/components/section-header"

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          label="03 — Experience"
          title="Where I've been building."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-[15px]" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-10 md:pl-12"
              >
                <div className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background md:h-8 md:w-8">
                  <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                </div>

                <div className="glass-panel card-hover rounded-2xl p-6">
                  <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                        {exp.period}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold">
                        {exp.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary/70" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary/70" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.skills && (
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-muted px-3 py-1 font-mono text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
