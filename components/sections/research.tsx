"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Link as LinkIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/data"
import Link from "next/link"

const researchProjects = projects.filter((p) =>
  p.slug.includes("research") || p.slug.includes("codeql")
)

export function Research() {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 font-display tracking-tight">Research & Technical Work</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />
        </motion.div>

        <div className="space-y-6 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I&apos;m actively involved in research at UCF, focusing on areas
            like security analysis, AI/ML applications, and system optimization.
            Here are some of my research projects and technical contributions.
          </motion.p>
        </div>

        {/* Research Projects */}
        {researchProjects.length > 0 && (
          <div className="space-y-6 mb-12">
            {researchProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <Card className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {project.title}
                        </CardTitle>
                        <p className="text-muted-foreground">
                          {project.shortDescription}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-primary hover:underline inline-flex items-center gap-2"
                    >
                      Read more about this research
                      <LinkIcon className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle className="text-xl">Coursework & Foundations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discrete Mathematics, Data Structures & Algorithms, Computer
                Organization, Calculus, Linear Algebra, Physics, and more. I
                believe strong theoretical foundations are essential for
                building robust software systems.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

