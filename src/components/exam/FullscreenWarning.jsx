import { useEffect, useRef } from 'react'

export default function FullscreenWarning({ fsCountdown, setFsCountdown, onDismiss, onEnterFS }) {
  const timerRef = useRef(null)

  useEffect(() => {
    if (fsCountdown > 0 && !timerRef.current) {
      timerRef.current = setInterval(() => {
        setFsCountdown(c => {
          if (c <= 1) {
            clearInterval(timerRef.current)
            timerRef.current = null
            if (onDismiss) onDismiss()
            return 0
          }
          return c - 1
        })
      }, 1000)
    }
    return () => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
    }
  }, [fsCountdown > 0])

  const handleClick = (e) => {
    e.preventDefault()
    if (onEnterFS) {
      onEnterFS()
    } else {
      const el = document.documentElement
      if (el.requestFullscreen) el.requestFullscreen().catch(() => {})
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
      else if (el.msRequestFullscreen) el.msRequestFullscreen()
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[9998]"></div>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-red-600 text-white py-3 px-4 md:px-6 rounded-xl font-bold z-[10000] text-sm md:text-base shadow-xl flex items-center gap-3">
        <span>⏰ Còn <b>{fsCountdown}s</b> — Vui lòng bật lại toàn màn hình!</span>
        {onEnterFS && (
          <button onClick={handleClick} className="bg-white text-red-600 border-none px-4 py-1.5 rounded-lg font-bold cursor-pointer text-sm">
            Bật lại
          </button>
        )}
      </div>
    </>
  )
}
