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
  location: "Orlando, Florida",
  email: "nurlanmmadli1@gmail.com",
  phone: "+1-407-276-1783",
  linkedin: "https://linkedin.com/in/nurlan-mammadli",
  github: "https://github.com/nurlanmnn",
  resume: "/Nurlan_Mammadli_Resume.pdf",
  bio: "Computer Science student at the University of Central Florida and Technology Solutions Intern at Brown & Brown. I build full-stack and mobile applications, developer tooling, and AI-powered automation — from VS Code extensions to production CI/CD pipelines.",
  quickFacts: {
    education: "CS @ UCF",
    location: "Orlando, Florida",
    lookingFor: "Software engineering opportunities",
    learning: "AI/ML, developer tooling, automation",
  },
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "roomate",
    title: "Roomate",
    description:
      "A roommate coordination app to help you and your roommates manage shared living expenses, shopping lists, calendar events, and household goals.",
    shortDescription:
      "Roommate coordination app for shared expenses, shopping lists, and household goals.",
    year: "2025",
    role: "Full-Stack Developer",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/nurlanmnn/roomate",
    highlights: [
      "Shared expense tracking for roommates",
      "Collaborative shopping lists and calendar events",
      "Household goals and coordination features",
      "JWT-based authentication",
    ],
    problem:
      "Roommates need a single place to coordinate shared living expenses, shopping, schedules, and household goals.",
    contributions:
      "Built a full-stack TypeScript application with React Native (Expo) and a Node.js backend using Express and MongoDB. Implemented JWT-based authentication and features for managing shared expenses, shopping lists, calendar events, and household goals.",
    challenges:
      "Designing data models that handle shared ownership across roommates while keeping permissions and expense splits clear and consistent.",
  },
  {
    id: "2",
    slug: "pickup-ucf",
    title: "PickUp UCF",
    description:
      "A mobile app for UCF students to find, create, and join pickup sports sessions with real-time chat functionality.",
    shortDescription:
      "Mobile app for UCF students to find and join pickup sports sessions.",
    year: "2025",
    role: "Full-Stack Developer",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    github: "https://github.com/nurlanmnn/pickup-ucf",
    highlights: [
      "Built at Knight Hacks VIII (Oct 2025)",
      "UCF email verification",
      "Full CRUD for sports sessions with filtering and search",
      "Capacity management, skill levels, and real-time chat",
    ],
    problem:
      "UCF students needed a convenient way to organize and join pickup sports games on campus.",
    contributions:
      "Built a mobile application using React Native (Expo) and TypeScript with a Supabase backend. Implemented UCF email verification, full CRUD operations for sports sessions, filtering and search, capacity management, skill level tracking, and real-time chat for session participants.",
    challenges:
      "Delivering a working mobile app with authentication, sessions, and real-time chat within a tight hackathon timeframe while keeping the UI polished and consistent.",
  },
  {
    id: "3",
    slug: "skillmatch-ai",
    title: "SkillMatch AI",
    description:
      "AI-powered web application that helps students match their skills and interests with potential career paths, using LLMs to analyze user input and provide personalized career recommendations.",
    shortDescription:
      "AI-powered career recommendation system using LLMs to match skills with career paths.",
    year: "2025",
    role: "Backend Developer",
    tech: ["Node.js", "Express", "Gemini API", "MongoDB", "React"],
    github: "https://github.com/EthanDelCampo/SkillMatchAI",
    highlights: [
      "Built at Knight Hacks Project Launch (Spring 2025)",
      "Suggests roles based on skills and preferences",
      "Generates personalized learning suggestions",
      "RESTful API with efficient data handling and validation",
    ],
    problem:
      "Students often struggle to identify career paths that align with their skills and interests, leading to uncertainty in academic and professional decisions.",
    contributions:
      "Developed the backend of an AI-powered career recommendation system using Node.js, Express, and the Gemini API. Created RESTful API endpoints to process survey data and return personalized career suggestions, with efficient data handling, validation, and seamless frontend integration.",
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
    period: "May 2026 - Present",
    description: [
      "Built an AI-powered VS Code extension in JavaScript that automates pull request reviews using security, performance, and maintainability agents.",
      "Developed a Python CI/CD pipeline that converts Markdown documentation to XWiki and publishes only changed pages.",
      "Integrated Azure DevOps, Git worktrees, REST APIs, Entra ID authentication, and AI-based documentation rewriting.",
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
    title: "Undergraduate Learning Assistant",
    company: "University of Central Florida, College of Sciences",
    location: "Orlando, FL",
    period: "Aug 2024 - Present",
    description: [
      "Facilitated student comprehension in Calculus I at the Mathematics Assistance and Learning Lab (MALL), demonstrating a passion for learning and problem-solving.",
      "Collaborated with peers to adapt instructional techniques, reflecting an eagerness to learn and a commitment to innovative, digital solutions in educational settings.",
    ],
    skills: ["Teaching", "Communication", "Mathematics", "Problem-Solving"],
  },
  {
    id: "3",
    title: "Undergraduate Research Assistant",
    company:
      "University of Central Florida, College of Engineering and Computer Science",
    location: "Orlando, FL",
    period: "Jan 2025 - May 2025",
    description: [
      "Conducted research on continuous Linux kernel fuzzing, optimizing configurations to maximize patch coverage and minimize downtime.",
      "Leveraged hands-on technical expertise and analytical skills to resolve complex system challenges in a collaborative development environment.",
    ],
    skills: ["Linux", "Fuzzing", "System Optimization", "Research"],
  },
]

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
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
      "Node.js",
      "Express.js",
      "Django",
      "Django REST Framework",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "Azure",
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "CI/CD",
      "Entra ID",
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
  "Full-Stack Development",
  "Mobile Development",
  "AI / ML",
  "Developer Tooling",
  "Automation",
]
