export default {
  id: 'ket-2',
  type: 'ket',
  title: 'KET Mock Test 2',
  duration: 100,
  parts: [
    {
      id: 'part1',
      title: 'Part 1 - Questions 1-6',
      instructions: 'For each question, choose the correct answer.',
      questions: [
        { id: 1, type: 'mcq', question: '📋 Library Notice: "Please return all borrowed books by Friday. Late returns will incur a small fine." What does the notice say?', options: { A: 'You can return books over the weekend.', B: 'There is no cost if you return books by Friday.', C: 'You will have to pay money if you miss the deadline.' }, answer: 'C', explanation: 'Late returns incur a fine.' },
        { id: 2, type: 'mcq', question: '📧 Jack: "Sam, could you bring the photography book I lent you to school tomorrow?" Why is Jack writing?', options: { A: 'To borrow a book from Sam.', B: 'To ask Sam to return something.', C: 'To offer help with photography.' }, answer: 'B', explanation: 'Jack wants Sam to return the book he lent.' },
        { id: 3, type: 'mcq', question: '☕ Cafe Special: "Free drink with every large pizza ordered before 6 PM." What is true about the offer?', options: { A: 'You can get a cheap pizza after 6 PM.', B: "You don't pay for a drink if you buy a big pizza early.", C: 'You get a free drink all day.' }, answer: 'B', explanation: 'Free drink with large pizza before 6 PM.' },
        { id: 4, type: 'mcq', question: '💻 Library Computers: "For research only. No social media or gaming." How should students use the computers?', options: { A: 'To play games.', B: 'Only for study or finding information.', C: 'To ask the teacher about social media.' }, answer: 'B', explanation: 'Computers are for research only.' },
        { id: 5, type: 'mcq', question: '📱 Sarah: "Jane, the concert starts at 7:30. Let\'s meet at the station at 6:45 and eat first." What is Sarah\'s plan?', options: { A: 'Have dinner before the concert.', B: 'Go to the concert at 6:45.', C: 'Meet at the concert hall.' }, answer: 'A', explanation: 'Sarah wants to eat first, then go to the concert.' },
        { id: 6, type: 'mcq', question: '🛍️ Special Offer: "Buy 2 T-shirts, get the 3rd at half price." What is the deal?', options: { A: 'All T-shirts are half price.', B: 'You pay full price for two and 50% for the next one.', C: 'Buy 3 T-shirts and pay for 2.' }, answer: 'B', explanation: 'Buy 2 at full price, 3rd at half price.' },
      ],
    },
    {
      id: 'part2',
      title: 'Part 2 - Questions 7-13',
      instructions: 'Choose the correct club (A, B or C) for each person.',
      questions: [
        { id: 7, type: 'mcq', question: '🏟️ Best for team sports on weekday evenings?', options: { A: 'The Blue Whale', B: 'Victory Sports', C: 'Sunrise Gym' }, answer: 'B', explanation: 'Victory Sports has football and basketball on Tue/Thu evenings.' },
        { id: 8, type: 'mcq', question: '⏰ Opens very early in the morning?', options: { A: 'The Blue Whale', B: 'Victory Sports', C: 'Sunrise Gym' }, answer: 'C', explanation: 'Sunrise Gym opens at 5 AM.' },
        { id: 9, type: 'mcq', question: '🏊 Swimming classes with teachers?', options: { A: 'The Blue Whale', B: 'Victory Sports', C: 'Sunrise Gym' }, answer: 'A', explanation: 'The Blue Whale has swimming classes for all levels.' },
        { id: 10, type: 'mcq', question: '🔓 Free lockers available?', options: { A: 'The Blue Whale', B: 'Victory Sports', C: 'Sunrise Gym' }, answer: 'B', explanation: 'Victory Sports has free lockers.' },
        { id: 11, type: 'mcq', question: '💰 No monthly fee required?', options: { A: 'The Blue Whale', B: 'Victory Sports', C: 'Sunrise Gym' }, answer: 'C', explanation: 'Sunrise Gym charges per visit, no monthly fee.' },
        { id: 12, type: 'mcq', question: '🚌 Located next to the bus station?', options: { A: 'The Blue Whale', B: 'Victory Sports', C: 'Sunrise Gym' }, answer: 'A', explanation: 'The Blue Whale is near the bus station.' },
        { id: 13, type: 'mcq', question: '🏆 Has monthly competitions?', options: { A: 'The Blue Whale', B: 'Victory Sports', C: 'Sunrise Gym' }, answer: 'B', explanation: 'Victory Sports holds monthly competitions.' },
      ],
    },
    {
      id: 'part3',
      title: 'Part 3 - Questions 14-18',
      instructions: 'Read the text and choose A, B or C.',
      type: 'passage',
      passages: [
        {
          title: 'My New Hobby',
          content: 'Mark\'s grandfather gave him a pair of binoculars for his birthday. At first, Mark thought bird watching would be boring. But when he saw a beautiful kingfisher by the river, he became hooked. Now, he goes to the forest every Saturday to watch birds. He draws the birds he sees in a notebook. His friends prefer playing computer games, but Mark loves being outdoors.',
          questions: [
            { id: 14, type: 'mcq', question: 'What started Mark\'s interest in bird watching?', options: { A: 'A school project.', B: 'A birthday present.', C: 'A TV program.' }, answer: 'B', explanation: 'His grandfather gave him binoculars for his birthday.' },
            { id: 15, type: 'mcq', question: 'How did Mark feel about bird watching at first?', options: { A: 'He thought it would be boring.', B: 'He was very excited.', C: 'He already loved it.' }, answer: 'A', explanation: 'He thought bird watching would be boring at first.' },
            { id: 16, type: 'mcq', question: 'True or False: He goes to the forest every Saturday.', options: { A: 'True', B: 'False' }, answer: 'A', explanation: 'He goes to the forest every Saturday.' },
            { id: 17, type: 'mcq', question: 'True or False: His friends prefer gaming.', options: { A: 'True', B: 'False' }, answer: 'A', explanation: 'His friends prefer playing computer games.' },
            { id: 18, type: 'mcq', question: 'True or False: He draws the birds in a notebook.', options: { A: 'True', B: 'False' }, answer: 'A', explanation: 'He draws the birds he sees in a notebook.' },
          ],
        },
      ],
    },
    {
      id: 'part4',
      title: 'Part 4 - Questions 19-24',
      instructions: 'Choose A, B or C to complete the text about chocolate.',
      type: 'passage',
      passages: [
        {
          title: 'The History of Chocolate',
          content: 'Chocolate ___(19)___ first discovered a long time ago. People ___(20)___ that the cacao plant could be used to make a delicious drink. They used cacao ___(21)___ to make the first chocolate. Over time, chocolate became very ___(22)___ all around the world. Today, many ___(23)___ produce chocolate in different ___(24)___.',
          questions: [
            { id: 19, type: 'mcq', question: 'Chocolate ___ first discovered long ago.', options: { A: 'was', B: 'is', C: 'were' }, answer: 'A', explanation: 'Past tense: was discovered.' },
            { id: 20, type: 'mcq', question: 'People ___ that the cacao plant could be used.', options: { A: 'invented', B: 'discovered', C: 'thought' }, answer: 'B', explanation: 'People discovered the use of cacao plants.' },
            { id: 21, type: 'mcq', question: 'They used cacao ___ to make the first chocolate.', options: { A: 'beans', B: 'leaves', C: 'roots' }, answer: 'A', explanation: 'Cacao beans are used to make chocolate.' },
            { id: 22, type: 'mcq', question: 'Chocolate became very ___ all around the world.', options: { A: 'popular', B: 'famous', C: 'important' }, answer: 'A', explanation: 'Chocolate became popular worldwide.' },
            { id: 23, type: 'mcq', question: 'Today, many ___ produce chocolate.', options: { A: 'shops', B: 'factories', C: 'markets' }, answer: 'B', explanation: 'Factories produce chocolate.' },
            { id: 24, type: 'mcq', question: 'They produce chocolate in different ___.', options: { A: 'flavors', B: 'colors', C: 'sizes' }, answer: 'A', explanation: 'Different flavors of chocolate.' },
          ],
        },
      ],
    },
    {
      id: 'part5',
      title: 'Part 5 - Questions 25-30',
      instructions: 'Write ONE word for each gap.',
      type: 'passage',
      passages: [
        {
          title: 'Party Invitation',
          content: 'Hi Chris, I\'m writing ___(25)___ invite you to my birthday party. It\'s ___(26)___ Saturday evening at my house. Please ___(27)___ your swimming things because we have a pool! The party starts ___(28)___ 6 PM. We\'ll have lots of food and drinks, and you can stay ___(29)___ us until late. Please let me know if you can come. Hope to hear ___(30)___ you soon! Best, Alex',
          questions: [
            { id: 25, type: 'fill-blank', question: 'I\'m writing ___ invite you.', answer: 'TO', hint: '1 word (infinitive)' },
            { id: 26, type: 'fill-blank', question: 'It\'s ___ Saturday evening.', answer: 'ON', hint: '1 word (preposition for days)' },
            { id: 27, type: 'fill-blank', question: 'Please ___ your swimming things.', answer: 'BRING', hint: '1 word (verb)' },
            { id: 28, type: 'fill-blank', question: 'The party starts ___ 6 PM.', answer: 'AT', hint: '1 word (preposition for time)' },
            { id: 29, type: 'fill-blank', question: 'You can stay ___ us until late.', answer: 'WITH', hint: '1 word (preposition)' },
            { id: 30, type: 'fill-blank', question: 'Hope to hear ___ you soon.', answer: 'FROM', hint: '1 word (preposition)' },
          ],
        },
      ],
    },
    {
      id: 'part6',
      title: 'Part 6 - Email Writing',
      instructions: 'Write an email to Chris (25+ words).',
      questions: [
        { id: 31, type: 'writing', question: 'Write an email to Chris about going shopping this weekend.', taskDescription: 'You want to go shopping this weekend. Tell Chris:\n- what you want to buy\n- which day you want to go\n- where to meet\n\nWrite 25+ words.', wordLimit: 25 },
      ],
    },
    {
      id: 'part7',
      title: 'Part 7 - Picture Story',
      instructions: 'Write a story based on the pictures (35+ words).',
      questions: [
        { id: 32, type: 'writing', question: 'Write a story based on the pictures.', taskDescription: 'Look at the 3 pictures:\n1. A girl with her bicycle\n2. The bike hits a rock, the girl falls\n3. A boy helps her up\n\nWrite 35+ words.', wordLimit: 35 },
      ],
    },
  ],
}
