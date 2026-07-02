export const LEVEL_COLORS = {
  young: { color: "#2563eb", bgLight: "bg-level-young/10", border: "border-t-level-young", icon: "Star" },
  ket: { color: "#1d4ed8", bgLight: "bg-level-ket/10", border: "border-t-level-ket", icon: "GraduationCap" },
  pet: { color: "#4338ca", bgLight: "bg-level-pet/10", border: "border-t-level-pet", icon: "School" },
  ielts: { color: "#6d28d9", bgLight: "bg-level-ielts/10", border: "border-t-level-ielts", icon: "BookOpen" },
  toeic: { color: "#0e7490", bgLight: "bg-level-toeic/10", border: "border-t-level-toeic", icon: "Briefcase" },
  tuyensinh: { color: "#047857", bgLight: "bg-level-tuyensinh/10", border: "border-t-level-tuyensinh", icon: "FileText" },
};

export const SECTION_ORDER = ["young", "ket", "ielts", "toeic", "tuyensinh"];

export const EXAM_DATA = [
  { id: "starters", level: "young", title: "Thi thử Starters", desc: "Kiểm tra trình độ cơ bản cho trẻ em với bài tập sinh động.", time: "45 Phút", questions: "30 Câu", badge: "Starters" },
  { id: "movers", level: "young", title: "Thi thử Movers", desc: "Nâng cao kỹ năng giao tiếp với bài kiểm tra Movers.", time: "60 Phút", questions: "40 Câu", badge: "Movers" },
  { id: "flyers", level: "young", title: "Thi thử Flyers", desc: "Chuẩn bị cho kỳ thi Flyers với bài tập đa dạng.", time: "75 Phút", questions: "50 Câu", badge: "Flyers" },
  { id: "ket-1", level: "ket", title: "A2 Key (KET)", desc: "Đánh giá kỹ năng cơ bản để giao tiếp hàng ngày.", time: "100 Phút", questions: "55 Câu", badge: "KET" },
  { id: "ket-2", level: "ket", title: "KET Mock Test 2", desc: "Luyện tập với đề thi mô phỏng KET.", time: "100 Phút", questions: "55 Câu", badge: "KET" },
  { id: "pet-1", level: "pet", title: "B1 Preliminary (PET)", desc: "Đánh giá kỹ năng tiếng Anh trung cấp.", time: "120 Phút", questions: "60 Câu", badge: "PET" },
  { id: "ielts-r-1", level: "ielts", title: "IELTS Reading Mock 1", desc: "Luyện đọc hiểu học thuật với bài thi mô phỏng.", time: "60 Phút", questions: "40 Câu", badge: "Reading" },
  { id: "ielts-l-1", level: "ielts", title: "IELTS Listening Mock 1", desc: "Luyện nghe học thuật.", time: "30 Phút", questions: "40 Câu", badge: "Listening" },
  { id: "ielts-w-1", level: "ielts", title: "IELTS Writing Mock 1", desc: "Thực hành viết luận học thuật.", time: "60 Phút", questions: "2 Bài", badge: "Writing" },
  { id: "toeic-r-1", level: "toeic", title: "TOEIC Reading Test 1", desc: "Đánh giá năng lực trong môi trường công sở.", time: "75 Phút", questions: "100 Câu", badge: "Reading" },
  { id: "toeic-l-1", level: "toeic", title: "TOEIC Listening Test 1", desc: "Luyện nghe hiểu TOEIC.", time: "45 Phút", questions: "100 Câu", badge: "Listening" },
  { id: "ts-1", level: "tuyensinh", title: "Đề Tuyển Sinh Mẫu 1", desc: "Luyện đề thi tuyển sinh lớp 10 chuyên Anh.", time: "90 Phút", questions: "50 Câu", badge: "Đề Mẫu" },
  { id: "ts-2", level: "tuyensinh", title: "Đề Tuyển Sinh Mẫu 2", desc: "Tiếp cận đề thi tuyển sinh thực tế.", time: "90 Phút", questions: "50 Câu", badge: "Đề Mẫu" },
];

export const LEADERBOARD_DATA = {
  podium: [
    { rank: 1, name: "Hoàng Anh", class: "Lớp 6B - Chuyên", score: "12,800", initials: "HA" },
    { rank: 2, name: "Minh Trí", class: "Lớp 5A", score: "9,450", initials: "MT" },
    { rank: 3, name: "Linh Nhi", class: "Lớp 5C", score: "8,920", initials: "LN" },
  ],
  rows: [
    { rank: 4, name: "Bảo An", examBadge: "TOEIC", examDetail: "Đề thi thử số 04", score: "8,150", initials: "BA" },
    { rank: 5, name: "Khánh Vy", examBadge: "IELTS", examDetail: "Reading Mock 2", score: "7,880", initials: "KV" },
    { rank: 6, name: "Tuấn Kiệt", examBadge: "PET", examDetail: "Đề thi thử số 01", score: "7,620", initials: "TK" },
    { rank: 7, name: "Mai Anh", examBadge: "KET", examDetail: "Đề thi thử số 03", score: "7,350", initials: "MA" },
    { rank: 8, name: "Đức Minh", examBadge: "TOEIC", examDetail: "Reading Test 2", score: "7,100", initials: "DM" },
    { rank: 9, name: "Phương Linh", examBadge: "IELTS", examDetail: "Listening Mock 1", score: "6,890", initials: "PL" },
    { rank: 10, name: "Quốc Bảo", examBadge: "Starters", examDetail: "Movers Test 2", score: "6,450", initials: "QB" },
  ],
};

export const EXAM_TIME_MAP = {
  starters: 45 * 60,
  movers: 60 * 60,
  flyers: 75 * 60,
  "ket-1": 100 * 60,
  "ket-2": 100 * 60,
  "pet-1": 120 * 60,
  "ielts-r-1": 60 * 60,
  "ielts-l-1": 30 * 60,
  "ielts-w-1": 60 * 60,
  "toeic-r-1": 75 * 60,
  "toeic-l-1": 45 * 60,
  "ts-1": 90 * 60,
  "ts-2": 90 * 60,
};
