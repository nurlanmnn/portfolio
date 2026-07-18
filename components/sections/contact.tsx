"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { SectionHeader } from "@/components/section-header"

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "nurlan-mammadli",
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "nurlanmnn",
    href: personalInfo.github,
  },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          label="06 — Contact"
          title="Let's build something."
          description="Open to software engineering opportunities, research collaborations, and interesting projects."
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group glass-panel card-hover relative overflow-hidden rounded-3xl p-6 md:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-full flex-col items-center text-center">
              <div className="mb-4 rounded-2xl bg-primary/10 p-4 text-primary transition-transform group-hover:scale-105">
                <Mail className="h-7 w-7" />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                Email
              </p>
              <p className="mt-3 break-all font-mono text-sm text-muted-foreground">
                {personalInfo.email}
              </p>
              <Button size="sm" className="mt-6 w-full rounded-full">
                Send email
              </Button>
            </div>
          </motion.a>

          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * (index + 1) }}
              className="group glass-panel card-hover rounded-3xl p-6"
            >
              <div className="flex h-full flex-col items-center text-center">
                <div className="mb-4 rounded-2xl bg-muted p-4 text-foreground transition-all group-hover:bg-primary/10 group-hover:text-primary">
                  <link.icon className="h-7 w-7" />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                  {link.label}
                </p>
                <p className="mt-3 font-mono text-sm text-muted-foreground">
                  {link.value}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-primary">
                  Visit profile
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
