"use client"

import { useCallback, useEffect, useState } from "react"
import {
  type GagSecret,
  type GagState,
  loadGagState,
  saveGagState,
  bumpSurveillance,
} from "@/lib/dossier-gags"

export function useDossierGags() {
  const [gags, setGags] = useState<GagState>(() => loadGagState())

  useEffect(() => {
    saveGagState(gags)
  }, [gags])

  const noteSurveillance = useCallback((amount = 1) => {
    setGags((prev) => ({
      ...prev,
      surveillance: bumpSurveillance(prev.surveillance, amount),
    }))
  }, [])

  const noteDecoyClick = useCallback((): GagSecret | null => {
    let unlocked: GagSecret | null = null
    setGags((prev) => {
      const decoyClicks = prev.decoyClicks + 1
      if (decoyClicks >= 5 && !prev.secrets.includes("decoy-spam")) {
        unlocked = "decoy-spam"
        return {
          ...prev,
          decoyClicks,
          surveillance: bumpSurveillance(prev.surveillance, 2),
          secrets: [...prev.secrets, "decoy-spam"],
        }
      }
      return {
        ...prev,
        decoyClicks,
        surveillance: bumpSurveillance(prev.surveillance, 1),
      }
    })
    return unlocked
  }, [])

  const unlockSecret = useCallback((secret: GagSecret) => {
    setGags((prev) => {
      if (prev.secrets.includes(secret)) return prev
      return { ...prev, secrets: [...prev.secrets, secret] }
    })
  }, [])

  const hasSecret = useCallback(
    (secret: GagSecret) => gags.secrets.includes(secret),
    [gags.secrets]
  )

  const resetGags = useCallback(() => {
    setGags({ surveillance: 0, decoyClicks: 0, secrets: [] })
  }, [])

  return {
    gags,
    noteSurveillance,
    noteDecoyClick,
    unlockSecret,
    hasSecret,
    resetGags,
  }
}
