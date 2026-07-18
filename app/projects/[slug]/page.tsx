import { notFound } from "next/navigation"
import { projects, personalInfo } from "@/lib/data"
import { BackToDossier } from "@/components/puzzle/back-to-dossier"
import { ExternalLink, Github, Calendar, User } from "lucide-react"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} — Case File | ${personalInfo.name}`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-manilla">
      <div className="pointer-events-none absolute inset-0 bg-grid-paper opacity-30" />
      <div className="relative px-4 pb-20 pt-8 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <BackToDossier />

          <div className="mt-8 rotate-[-0.5deg] border-4 border-ink bg-white/70 p-6 shadow-[10px_10px_0_#c41e3a] sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-stamp">
              Exhibit — Case File
            </p>
            <h1 className="mt-2 font-display text-4xl uppercase leading-none sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 font-mono text-sm leading-relaxed text-ink/75">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs text-ink/55">
              {project.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5" />
                  <span>{project.role}</span>
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="border border-ink/25 bg-manilla px-2 py-1 font-mono text-[10px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-4 py-2 font-mono text-xs font-bold uppercase text-highlighter"
                >
                  <Github className="h-4 w-4" />
                  View code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-ink bg-white px-4 py-2 font-mono text-xs font-bold uppercase"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live demo
                </a>
              )}
            </div>
          </div>

          {project.problem && (
            <section className="mt-6 border-2 border-ink bg-white/55 p-6 shadow-[5px_5px_0_#1c1917]">
              <h2 className="font-display text-xl uppercase text-stamp">
                The Problem
              </h2>
              <p className="mt-3 font-mono text-sm leading-relaxed text-ink/80">
                {project.problem}
              </p>
            </section>
          )}

          {project.contributions && (
            <section className="mt-5 rotate-[0.4deg] border-2 border-ink bg-white/55 p-6 shadow-[5px_5px_0_#1c1917]">
              <h2 className="font-display text-xl uppercase text-stamp">
                What I Did
              </h2>
              <p className="mt-3 font-mono text-sm leading-relaxed text-ink/80">
                {project.contributions}
              </p>
            </section>
          )}

          <section className="mt-5 border-2 border-ink bg-white/55 p-6 shadow-[5px_5px_0_#1c1917]">
            <h2 className="font-display text-xl uppercase text-stamp">
              Key Features
            </h2>
            <ul className="mt-3 space-y-2 font-mono text-sm text-ink/80">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="text-stamp">▸</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          {project.challenges && (
            <section className="mt-5 border-2 border-dashed border-ink/40 bg-manilla-dark/50 p-6">
              <h2 className="font-display text-xl uppercase">
                Challenges & Learnings
              </h2>
              <p className="mt-3 font-mono text-sm leading-relaxed text-ink/75">
                {project.challenges}
              </p>
            </section>
          )}
        </div>
      </div>
    </main>
  )
}
