"use client"

import { motion } from "framer-motion"
import { Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo, highlightTags } from "@/lib/data"
import Link from "next/link"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* CS-Themed Background Patterns */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      {/* Binary/Code Pattern Overlay */}
      <div className="absolute inset-0 code-pattern opacity-10" />
      {/* Animated Running Code Background - More Visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Multiple code streams for dynamic effect */}
        <motion.div 
          className="absolute top-20 left-10 text-primary/30 dark:text-primary/25 font-mono text-xs sm:text-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            x: [0, 40, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="mb-2">&lt;SoftwareEngineer&gt;</div>
          <div className="ml-4 mb-2">const developer = &apos;Nurlan&apos;;</div>
          <div className="ml-4 mb-2">function build() &#123;</div>
          <div className="ml-8 mb-2">return &apos;awesome&apos;;</div>
          <div className="ml-4">&#125;</div>
        </motion.div>
        
        <motion.div 
          className="absolute top-40 right-10 text-primary/30 dark:text-primary/25 font-mono text-xs sm:text-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            x: [0, -40, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="mb-2">class Portfolio &#123;</div>
          <div className="ml-4 mb-2">constructor() &#123;</div>
          <div className="ml-8 mb-2">this.skills = [];</div>
          <div className="ml-4 mb-2">&#125;</div>
          <div>&#125;</div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-40 left-20 text-primary/30 dark:text-primary/25 font-mono text-xs sm:text-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [0, -40, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="mb-2">$ npm install creativity</div>
          <div className="mb-2">$ git commit -m &apos;build portfolio&apos;</div>
          <div className="mb-2">$ ./deploy.sh</div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-20 text-primary/30 dark:text-primary/25 font-mono text-xs sm:text-sm"
          initial={{ opacity: 0, y: -50 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="mb-2">async function deploy() &#123;</div>
          <div className="ml-4 mb-2">await build();</div>
          <div className="ml-4 mb-2">return success;</div>
          <div>&#125;</div>
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 left-1/4 text-primary/30 dark:text-primary/25 font-mono text-xs sm:text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="mb-2">import React from &apos;react&apos;;</div>
          <div className="mb-2">import &#123; Code &#125; from &apos;passion&apos;;</div>
        </motion.div>
        
        {/* Additional floating code snippets */}
        <motion.div 
          className="absolute top-1/3 right-1/4 text-primary/25 dark:text-primary/20 font-mono text-xs"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <div className="mb-1">const stack = [&apos;React&apos;, &apos;Node&apos;];</div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3 text-primary/25 dark:text-primary/20 font-mono text-xs"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.25, 0.5, 0.25],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        >
          <div className="mb-1">console.log(&apos;Building...&apos;);</div>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-2">
                <span className="text-primary/60 font-mono text-sm sm:text-base">{'// Software Engineer'}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 font-display tracking-tight">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Nurlan</span> 👋
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Highlight Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 pt-4"
            >
              {highlightTags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all shadow-sm hover:shadow-md"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="group"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <a href={personalInfo.resume} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center items-center mt-8 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center overflow-hidden shadow-2xl glow-effect-primary animate-float">
              <img
                src="/images/profile.jpg"
                alt="Nurlan Mammadli"
                className="w-full h-full object-cover rounded-full"
                loading="eager"
              />
              {/* Decorative circles with glow */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              {/* Ring glow effect */}
              <div className="absolute inset-0 rounded-full ring-2 ring-primary/20 ring-offset-4 ring-offset-background" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

