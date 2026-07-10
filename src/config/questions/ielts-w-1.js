export default {
  id: 'ielts-w-1',
  type: 'ielts',
  title: 'IELTS Writing Mock 1',
  duration: 60,
  parts: [
    {
      id: 'task1',
      title: 'Task 1 - Academic Report',
      type: 'writing',
      instructions: 'Write at least 150 words in 20 minutes.',
      questions: [
        { id: 1, type: 'writing', taskDescription: 'The chart below shows the number of international tourists visiting a Caribbean island between 2010 and 2017.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\n(Line Graph: International Tourists to Caribbean Island 2010–2017 — Visitors staying on cruise ships vs staying on the island)', wordLimit: 200 },
      ],
    },
    {
      id: 'task2',
      title: 'Task 2 - Essay',
      type: 'writing',
      instructions: 'Write at least 250 words in 40 minutes.',
      questions: [
        { id: 2, type: 'writing', taskDescription: 'Some children spend hours every day on their smartphones.\n\nWhy is this the case?\n\nDo you think this is a positive or a negative development?', wordLimit: 350 },
      ],
    },
  ],
}
