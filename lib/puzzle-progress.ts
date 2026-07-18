import type { PanelId } from "@/components/puzzle/dossier-panel"

export const PUZZLE_PROGRESS_KEY = "mammadli-box-progress"

export interface PuzzleProgress {
  started: boolean
  placed: PanelId[]
  scrollY: number
  openPanel: PanelId | null
}

const defaultProgress = (): PuzzleProgress => ({
  started: false,
  placed: [],
  scrollY: 0,
  openPanel: null,
})

export function loadPuzzleProgress(): PuzzleProgress | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(PUZZLE_PROGRESS_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<PuzzleProgress>
    return {
      ...defaultProgress(),
      ...parsed,
      placed: Array.isArray(parsed.placed) ? parsed.placed : [],
    }
  } catch {
    return null
  }
}

export function savePuzzleProgress(data: PuzzleProgress) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(PUZZLE_PROGRESS_KEY, JSON.stringify(data))
  } catch {
    // ignore quota / private mode
  }
}

export function patchPuzzleProgress(patch: Partial<PuzzleProgress>) {
  const current = loadPuzzleProgress() ?? defaultProgress()
  savePuzzleProgress({ ...current, ...patch })
}

export function savePuzzleScroll(openPanel?: PanelId | null) {
  patchPuzzleProgress({
    scrollY: window.scrollY,
    ...(openPanel !== undefined ? { openPanel } : {}),
  })
}

export function clearPuzzleProgress() {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(PUZZLE_PROGRESS_KEY)
  } catch {
    // ignore
  }
}
