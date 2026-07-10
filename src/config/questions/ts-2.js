export default {
  id: 'ts-2',
  type: 'tuyensinh',
  title: 'Đề Tuyển Sinh Mẫu 2',
  duration: 90,
  parts: [
    {
      id: 'part1',
      title: 'Part 1 - Phonetics',
      instructions: 'Choose the word whose underlined part is pronounced differently.',
      questions: [
        { id: 1, type: 'mcq', question: 'Choose the word with a different pronunciation:', options: { A: 'sun', B: 'fun', C: 'music', D: 'run' }, answer: 'C' },
        { id: 2, type: 'mcq', question: 'Choose the word with a different pronunciation:', options: { A: 'clear', B: 'bear', C: 'dear', D: 'near' }, answer: 'B' },
        { id: 3, type: 'mcq', question: 'Choose the word with a different stress pattern:', options: { A: 'hotel', B: 'concert', C: 'travel', D: 'garden' }, answer: 'A' },
        { id: 4, type: 'mcq', question: 'Choose the word with a different stress pattern:', options: { A: 'education', B: 'information', C: 'technology', D: 'beautiful' }, answer: 'D' },
      ],
    },
    {
      id: 'part2',
      title: 'Part 2 - Grammar & Vocabulary',
      instructions: 'Choose the correct answer.',
      questions: [
        { id: 5, type: 'mcq', question: 'She asked me where I ___.', options: { A: 'live', B: 'lived', C: 'living', D: 'to live' }, answer: 'B' },
        { id: 6, type: 'mcq', question: 'It is raining, so we ___ stay indoors.', options: { A: 'must', B: 'can', C: 'should', D: 'would' }, answer: 'A' },
        { id: 7, type: 'mcq', question: 'The book ___ by a famous author.', options: { A: 'wrote', B: 'was written', C: 'has written', D: 'is writing' }, answer: 'B' },
        { id: 8, type: 'mcq', question: 'Neither the teacher nor the students ___ present.', options: { A: 'is', B: 'was', C: 'were', D: 'has been' }, answer: 'C' },
      ],
    },
    {
      id: 'part3',
      title: 'Part 3 - Reading Comprehension',
      type: 'passage',
      passages: [
        {
          title: 'Reading Passage',
          content: 'English is considered a global language. It is spoken by millions of people around the world as either a first or second language. Learning English opens up opportunities for education, career, and travel.',
          questions: [
            { id: 9, type: 'mcq', question: 'How is English described in the passage?', options: { A: 'A difficult language', B: 'A global language', C: 'A dying language', D: 'A rare language' }, answer: 'B' },
            { id: 10, type: 'mcq', question: 'What does learning English provide?', options: { A: 'Only travel opportunities', B: 'Only career opportunities', C: 'Opportunities for education, career, and travel', D: 'Only education opportunities' }, answer: 'C' },
          ],
        },
      ],
    },
  ],
}
