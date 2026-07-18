"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Briefcase, Lightbulb } from "lucide-react"
import { personalInfo } from "@/lib/data"
import { SectionHeader } from "@/components/section-header"

const quickFacts = [
  {
    icon: GraduationCap,
    label: "Education",
    value: personalInfo.quickFacts.education,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.quickFacts.location,
  },
  {
    icon: Briefcase,
    label: "Looking For",
    value: personalInfo.quickFacts.lookingFor,
  },
  {
    icon: Lightbulb,
    label: "Learning",
    value: personalInfo.quickFacts.learning,
  },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          label="01 — About"
          title="Building software that feels inevitable."
          description="Computer Science at UCF, interning at Brown & Brown, and always shipping something new."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a Computer Science student at the University of Central
              Florida and a Technology Solutions Intern at Brown &amp; Brown.
              I&apos;m passionate about building software that solves real
              problems — from mobile apps and full-stack systems to developer
              tooling and AI-powered automation.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m especially drawn to{" "}
              <span className="font-medium text-foreground">
                full-stack and mobile development
              </span>
              ,{" "}
              <span className="font-medium text-foreground">AI/ML</span>, and{" "}
              <span className="font-medium text-foreground">
                developer tooling
              </span>
              . Whether it&apos;s shipping production CI/CD pipelines, building
              VS Code extensions, or creating apps at hackathons like
              KnightHacks, I love learning by doing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="code-snippet"
          >
            <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
              </div>
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                about.ts
              </span>
            </div>
            <pre className="text-xs sm:text-sm">
              <span className="syntax-keyword">const</span>{" "}
              <span className="syntax-function">developer</span> = &#123;
              <br />
              &nbsp;&nbsp;<span className="syntax-string">&apos;name&apos;</span>
              :{" "}
              <span className="syntax-string">
                &apos;{personalInfo.name}&apos;
              </span>
              ,
              <br />
              &nbsp;&nbsp;<span className="syntax-string">&apos;role&apos;</span>
              :{" "}
              <span className="syntax-string">
                &apos;Software Engineer&apos;
              </span>
              ,
              <br />
              &nbsp;&nbsp;
              <span className="syntax-string">&apos;interests&apos;</span>: [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="syntax-string">
                &apos;Full-Stack Development&apos;
              </span>
              ,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="syntax-string">
                &apos;Mobile Development&apos;
              </span>
              ,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="syntax-string">&apos;AI/ML&apos;</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="syntax-string">
                &apos;Developer Tooling&apos;
              </span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;<span className="syntax-function">build</span>: ()
              =&gt; <span className="syntax-string">&apos;impact&apos;</span>
              <br />
              &#125;;
            </pre>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {quickFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-panel card-hover rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <fact.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                  <p className="mt-1 text-lg font-semibold">{fact.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
