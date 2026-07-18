"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useDragControls } from "framer-motion"
import { X } from "lucide-react"
import { DossierPanel, type PanelId } from "./dossier-panel"
import { personalInfo } from "@/lib/data"
import {
  loadPuzzleProgress,
  savePuzzleProgress,
  clearPuzzleProgress,
} from "@/lib/puzzle-progress"
import {
  clearanceLabel,
  hrLabel,
  clearGagState,
  SECRET_TERMINAL,
  KONAMI_TOAST,
  DECOY_SPAM_TOAST,
  FOOTER_TOAST,
  HIRE_COMPLETE_TOAST,
} from "@/lib/dossier-gags"
import { useDossierGags } from "@/hooks/use-dossier-gags"

export interface PuzzlePieceDef {
  id: PanelId
  label: string
  hint: string
  rotation: number
  scatter: { x: number; y: number }
  slot: { row: number; col: number }
  color: string
}

const PIECES: PuzzlePieceDef[] = [
  {
    id: "about",
    label: "WHO???",
    hint: "identity unknown",
    rotation: -7,
    scatter: { x: 0, y: 18 },
    slot: { row: 0, col: 0 },
    color: "#fde047",
  },
  {
    id: "skills",
    label: "TOOLS??",
    hint: "suspicious stack",
    rotation: 5,
    scatter: { x: 72, y: 4 },
    slot: { row: 0, col: 1 },
    color: "#86efac",
  },
  {
    id: "experience",
    label: "JOBS",
    hint: "employment trauma",
    rotation: -4,
    scatter: { x: 2, y: 72 },
    slot: { row: 0, col: 2 },
    color: "#fda4af",
  },
  {
    id: "projects",
    label: "SHIPPED",
    hint: "proof of life",
    rotation: 8,
    scatter: { x: 74, y: 78 },
    slot: { row: 1, col: 0 },
    color: "#93c5fd",
  },
  {
    id: "contact",
    label: "HIRE ME",
    hint: "do not ignore",
    rotation: -6,
    scatter: { x: 68, y: 48 },
    slot: { row: 1, col: 1 },
    color: "#c41e3a",
  },
  {
    id: "resume",
    label: "PDF",
    hint: "paper trail",
    rotation: 3,
    scatter: { x: 4, y: 42 },
    slot: { row: 1, col: 2 },
    color: "#d4d4d8",
  },
]

const DECOYS = [
  { id: "d1", label: "FREE INTERNSHIP", x: 42, y: 2, msg: "Nice try. This button only dispenses disappointment." },
  { id: "d2", label: "DELETE SYSTEM32", x: 58, y: 92, msg: "HR has been notified. Just kidding. Or am I?" },
  { id: "d3", label: "ACCEPT ALL COOKIES", x: 8, y: 92, msg: "You now own 47 tracking pixels. You're welcome." },
  { id: "d4", label: "I AM A ROBOT", x: 90, y: 92, msg: "CAPTCHA failed. You seem human. Suspicious." },
]

const SNARK = [
  "That piece doesn't go there. Like my first internship application.",
  "Nope. Try the slot that actually matches. Revolutionary concept.",
  "Wrong hole. We're talking about puzzle pieces. Calm down.",
  "HR says: 'Please assemble the dossier before asking for salary.'",
  "So close. Emotionally, I mean. Spatially? Not even.",
]

const COMPLETE_MSG =
  "DOSSIER COMPLETE. You may now pretend you found me organically."

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

function useSnackbar() {
  const [msg, setMsg] = useState<string | null>(null)
  const timer = useRef<number>()

  const dismiss = useCallback(() => {
    setMsg(null)
    window.clearTimeout(timer.current)
  }, [])

  const show = useCallback((text: string) => {
    setMsg(text)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setMsg(null), 3200)
  }, [])

  return { msg, show, dismiss }
}

function IntroOverlay({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md"
    >
      <motion.div
        initial={{ y: 30, rotate: -2 }}
        animate={{ y: 0, rotate: 0 }}
        className="max-w-md border-4 border-ink bg-manilla p-6 shadow-[12px_12px_0_#c41e3a] sm:p-8"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-stamp">
          ⚠ Confidential — do not share on LinkedIn
        </p>
        <h1 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-ink sm:text-4xl">
          The Mammadli Box
        </h1>
        <p className="mt-4 font-mono text-sm leading-relaxed text-ink/75">
          You&apos;ve stumbled into a classified candidate dossier. Navigation is
          broken on purpose. Drag the scattered evidence onto the board. Click
          decoy buttons at your own risk.
        </p>
        <ul className="mt-4 space-y-1 font-mono text-xs text-ink/55">
          <li>→ Drag puzzle tabs into the grid (or tap tab, then tap slot)</li>
          <li>→ Click placed tabs to read files</li>
          <li>→ Type <span className="bg-highlighter px-1">help</span> in the terminal</li>
        </ul>
        <button
          onClick={onEnter}
          className="mt-6 w-full border-2 border-ink bg-stamp py-3 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-[4px_4px_0_#1c1917] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#1c1917]"
        >
          I swear I&apos;m a recruiter
        </button>
        <p className="mt-3 text-center font-mono text-[10px] italic text-ink/40">
          (Students, friends, and confused relatives also welcome)
        </p>
      </motion.div>
    </motion.div>
  )
}

function PuzzlePiece({
  piece,
  placed,
  selected,
  onSelect,
  onPlace,
  onOpen,
  showSnark,
}: {
  piece: PuzzlePieceDef
  placed: boolean
  selected?: boolean
  onSelect?: (id: PanelId) => void
  onPlace: (id: PanelId) => void
  onOpen: (id: PanelId) => void
  showSnark: (msg: string) => void
}) {
  const controls = useDragControls()
  const ref = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)

  if (placed) {
    return (
      <div
        className="puzzle-piece-placed group pointer-events-none flex h-full w-full flex-col items-center justify-center border-2 border-ink p-2 transition-transform group-hover:scale-[1.03]"
        style={{ backgroundColor: piece.color }}
      >
        <span className="font-display text-sm uppercase leading-none sm:text-base">
          {piece.label}
        </span>
        <span className="mt-1 font-mono text-[9px] uppercase opacity-60 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-70">
          open file →
        </span>
      </div>
    )
  }

  const layerZ = dragging ? 100 : selected ? 60 : 50

  return (
    <motion.div
      ref={ref}
      drag
      dragControls={controls}
      dragMomentum={false}
      dragElastic={0.08}
      onDragStart={() => setDragging(true)}
      whileHover={{ scale: 1.04 }}
      whileDrag={{ scale: 1.08, rotate: 0, zIndex: 100 }}
      onPointerUp={() => onSelect?.(piece.id)}
      onDragEnd={(_, info) => {
        setDragging(false)
        const slot = document.getElementById(`slot-${piece.id}`)
        if (!slot) return

        const slotRect = slot.getBoundingClientRect()
        const centerX = info.point.x
        const centerY = info.point.y

        const inSlot =
          centerX > slotRect.left &&
          centerX < slotRect.right &&
          centerY > slotRect.top &&
          centerY < slotRect.bottom

        if (inSlot) {
          onPlace(piece.id)
        } else {
          showSnark(SNARK[Math.floor(Math.random() * SNARK.length)])
        }
      }}
      className={`puzzle-piece-scatter pointer-events-auto absolute cursor-grab touch-none active:cursor-grabbing ${selected ? "ring-2 ring-stamp ring-offset-2" : ""}`}
      style={{
        left: `${piece.scatter.x}%`,
        top: `${piece.scatter.y}%`,
        rotate: dragging || selected ? 0 : piece.rotation,
        zIndex: layerZ,
      }}
    >
      <div
        className={`flex w-[88px] flex-col items-center border-2 border-ink px-2 py-3 shadow-[5px_5px_0_#1c1917] sm:w-[100px] ${selected ? "border-stamp" : ""}`}
        style={{ backgroundColor: piece.color }}
      >
        <span className="font-display text-xs uppercase sm:text-sm">
          {piece.label}
        </span>
        <span className="mt-1 text-center font-mono text-[8px] uppercase leading-tight text-ink/55">
          {piece.hint}
        </span>
      </div>
      <p className="mt-1 text-center font-mono text-[8px] uppercase tracking-widest text-ink/35">
        drag me
      </p>
    </motion.div>
  )
}

function FakeTerminal({
  onCommand,
}: {
  onCommand: (cmd: string) => string | null
}) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "> welcome to dossier-os v0.0.1 (definitely production ready)",
    "> type 'help' if you're lost. 'secrets' if you're curious.",
  ])
  const historyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = historyRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [history, open])

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    const response = onCommand(cmd)
    setHistory((h) => [
      ...h,
      `> ${raw}`,
      response ?? "> command not found. try 'help' or 'hire'",
    ])
    setInput("")
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 font-mono text-xs">
      <button
        onClick={() => setOpen(!open)}
        className="border-t-2 border-r-2 border-ink bg-ink px-4 py-2 text-highlighter hover:bg-stamp"
      >
        {open ? "▼ terminal" : "▲ terminal (click me)"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 160 }}
            exit={{ height: 0 }}
            className="overflow-hidden border-t-2 border-ink bg-[#0a0a0a] text-green-400"
          >
            <div ref={historyRef} className="h-[128px] overflow-y-auto p-3 scroll-smooth">
              {history.map((line, i) => (
                <div key={i} className="leading-relaxed opacity-90">
                  {line}
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                run(input)
              }}
              className="flex border-t border-green-900/50"
            >
              <span className="px-2 py-2 text-green-600">$</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent py-2 pr-3 outline-none placeholder:text-green-900"
                placeholder="help"
                spellCheck={false}
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function PuzzlePortfolio() {
  const [hydrated, setHydrated] = useState(false)
  const [started, setStarted] = useState(false)
  const [placed, setPlaced] = useState<Set<PanelId>>(new Set())
  const [selected, setSelected] = useState<PanelId | null>(null)
  const [activePanel, setActivePanel] = useState<PanelId | null>(null)
  const [complete, setComplete] = useState(false)
  const { msg, show, dismiss } = useSnackbar()
  const {
    gags,
    noteSurveillance,
    noteDecoyClick,
    unlockSecret,
    hasSecret,
    resetGags,
  } = useDossierGags()

  useEffect(() => {
    if (!hydrated) return
    let index = 0

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== KONAMI[index]) {
        index = event.key === KONAMI[0] ? 1 : 0
        return
      }
      index += 1
      if (index === KONAMI.length) {
        index = 0
        if (!hasSecret("konami")) {
          unlockSecret("konami")
          document.documentElement.classList.add("dossier-cursor-golden")
          show(KONAMI_TOAST)
        } else {
          show("Admin mode already unlocked. HR is still watching.")
        }
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [hydrated, hasSecret, unlockSecret, show])

  const showSnark = useCallback(
    (text: string) => {
      show(text)
      noteSurveillance()
    },
    [show, noteSurveillance]
  )

  useEffect(() => {
    if (hasSecret("konami")) {
      document.documentElement.classList.add("dossier-cursor-golden")
    }
  }, [hasSecret])

  useEffect(() => {
    const saved = loadPuzzleProgress()
    if (saved) {
      if (saved.started) setStarted(true)
      if (saved.placed.length > 0) {
        setPlaced(new Set(saved.placed))
        if (saved.placed.length === PIECES.length) setComplete(true)
      }
      if (saved.openPanel) setActivePanel(saved.openPanel)

      requestAnimationFrame(() => {
        if (saved.scrollY > 0) {
          window.scrollTo({ top: saved.scrollY, behavior: "auto" })
        } else {
          document
            .getElementById("puzzle-board")
            ?.scrollIntoView({ block: "center", behavior: "auto" })
        }
      })
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    savePuzzleProgress({
      started,
      placed: [...placed],
      scrollY: window.scrollY,
      openPanel: activePanel,
    })
  }, [hydrated, started, placed, activePanel])

  useEffect(() => {
    if (!hydrated) return
    let timer: number
    const onScroll = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        const saved = loadPuzzleProgress()
        if (!saved) return
        savePuzzleProgress({ ...saved, scrollY: window.scrollY })
      }, 120)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.clearTimeout(timer)
    }
  }, [hydrated])

  useEffect(() => {
    if (placed.size === PIECES.length && placed.size > 0) {
      setComplete(true)
      show(COMPLETE_MSG)
    }
  }, [placed, show])

  const handlePlace = (id: PanelId) => {
    setPlaced((prev) => new Set([...prev, id]))
    setSelected(null)
    show(`File "${id}" archived. Click it to read.`)
  }

  const handleSlotTap = (slotId: PanelId) => {
    if (placed.has(slotId)) {
      setActivePanel(slotId)
      return
    }
    if (selected === slotId) {
      handlePlace(slotId)
      return
    }
    if (selected) {
      showSnark(SNARK[Math.floor(Math.random() * SNARK.length)])
      return
    }
    show("Pick up a tab first. They're scattered around like my sleep schedule.")
  }

  const handleRestart = (): boolean => {
    const ok = window.confirm(
      "Burn the dossier and start from zero? All progress will be lost."
    )
    if (!ok) return false

    clearPuzzleProgress()
    clearGagState()
    resetGags()
    document.documentElement.classList.remove("dossier-cursor-golden")
    setStarted(false)
    setPlaced(new Set())
    setSelected(null)
    setActivePanel(null)
    setComplete(false)
    dismiss()
    window.scrollTo({ top: 0, behavior: "smooth" })
    show("Dossier incinerated. Please re-swearing-in as recruiter is required.")
    return true
  }

  const handleCommand = (cmd: string): string | null => {
    if (cmd === "help") {
      return "> commands: help, secrets, ls, whoami, hire, reset, status, projects"
    }
    if (cmd === "secrets") {
      return "> decoys raise HR score · footer is clickable · try rm -rf / · konami code exists"
    }
    if (cmd === "ls") {
      return "> who???  tools??  jobs  shipped  hire_me  resume.pdf  (drag them)"
    }
    if (cmd === "whoami") {
      return `> ${personalInfo.name} — ${personalInfo.role}`
    }
    if (cmd === "hire" || cmd === "hire me") {
      setActivePanel("contact")
      if (complete && !hasSecret("hire-complete")) {
        unlockSecret("hire-complete")
        show(HIRE_COMPLETE_TOAST)
      }
      return complete
        ? "> opening contact. dossier was already complete — impressive."
        : "> opening contact protocol... good choice."
    }
    if (cmd === "sudo hire me") {
      setActivePanel("contact")
      return "> permission denied. opening contact anyway because you're bold."
    }
    if (cmd === "clear") {
      return "> nice try. this terminal is glued to the screen."
    }
    if (cmd === "status") {
      return `> dossier ${placed.size}/${PIECES.length} complete. HR patience: low.`
    }
    if (cmd === "projects") {
      setActivePanel("projects")
      return "> evidence locker unlocked."
    }
    if (cmd === "reset" || cmd === "restart") {
      return handleRestart()
        ? "> dossier wiped. begin again."
        : "> reset cancelled. dossier survives."
    }
    if (SECRET_TERMINAL[cmd]) {
      noteSurveillance()
      return SECRET_TERMINAL[cmd]
    }
    return null
  }

  const handleDecoyClick = (message: string) => {
    show(message)
    const unlocked = noteDecoyClick()
    if (unlocked === "decoy-spam") {
      window.setTimeout(() => show(DECOY_SPAM_TOAST), 400)
    }
  }

  const handleFooterClick = () => {
    if (hasSecret("footer")) return
    unlockSecret("footer")
    show(FOOTER_TOAST)
  }

  const pct = Math.round((placed.size / PIECES.length) * 100)
  const hr = hrLabel(gags.surveillance)

  return (
    <div
      className="puzzle-scene relative min-h-screen pb-20"
      style={{ backgroundColor: "#e8dcc4", color: "#1c1917" }}
    >
      <AnimatePresence>
        {hydrated && !started && (
          <IntroOverlay onEnter={() => setStarted(true)} />
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-grid-paper opacity-40" />
      <div className="pointer-events-none absolute inset-0 grain opacity-20" />

      {/* Header — sticky so it never gets buried */}
      <header className="sticky top-0 z-50 flex flex-wrap items-start justify-between gap-4 border-b-2 border-ink/10 bg-[#e8dcc4]/95 px-4 py-4 backdrop-blur-sm sm:px-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink/45">
            Case #NM-2026-404
          </p>
          <h1 className="font-display text-2xl uppercase leading-none text-ink sm:text-4xl">
            {personalInfo.name}
          </h1>
          <p className="mt-1 max-w-sm font-mono text-xs text-ink/55">
            Subject dossier · assemble to proceed · no scroll wheel required
          </p>
        </div>
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={handleRestart}
            className="-rotate-1 border-2 border-ink bg-white/80 px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-ink shadow-[3px_3px_0_#1c1917] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#1c1917] sm:text-xs"
            title="Reset dossier progress"
          >
            ↺ Start over
          </button>
          <div className="rotate-2 border-4 border-stamp px-4 py-2 text-center">
            <p className="font-mono text-[10px] font-bold uppercase text-stamp">
              Clearance
            </p>
            <p className="font-display text-2xl text-stamp">{pct}%</p>
            <p className="font-mono text-[8px] font-bold uppercase tracking-wider text-stamp/80">
              {clearanceLabel(pct)}
            </p>
            {hr && (
              <p className="mt-0.5 font-mono text-[8px] uppercase tracking-wider text-ink/45">
                HR: {hr}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Play zone — pieces scatter inside here, not over the whole page */}
      <div className="relative z-10 mx-auto min-h-[560px] max-w-3xl px-4 py-8 sm:min-h-[620px]">
        {started &&
          DECOYS.map((d) => (
            <button
              key={d.id}
              type="button"
              className="absolute z-20 border border-ink/30 bg-white/80 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-ink/50 transition-colors hover:border-stamp hover:text-stamp sm:text-[10px]"
              style={{
                left: `${d.x}%`,
                top: `${d.y}%`,
                transform: "rotate(-2deg)",
              }}
              onClick={() => handleDecoyClick(d.msg)}
            >
              {d.label}
            </button>
          ))}

        <div className="relative z-10 mx-auto max-w-2xl">
          <div
            id="puzzle-board"
            className="relative rotate-1 border-4 border-ink p-3 shadow-[8px_8px_0_#1c1917] sm:p-4"
            style={{ backgroundColor: "#ddd0b4" }}
          >
          <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-ink/45">
            — evidence board — drop tabs here —
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {PIECES.map((piece) => {
              const isPlaced = placed.has(piece.id)
              return (
                <button
                  key={piece.id}
                  id={`slot-${piece.id}`}
                  type="button"
                  onClick={() =>
                    isPlaced
                      ? setActivePanel(piece.id)
                      : handleSlotTap(piece.id)
                  }
                  className={`relative aspect-square border-2 border-dashed bg-white/30 text-left transition-colors ${
                    selected === piece.id && !isPlaced
                      ? "border-stamp bg-stamp/10 ring-2 ring-stamp ring-offset-1"
                      : isPlaced
                        ? "cursor-pointer border-ink/40 hover:border-stamp"
                        : "border-ink/25"
                  }`}
                >
                  {isPlaced ? (
                    <PuzzlePiece
                      piece={piece}
                      placed
                      onPlace={handlePlace}
                      onOpen={setActivePanel}
                      showSnark={showSnark}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center p-2">
                      <span className="text-center font-mono text-[9px] uppercase text-ink/25">
                        {piece.hint}
                      </span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
          {complete && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center font-mono text-xs font-bold uppercase text-stamp"
            >
              ★ dossier complete — you win nothing except my email ★
            </motion.p>
          )}
        </div>
        </div>

        {/* Scattered pieces — above board so they never slide underneath */}
        {started && (
          <div className="pointer-events-none absolute inset-0 z-50">
            {PIECES.filter((p) => !placed.has(p.id)).map((piece) => (
              <PuzzlePiece
                key={piece.id}
                piece={piece}
                placed={false}
                selected={selected === piece.id}
                onSelect={setSelected}
                onPlace={handlePlace}
                onOpen={setActivePanel}
                showSnark={showSnark}
              />
            ))}
          </div>
        )}
      </div>

      {/* Snackbar */}
      <AnimatePresence>
        {msg && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            className="fixed bottom-20 left-1/2 z-[70] flex max-w-sm items-start gap-3 border-2 border-ink bg-highlighter py-3 pl-4 pr-2 font-mono text-xs shadow-[4px_4px_0_#1c1917]"
          >
            <p className="flex-1 leading-relaxed">{msg}</p>
            <button
              type="button"
              onClick={dismiss}
              className="shrink-0 border border-ink/40 p-1 text-ink/60 transition-colors hover:bg-ink hover:text-highlighter"
              aria-label="Dismiss message"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <DossierPanel panel={activePanel} onClose={() => setActivePanel(null)} />
      <FakeTerminal onCommand={handleCommand} />

      <footer
        className="relative z-10 mt-24 px-4 pb-8 text-center font-mono text-[10px] uppercase tracking-widest text-ink/35"
        onClick={handleFooterClick}
      >
        © {new Date().getFullYear()} · no cookies were harmed · yes this is a real portfolio
      </footer>
    </div>
  )
}
