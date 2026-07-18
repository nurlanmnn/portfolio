"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackToDossier() {
  return (
    <Link
      href="/"
      scroll={false}
      className="inline-flex items-center gap-2 border-2 border-ink bg-highlighter px-4 py-2 font-mono text-xs font-bold uppercase shadow-[3px_3px_0_#1c1917] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#1c1917]"
    >
      <ArrowLeft className="h-4 w-4" />
      Escape to dossier
    </Link>
  )
}
