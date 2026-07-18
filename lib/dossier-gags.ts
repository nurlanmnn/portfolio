export const GAGS_STORAGE_KEY = "mammadli-box-gags"

export type GagSecret =
  | "konami"
  | "decoy-spam"
  | "footer"
  | "hire-complete"

export interface GagState {
  surveillance: number
  decoyClicks: number
  secrets: GagSecret[]
}

const defaultGagState = (): GagState => ({
  surveillance: 0,
  decoyClicks: 0,
  secrets: [],
})

export function loadGagState(): GagState {
  if (typeof window === "undefined") return defaultGagState()
  try {
    const raw = localStorage.getItem(GAGS_STORAGE_KEY)
    if (!raw) return defaultGagState()
    const parsed = JSON.parse(raw) as Partial<GagState>
    return {
      ...defaultGagState(),
      ...parsed,
      secrets: Array.isArray(parsed.secrets) ? parsed.secrets : [],
    }
  } catch {
    return defaultGagState()
  }
}

export function saveGagState(state: GagState) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(GAGS_STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

export function clearGagState() {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(GAGS_STORAGE_KEY)
  } catch {
    // ignore
  }
}

export function clearanceLabel(pct: number): string {
  if (pct >= 100) return "INTERVIEW???"
  if (pct >= 50) return "PARTIAL FILE"
  if (pct > 0) return "UNDER REVIEW"
  return "UNVERIFIED"
}

export function hrLabel(level: number): string | null {
  if (level >= 12) return "PLS STOP"
  if (level >= 8) return "ELEVATED"
  if (level >= 4) return "NOTED"
  if (level > 0) return "LOW"
  return null
}

export function bumpSurveillance(current: number, amount = 1): number {
  return Math.min(15, current + amount)
}

export const PANEL_LOAD_LINES = [
  "Scanning for red flags…",
  "Checking LeetCode history…",
  "Cross-referencing HR database…",
]

export const SECRET_TERMINAL: Record<string, string> = {
  "rm -rf /": "> nice try. this is a portfolio, not production.",
  debug: "> bug found: you're still here. feature, not bug.",
  "42": "> answer: probably hire me.",
  "cat resume.pdf": "> [REDACTED] ...skills... ...UCF... ...available now...",
  sudo: "> password: please. access: emotionally denied.",
}

export const KONAMI_TOAST =
  "Admin access granted (not really). Cursor upgraded."

export const DECOY_SPAM_TOAST =
  "Persistence logged. HR has opened a second folder on you."

export const FOOTER_TOAST =
  "Yes, this counts as a portfolio. No, I won't explain the puzzle."

export const HIRE_COMPLETE_TOAST =
  "Full dossier + hire command? You're either a recruiter or a completionist."
