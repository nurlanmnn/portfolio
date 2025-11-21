"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Briefcase, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { personalInfo } from "@/lib/data"

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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 font-display tracking-tight">About Me</h2>
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
            I&apos;m a Computer Science student at the University of Central
            Florida, passionate about building software that solves real
            problems. When I&apos;m not in class, you&apos;ll find me working
            on projects, participating in hackathons like KnightHacks, or
            diving deep into new technologies.
          </motion.p>

          {/* Code Snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="code-snippet"
          >
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-primary/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-muted-foreground text-xs ml-2">about.js</span>
            </div>
            <pre className="text-xs sm:text-sm">
              <span className="syntax-keyword">const</span> <span className="syntax-function">developer</span> = &#123;
              <br />
              &nbsp;&nbsp;<span className="syntax-string">&apos;name&apos;</span>: <span className="syntax-string">&apos;Nurlan Mammadli&apos;</span>,
              <br />
              &nbsp;&nbsp;<span className="syntax-string">&apos;role&apos;</span>: <span className="syntax-string">&apos;Software Engineer&apos;</span>,
              <br />
              &nbsp;&nbsp;<span className="syntax-string">&apos;interests&apos;</span>: [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">&apos;Backend Development&apos;</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">&apos;AI/ML&apos;</span>,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="syntax-string">&apos;Full-Stack&apos;</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;<span className="syntax-function">build</span>: () =&gt; <span className="syntax-string">&apos;awesome software&apos;</span>
              <br />
              &#125;;
            </pre>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I&apos;m particularly interested in{" "}
            <span className="text-foreground font-medium">
              software engineering
            </span>
            ,{" "}
            <span className="text-foreground font-medium">AI/ML</span>, and
            creating practical tools that help people. Whether it&apos;s
            building full-stack applications, exploring AI capabilities, or
            contributing to research, I love learning by doing and pushing the
            boundaries of what I can create.
          </motion.p>
        </div>

        {/* Quick Facts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {quickFacts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <fact.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {fact.label}
                      </p>
                      <p className="text-lg font-semibold">{fact.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

