"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"
import { experiences } from "@/lib/data"
import { SectionHeader } from "@/components/section-header"

const researchExperiences = experiences.filter((exp) =>
  exp.title.toLowerCase().includes("research")
)

export function Research() {
  return (
    <section id="research" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          label="05 — Research"
          title="Research & foundations."
          description="System optimization work at UCF and the coursework that shaped how I think about software."
        />

        {researchExperiences.length > 0 && (
          <div className="mb-8 space-y-6">
            {researchExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-panel card-hover rounded-2xl p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                      {exp.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">{exp.company}</p>
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
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-panel rounded-2xl p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">
              Coursework & Foundations
            </h3>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            Bachelor of Science in Computer Science at UCF (Aug 2023 – Aug
            2027). Coursework includes Discrete Mathematics, Data Structures
            &amp; Algorithms, Computer Organization, Calculus, Linear Algebra,
            and Physics.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
