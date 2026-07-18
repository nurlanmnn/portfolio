"use client"

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -left-[20%] top-[-10%] h-[55vh] w-[55vh] rounded-full bg-primary/20 blur-[120px] animate-aurora-1" />
      <div className="absolute -right-[15%] top-[20%] h-[45vh] w-[45vh] rounded-full bg-accent/15 blur-[100px] animate-aurora-2" />
      <div className="absolute bottom-[-10%] left-[30%] h-[40vh] w-[40vh] rounded-full bg-primary/10 blur-[90px] animate-aurora-3" />
      <div className="absolute inset-0 bg-grid opacity-[0.035] dark:opacity-[0.06]" />
      <div className="absolute inset-0 grain" />
    </div>
  )
}
