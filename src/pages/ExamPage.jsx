import { useState, useMemo, useRef, useCallback, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, AlertTriangle, Clock } from 'lucide-react'
import ExamStartScreen from '../components/exam/ExamStartScreen'
import FullscreenWarning from '../components/exam/FullscreenWarning'
import CelebrationScreen from '../components/exam/CelebrationScreen'
import useAntiCheat from '../hooks/useAntiCheat'
import { calculateScore } from '../hooks/useScoring'
import { scoringConfigs } from '../config/scoringConfig'
import { saveResult } from '../config/googleSheets'
import { questionsMap } from '../config/questions'
import { LOCATION } from '../config/constants'

const THEMES = {
  young: { bg: '#eff6ff', primary: '#2563eb', primaryDark: '#1d4ed8', accent: '#dbeafe', border: '#93c5fd', text: '#1e3a8a', header: '#3b82f6', gradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)' },
  ket: { bg: '#f8fafc', primary: '#003399', primaryDark: '#002a6e', accent: '#fef3c7', border: '#c8a84e', text: '#1e3a8a', header: '#003399', gradient: 'linear-gradient(135deg,#003399,#002a6e)' },
  pet: { bg: '#eef2ff', primary: '#4338ca', primaryDark: '#3730a3', accent: '#e0e7ff', border: '#a5b4fc', text: '#312e81', header: '#6366f1', gradient: 'linear-gradient(135deg,#6366f1,#4338ca)' },
  ielts: { bg: '#f5f3ff', primary: '#6d28d9', primaryDark: '#5b21b6', accent: '#ede9fe', border: '#c4b5fd', text: '#2e1065', header: '#8b5cf6', gradient: 'linear-gradient(135deg,#8b5cf6,#6d28d9)' },
  toeic: { bg: '#ecfeff', primary: '#0e7490', primaryDark: '#0b5e76', accent: '#cffafe', border: '#67e8f9', text: '#164e63', header: '#06b6d4', gradient: 'linear-gradient(135deg,#06b6d4,#0e7490)' },
  tuyensinh: { bg: '#f0fdf4', primary: '#047857', primaryDark: '#03634a', accent: '#dcfce7', border: '#86efac', text: '#14532d', header: '#22c55e', gradient: 'linear-gradient(135deg,#22c55e,#047857)' },
}

function flattenQuestions(examData) {
  if (!examData) return []
  const flat = []
  examData.parts.forEach(part => {
    if (part.questions) {
      part.questions.forEach(q => flat.push({ ...q, partId: part.id }))
    }
    if (part.passages) {
      part.passages.forEach(pg => {
        if (pg.questions) pg.questions.forEach(q => flat.push({ ...q, partId: part.id }))
      })
    }
  })
  return flat
}

export default function ExamPage() {
  const { examId } = useParams()
  const navigate = useNavigate()
  const goHome = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
    navigate('/')
  }, [navigate])

  const examData = questionsMap[examId]
  const themeKey = examData?.type || 'ket'
  const T = THEMES[THEMES[themeKey] ? themeKey : 'ket']
  const scoringConfig = scoringConfigs[themeKey] || scoringConfigs.ket

  const [phase, setPhase] = useState('start')
  const [resultPhase, setResultPhase] = useState('score')
  const [studentName, setStudentName] = useState('')
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [timer, setTimer] = useState(0)
  const timerRef = useRef(null)

  const allQuestions = useMemo(() => flattenQuestions(examData), [examData])
  const totalQ = allQuestions.filter(q => q.answer).length

  const retry = useCallback(() => {
    setPhase('start')
    setResultPhase('score')
    setAnswers({})
    setResult(null)
    setTimer(examData?.duration * 60 || 0)
    setSubmitting(false)
  }, [examData])

  const handleSubmit = useCallback(async () => {
    clearInterval(timerRef.current)
    setSubmitting(true)
    const r = calculateScore(allQuestions, answers, scoringConfig)
    setResult(r)
    setPhase('result')
    try {
      await saveResult({
        studentName: studentName || 'Học viên',
        examType: examData?.title || examId,
        score: r.score,
        total: r.total,
        band: r.band,
        location: LOCATION,
        answers,
      })
    } catch (e) {
      console.warn('Save failed:', e)
    }
    setSubmitting(false)
  }, [allQuestions, answers, studentName, examData, examId, scoringConfig])

  const { enterFS, tabWarn, fsWarn, fsCountdown, setFsCountdown, exitFS, clearFsWarning } = useAntiCheat({
    onForceSubmit: () => handleSubmit(),
    onReset: retry,
    enabled: phase === 'test',
  })

  useEffect(() => {
    if (examData?.duration) setTimer(examData.duration * 60)
  }, [examData])

  useEffect(() => {
    if (phase === 'test' && timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) { clearInterval(timerRef.current); return 0 }
          return prev - 1
        })
      }, 1000)
      return () => clearInterval(timerRef.current)
    }
  }, [phase, timer > 0])

  useEffect(() => {
    if (phase === 'test' && timer <= 0 && examData?.duration) handleSubmit()
  }, [timer, phase, examData, handleSubmit])

  const handleAnswer = useCallback((qId, value) => {
    setAnswers(prev => ({ ...prev, [qId]: value }))
  }, [])

  const startTest = (name) => {
    setStudentName(name)
    setPhase('test')
    enterFS()
  }

  if (!examData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4">
        <div className="text-6xl font-black text-primary/20">:(</div>
        <h1 className="text-xl font-bold text-text-primary">Bài thi không tìm thấy</h1>
        <p className="text-sm text-text-secondary">Exam ID: {examId}</p>
        <Link to="/" className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform">
          <ArrowLeft className="w-4 h-4" />Quay về trang chủ
        </Link>
      </div>
    )
  }

  if (phase === 'start') {
    return <ExamStartScreen examData={examData} totalQuestions={totalQ} onStart={startTest} />
  }

  if (phase === 'result' && result) {
    return (
      <CelebrationScreen
        phase={resultPhase}
        onNext={() => {
          if (resultPhase === 'score') setResultPhase('review')
          else if (resultPhase === 'review') setResultPhase('congratulations')
        }}
        result={result}
        allQuestions={allQuestions}
        answers={answers}
        studentName={studentName}
        theme={T}
        examType={themeKey}
        onRetry={retry}
        onHome={goHome}
      />
    )
  }

  const timerStr = `${Math.floor(timer / 60).toString().padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`
  const answeredCount = allQuestions.filter(q => {
    const v = answers[q.id]; return v !== undefined && v !== null && v !== ''
  }).length
  const isWarning = timer <= 300 && timer > 0
  const isCritical = timer <= 60 && timer > 0

  const renderMCQ = (q) => (
    <div key={q.id} className="p-4 md:p-5 bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 transition hover:shadow-md">
      <p className="font-bold text-gray-800 mb-3 text-sm md:text-base">Câu {q.id}. {q.question}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Object.entries(q.options).map(([key, val]) => (
          <button key={key}
            className={`p-3 md:p-4 rounded-xl border-2 font-bold text-sm text-left transition-all ${answers[q.id] === key ? 'text-white shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'}`}
            style={answers[q.id] === key ? { background: T.primary, borderColor: T.primaryDark } : {}}
            onClick={() => handleAnswer(q.id, key)}>
            <span className="font-black mr-2" style={answers[q.id] === key ? {} : { color: T.primary }}>{key}.</span> {val}
          </button>
        ))}
      </div>
    </div>
  )

  const renderFill = (q) => (
    <div key={q.id} className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-3">
      <p className="font-bold text-gray-800 mb-2 text-sm">Câu {q.id}. {q.question}</p>
      {q.hint && <p className="text-xs text-gray-400 mb-1">💡 {q.hint}</p>}
      <input type="text" placeholder={q.hint || 'Nhập câu trả lời...'} value={answers[q.id] || ''}
        onChange={e => handleAnswer(q.id, e.target.value)}
        className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none transition font-bold uppercase text-sm focus:border-blue-500"
        style={{ borderColor: answers[q.id] ? T.primary : undefined }} />
    </div>
  )

  const renderWriting = (q) => (
    <div key={q.id} className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-3">
      <p className="font-bold text-gray-800 mb-2 text-sm">Task {q.id}:</p>
      {q.taskDescription && <div className="text-gray-700 text-sm mb-4 leading-relaxed">{q.taskDescription}</div>}
      <textarea value={answers[q.id] || ''} rows={8}
        onChange={e => handleAnswer(q.id, e.target.value)}
        placeholder="Viết câu trả lời của bạn..."
        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 transition outline-none text-gray-800 resize-y" />
      {q.wordLimit && (
        <p className="text-xs text-gray-400 mt-1 text-right">
          Từ: {(answers[q.id] || '').trim().split(/\s+/).filter(Boolean).length}/{q.wordLimit}
        </p>
      )}
    </div>
  )

  return (
    <div className="min-h-screen pb-16" style={{ background: T.bg }}>
      {tabWarn > 0 && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white text-center py-3 font-bold z-[9999] text-sm">
          ⚠️ Không được rời khỏi tab! (Lần: {tabWarn}){tabWarn >= 3 ? ' — Tự động nộp bài!' : ''}
        </div>
      )}
      {fsWarn && <FullscreenWarning fsCountdown={fsCountdown} setFsCountdown={setFsCountdown} onEnterFS={enterFS} onDismiss={clearFsWarning} />}

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes confettiFall{0%{transform:translateY(0)rotate(0deg);opacity:1}100%{transform:translateY(100vh)rotate(720deg);opacity:0}}.progress-bar{height:10px;background:#e2e8f0;border-radius:8px;overflow:hidden}.progress-fill{height:100%;border-radius:8px;transition:width 0.5s cubic-bezier(.34,1.56,.64,1)}`}</style>

      <header className="bg-white border-b-4 shadow-sm p-6 text-center relative" style={{ borderColor: T.header }}>
        <button onClick={goHome} className="absolute left-4 top-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-3 py-1.5 rounded-full">
          🏠 Trang Chủ
        </button>
        <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">ANH NGỮ VIỆT CHÂU ÂU</h2>
        <h1 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: T.primaryDark }}>VEU ONLINE EXAM</h1>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        <div className="bg-white p-4 rounded-2xl shadow-md border-2 flex justify-between items-center sticky top-0 z-50" style={{ borderColor: T.border }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-black text-sm" style={{ background: T.gradient }}>
              {studentName.charAt(0).toUpperCase()}
            </div>
            <p className="font-bold text-sm truncate max-w-[140px]" style={{ color: T.text }}>{studentName}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 font-bold">{answeredCount}/{totalQ}</span>
            {examData.duration > 0 && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2"
                style={{ background: isCritical ? '#fef2f2' : isWarning ? '#fffbeb' : T.accent, borderColor: isCritical ? '#fecaca' : isWarning ? '#fde68a' : T.border }}>
                {isCritical ? (
                  <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
                ) : (
                  <Clock className={`w-4 h-4 ${isWarning ? 'text-amber-500' : ''}`} style={{ color: isWarning ? undefined : T.primary }} />
                )}
                <span className="font-black text-sm tabular-nums" style={{ color: isCritical ? '#dc2626' : isWarning ? '#d97706' : T.primary }}>
                  {timerStr}
                </span>
              </div>
            )}
          </div>
        </div>

        {examData.duration > 0 && (
          <div className="progress-wrap">
            <div className="flex justify-between text-xs font-bold mb-1" style={{ color: T.primary }}>
              <span>Tiến độ</span>
              <span>{answeredCount} / {totalQ}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: Math.round((answeredCount / totalQ) * 100) + '%', background: T.gradient }}></div>
            </div>
          </div>
        )}

        {examData.parts.map((part, pidx) => (
          <section key={part.id || pidx} className="bg-white rounded-3xl border-2 shadow-sm overflow-hidden" style={{ borderColor: T.border, animation: 'fadeUp 0.5s ease-out', animationDelay: (pidx * 0.1) + 's', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="text-white font-bold p-4 md:p-5" style={{ background: T.gradient }}>
              <h2 className="text-sm md:text-base uppercase tracking-wider">{part.title}</h2>
            </div>
            <div className="p-5 md:p-6">
              {part.instructions && <p className="italic text-gray-500 mb-5 text-sm">{part.instructions}</p>}

              {part.type === 'passage' && part.passages && part.passages.map((pg, pi) => (
                <div key={pi} className="mb-6">
                  {pg.title && <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-3" style={{ background: T.accent, color: T.primary }}>{pg.title}</span>}
                  {pg.content && <div className="p-4 md:p-5 rounded-2xl border mb-4 bg-gray-50 leading-relaxed text-gray-700 text-sm md:text-base whitespace-pre-line">{pg.content}</div>}
                  <div className="space-y-3">
                    {pg.questions.map(q => {
                      if (q.type === 'fill-blank' || q.type === 'fill') return renderFill(q)
                      if (q.type === 'writing') return renderWriting(q)
                      return renderMCQ(q)
                    })}
                  </div>
                </div>
              ))}

              {part.type !== 'passage' && part.questions && (
                <div className="space-y-3">
                  {part.questions.map(q => {
                    if (q.type === 'fill-blank' || q.type === 'fill') return renderFill(q)
                    if (q.type === 'writing') return renderWriting(q)
                    return renderMCQ(q)
                  })}
                </div>
              )}
            </div>
          </section>
        ))}

        <div className="text-center pb-8">
          <button onClick={handleSubmit} disabled={submitting}
            className="text-white font-black py-4 px-16 rounded-full text-xl shadow-2xl transition active:scale-95 uppercase disabled:opacity-50"
            style={{ background: T.gradient }}>
            {submitting ? '⏳ Đang nộp...' : 'Nộp bài ngay!'}
          </button>
        </div>
      </div>
    </div>
  )
}
