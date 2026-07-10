export default {
  id: 'starters',
  type: 'young',
  title: 'Thi thử Starters',
  duration: 45,
  parts: [
    {
      id: 'part1',
      title: 'Part 1 - 5 Questions',
      instructions: 'Look and read. Put a tick (V) or a cross (X) in the box.',
      questions: [
        { id: 1, type: 'mcq', question: '🍎 This is an apple.', options: { TICK: '✓ Tick', CROSS: 'X Cross' }, answer: 'TICK', explanation: 'It is an apple.' },
        { id: 2, type: 'mcq', question: '🚲 This is a boat.', options: { TICK: '✓ Tick', CROSS: 'X Cross' }, answer: 'CROSS', explanation: 'It is a bicycle, not a boat.' },
        { id: 3, type: 'mcq', question: '🧸 This is a doll.', options: { TICK: '✓ Tick', CROSS: 'X Cross' }, answer: 'TICK', explanation: 'It is a doll.' },
        { id: 4, type: 'mcq', question: '🥛 This is milk.', options: { TICK: '✓ Tick', CROSS: 'X Cross' }, answer: 'TICK', explanation: 'It is milk.' },
        { id: 5, type: 'mcq', question: '🐘 This is a cat.', options: { TICK: '✓ Tick', CROSS: 'X Cross' }, answer: 'CROSS', explanation: 'It is an elephant, not a cat.' },
      ],
    },
    {
      id: 'part2',
      title: 'Part 2 - 5 Questions',
      instructions: 'Look and read. Write "yes" or "no".',
      questions: [
        { id: 6, type: 'fill-blank', question: '🌳👨‍👩‍👧‍👦☀️ There are four people in the family.', answer: 'YES', hint: 'Write yes or no' },
        { id: 7, type: 'fill-blank', question: 'It is raining.', answer: 'NO', hint: 'Write yes or no' },
        { id: 8, type: 'fill-blank', question: 'The boy is playing football.', answer: 'NO', hint: 'Write yes or no' },
        { id: 9, type: 'fill-blank', question: 'The girl has a balloon.', answer: 'YES', hint: 'Write yes or no' },
        { id: 10, type: 'fill-blank', question: 'They are at the park.', answer: 'YES', hint: 'Write yes or no' },
      ],
    },
    {
      id: 'part3',
      title: 'Part 3 - 5 Questions',
      instructions: 'Look at the letters. Write the words.',
      questions: [
        { id: 11, type: 'fill-blank', question: '🐕 Letters: o / g / d', answer: 'DOG', hint: 'D _ _' },
        { id: 12, type: 'fill-blank', question: '🦆 Letters: u / c / d / k', answer: 'DUCK', hint: 'D _ _ _' },
        { id: 13, type: 'fill-blank', question: '🐅 Letters: i / g / t / e / r', answer: 'TIGER', hint: 'T _ _ _ _' },
        { id: 14, type: 'fill-blank', question: '🦓 Letters: b / r / z / e / a', answer: 'ZEBRA', hint: 'Z _ _ _ _' },
        { id: 15, type: 'fill-blank', question: '🐘 Letters: p / h / a / n / t / l / e / e', answer: 'ELEPHANT', hint: 'E _ _ _ _ _ _ _' },
      ],
    },
    {
      id: 'part4',
      title: 'Part 4 - 5 Questions',
      instructions: 'Read this. Choose a word from the box. Write the correct word.',
      type: 'passage',
      passages: [
        {
          title: 'Cloze: What am I?',
          content: 'I am a big animal. I have four long ___(16)___. I have a very long face and two big ___(17)___. I live in a big field with my friends. I like eating ___(18)___ and I drink a lot of ___(19)___. Children like riding me. What am I? I am a ___(20)___.',
          questions: [
            { id: 16, type: 'fill-blank', question: 'I have four long ___.', answer: 'LEGS', hint: 'Choose: water, eyes, grass, legs, tails, house, apple' },
            { id: 17, type: 'fill-blank', question: 'I have a very long face and two big ___.', answer: 'EYES', hint: 'Choose: water, eyes, grass, legs, tails, house, apple' },
            { id: 18, type: 'fill-blank', question: 'I like eating ___.', answer: 'GRASS', hint: 'Choose: water, eyes, grass, legs, tails, house, apple' },
            { id: 19, type: 'fill-blank', question: 'I drink a lot of ___.', answer: 'WATER', hint: 'Choose: water, eyes, grass, legs, tails, house, apple' },
            { id: 20, type: 'fill-blank', question: 'What am I? I am a ___.', answer: 'HORSE', hint: 'The answer is a farm animal' },
          ],
        },
      ],
    },
    {
      id: 'part5',
      title: 'Part 5 - 5 Questions',
      instructions: 'Look at the pictures and read the questions. Write one-word answers.',
      questions: [
        { id: 21, type: 'fill-blank', question: '🏡🐈👩‍🍳 Where is the cat? — In the ___.', answer: 'HOUSE', hint: 'Kitchen? House?' },
        { id: 22, type: 'fill-blank', question: 'What is the cat doing? — It is ___.', answer: 'SLEEPING', hint: 'Sleeping? Eating?' },
        { id: 23, type: 'fill-blank', question: 'Who is in the kitchen with the cat? — A ___.', answer: 'WOMAN', hint: 'Woman? Girl?' },
        { id: 24, type: 'fill-blank', question: 'What is the woman cooking? — Some ___.', answer: 'FISH', hint: 'Fish? Food?' },
        { id: 25, type: 'fill-blank', question: 'Is the cat happy now? — ___.', answer: 'YES', hint: 'Yes / No' },
      ],
    },
  ],
}
