const flyers2 = {
  id: 'flyers',
  type: 'young',
  title: 'Thi thử Flyers',
  duration: 75,
  parts: [
    {
      id: 'part1',
      title: 'Part 1 - 10 Questions',
      instructions: 'Choose the correct word for each description.',
      questions: [
        { id: 1, type: 'fill-blank', question: 'You use these to cut paper or hair.', answer: 'SCISSORS', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
        { id: 2, type: 'fill-blank', question: 'This person looks at your teeth to keep them healthy.', answer: 'DENTIST', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
        { id: 3, type: 'fill-blank', question: 'Bees make this and many people like eating it for breakfast.', answer: 'HONEY', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
        { id: 4, type: 'fill-blank', question: 'You wear this around your waist to hold up your trousers.', answer: 'BELT', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
        { id: 5, type: 'fill-blank', question: 'You can see yourself when you look in this object.', answer: 'MIRROR', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
        { id: 6, type: 'fill-blank', question: 'Birds and planes use these to fly high in the sky.', answer: 'WINGS', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
        { id: 7, type: 'fill-blank', question: 'You use this to wash your hands or body with water and shower.', answer: 'SOAP', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
        { id: 8, type: 'fill-blank', question: 'You use this to help you see in the dark when you go camping.', answer: 'TORCH', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
        { id: 9, type: 'fill-blank', question: 'This is a very large bird that lives high in the mountains.', answer: 'EAGLE', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
        { id: 10, type: 'fill-blank', question: 'This is a large area where lots of trees and plants grow.', answer: 'FOREST', hint: 'cinema, dentist, honey, torch, scissors, belt, mirror, wings, soap, eagle, forest' },
      ],
    },
    {
      id: 'part2',
      title: 'Part 2 - 5 Questions',
      instructions: 'William is talking to Sarah. Choose the best answer (A-G) for each question.',
      questions: [
        { id: 11, type: 'mcq', question: '💬 William: Hi, Sarah. What are you doing?', options: { E: 'I\'m looking for my history book.', A: 'Yes, I have to finish it today.', D: 'That\'s very kind of you, thanks.', B: 'I think I left it in the library.', G: 'Great idea! Let\'s go.', C: 'It\'s next to the supermarket.', F: 'No, I prefer chocolate ice cream.' }, answer: 'E', explanation: 'Sarah is looking for her history book.' },
        { id: 12, type: 'mcq', question: 'William: Is it for our history homework?', options: { A: 'Yes, I have to finish it today.', D: 'That\'s very kind of you, thanks.', B: 'I think I left it in the library.', G: 'Great idea! Let\'s go.', E: 'I\'m looking for my history book.', C: 'It\'s next to the supermarket.', F: 'No, I prefer chocolate ice cream.' }, answer: 'A', explanation: 'Yes, it is for the history homework.' },
        { id: 13, type: 'mcq', question: 'William: Can I help you find it?', options: { D: 'That\'s very kind of you, thanks.', B: 'I think I left it in the library.', G: 'Great idea! Let\'s go.', A: 'Yes, I have to finish it today.', E: 'I\'m looking for my history book.', C: 'It\'s next to the supermarket.', F: 'No, I prefer chocolate ice cream.' }, answer: 'D', explanation: 'She thanks him for offering to help.' },
        { id: 14, type: 'mcq', question: 'William: Where did you last have it?', options: { B: 'I think I left it in the library.', G: 'Great idea! Let\'s go.', D: 'That\'s very kind of you, thanks.', A: 'Yes, I have to finish it today.', E: 'I\'m looking for my history book.', C: 'It\'s next to the supermarket.', F: 'No, I prefer chocolate ice cream.' }, answer: 'B', explanation: 'She thinks she left it in the library.' },
        { id: 15, type: 'mcq', question: 'William: Let\'s go and look in the library now.', options: { G: 'Great idea! Let\'s go.', B: 'I think I left it in the library.', D: 'That\'s very kind of you, thanks.', A: 'Yes, I have to finish it today.', E: 'I\'m looking for my history book.', C: 'It\'s next to the supermarket.', F: 'No, I prefer chocolate ice cream.' }, answer: 'G', explanation: 'She agrees to go to the library.' },
      ],
    },
    {
      id: 'part3',
      title: 'Part 3 - 6 Questions',
      instructions: 'Read the story and choose the correct words. Then choose the best title.',
      type: 'passage',
      passages: [
        {
          title: 'Daisy\'s Day Out',
          content: 'Last Saturday, Daisy and her family went to the ___(16)___. It was a beautiful day. Daisy\'s dad took his ___(17)___ because he wanted to take pictures of the animals. They saw a large elephant eating ___(18)___. Daisy was hungry, so they sat on the grass and had a ___(19)___. Suddenly, a small monkey came and took a piece of bread! Everyone started to ___(20)___. It was a very funny day.',
          questions: [
            { id: 16, type: 'mcq', question: 'Daisy and her family went to the ___.', options: { A: 'zoo', B: 'school', C: 'office' }, answer: 'A', explanation: 'They went to the zoo to see animals.' },
            { id: 17, type: 'mcq', question: 'Daisy\'s dad took his ___.', options: { A: 'camera', B: 'book', C: 'guitar' }, answer: 'A', explanation: 'He wanted to take pictures, so he took his camera.' },
            { id: 18, type: 'mcq', question: 'They saw a large elephant eating ___.', options: { A: 'grass', B: 'meat', C: 'pizza' }, answer: 'A', explanation: 'Elephants eat grass and plants.' },
            { id: 19, type: 'mcq', question: 'They sat on the grass and had a ___.', options: { A: 'picnic', B: 'bath', C: 'lesson' }, answer: 'A', explanation: 'They had a picnic on the grass.' },
            { id: 20, type: 'mcq', question: 'Everyone started to ___.', options: { A: 'laugh', B: 'cry', C: 'sleep' }, answer: 'A', explanation: 'The monkey\'s trick was funny, so they laughed.' },
            { id: 21, type: 'mcq', question: 'What is the best title for this story?', options: { A: 'A Day at the Zoo', B: 'A Funny Picnic', C: 'Daisy\'s New Pet' }, answer: 'A', explanation: 'The story is about a day at the zoo with a funny incident.' },
          ],
        },
      ],
    },
    {
      id: 'part4',
      title: 'Part 4 - 6 Questions',
      instructions: 'Read the text. Choose the correct answer.',
      type: 'passage',
      passages: [
        {
          title: 'The Sun Bear',
          content: 'Sun bears are the smallest bears in the world. They live in the forests of Southeast Asia. Baby sun bears are very small and stay with their mothers for about two years. Sun bears love eating honey, fruit and insects. Sadly, these amazing animals are in danger because people are cutting down the forests where they live.',
          questions: [
            { id: 22, type: 'mcq', question: 'What type of bear is the sun bear?', options: { A: 'The biggest bear', B: 'The smallest bear', C: 'The fastest bear' }, answer: 'B', explanation: 'Sun bears are the smallest bears in the world.' },
            { id: 23, type: 'mcq', question: 'Where do sun bears live?', options: { A: 'Africa', B: 'Southeast Asia', C: 'South America' }, answer: 'B', explanation: 'They live in the forests of Southeast Asia.' },
            { id: 24, type: 'mcq', question: 'How long do baby sun bears stay with their mothers?', options: { A: 'One year', B: 'Two years', C: 'Three years' }, answer: 'B', explanation: 'They stay for about two years.' },
            { id: 25, type: 'mcq', question: 'What do sun bears love eating?', options: { A: 'Meat and fish', B: 'Honey, fruit and insects', C: 'Leaves and flowers' }, answer: 'B', explanation: 'They love eating honey, fruit and insects.' },
            { id: 26, type: 'mcq', question: 'Why are sun bears in danger?', options: { A: 'Because people hunt them', B: 'Because forests are being cut down', C: 'Because they have no food' }, answer: 'B', explanation: 'They are in danger because people are cutting down forests.' },
            { id: 27, type: 'mcq', question: 'Sun bears are described as ___.', options: { A: 'dangerous', B: 'amazing', C: 'lazy' }, answer: 'B', explanation: 'The text says "these amazing animals".' },
          ],
        },
      ],
    },
    {
      id: 'part5',
      title: 'Part 5 - 7 Questions',
      instructions: 'Complete the email. Write one word on each line.',
      questions: [
        { id: 28, type: 'fill-blank', question: 'Hi Tom, Thanks for your ___.', answer: 'EMAIL', hint: 'A message online - starts with E' },
        { id: 29, type: 'fill-blank', question: 'I would love to come to your birthday ___.', answer: 'PARTY', hint: 'Celebration - starts with P' },
        { id: 30, type: 'fill-blank', question: 'Can I bring my friend ___ too?', answer: 'LUCY', hint: 'A girl\'s name' },
        { id: 31, type: 'fill-blank', question: 'What time does the party ___?', answer: 'START', hint: 'Begin - starts with S' },
        { id: 32, type: 'fill-blank', question: 'Should I bring any ___ or drinks?', answer: 'FOOD', hint: 'Things you eat - starts with F' },
        { id: 33, type: 'fill-blank', question: 'Please send me your new ___ so I can find it.', answer: 'ADDRESS', hint: 'Location of the house - starts with A' },
        { id: 34, type: 'fill-blank', question: 'See you there! Love, Daisy.', answer: 'THANKS', hint: 'Wait... I mean Best ___' },
      ],
    },
    {
      id: 'part6',
      title: 'Part 6 - 10 Questions',
      instructions: 'Read the dictionary definitions and complete the words.',
      type: 'passage',
      passages: [
        {
          title: 'Dictionary Definitions',
          content: 'A ___(35)___ is a person who lives near you. A ___(36)___ is a person who takes photos. If you help someone, you are ___(37)___. The day after today is ___(38)___. A ___(39)___ is the child of your aunt or uncle. The opposite of "cheap" is ___(40)___. A ___(41)___ is a place with many trees. If something is ___(42)___, it means it is not difficult. A ___(43)___ is a baby cat. When you go to another country, you need a ___(44)___.',
          questions: [
            { id: 35, type: 'fill-blank', question: 'A person who lives near you.', answer: 'NEIGHBOUR', hint: 'n _ _ _ _ _ _ _' },
            { id: 36, type: 'fill-blank', question: 'A person who takes photos.', answer: 'PHOTOGRAPHER', hint: 'p _ _ _ _ _ _ _ _ _ _' },
            { id: 37, type: 'fill-blank', question: 'If you help someone, you are ___.', answer: 'HELPFUL', hint: 'h _ _ _ _ _ _' },
            { id: 38, type: 'fill-blank', question: 'The day after today.', answer: 'TOMORROW', hint: 't _ _ _ _ _ _ _' },
            { id: 39, type: 'fill-blank', question: 'The child of your aunt or uncle.', answer: 'COUSIN', hint: 'c _ _ _ _ _' },
            { id: 40, type: 'fill-blank', question: 'The opposite of "cheap".', answer: 'EXPENSIVE', hint: 'e _ _ _ _ _ _ _ _' },
            { id: 41, type: 'fill-blank', question: 'A place with many trees.', answer: 'FOREST', hint: 'f _ _ _ _ _ _' },
            { id: 42, type: 'fill-blank', question: 'If something is not difficult.', answer: 'EASY', hint: 'e _ _ _' },
            { id: 43, type: 'fill-blank', question: 'A baby cat.', answer: 'KITTEN', hint: 'k _ _ _ _ _' },
            { id: 44, type: 'fill-blank', question: 'You need this to go to another country.', answer: 'PASSPORT', hint: 'p _ _ _ _ _ _ _' },
          ],
        },
      ],
    },
  ],
}

export default flyers2
