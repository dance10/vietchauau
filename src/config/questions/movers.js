export default {
  id: 'movers',
  type: 'young',
  title: 'Thi thử Movers',
  duration: 60,
  parts: [
    {
      id: 'part1',
      title: 'Part 1 - 6 Questions',
      instructions: 'Look and read. Choose the correct words and write them on the lines.',
      questions: [
        { id: 1, type: 'fill-blank', question: '🏠🚿📚🧑‍🌾🍳🪜🛗🛏️ You use this to dry yourself after a shower.', answer: 'TOWEL', hint: 'Choose from: basement, towel, library, farm, kitchen, stairs, lift, blanket' },
        { id: 2, type: 'fill-blank', question: 'This is a place where you can find many books to read.', answer: 'LIBRARY', hint: 'Choose from: basement, towel, library, farm, kitchen, stairs, lift, blanket' },
        { id: 3, type: 'fill-blank', question: 'This is a room under the ground in a house.', answer: 'BASEMENT', hint: 'Choose from: basement, towel, library, farm, kitchen, stairs, lift, blanket' },
        { id: 4, type: 'fill-blank', question: 'You put this on your bed when it is cold.', answer: 'BLANKET', hint: 'Choose from: basement, towel, library, farm, kitchen, stairs, lift, blanket' },
        { id: 5, type: 'fill-blank', question: 'You walk up or down these to go to another floor.', answer: 'STAIRS', hint: 'Choose from: basement, towel, library, farm, kitchen, stairs, lift, blanket' },
        { id: 6, type: 'fill-blank', question: 'This is a room where people cook food.', answer: 'KITCHEN', hint: 'Choose from: basement, towel, library, farm, kitchen, stairs, lift, blanket' },
      ],
    },
    {
      id: 'part2',
      title: 'Part 2 - 6 Questions',
      instructions: 'Look and read. Write "yes" or "no".',
      questions: [
        { id: 7, type: 'fill-blank', question: '👨‍🌾💧👩‍🌾👦👧🌳☀️ The father is watering the plants.', answer: 'YES', hint: 'Write yes or no' },
        { id: 8, type: 'fill-blank', question: 'The mother is wearing a red hat.', answer: 'NO', hint: 'Write yes or no' },
        { id: 9, type: 'fill-blank', question: 'The boy is climbing a tree.', answer: 'YES', hint: 'Write yes or no' },
        { id: 10, type: 'fill-blank', question: 'The girl is playing with a dog.', answer: 'NO', hint: 'Write yes or no' },
        { id: 11, type: 'fill-blank', question: 'There are some birds on the grass.', answer: 'NO', hint: 'Write yes or no' },
        { id: 12, type: 'fill-blank', question: 'The family is in the kitchen.', answer: 'NO', hint: 'Write yes or no' },
      ],
    },
    {
      id: 'part3',
      title: 'Part 3 - 3 Questions',
      instructions: 'Fred is talking to his friend Peter about his trip to the zoo. Choose the best response for Peter.',
      questions: [
        { id: 13, type: 'mcq', question: '💬 Fred: Hi Peter! Where did you go yesterday?', options: { A: 'I go to the cinema.', B: 'I went to the zoo with my brother.', C: 'Yes, I am.' }, answer: 'B', explanation: 'Past tense question needs past tense answer.' },
        { id: 14, type: 'mcq', question: 'Fred: Was the zoo exciting?', options: { A: 'Yes, it was great!', B: 'It is a big lion.', C: 'No, I don\'t.' }, answer: 'A', explanation: 'Question about past experience.' },
        { id: 15, type: 'mcq', question: 'Fred: What was your favorite animal?', options: { A: 'I like bananas.', B: 'The tigers were amazing.', C: 'I have a cat.' }, answer: 'B', explanation: 'Question about favorite animal at the zoo.' },
      ],
    },
    {
      id: 'part5',
      title: 'Part 5 - 4 Questions',
      instructions: 'Read the story. Write 1, 2 or 3 words to complete the sentences.',
      type: 'passage',
      passages: [
        {
          title: 'A Naughty Parrot',
          content: 'Mary has a green parrot called Polly. Polly is very clever. Yesterday, Mary\'s grandmother came to visit. She left her glasses on the table. Polly took them and flew to the top of the cupboard!',
          questions: [
            { id: 25, type: 'fill-blank', question: '🦜👓 Mary has a green parrot and its name is ___.', answer: 'POLLY', hint: '1 word' },
            { id: 26, type: 'fill-blank', question: 'Mary\'s ___ came to visit yesterday.', answer: 'GRANDMOTHER', hint: '1 word' },
            { id: 27, type: 'fill-blank', question: 'The grandmother put her ___ on the table.', answer: 'GLASSES', hint: '1 word' },
            { id: 28, type: 'fill-blank', question: 'Polly took the glasses and flew to the ___.', answer: 'TOP OF THE CUPBOARD', hint: '2-3 words' },
          ],
        },
      ],
    },
  ],
}
