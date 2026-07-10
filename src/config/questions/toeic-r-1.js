export default {
  id: 'toeic-r-1',
  type: 'toeic',
  title: 'TOEIC Reading Test 1',
  duration: 75,
  parts: [
    {
      id: 'part5',
      title: 'Part 5: Incomplete Sentences',
      type: 'mcq',
      questions: [
        { id: 1, type: 'mcq', question: "Ms. Park decided to ------- her resignation after the successful merger.", options: {A: "withdraw", B: "withdrawing", C: "withdrawal", D: "withdrew"}, answer: "A", explanation: "Sau 'decided to' + V-inf." },
        { id: 2, type: 'mcq', question: "The marketing department is ------- looking for a new graphic designer.", options: {A: "active", B: "activity", C: "actively", D: "activate"}, answer: "C", explanation: "Cần trạng từ bổ nghĩa cho động từ." },
        { id: 3, type: 'mcq', question: "All employees must attend the training ------- they have previous experience.", options: {A: "even if", B: "despite", C: "in spite of", D: "regarding"}, answer: "A", explanation: "'Even if' nối 2 mệnh đề." },
        { id: 4, type: 'mcq', question: "The new software is designed to help users organize their files more -------.", options: {A: "efficient", B: "efficiency", C: "efficiently", D: "efficiencies"}, answer: "C", explanation: "Cần trạng từ bổ nghĩa cho 'organize'." },
        { id: 5, type: 'mcq', question: "Please review the attached document for ------- information on the policy change.", options: {A: "addition", B: "additional", C: "additionally", D: "additive"}, answer: "B", explanation: "Cần tính từ bổ nghĩa cho danh từ 'information'." },
        { id: 6, type: 'mcq', question: "The CEO was ------- impressed with the team's performance last quarter.", options: {A: "highly", B: "high", C: "height", D: "highest"}, answer: "A", explanation: "'Highly impressed' là cụm từ cố định." },
        { id: 7, type: 'mcq', question: "The seminar has been postponed ------- a conflict in the guest speaker's schedule.", options: {A: "because", B: "due to", C: "since", D: "as"}, answer: "B", explanation: "'Due to' + cụm danh từ." },
        { id: 8, type: 'mcq', question: "Mr. Kim is the person ------- is responsible for the final budget approval.", options: {A: "whose", B: "which", C: "whom", D: "who"}, answer: "D", explanation: "Đại từ quan hệ 'who' thay cho người làm chủ ngữ." },
        { id: 9, type: 'mcq', question: "The application process is ------- long, so please start early.", options: {A: "rather", B: "more", C: "most", D: "so"}, answer: "A", explanation: "'Rather long' (khá dài)." },
        { id: 10, type: 'mcq', question: "The contract will be valid ------- all parties have signed the agreement.", options: {A: "once", B: "during", C: "between", D: "for"}, answer: "A", explanation: "'Once' (một khi) nối 2 mệnh đề." },
      ],
    },
    {
      id: 'part6',
      title: 'Part 6: Text Completion',
      type: 'passage',
      passages: [
        {
          content: "Starting next Monday, the company cafeteria will be closed for renovations. These updates are necessary to improve the quality of our dining services. During this period, a food truck will be available in the parking lot from 11:30 AM to 1:30 PM. Please bring your own lunch if you prefer. We apologize for any inconvenience and appreciate your patience. The cafeteria is expected to reopen on the first of next month.",
          questions: [
            { id: 11, type: 'mcq', options: {A: "improve", B: "improved", C: "improving", D: "improvement"}, answer: "A", explanation: "V-inf sau 'to' chỉ mục đích." },
            { id: 12, type: 'mcq', options: {A: "The cafeteria will reopen today.", B: "Please bring your own lunch if you prefer.", C: "Renovations were already finished.", D: "The food truck is free of charge."}, answer: "B", explanation: "Hợp logic nhất." },
            { id: 13, type: 'mcq', options: {A: "patient", B: "patience", C: "patiently", D: "patience's"}, answer: "B", explanation: "Danh từ sau 'your'." },
            { id: 14, type: 'mcq', options: {A: "reopen", B: "reopened", C: "reopening", D: "reopens"}, answer: "A", explanation: "Sau 'expected to' + V-inf." },
          ],
        },
        {
          content: "To all employees: Please be aware that a new parking policy will go into effect on July 1st. Employees will now be required to register their vehicles at the security office. Failure to do so may result in a fine. This change is intended to ensure that only authorized personnel use our facility. We thank you for your cooperation.",
          questions: [
            { id: 15, type: 'mcq', options: {A: "required", B: "require", C: "requiring", D: "requirement"}, answer: "A", explanation: "Bị động 'be required to'." },
            { id: 16, type: 'mcq', options: {A: "Parking is free for visitors.", B: "Failure to do so may result in a fine.", C: "The security office is closed.", D: "New cars are expensive."}, answer: "B", explanation: "Cảnh báo hậu quả." },
            { id: 17, type: 'mcq', options: {A: "insure", B: "ensure", C: "sure", D: "surely"}, answer: "B", explanation: "'Ensure' (đảm bảo)." },
            { id: 18, type: 'mcq', options: {A: "cooperate", B: "cooperation", C: "cooperated", D: "cooperative"}, answer: "B", explanation: "Danh từ 'cooperation'." },
          ],
        },
      ],
    },
    {
      id: 'part7',
      title: 'Part 7: Reading Comprehension',
      type: 'passage',
      passages: [
        {
          title: 'Photography Workshop',
          content: "Join us for a 3-day workshop at Green Park Studios! Whether you are a beginner or looking to sharpen your skills, our professional instructors will help you master your camera. Dates: May 15-17. Price: $150 (Includes lunch). Special offer: Register before April 20th and get 20% off!",
          questions: [
            { id: 19, type: 'mcq', question: "How long is the workshop?", options: {A: "1 day", B: "3 days", C: "20 days", D: "A month"}, answer: "B", explanation: "3-day workshop." },
            { id: 20, type: 'mcq', question: "What is included in the price?", options: {A: "A new camera", B: "Instructors' fees", C: "Lunch", D: "Transportation"}, answer: "C", explanation: "Includes lunch." },
            { id: 21, type: 'mcq', question: "Who is the workshop for?", options: {A: "Only professionals", B: "Children", C: "Anyone interested in photography", D: "Green Park residents"}, answer: "C", explanation: "Cho beginner + người muốn nâng cao." },
            { id: 22, type: 'mcq', question: "How can someone get a discount?", options: {A: "By bringing their own camera", B: "By registering early", C: "By coming with a friend", D: "By being a student"}, answer: "B", explanation: "Register before April 20th." },
          ],
        },
        {
          title: 'Internal Memo',
          content: "To: All Staff. From: HR Department. Subject: Annual Health Check. The annual health check is scheduled for next Wednesday, October 5th. All staff members are invited to participate at the on-site clinic. Tests will include blood pressure and vision checks. Please sign up for a time slot by the end of today.",
          questions: [
            { id: 23, type: 'mcq', question: "What is happening next Wednesday?", options: {A: "A holiday", B: "A staff meeting", C: "A health check", D: "A blood donation drive"}, answer: "C", explanation: "Annual Health Check." },
            { id: 24, type: 'mcq', question: "Where will the activity take place?", options: {A: "At a local hospital", B: "At the HR office", C: "At the on-site clinic", D: "In the parking lot"}, answer: "C", explanation: "At the on-site clinic." },
            { id: 25, type: 'mcq', question: "When is the deadline to sign up?", options: {A: "Next Wednesday", B: "October 5th", C: "By the end of today", D: "Tomorrow morning"}, answer: "C", explanation: "By the end of today." },
            { id: 26, type: 'mcq', question: "What tests are mentioned?", options: {A: "Dental exam", B: "Vision check", C: "Allergy test", D: "Heart rate monitor"}, answer: "B", explanation: "Blood pressure and vision checks." },
          ],
        },
        {
          title: 'Email Correspondence',
          content: "From: customer.service@techworld.com. To: john.doe@mail.com. Subject: Order Update. Thank you for ordering the 'UltraView 4K Monitor'. Unfortunately, this item is currently out of stock due to high demand. We expect a new shipment by Friday. We can either hold your order or issue a full refund. Please let us know your preference.",
          questions: [
            { id: 27, type: 'mcq', question: "Why was the email sent?", options: {A: "To confirm a shipment", B: "To apologize for a delay", C: "To promote a new monitor", D: "To cancel an account"}, answer: "B", explanation: "Thông báo hàng hết và xin lỗi." },
            { id: 28, type: 'mcq', question: "What is the problem?", options: {A: "Wrong item sent", B: "Item is damaged", C: "Item is out of stock", D: "Price was too high"}, answer: "C", explanation: "Item out of stock." },
            { id: 29, type: 'mcq', question: "When will they receive more items?", options: {A: "Today", B: "Next month", C: "By Friday", D: "In two weeks"}, answer: "C", explanation: "New shipment by Friday." },
            { id: 30, type: 'mcq', question: "What does the company offer?", options: {A: "A free upgrade", B: "A refund", C: "A discount coupon", D: "Extended warranty"}, answer: "B", explanation: "Issue a full refund." },
          ],
        },
      ],
    },
  ],
}
