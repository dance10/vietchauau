export default {
  id: 'toeic-l-1',
  type: 'toeic',
  title: 'TOEIC Listening Test 1',
  duration: 45,
  parts: [
    {
      id: 'part1',
      title: 'Part 1 - Photographs',
      instructions: 'Listen to the audio and choose the statement that best describes the photograph.',
      questions: [
        { id: 1, type: 'mcq', question: 'What is happening in the photograph?', options: { A: 'People are having a meeting', B: 'People are eating lunch', C: 'People are walking outside', D: 'People are reading books' }, answer: 'A' },
        { id: 2, type: 'mcq', question: 'What can be seen in the background?', options: { A: 'A park', B: 'An office building', C: 'A restaurant', D: 'A library' }, answer: 'B' },
        { id: 3, type: 'mcq', question: 'What is the man holding?', options: { A: 'A phone', B: 'A document', C: 'A cup of coffee', D: 'A pen' }, answer: 'B' },
        { id: 4, type: 'mcq', question: 'How many people are in the photograph?', options: { A: 'One', B: 'Two', C: 'Three', D: 'Four' }, answer: 'C' },
        { id: 5, type: 'mcq', question: 'What is the woman doing?', options: { A: 'Writing notes', B: 'Speaking on the phone', C: 'Typing on a computer', D: 'Reading a book' }, answer: 'A' },
      ],
    },
  ],
}
