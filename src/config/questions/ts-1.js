export default {
  id: 'ts-1',
  type: 'tuyensinh',
  title: 'Đề Tuyển Sinh Mẫu 1',
  duration: 90,
  parts: [
    {
      id: 'part1',
      title: 'Part 1 - Phonetics',
      instructions: 'Choose the word whose underlined part is pronounced differently.',
      questions: [
        { id: 1, type: 'mcq', question: 'Choose the word with a different pronunciation:', options: { A: 'cat', B: 'hat', C: 'name', D: 'map' }, answer: 'C' },
        { id: 2, type: 'mcq', question: 'Choose the word with a different pronunciation:', options: { A: 'book', B: 'look', C: 'food', D: 'good' }, answer: 'C' },
        { id: 3, type: 'mcq', question: 'Choose the word with a different stress pattern:', options: { A: 'teacher', B: 'student', C: 'police', D: 'table' }, answer: 'C' },
        { id: 4, type: 'mcq', question: 'Choose the word with a different stress pattern:', options: { A: 'beautiful', B: 'important', C: 'industry', D: 'dangerous' }, answer: 'B' },
      ],
    },
    {
      id: 'part2',
      title: 'Part 2 - Grammar & Vocabulary',
      instructions: 'Choose the correct answer.',
      questions: [
        { id: 5, type: 'mcq', question: 'She ___ English for three years.', options: { A: 'learn', B: 'is learning', C: 'has been learning', D: 'learned' }, answer: 'C' },
        { id: 6, type: 'mcq', question: 'I wish I ___ more time to prepare for the exam.', options: { A: 'have', B: 'had', C: 'would have', D: 'will have' }, answer: 'B' },
        { id: 7, type: 'mcq', question: 'The teacher asked us ___ quietly.', options: { A: 'work', B: 'working', C: 'to work', D: 'worked' }, answer: 'C' },
        { id: 8, type: 'mcq', question: 'We ___ to the cinema if it rains.', options: { A: 'don\'t go', B: 'won\'t go', C: 'didn\'t go', D: 'haven\'t gone' }, answer: 'B' },
      ],
    },
    {
      id: 'part3',
      title: 'Part 3 - Reading Comprehension',
      type: 'passage',
      passages: [
        {
          title: 'Reading Passage',
          content: 'Vietnam is a country with a rich cultural heritage. From the ancient temples of Hue to the bustling streets of Ho Chi Minh City, there is much to explore. The country has made significant progress in education and economic development over the past decades.',
          questions: [
            { id: 9, type: 'mcq', question: 'What is the main idea of the passage?', options: { A: 'Vietnam has beautiful beaches', B: 'Vietnam has a rich cultural heritage', C: 'Vietnam is a small country', D: 'Vietnam has modern cities' }, answer: 'B' },
            { id: 10, type: 'mcq', question: 'What is mentioned about Hue?', options: { A: 'It has many shops', B: 'It has ancient temples', C: 'It has modern buildings', D: 'It has beaches' }, answer: 'B' },
          ],
        },
      ],
    },
  ],
}
