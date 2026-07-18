"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Github, Mail, Linkedin, Download } from "lucide-react"
import Link from "next/link"
import {
  personalInfo,
  projects,
  experiences,
  skills,
} from "@/lib/data"
import { savePuzzleScroll } from "@/lib/puzzle-progress"
import { PANEL_LOAD_LINES } from "@/lib/dossier-gags"

export type PanelId =
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "contact"
  | "resume"

const panelMeta: Record<
  PanelId,
  { title: string; subtitle: string; stamp: string }
> = {
  about: {
    title: "SUBJECT FILE",
    subtitle: "Who even is this person?",
    stamp: "VERIFIED HUMAN",
  },
  skills: {
    title: "ARMORY MANIFEST",
    subtitle: "Tools they might know (allegedly)",
    stamp: "UNAUDITED",
  },
  experience: {
    title: "EMPLOYMENT RECORD",
    subtitle: "Places that let them in the building",
    stamp: "NO REFUNDS",
  },
  projects: {
    title: "EVIDENCE LOCKER",
    subtitle: "Things that actually shipped",
    stamp: "EXHIBIT A–C",
  },
  contact: {
    title: "CONTACT PROTOCOL",
    subtitle: "Do not panic. Just email.",
    stamp: "OPEN CHANNEL",
  },
  resume: {
    title: "PAPER TRAIL",
    subtitle: "For people who still print things",
    stamp: "PDF INSIDE",
  },
}

interface DossierPanelProps {
  panel: PanelId | null
  onClose: () => void
}

export function DossierPanel({ panel, onClose }: DossierPanelProps) {
  const [loading, setLoading] = useState(false)
  const [loadLine, setLoadLine] = useState(PANEL_LOAD_LINES[0])
  const seenPanels = useRef<Set<PanelId>>(new Set())

  useEffect(() => {
    if (!panel) return

    if (seenPanels.current.has(panel)) {
      setLoading(false)
      return
    }

    seenPanels.current.add(panel)
    setLoadLine(
      PANEL_LOAD_LINES[Math.floor(Math.random() * PANEL_LOAD_LINES.length)]
    )
    setLoading(true)
    const timer = window.setTimeout(() => setLoading(false), 480)
    return () => window.clearTimeout(timer)
  }, [panel])

  return (
    <AnimatePresence>
      {panel && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%", rotate: 2 }}
            animate={{ x: 0, rotate: 0 }}
            exit={{ x: "100%", rotate: -2 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="dossier-panel fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-lg flex-col overflow-hidden border-l-4 border-stamp shadow-[-12px_0_40px_rgba(0,0,0,0.35)] sm:max-w-xl"
          >
            <div className="relative shrink-0 border-b-2 border-dashed border-ink/20 bg-manilla-dark px-5 py-4">
              <div className="absolute -right-3 top-4 rotate-12 border-4 border-stamp px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-stamp opacity-90">
                {panelMeta[panel].stamp}
              </div>
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded border-2 border-ink bg-highlighter p-1.5 transition-transform hover:rotate-90"
                aria-label="Close dossier"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
                {panelMeta[panel].title}
              </p>
              <h2 className="mt-1 font-display text-2xl uppercase leading-none text-ink sm:text-3xl">
                {panelMeta[panel].subtitle}
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-5 pb-10">
              {loading ? (
                <p className="animate-pulse font-mono text-xs text-ink/50">
                  {loadLine}
                </p>
              ) : (
                <>
                  {panel === "about" && <AboutContent />}
                  {panel === "skills" && <SkillsContent />}
                  {panel === "experience" && <ExperienceContent />}
                  {panel === "projects" && <ProjectsContent />}
                  {panel === "contact" && <ContactContent />}
                  {panel === "resume" && <ResumeContent />}
                </>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

function AboutContent() {
  return (
    <div className="space-y-5 font-mono text-sm leading-relaxed text-ink/85">
      <p className="border-l-4 border-stamp pl-4 text-base">
        {personalInfo.bio}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Education", personalInfo.quickFacts.education],
          ["Location", personalInfo.quickFacts.location],
          ["Looking for", personalInfo.quickFacts.lookingFor],
          ["Currently learning", personalInfo.quickFacts.learning],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rotate-[0.5deg] border-2 border-ink bg-white/60 p-3 shadow-[3px_3px_0_#1c1917]"
          >
            <p className="text-[10px] uppercase tracking-widest text-ink/45">
              {label}
            </p>
            <p className="mt-1 font-bold">{value}</p>
          </div>
        ))}
      </div>
      <p className="text-xs italic text-ink/50">
        Handwritten note: &ldquo;Please don&apos;t make me do another LeetCode
        hard in an onsite.&rdquo;
      </p>
    </div>
  )
}

function SkillsContent() {
  return (
    <div className="space-y-4">
      {skills.map((cat) => (
        <div
          key={cat.name}
          className="-rotate-1 border-2 border-ink bg-white/50 p-4 shadow-[4px_4px_0_#1c1917]"
        >
          <h3 className="font-display text-lg uppercase text-stamp">
            {cat.name}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="border border-ink/30 bg-highlighter/40 px-2 py-0.5 font-mono text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function ExperienceContent() {
  return (
    <div className="space-y-5">
      {experiences.map((exp, i) => (
        <article
          key={exp.id}
          className="relative border-2 border-ink bg-white/55 p-4 shadow-[5px_5px_0_#1c1917]"
          style={{ transform: `rotate(${i % 2 === 0 ? -0.8 : 0.6}deg)` }}
        >
          <span className="absolute -right-2 -top-2 bg-stamp px-2 py-0.5 font-mono text-[10px] font-bold text-white">
            #{i + 1}
          </span>
          <p className="font-mono text-[10px] uppercase tracking-widest text-stamp">
            {exp.period}
          </p>
          <h3 className="font-display text-xl uppercase">{exp.title}</h3>
          <p className="font-mono text-xs text-ink/60">
            {exp.company} · {exp.location}
          </p>
          <ul className="mt-3 space-y-2 font-mono text-xs leading-relaxed text-ink/80">
            {exp.description.map((line) => (
              <li key={line} className="flex gap-2">
                <span className="text-stamp">▸</span>
                {line}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}

function ProjectsContent() {
  return (
    <div className="space-y-4">
      {projects.map((project, i) => (
        <article
          key={project.id}
          className="group border-2 border-ink bg-white/60 p-4 shadow-[4px_4px_0_#1c1917] transition-transform hover:-translate-y-0.5"
          style={{ transform: `rotate(${i === 1 ? 1.2 : -0.5}deg)` }}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-mono text-[10px] text-stamp">{project.year}</p>
              <h3 className="font-display text-xl uppercase">{project.title}</h3>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              scroll={false}
              onClick={() => savePuzzleScroll("projects")}
              className="shrink-0 border-2 border-ink bg-highlighter px-2 py-1 font-mono text-[10px] font-bold uppercase hover:bg-stamp hover:text-white"
            >
              Case file →
            </Link>
          </div>
          <p className="mt-2 font-mono text-xs leading-relaxed text-ink/75">
            {project.shortDescription}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="bg-manilla-dark px-1.5 py-0.5 font-mono text-[10px]"
              >
                {t}
              </span>
            ))}
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-stamp underline-offset-2 hover:underline"
            >
              <Github className="h-3 w-3" />
              github evidence
            </a>
          )}
        </article>
      ))}
    </div>
  )
}

function ContactContent() {
  return (
    <div className="space-y-4 font-mono text-sm">
      <p className="border-2 border-dashed border-stamp bg-stamp/5 p-4 text-center text-xs uppercase tracking-wider">
        Congratulations. You found the secret &ldquo;please hire me&rdquo;
        button disguised as a contact form.
      </p>
      <a
        href={`mailto:${personalInfo.email}`}
        className="flex items-center gap-3 border-2 border-ink bg-highlighter p-4 shadow-[4px_4px_0_#1c1917] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#1c1917]"
      >
        <Mail className="h-5 w-5" />
        <span className="break-all font-bold">{personalInfo.email}</span>
      </a>
      {[
        { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
        { href: personalInfo.github, icon: Github, label: "GitHub" },
      ].map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border-2 border-ink bg-white/70 p-3 hover:bg-manilla-dark"
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      ))}
    </div>
  )
}

function ResumeContent() {
  return (
    <div className="flex flex-col items-center gap-6 py-8 text-center font-mono">
      <div className="rotate-[-3deg] border-4 border-ink bg-white p-8 shadow-[8px_8px_0_#c41e3a]">
        <p className="text-[10px] uppercase tracking-[0.4em] text-ink/40">
          Official Document
        </p>
        <p className="mt-2 font-display text-3xl uppercase">Resume.pdf</p>
        <p className="mt-2 text-xs text-ink/50">Version: probably current</p>
      </div>
      <a
        href={personalInfo.resume}
        download
        className="inline-flex items-center gap-2 border-2 border-ink bg-stamp px-6 py-3 font-bold uppercase text-white shadow-[4px_4px_0_#1c1917] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#1c1917]"
      >
        <Download className="h-4 w-4" />
        Smuggle PDF out
      </a>
      <p className="max-w-xs text-xs italic text-ink/45">
        Warning: opening this file may cause a recruiter to appear within 3–5
        business days.
      </p>
    </div>
  )
}
