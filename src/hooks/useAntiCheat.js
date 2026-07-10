import { useEffect, useCallback, useRef, useState } from 'react'

export default function useAntiCheat({
  onForceSubmit,
  onReset,
  mode = 'submit',
  enabled = true,
}) {
  {/* State */}
  const [tabWarn, setTabWarn] = useState(0)
  const [fsWarn, setFsWarn] = useState(false)
  const [fsCountdown, setFsCountdown] = useState(0)
  const violatedRef = useRef(false)
  const fsExitRef = useRef(0)
  const callbacksRef = useRef({ onForceSubmit, onReset, mode, enabled })

  useEffect(() => {
    callbacksRef.current = { onForceSubmit, onReset, mode, enabled }
  })

  {/* enterFS */}
  const enterFS = useCallback(() => {
    try {
      const el = document.documentElement
      if (el.requestFullscreen) { el.requestFullscreen().catch(() => {}); return }
      if (el.webkitRequestFullscreen) { el.webkitRequestFullscreen().catch(() => {}); return }
      if (el.msRequestFullscreen) { el.msRequestFullscreen() }
    } catch (e) {}
  }, [])

  {/* exitFS */}
  const exitFS = useCallback(() => {
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {})
      }
    } catch (e) {}
  }, [])

  {/* clearFsWarning */}
  const clearFsWarning = useCallback(() => {
    setFsWarn(false)
    setFsCountdown(0)
  }, [])

  {/* handleViolation */}
  const handleViolation = useCallback((reason) => {
    if (violatedRef.current) return
    violatedRef.current = true
    clearFsWarning()
    const { onReset: r, onForceSubmit: f, mode: m } = callbacksRef.current
    if (m === 'reset') {
      if (r) r(reason)
    } else {
      if (f) f(reason)
    }
  }, [clearFsWarning])

  {/* handleVisibility */}
  const handleVisibility = useCallback(() => {
    const { enabled: e } = callbacksRef.current
    if (document.hidden && e && !violatedRef.current) {
      setTabWarn(prev => {
        const next = prev + 1
        if (next >= 3) handleViolation('tab')
        return next
      })
    }
  }, [handleViolation])

  {/* Effect: register anti-cheat listeners */}
  useEffect(() => {
    if (!enabled) return
    violatedRef.current = false
    setTabWarn(0)
    setFsWarn(false)
    setFsCountdown(0)
    fsExitRef.current = 0

    document.addEventListener('visibilitychange', handleVisibility)

    const handleContextMenu = (e) => e.preventDefault()
    document.addEventListener('contextmenu', handleContextMenu)

    const handleKeyDown = (e) => {
      if (violatedRef.current) return
      if (
        e.key === 'F12' ||
        (e.ctrlKey && ['c', 'u', 's'].includes(e.key)) ||
        (e.ctrlKey && e.shiftKey && ['I', 'J'].includes(e.key))
      ) {
        e.preventDefault()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    const handleFSChange = () => {
      if (violatedRef.current) return
      const { enabled: e, onReset: r } = callbacksRef.current
      if (document.fullscreenElement) {
        clearFsWarning()
        return
      }
      if (!e) return

      fsExitRef.current += 1
      const current = fsExitRef.current

      setFsCountdown(10)
      setFsWarn(true)

      if (current >= 3) {
        violatedRef.current = true
        clearFsWarning()
        if (r) r('fullscreen')
      }
    }
    document.addEventListener('fullscreenchange', handleFSChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('fullscreenchange', handleFSChange)
    }
  }, [enabled, handleVisibility, clearFsWarning])

  {/* Return values */}
  return { tabWarn, fsWarn, fsCountdown, setFsCountdown, enterFS, exitFS, clearFsWarning }
}
