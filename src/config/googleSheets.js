const GOOGLE_SHEET_URL = 'PASTE_YOUR_URL_HERE'

export async function saveResult({ studentName, examType, score, total, band, location, answers }) {
  if (!GOOGLE_SHEET_URL || GOOGLE_SHEET_URL === 'PASTE_YOUR_URL_HERE') {
    console.warn('GOOGLE_SHEET_URL not configured')
    return false
  }
  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ student_name: studentName, exam_type: examType, score, total, band, location, answers }),
    })
    return true
  } catch (e) {
    console.error('Save result failed:', e)
    return false
  }
}
