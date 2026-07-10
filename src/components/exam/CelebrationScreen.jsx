import { scoringConfigs } from '../../config/scoringConfig'

const THEMES = {
  young: { bg: '#eff6ff', primary: '#2563eb', primaryDark: '#1d4ed8', accent: '#dbeafe', border: '#93c5fd', text: '#1e3a8a', header: '#3b82f6', gradient: 'linear-gradient(135deg,#3b82f6,#1d4ed8)' },
  ket: { bg: '#f8fafc', primary: '#003399', primaryDark: '#002a6e', accent: '#fef3c7', border: '#c8a84e', text: '#1e3a8a', header: '#003399', gradient: 'linear-gradient(135deg,#003399,#002a6e)' },
  pet: { bg: '#eef2ff', primary: '#4338ca', primaryDark: '#3730a3', accent: '#e0e7ff', border: '#a5b4fc', text: '#312e81', header: '#6366f1', gradient: 'linear-gradient(135deg,#6366f1,#4338ca)' },
  ielts: { bg: '#f5f3ff', primary: '#6d28d9', primaryDark: '#5b21b6', accent: '#ede9fe', border: '#c4b5fd', text: '#2e1065', header: '#8b5cf6', gradient: 'linear-gradient(135deg,#8b5cf6,#6d28d9)' },
  toeic: { bg: '#ecfeff', primary: '#0e7490', primaryDark: '#0b5e76', accent: '#cffafe', border: '#67e8f9', text: '#164e63', header: '#06b6d4', gradient: 'linear-gradient(135deg,#06b6d4,#0e7490)' },
  tuyensinh: { bg: '#f0fdf4', primary: '#047857', primaryDark: '#03634a', accent: '#dcfce7', border: '#86efac', text: '#14532d', header: '#22c55e', gradient: 'linear-gradient(135deg,#22c55e,#047857)' },
}

function BandVisual({ result, examType }) {
  const cfg = examType ? scoringConfigs[examType] : null
  const visual = cfg?.visual || 'ring'

  if (visual === 'shields') {
    const filled = result.value || 1
    return (
      <div className="flex justify-center gap-2">
        {[1,2,3,4,5].map(i => (
          <span key={i} className="text-4xl" style={{ opacity: i <= filled ? 1 : 0.25, filter: i <= filled ? 'none' : 'grayscale(1)' }}>
            🛡️
          </span>
        ))}
      </div>
    )
  }

  if (visual === 'band') {
    const val = result.value || 4
    const segments = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9]
    return (
      <div className="flex w-full items-stretch h-8 rounded-lg overflow-hidden">
        {segments.map((s, i) => {
          const colors = ['#ef4444','#f97316','#f59e0b','#eab308','#84cc16','#22c55e','#10b981','#14b8a6','#06b6d4','#3b82f6','#8b5cf6']
          return (
            <div key={s} className="flex-1 flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: val >= s ? colors[i] : '#e2e8f0', color: val >= s ? 'white' : '#94a3b8' }}>
              {s}
            </div>
          )
        })}
      </div>
    )
  }

  if (visual === 'bar') {
    const pct = Math.min(100, ((result.value || 0) / 495) * 100)
    return (
      <div className="w-full">
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: pct + '%', background: 'linear-gradient(90deg,#0891b2,#06b6d4)' }}></div>
        </div>
        <p className="text-xl font-black mt-1" style={{ color: '#0891b2' }}>{result.band}</p>
      </div>
    )
  }

  return <p className="text-5xl font-black" style={{ color: '#003399' }}>{result.band}</p>
}

export default function CelebrationScreen({ phase, onNext, result, allQuestions, answers, studentName, theme: themeProp, onRetry, onHome, examType }) {
  const T = themeProp || THEMES.ket

  const defaultTheme = THEMES[examType] || THEMES.ket

  if (phase === 'score') {
    return (
      <div className="min-h-screen pb-12" style={{ background: defaultTheme.bg }}>
        <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes confettiFall{0%{transform:translateY(0)rotate(0deg);opacity:1}100%{transform:translateY(100vh)rotate(720deg);opacity:0}}`}</style>
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl border-4 p-5 md:p-12 text-center shadow-xl" style={{ borderColor: defaultTheme.border, animation: 'fadeUp 0.5s ease-out' }}>
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-4xl font-black mb-2" style={{ color: defaultTheme.primary }}>KẾT QUẢ</h2>
            <p className="text-lg font-bold text-gray-500 mb-6">Học sinh: {studentName}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 md:p-6 bg-gray-50 rounded-2xl">
                <p className="text-5xl font-black text-gray-900">{result.score}</p>
                <p className="text-gray-400 font-bold text-sm">/ {result.total} CÂU</p>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Đúng</p>
              </div>
              <div className="p-4 md:p-6 rounded-2xl text-white flex flex-col items-center justify-center" style={{ background: defaultTheme.gradient }}>
                <p className="text-5xl font-black">{result.percentage}%</p>
                <p className="font-bold text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Phần trăm</p>
              </div>
              <div className="p-4 md:p-6 rounded-2xl border flex flex-col items-center justify-center gap-2" style={{ background: defaultTheme.accent, borderColor: defaultTheme.border }}>
                <BandVisual result={result} examType={examType} />
                <p className="font-bold text-sm" style={{ color: defaultTheme.text }}>Xếp loại</p>
              </div>
            </div>
            <button onClick={onNext}
              className="w-full md:w-auto text-white font-black py-4 px-8 md:px-12 rounded-full text-lg shadow-xl transition active:scale-95 uppercase tracking-wider"
              style={{ background: defaultTheme.gradient }}>
              📝 Xem lại đáp án
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (phase === 'review') {
    return (
      <div className="min-h-screen pb-12" style={{ background: defaultTheme.bg }}>
        <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}`}</style>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-3xl border-4 p-5 md:p-8 shadow-xl" style={{ borderColor: defaultTheme.border, animation: 'fadeUp 0.5s ease-out' }}>
            <h2 className="text-3xl font-black mb-2 text-center" style={{ color: defaultTheme.primary }}>CHI TIẾT ĐÁP ÁN</h2>
            <p className="text-lg font-bold text-gray-500 mb-6 text-center">Học sinh: {studentName}</p>
            <div className="text-center mb-8">
              <span className="text-2xl font-black" style={{ color: defaultTheme.primary }}>{result.score}/{result.total}</span>
              <span className="mx-3 text-gray-300">|</span>
              <span className="text-xl font-black" style={{ color: defaultTheme.primary }}>{result.percentage}%</span>
            </div>
            {result.results && (
              <div className="grid md:grid-cols-2 gap-2 md:gap-3">
                {allQuestions.filter(q => q.answer).map(q => {
                  const r = result.results[q.id]
                  const ok = r?.isCorrect
                  return (
                    <div key={q.id} className={`p-3 rounded-xl border-l-4 ${ok ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'}`}>
                      <p className="font-bold text-sm">Câu {q.id}: {ok ? '✅' : '❌'}</p>
                      <p className="text-xs text-gray-600">
                        Đáp án: <span className="font-bold" style={{ color: defaultTheme.primary }}>{q.answer}</span>
                        {answers[q.id] !== undefined && answers[q.id] !== '' ? (
                          <> | Bạn chọn: <b>{typeof answers[q.id] === 'string' ? answers[q.id] : JSON.stringify(answers[q.id])}</b></>
                        ) : (
                          ' | (Chưa trả lời)'
                        )}
                      </p>
                      {r?.explanation && <p className="text-xs italic text-gray-500 mt-1">💡 {r.explanation}</p>}
                    </div>
                  )
                })}
              </div>
            )}
            <div className="text-center mt-8">
              <button onClick={onNext}
                className="text-white font-black py-4 px-12 rounded-full text-lg shadow-xl transition active:scale-95 uppercase tracking-wider"
                style={{ background: defaultTheme.gradient }}>
                🎉 Đến trang vinh danh
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-12" style={{ background: defaultTheme.bg }}>
      <style>{`@keyframes confettiFall{0%{transform:translateY(0)rotate(0deg);opacity:1}100%{transform:translateY(100vh)rotate(720deg);opacity:0}}@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl border-4 p-5 md:p-12 text-center shadow-xl" style={{ borderColor: defaultTheme.border, animation: 'fadeUp 0.5s ease-out' }}>
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-4xl font-black mb-2" style={{ color: defaultTheme.primary }}>VINH DANH</h2>
          <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-6">Học sinh xuất sắc</p>
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-black text-white mb-3" style={{ background: defaultTheme.gradient }}>
            {studentName.charAt(0).toUpperCase()}
          </div>
          <p className="text-2xl font-black text-gray-900 mb-4">{studentName}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 md:p-6 bg-gray-50 rounded-2xl">
              <p className="text-5xl font-black text-gray-900">{result.score}</p>
              <p className="text-gray-400 font-bold text-sm">/ {result.total} CÂU</p>
            </div>
            <div className="p-4 md:p-6 rounded-2xl text-white flex flex-col items-center justify-center" style={{ background: defaultTheme.gradient }}>
              <p className="text-5xl font-black">{result.percentage}%</p>
              <p className="font-bold text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>Phần trăm</p>
            </div>
            <div className="p-4 md:p-6 rounded-2xl border flex flex-col items-center justify-center gap-2" style={{ background: defaultTheme.accent, borderColor: defaultTheme.border }}>
              <BandVisual result={result} examType={examType} />
              <p className="font-bold text-sm" style={{ color: defaultTheme.text }}>Xếp loại</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button onClick={onRetry} className="font-bold py-3 px-8 rounded-full text-white transition shadow-md" style={{ background: defaultTheme.primary }}>
              🔄 Làm lại
            </button>
            <button onClick={onHome} className="bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full text-lg transition hover:bg-gray-300 shadow-md">
              🏠 Về trang chủ
            </button>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{
        __html: `<script>(function(){var c=['${defaultTheme.primary}','${defaultTheme.primaryDark}','#f59e0b','#10b981','#ec4899'];for(var i=0;i<50;i++){var p=document.createElement('div');p.style.cssText='position:fixed;top:-10px;left:'+Math.random()*100+'vw;width:'+(6+Math.random()*8)+'px;height:'+(6+Math.random()*8)+'px;background:'+c[Math.floor(Math.random()*c.length)]+';border-radius:'+(Math.random()>0.5?'50%':'2px')+';z-index:9999;pointer-events:none;animation:confettiFall '+(2+Math.random()*2)+'s linear forwards;animation-delay:'+(Math.random()*0.5)+'s';document.body.appendChild(p);setTimeout(function(){p.remove()},5000);}})();<\/script>`
      }} />
    </div>
  )
}
