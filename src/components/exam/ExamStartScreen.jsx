import { useState } from 'react'

{/* Constants: THEMES */}
const THEMES = {
  young: { bg: '#eff6ff', primary: '#2563eb', accent: '#dbeafe', border: '#93c5fd', text: '#1e3a8a', gradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)' },
  ket: { bg: '#f8fafc', primary: '#003399', accent: '#fef3c7', border: '#c8a84e', text: '#1e3a8a', gradient: 'linear-gradient(135deg,#003399,#002a6e)' },
  pet: { bg: '#eef2ff', primary: '#4338ca', accent: '#e0e7ff', border: '#a5b4fc', text: '#312e81', gradient: 'linear-gradient(135deg,#6366f1,#4338ca)' },
  ielts: { bg: '#f5f3ff', primary: '#6d28d9', accent: '#ede9fe', border: '#c4b5fd', text: '#2e1065', gradient: 'linear-gradient(135deg,#8b5cf6,#6d28d9)' },
  toeic: { bg: '#ecfeff', primary: '#0e7490', accent: '#cffafe', border: '#67e8f9', text: '#164e63', gradient: 'linear-gradient(135deg,#06b6d4,#0e7490)' },
  tuyensinh: { bg: '#f0fdf4', primary: '#047857', accent: '#dcfce7', border: '#86efac', text: '#14532d', gradient: 'linear-gradient(135deg,#22c55e,#047857)' },
}

{/* Helper: properCase() */}
function properCase(str) {
  return str.split(' ').map(w => w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w).join(' ')
}

const NAME_MIN = 2
const NAME_MAX = 50

{/* Helper: validateStudentName() */}
function validateStudentName(name) {
  const trimmed = (name || '').trim()
  if (!trimmed) return 'Vui lòng nhập tên học sinh!'
  if (trimmed.length < NAME_MIN) return `Tên phải có ít nhất ${NAME_MIN} ký tự!`
  if (trimmed.length > NAME_MAX) return `Tên không được quá ${NAME_MAX} ký tự!`
  return null
}

export default function ExamStartScreen({ examData, totalQuestions, onStart }) {
  const [studentName, setStudentName] = useState('')
  const [nameError, setNameError] = useState('')

  const themeKey = examData?.type || 'ket'
  const T = THEMES[THEMES[themeKey] ? themeKey : 'ket']

  const handleStart = () => {
    const err = validateStudentName(studentName)
    if (err) { setNameError(err); return }
    setNameError('')
    onStart(studentName.trim())
  }

  const handleNameChange = (e) => {
    const el = e.target
    const pos = el.selectionStart
    const v = properCase(el.value)
    if (v !== el.value) {
      setStudentName(v)
      requestAnimationFrame(() => { el.selectionStart = pos; el.selectionEnd = pos })
    } else {
      setStudentName(el.value)
    }
    setNameError('')
  }

  const totalParts = examData?.parts?.length || 0

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: T.bg }}>
      {/* Exam info: icon + title + meta */}
      <div className="bg-white rounded-3xl border-4 shadow-xl p-5 md:p-12 max-w-lg w-full text-center" style={{ borderColor: T.border }}>
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 text-3xl" style={{ background: T.accent }}>
          {themeKey === 'young' ? '🌟' : themeKey === 'ket' ? '📝' : themeKey === 'pet' ? '📚' : themeKey === 'toeic' ? '💼' : themeKey === 'tuyensinh' ? '🎓' : '📖'}
        </div>
        <h1 className="text-2xl md:text-3xl font-black mb-2" style={{ color: T.primary }}>{examData?.title || 'Bài thi'}</h1>
        <p className="text-gray-500 font-bold mb-6">{totalParts} Parts · {totalQuestions} câu hỏi · {examData?.duration || 0} phút</p>

        {/* Name input */}
        <div className="mb-4 text-left p-5 rounded-2xl border-2" style={{ background: T.accent, borderColor: T.border }}>
          <label className="block text-sm font-bold uppercase mb-2" style={{ color: T.text }}>Họ và tên học sinh</label>
          <input type="text" placeholder="Nhập tên..." value={studentName} onChange={handleNameChange} maxLength={NAME_MAX}
            className="w-full p-3 rounded-xl border-2 border-white focus:outline-none transition font-bold text-lg bg-white shadow-inner"
            style={{ color: T.primary }} />
          {nameError && <p className="text-red-500 text-xs font-bold mt-1">{nameError}</p>}
        </div>

        {/* Location */}
        <div className="mb-4 text-left p-3 md:p-4 rounded-2xl bg-gray-50 border border-gray-200">
          <p className="text-sm font-bold text-gray-700">🏫 Cơ sở: <span className="font-normal text-gray-600">1031 Nguyễn Ảnh Thủ, Phường Trung Mỹ Tây, Thành phố Hồ Chí Minh</span></p>
        </div>

        {/* Notes */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 md:p-4 text-sm text-amber-800 mb-6 text-left">
          <p className="font-bold">📋 Lưu ý khi làm bài:</p>
          <ul className="mt-1 space-y-1 text-amber-700">
            <li>• Tự động nộp bài khi hết giờ</li>
            <li>• Không rời khỏi tab trong khi làm bài</li>
            <li>• Kết quả được lưu tự động</li>
          </ul>
        </div>

        {/* Start button */}
        <button onClick={handleStart}
          className="w-full text-white font-black py-4 rounded-2xl shadow-xl transition active:scale-95 text-lg uppercase tracking-widest"
          style={{ background: T.gradient }}>
          BẮT ĐẦU LÀM BÀI
        </button>
      </div>
    </div>
  )
}
