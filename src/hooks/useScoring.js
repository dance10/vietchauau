export function calculateScore(allQuestions, answers, config) {
  let score = 0
  const results = {}

  {/* Filter answerable questions */}
  const scorables = allQuestions.filter(q => q.answer)

  {/* Grade each question */}
  scorables.forEach(q => {
    const userAns = (answers[q.id] || '').toString().toUpperCase().trim()
    const correct = q.answer.toString().toUpperCase().trim()

    let isCorrect
    {/* Handle checkbox answers */}
    if (q.type === 'checkbox') {
      const userArr = Array.isArray(answers[q.id]) ? answers[q.id].map(v => v.toUpperCase().trim()).sort() : []
      const correctArr = correct.split(',').map(v => v.trim()).sort()
      isCorrect = userArr.length === correctArr.length && userArr.every((v, i) => v === correctArr[i])
    } else {
      isCorrect = userAns === correct
    }

    if (isCorrect) score++
    results[q.id] = {
      status: userAns ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered',
      correct,
      userAnswer: userAns || '',
      isCorrect,
      explanation: q.explanation || '',
    }
  })

  {/* Compute total + percentage */}
  const total = scorables.length
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0

  {/* Compute band */}
  const bandResult = config ? config.calculateBand({ score, total }) : { band: '', label: '', value: null }
  const band = bandResult.band || (percentage >= 90 ? 'A' : percentage >= 75 ? 'B' : percentage >= 50 ? 'C' : 'D')

  return {
    score,
    total,
    percentage,
    band,
    label: bandResult.label,
    value: bandResult.value,
    results,
  }
}
