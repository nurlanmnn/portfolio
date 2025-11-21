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
  role: "Computer Science Student & Aspiring Software Engineer",
  location: "Orlando, Florida",
  email: "nurlanmmadli1@gmail.com",
  phone: "+1-407-276-1783",
  linkedin: "https://linkedin.com/in/nurlan-mammadli",
  github: "https://github.com/nurlanmnn",
  resume: "/Nurlan_Mammadli_Resume.pdf",
  bio: "Computer Science student at the University of Central Florida, aspiring software engineer with a focus on backend, full-stack development, and AI. I enjoy building practical projects, improving developer tooling, and learning by doing.",
  quickFacts: {
    education: "CS @ UCF",
    location: "Orlando, Florida",
    lookingFor: "Software engineering internships",
    learning: "Systems, Robot vision, AI/ML foundations"
  }
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "skillmatch-ai",
    title: "SkillMatch AI",
    description: "AI-powered web application that helps students match their skills and interests with potential career paths, using LLMs to analyze user input and provide personalized career recommendations.",
    shortDescription: "AI-powered career recommendation system using LLMs to match skills with career paths.",
    year: "2025",
    role: "Backend Developer",
    tech: ["Node.js", "Express", "OpenAI GPT API", "MongoDB", "React"],
    github: "https://github.com/EthanDelCampo/SkillMatchAI",
    highlights: [
      "Suggests roles based on skills and preferences",
      "Generates personalized learning suggestions",
      "Built in a hackathon environment (Knight Hacks Project Launch)"
    ],
    problem: "Students often struggle to identify career paths that align with their skills and interests, leading to uncertainty in academic and professional decisions.",
    contributions: "Developed the backend of the AI-powered career recommendation system using Node.js, Express, and OpenAI's GPT API. Created RESTful API endpoints to process survey data and return personalized career suggestions. Ensured efficient data handling, validation, and seamless integration with the frontend.",
    challenges: "Getting GPT api to follow specific formatting instructions (e.g., no asterisks or markdown) required lots of testing and tweaks. Also, ensuring fast response times for a smooth user experience during the hackathon timeframe was a challenge."
  },
  {
    id: "2",
    slug: "pickup-ucf",
    title: "PickUp UCF",
    description: "A mobile app for UCF students to find, create, and join pickup sports sessions with real-time chat functionality.",
    shortDescription: "Mobile app for UCF students to find and join pickup sports sessions.",
    year: "2024",
    role: "Full-Stack Developer",
    tech: ["React Native", "Expo", "TypeScript", "Supabase"],
    github: "https://github.com/nurlanmnn/pickup-ucf",
    highlights: [
      "UCF email verification",
      "Full CRUD for sports sessions with filtering and search",
      "Capacity management and skill levels",
      "Real-time chat for session participants"
    ],
    problem: "UCF students needed a convenient way to organize and join pickup sports games on campus.",
    contributions: "Built a complete mobile application using React Native (Expo) and TypeScript with Supabase backend. Implemented user authentication with UCF email verification, full CRUD operations for sports sessions, advanced filtering and search capabilities, capacity management, skill level tracking, and real-time chat functionality.",
    challenges: "The biggest constraint was time, which left little margin for debugging or scope creep. UI issues were constant: placeholder text too light, layout shifting, and inconsistent spacing across screens. Debugging profile creation and session joining required extra hours to ensure data was saved correctly. Overall, I learned to build a working mobile app with authentication, sessions, and chat. Real-time chat with live updates. "
  },
  {
    id: "3",
    slug: "circld",
    title: "Circld",
    description: "A mobile platform for friends and groups to manage shared expenses, chat, and organize activities with automatic balance calculation.",
    shortDescription: "Mobile platform for friends to manage shared expenses and chat.",
    year: "2025",
    role: "Full-Stack Developer",
    tech: ["React Native", "Expo", "Django REST Framework", "PostgreSQL"],
    github: "https://github.com/nurlanmnn/circld",
    highlights: [
      "User authentication and group management",
      "Real-time group chat with image sharing",
      "Expense tracking with automatic balance calculation",
      "Settlement suggestions for fair payment distribution"
    ],
    problem: "Friends and groups need an easy way to track shared expenses, split bills, and communicate about group activities.",
    contributions: "Built a complete mobile application with React Native (Expo) frontend and Django REST Framework backend with PostgreSQL. Implemented user authentication, real-time group chat with image sharing capabilities, comprehensive expense tracking system with automatic balance calculation, and intelligent settlement suggestions to help groups fairly distribute payments.",
    challenges: "Designing an efficient expense tracking algorithm that handles complex group scenarios, implementing real-time chat with image uploads, and ensuring data consistency across multiple users."
  },
  {
    id: "4",
    slug: "codeql-llm-research",
    title: "CodeQL + LLM Vulnerability Research",
    description: "Research prototype where a fine-tuned LLM generates CodeQL queries from vulnerability patterns found in commit histories, automating security analysis.",
    shortDescription: "Research on using fine-tuned LLMs to generate CodeQL queries for automated vulnerability detection.",
    year: "2025",
    role: "Research Assistant",
    tech: ["Python", "Hugging Face", "LLaMA", "CodeQL", "Git"],
    highlights: [
      "Processes commits to detect potential vulnerabilities",
      "Explored automating security analysis with AI",
      "Worked through finetuning and evaluation pipeline"
    ],
    problem: "Manual security analysis is time-consuming. Automating CodeQL query generation from commit patterns could significantly improve vulnerability detection efficiency.",
    contributions: "Conducted research on continuous Linux kernel fuzzing, optimizing configurations to maximize patch coverage and minimize downtime. Leveraged hands-on technical expertise and analytical skills to resolve complex system challenges in a collaborative development environment.",
    challenges: "Fine-tuning LLMs for domain-specific security patterns, ensuring generated CodeQL queries are accurate and useful, and evaluating the effectiveness of the automated approach compared to manual analysis."
  }
]

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Undergraduate Research Assistant",
    company: "University of Central Florida, College of Engineering and Computer Science",
    location: "Orlando, FL",
    period: "Jan 2025 - May 2025",
    description: [
      "Conducted research on continuous Linux kernel fuzzing, optimizing configurations to maximize patch coverage and minimize downtime.",
      "Leveraged hands-on technical expertise and analytical skills to resolve complex system challenges in a collaborative development environment."
    ],
    skills: ["Linux", "Fuzzing", "System Optimization", "Research"]
  },
  {
    id: "2",
    title: "Undergraduate Learning Assistant",
    company: "University of Central Florida, College of Sciences",
    location: "Orlando, FL",
    period: "Aug 2024 - Present",
    description: [
      "Facilitated student comprehension in Calculus I at the Mathematics Assistance and Learning Lab (MALL), demonstrating a passion for learning and problem-solving.",
      "Collaborated with peers to adapt instructional techniques, reflecting an eagerness to learn and a commitment to innovative, digital solutions in educational settings."
    ],
    skills: ["Teaching", "Communication", "Mathematics", "Problem-Solving"]
  }
]

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL"]
  },
  {
    name: "Web & Backend",
    skills: ["Django", "Django REST Framework", "Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "Supabase"]
  },
  {
    name: "Frontend",
    skills: ["React", "React Native", "Next.js", "Tailwind CSS", "HTML5", "CSS"]
  },
  {
    name: "Tools & Other",
    skills: ["Git/GitHub", "Docker", "Linux", "VS Code", "CodeQL", "Selenium", "Beautiful Soup"]
  }
]

export const highlightTags = [
  "Backend & APIs",
  "Full-Stack Development",
  "AI / LLMs",
  "Mobile Development"
]

