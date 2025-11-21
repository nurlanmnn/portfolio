"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "nurlan-mammadli",
    href: personalInfo.linkedin,
    color: "text-blue-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "nurlanmnn",
    href: personalInfo.github,
    color: "text-foreground",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-display tracking-tight">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Let&apos;s connect! I&apos;m open to software engineering
            internships, research opportunities, and interesting projects.
          </p>
        </motion.div>

        {/* Contact Cards - Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email Section - Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group block h-full"
            >
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-6 text-center h-full hover:border-primary/50 hover:bg-primary/10 transition-all card-hover glow-effect relative overflow-hidden">
                <div className="absolute inset-0 code-pattern opacity-5 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all shadow-lg">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-primary/60 font-mono text-xs">mailto:</span>
                    <h3 className="text-lg font-semibold font-display">Email</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 break-all font-mono text-xs">
                    {personalInfo.email}
                  </p>
                </div>
                <Button
                  size="sm"
                  className="w-full group-hover:bg-primary/90 group-hover:shadow-lg transition-all"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
              </div>
            </a>
          </motion.div>

          {/* Social Links - Larger */}
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="md:col-span-1"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col text-center card-hover shadow-sm hover:shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 code-pattern opacity-5 pointer-events-none" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted group-hover:bg-primary/10 mb-4 transition-all mx-auto group-hover:scale-110 shadow-md">
                      <link.icon className={`h-7 w-7 ${link.color} group-hover:text-primary transition-colors`} />
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-primary/60 font-mono text-xs">@</span>
                      <h3 className="text-lg font-semibold font-display">{link.label}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-1 font-mono text-xs">
                      {link.value}
                    </p>
                  </div>
                  <div className="flex items-center justify-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    <span>Visit Profile</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
