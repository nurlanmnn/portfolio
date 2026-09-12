export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  year: string
  role?: string
  tech: string[]
  github?: string
  demo?: string
  highlights: string[]
  problem?: string
  contributions?: string
  challenges?: string
  image?: string
}

export interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills?: string[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface PersonalInfo {
  name: string
  role: string
  location: string
  email: string
  phone: string
  phoneDisplay: string
  linkedin: string
  github: string
  resume: string
  bio: string
  quickFacts: {
    education: string
    location: string
    lookingFor: string
    learning: string
  }
}

export const personalInfo: PersonalInfo = {
  name: "Nurlan Mammadli",
  role: "Computer Science Student & Software Engineer",
  location: "Orlando, Florida, United States",
  email: "nurlanmmadli1@gmail.com",
  phone: "+1-407-276-1783",
  phoneDisplay: "+1 (***) ***-****",
  linkedin: "https://linkedin.com/in/nurlan-mammadli",
  github: "https://github.com/nurlanmnn",
  resume: "/Nurlan_Mammadli_Resume.pdf",
  bio: "Computer Science student at the University of Central Florida, AI Evaluator at Handshake AI, and Technology Solutions Intern at Brown & Brown. I build full-stack and mobile applications — from native iOS apps and React Native to developer tooling and AI-powered automation.",
  quickFacts: {
    education: "B.S. Computer Science @ UCF (Expected May 2027)",
    location: "Orlando, Florida",
    lookingFor: "Software engineering opportunities",
    learning: "AI/ML, native iOS, developer tooling",
  },
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "roomate",
    title: "Roomate",
    description:
      "A cross-platform household coordination app for shared expenses, settlements, shopping lists, calendar events, chores, and invite-code household access.",
    shortDescription:
      "Cross-platform household app for shared expenses, settlements, and chores.",
    year: "Dec 2025–Present",
    role: "Personal Project",
    tech: [
      "TypeScript",
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/nurlanmnn/roomate",
    highlights: [
      "Shared expense tracking with even or custom splitting",
      "Balance calculations, settlement history, and spending analytics",
      "Collaborative shopping lists, calendar events, and chores",
      "JWT and email OTP authentication with invite-code household access",
    ],
    problem:
      "Roommates need a single place to coordinate shared living expenses, settlements, shopping, schedules, and household chores.",
    contributions:
      "Built a full-stack TypeScript application with React Native (Expo) and a Node.js backend using Express and MongoDB. Implemented REST APIs with JWT and email OTP authentication, expense splitting, balance calculations, settlement history, and spending analytics.",
    challenges:
      "Designing data models that handle shared ownership across roommates while keeping permissions, expense splits, and settlement flows clear and consistent.",
  },
  {
    id: "2",
    slug: "pickup-ucf",
    title: "PickUp UCF",
    description:
      "A native iOS app for UCF students to discover, create, join, and chat in pickup sports sessions with UCF email verification and real-time data.",
    shortDescription:
      "Native iOS app for UCF students to find and join pickup sports sessions.",
    year: "Oct 2025–Present",
    role: "Personal Project",
    tech: [
      "Swift",
      "SwiftUI",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
    ],
    github: "https://github.com/nurlanmnn/pickup-ucf",
    highlights: [
      "Native iOS app with UCF email verification",
      "Map-based session discovery with recurring sessions and waitlists",
      "APNs push notifications and Live Activities",
      "Real-time chat backed by Supabase Auth, Realtime, and PostgreSQL",
    ],
    problem:
      "UCF students needed a convenient way to organize and join pickup sports games on campus.",
    contributions:
      "Developed a native iOS app using Swift and SwiftUI with a Supabase backend. Implemented UCF email verification, map-based discovery, recurring sessions, waitlists, APNs push notifications, Live Activities, and real-time chat for session participants.",
    challenges:
      "Integrating Supabase Auth, Realtime, and Edge Functions into a polished native iOS experience while handling push notifications and Live Activities reliably.",
  },
  {
    id: "3",
    slug: "skillmatch-ai",
    title: "SkillMatch AI",
    description:
      "AI-powered web application that helps students match their skills and interests with potential career paths, using LLMs to analyze user input and provide personalized career recommendations.",
    shortDescription:
      "AI-powered career recommendation system using LLMs to match skills with career paths.",
    year: "Spring 2025",
    role: "Knight Hacks Project Launch (Spring 2025)",
    tech: ["JavaScript", "React", "Node.js", "Express", "Gemini API"],
    github: "https://github.com/EthanDelCampo/SkillMatchAI",
    highlights: [
      "Built at Knight Hacks Project Launch (Spring 2025)",
      "30-question career assessment with personalized recommendations",
      "REST endpoint transforms survey responses into three career suggestions via Gemini API",
      "Efficient data handling, validation, and frontend integration",
    ],
    problem:
      "Students often struggle to identify career paths that align with their skills and interests, leading to uncertainty in academic and professional decisions.",
    contributions:
      "Developed the backend for a 30-question career assessment using Node.js, Express, and the Gemini API. Created a REST endpoint that transforms survey responses into three personalized recommendations, with efficient data handling, validation, and seamless frontend integration.",
    challenges:
      "Getting the LLM to follow specific formatting instructions required lots of testing and tweaks. Ensuring fast response times for a smooth user experience during the hackathon timeframe was also a challenge.",
  },
]

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Technology Solutions Intern",
    company: "Brown & Brown, Inc.",
    location: "Daytona Beach, FL",
    period: "May 2026 – Aug 2026",
    description: [
      "Built an AI-powered VS Code extension in JavaScript that triaged pull request risk, routed changes to security, performance, and maintainability reviewers, and synced validated findings to GitHub and Azure DevOps, reducing estimated review time by up to 80%.",
      "Created PR-review benchmarks and evaluated multiple AI models against them to select the strongest models for risk assessment and specialist review stages.",
      "Automated Markdown-to-XWiki documentation publishing with Python CI/CD, Git worktrees, REST APIs, and Entra ID authentication, replacing manual page-by-page updates while preserving formatting and publishing only changed pages.",
    ],
    skills: [
      "JavaScript",
      "Python",
      "Azure DevOps",
      "VS Code Extension API",
      "CI/CD",
      "Entra ID",
    ],
  },
  {
    id: "2",
    title: "AI Evaluator",
    company: "Handshake AI",
    location: "Remote",
    period: "Jan 2026 – Present",
    description: [
      "Evaluated AI-generated images, videos, and websites for accuracy and instruction following; tested generated web applications for visual defects, broken interactions, and missing requirements.",
    ],
    skills: ["AI Evaluation", "Quality Assurance", "Web Testing"],
  },
  {
    id: "3",
    title: "Undergraduate Research Assistant",
    company:
      "University of Central Florida, College of Engineering and Computer Science",
    location: "Orlando, FL",
    period: "Jan 2025 – May 2025",
    description: [
      "Researched continuous Linux kernel fuzzing and optimized configurations to increase patch coverage while minimizing downtime.",
    ],
    skills: ["Linux", "Fuzzing", "System Optimization", "Research"],
  },
  {
    id: "4",
    title: "Undergraduate Learning Assistant",
    company: "University of Central Florida, College of Sciences",
    location: "Orlando, FL",
    period: "Aug 2024 – Present",
    description: [
      "Guided Calculus I students through problem-solving in the Mathematics Assistance and Learning Lab and adapted explanations to different learning needs.",
    ],
    skills: ["Teaching", "Communication", "Mathematics", "Problem-Solving"],
  },
]

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Swift",
      "Java",
      "C",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      "React Native",
      "Expo",
      "SwiftUI",
      "React",
      "Node.js",
      "Express.js",
      "Django",
      "Django REST Framework",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
    ],
  },
  {
    name: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Azure",
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      "Git",
      "Git worktrees",
      "VS Code Extension API",
      "REST APIs",
      "Pandoc",
      "XWiki",
      "Selenium",
      "Beautiful Soup",
    ],
  },
]

export const highlightTags = [
  "Software Engineering",
  "Full-Stack Development",
  "Mobile Development",
  "Native iOS",
  "AI / ML",
  "Developer Tooling",
  "Automation",
]
