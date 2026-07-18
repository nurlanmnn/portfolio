import type { Metadata } from "next"
import { Bungee, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { personalInfo } from "@/lib/data"
import { DossierCursor } from "@/components/puzzle/dossier-cursor"

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: `${personalInfo.name} — The Mammadli Box`,
  description:
    "A puzzle portfolio. Assemble the dossier. Try not to click the decoy buttons.",
  keywords: [
    "Nurlan Mammadli",
    "Software Engineer",
    "Computer Science",
    "UCF",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nurlanmammadli.dev",
    title: `${personalInfo.name} — The Mammadli Box`,
    description: personalInfo.bio,
    siteName: personalInfo.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — The Mammadli Box`,
    description: personalInfo.bio,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${bungee.variable} ${ibmPlexMono.variable} font-mono antialiased`}
      >
        <DossierCursor />
        {children}
      </body>
    </html>
  )
}
