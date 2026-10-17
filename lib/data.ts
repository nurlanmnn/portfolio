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
  bio: "Computer Science student at the University of Central Florida, AI Evaluator at Handshake AI, and Software Engineering Intern at Brown & Brown. I build native iOS apps, full-stack web platforms, and AI-powered developer tooling.",
  quickFacts: {
    education: "B.S. Computer Science @ UCF (Expected May 2027)",
    location: "Orlando, Florida",
    lookingFor: "Software engineering opportunities",
    learning: "AI/ML, native iOS, hackathon-grade full stack",
  },
}

export const projects: Project[] = [
  {
    id: "1",
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
      "Native iOS app with UCF email verification and real-time data",
      "Discover, create, join, and chat in pickup sports sessions",
      "Map-based discovery, recurring sessions, and waitlists",
      "APNs push notifications and Live Activities via Supabase",
    ],
    problem:
      "UCF students needed a convenient way to organize and join pickup sports games on campus.",
    contributions:
      "Developed a native iOS app using Swift and SwiftUI with a Supabase backend. Implemented UCF email verification, map-based discovery, recurring sessions, waitlists, APNs push notifications, Live Activities, and real-time chat for session participants.",
    challenges:
      "Integrating Supabase Auth, Realtime, and Edge Functions into a polished native iOS experience while handling push notifications and Live Activities reliably.",
  },
  {
    id: "2",
    slug: "lenny-roasts",
    title: "Lenny Roasts",
    description:
      "An AI hackathon practice platform that evaluates project pitches, provides category-specific feedback, and compares submissions against 106 simulated competitors.",
    shortDescription:
      "AI pitch practice with rubric feedback and simulated hackathon placement.",
    year: "Knight Hacks 2026",
    role: "Knight Hacks 2026",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Three.js",
      "Hugging Face",
      "Neon PostgreSQL",
    ],
    github: "https://github.com/XavierS31/LennyRoasts",
    highlights: [
      "Built at Knight Hacks 2026",
      "Evaluates pitches with category-specific feedback against 106 simulated competitors",
      "Qwen3 via Hugging Face with FastAPI background jobs and Neon PostgreSQL",
      "Interactive 3D campus with rubric breakdowns, placement ranges, and improvement suggestions",
    ],
    problem:
      "Hackathon teams need realistic pitch practice and feedback before judges see their projects.",
    contributions:
      "Built an AI practice platform that scores pitches, compares them against simulated submissions, and surfaces rubric breakdowns and placement ranges. Integrated Qwen3 through Hugging Face, FastAPI background jobs, and Neon PostgreSQL, with an interactive Three.js campus for exploring results.",
    challenges:
      "Running LLM evaluations and competitor comparisons in the background while keeping the 3D experience responsive and persisting rubric and placement data reliably.",
  },
  {
    id: "3",
    slug: "flashplanner",
    title: "FlashPlanner",
    description:
      "A personalized trip planner from ShellHacks 2026 that builds timed, multi-day itineraries from interests, budget, pace, and transportation preferences.",
    shortDescription:
      "Timed multi-day trip planner that orders stops around real constraints.",
    year: "ShellHacks 2026",
    role: "ShellHacks 2026",
    tech: [
      "Python",
      "FastAPI",
      "Gemini API",
      "Google Maps APIs",
      "OR-Tools",
    ],
    github: "https://github.com/s4nsec/shellhacks-flashplanner",
    highlights: [
      "Built at ShellHacks 2026",
      "Timed, multi-day itineraries from interests, budget, pace, and transportation",
      "Gemini, Google Places, weather forecasts, and real travel times",
      "OR-Tools orders stops around opening hours and user constraints",
    ],
    problem:
      "A useful trip plan has to fit interests, budget, pace, and transportation into real opening hours and travel times.",
    contributions:
      "Built a personalized trip planner that creates timed, multi-day itineraries. Combined Gemini, Google Places, weather forecasts, and real travel times with OR-Tools to choose and order stops around opening hours and user constraints.",
    challenges:
      "Ordering stops so opening hours, travel time, weather, and preferences all hold at once, instead of producing a list that only looks good on paper.",
  },
]

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Software Engineering Intern",
    company: "Brown & Brown, Inc.",
    location: "Daytona Beach, FL",
    period: "May 2026 – Aug 2026",
    description: [
      "Developed a JavaScript VS Code extension following software development life cycle (SDLC) practices to automate pull request risk assessment, multi-stage LLM code reviews, and feedback publishing to GitHub and Azure DevOps, with a projected 80% reduction in review time.",
      "Developed an LLM benchmarking framework to compare code review quality and performance, guiding model selection across a multi-stage automated PR-review pipeline.",
      "Built a Python CI/CD pipeline to automate documentation updates, syncing codebase changes to a centralized XWiki platform using REST APIs, Git worktrees, and Entra ID authentication.",
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
      "Evaluated AI-generated media and websites for accuracy and instruction following; tested web apps for visual defects, broken interactions, and missing requirements.",
    ],
    skills: ["AI Evaluation", "Quality Assurance", "Web Testing"],
  },
  {
    id: "3",
    title: "Undergraduate Learning Assistant",
    company: "University of Central Florida, College of Sciences",
    location: "Orlando, FL",
    period: "Aug 2024 – Present",
    description: [
      "Guided students in Calculus I, Trigonometry, Precalculus, and College Algebra through problem-solving in the Mathematics Assistance and Learning Lab and adapted explanations to different learning needs.",
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
      "Bash",
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
      "FastAPI",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "pandas",
      "Three.js",
      "SQLAlchemy",
    ],
  },
  {
    name: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Neon",
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
      "Jira",
      "VS Code Extension API",
      "REST APIs",
      "Pandoc",
      "XWiki",
      "Selenium",
      "Beautiful Soup",
      "Hugging Face",
      "Vite",
      "pytest",
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
