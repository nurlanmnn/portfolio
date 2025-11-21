# Nurlan Mammadli - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark/light mode toggle
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 (App Router) and TypeScript
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized with proper metadata
- ♿ Accessible with semantic HTML and ARIA labels
- 🚀 Ready for deployment on Vercel

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Theme:** next-themes

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                    # Next.js app router pages
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── projects/           # Dynamic project pages
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── research.tsx
│   │   └── contact.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── navbar.tsx          # Navigation bar
│   └── theme-provider.tsx  # Theme context provider
├── lib/
│   ├── data.ts             # Data (projects, experience, skills)
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
│   └── Nurlan_Mammadli_Resume.pdf
└── styles/                 # Additional styles (if needed)
```

## Customization

### Updating Personal Information

Edit `lib/data.ts` to update:
- Personal info (name, email, bio, etc.)
- Projects
- Experience
- Skills
- Social links

### Adding a Profile Image

1. Add your profile image to `public/images/profile.jpg` (or any name)
2. Update the Hero component to use the image instead of the placeholder

### Changing Colors

Edit `app/globals.css` to customize the color scheme. The site uses CSS variables for easy theming.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## License

This project is open source and available under the MIT License.

