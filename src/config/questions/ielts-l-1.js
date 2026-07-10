export default {
  id: 'ielts-l-1',
  type: 'ielts',
  title: 'IELTS Listening Mock 1',
  duration: 30,
  parts: [
    {
      id: 'section1',
      title: 'Section 1 - Conversation',
      instructions: 'Listen to the conversation and answer the questions.',
      questions: [
        { id: 1, type: 'mcq', question: 'What is the woman looking for?', options: { A: 'A hotel', B: 'A restaurant', C: 'A library', D: 'A hospital' }, answer: 'A' },
        { id: 2, type: 'mcq', question: 'How much does the room cost per night?', options: { A: '$50', B: '$75', C: '$100', D: '$120' }, answer: 'C' },
        { id: 3, type: 'mcq', question: 'What meal is included?', options: { A: 'Breakfast', B: 'Lunch', C: 'Dinner', D: 'No meals' }, answer: 'A' },
        { id: 4, type: 'mcq', question: 'When does she plan to arrive?', options: { A: 'Monday', B: 'Tuesday', C: 'Friday', D: 'Saturday' }, answer: 'D' },
        { id: 5, type: 'fill-blank', question: 'The woman\'s name is ___.', hint: 'First name', answer: 'SARAH' },
        { id: 6, type: 'fill-blank', question: 'Her phone number is 555-___.', hint: 'Three digits', answer: '234' },
      ],
    },
  ],
}
