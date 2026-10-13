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
      "A household app for shared expenses, settlements, shopping lists, events, chores, and invite-code access.",
    shortDescription:
      "Household app for shared expenses, settlements, shopping lists, and chores.",
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
      "Shared expenses, settlements, shopping lists, events, and chores",
      "REST APIs with JWT and email OTP authentication",
      "Even or custom expense splitting with balance calculations",
      "Settlement history and spending analytics",
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
  {
    id: "4",
    slug: "lenny-roasts",
    title: "Lenny Roasts",
    description:
      "An AI hackathon practice platform from Knight Hacks 2026 that evaluates project pitches, delivers category-specific feedback, and compares submissions against simulated competitors.",
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
      "Built an AI practice platform that scores pitches, compares them against a pool of simulated submissions, and surfaces rubric breakdowns and placement ranges. Integrated Qwen3 through Hugging Face, FastAPI background jobs, and Neon PostgreSQL, with an interactive Three.js campus for exploring results.",
    challenges:
      "Running LLM evaluations and competitor comparisons in the background while keeping the 3D experience responsive and persisting rubric and placement data reliably.",
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
      "Built a JavaScript VS Code extension to triage PR risk, run specialist AI reviews, and publish validated findings to GitHub and Azure DevOps, cutting estimated review time by up to 80%.",
      "Created PR-review benchmarks and evaluated multiple AI models against them to select the strongest models for risk assessment and specialist review stages.",
      "Automated Markdown-to-XWiki publishing with Python CI/CD, Git worktrees, REST APIs, and Entra ID, preserving formatting and updating only changed pages.",
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
    title: "Undergraduate Research Assistant",
    company:
      "University of Central Florida, College of Engineering and Computer Science (APPLeSEEd Lab)",
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
      "Jira",
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
