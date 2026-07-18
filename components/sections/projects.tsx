"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"
import { SectionHeader } from "@/components/section-header"
import Link from "next/link"

const bentoLayouts = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
]

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="04 — Projects"
          title="Selected work."
          description="Hackathon builds, personal apps, and the kind of projects I like talking about in interviews."
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:auto-rows-[minmax(220px,auto)]">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group glass-panel card-hover relative overflow-hidden rounded-3xl p-6 ${bentoLayouts[index] ?? ""}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                      {project.year}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="rounded-full border border-border/70 p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    aria-label={`View ${project.title} details`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mb-5 flex-1 text-muted-foreground">
                  {project.shortDescription}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, index === 0 ? 6 : 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="rounded-full bg-background/40"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="rounded-full bg-background/40"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
