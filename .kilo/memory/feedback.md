# Feedback Memory â€” BÃ i Há»c & Sá»­a Sai

> Memory type: **feedback** â€” ghi láº¡i cÃ¡c lá»—i Ä‘Ã£ máº¯c vÃ  cÃ¡ch kháº¯c phá»¥c.
> Agent Ä‘á»c file nÃ y Ä‘á»ƒ trÃ¡nh láº·p láº¡i sai láº§m cÅ©.
---
## BÃ i Há»c
<!-- Format:
### [NgÃ y] â€” [TiÃªu Ä‘á» ngáº¯n]
**Váº¥n Ä‘á»:** [MÃ´ táº£]
**NguyÃªn nhÃ¢n:** [Root cause]
**CÃ¡ch kháº¯c phá»¥c:** [Solution]
**PhÃ²ng trÃ¡nh:** [CÃ¡ch trÃ¡nh trong tÆ°Æ¡ng lai]
-->
- (chÆ°a cÃ³ bÃ i há»c nÃ o)
# Feedback Memory â€” BÃ i há»c tá»« cÃ¡c láº§n sá»­a sai
> Memory type: **feedback** â€” ghi láº¡i cÃ¡c lá»—i Ä‘Ã£ máº¯c pháº£i vÃ  cÃ¡ch kháº¯c phá»¥c.
> Agent tá»± cáº­p nháº­t sau má»—i láº§n bá»‹ admin sá»­a hoáº·c phÃ¡t hiá»‡n lá»—i.
## Template cho má»—i entry
```markdown
### YYYY-MM-DD: [Chá»§ Ä‘á» ngáº¯n]
**Váº¥n Ä‘á»:** MÃ´ táº£ lá»—i / váº¥n Ä‘á» gáº·p pháº£i
**NguyÃªn nhÃ¢n:** Táº¡i sao lá»—i xáº£y ra
**BÃ i há»c:** Cáº§n lÃ m gÃ¬ khÃ¡c Ä‘á»ƒ trÃ¡nh láº·p láº¡i
**File sá»­a:** `path/to/file.html`
```
## Entries
### 2026-06-21: Mojibake tiáº¿ng Viá»‡t trong `decodeAnswers` â€” binary string eval khÃ´ng qua UTF-8 decode
**Váº¥n Ä‘á»:** Khi há»c sinh ná»™p bÃ i xem láº¡i Ä‘Ã¡p Ã¡n, text tiáº¿ng Viá»‡t hiá»ƒn thá»‹ sai thÃ nh kÃ½ tá»± rÃ¡c (VD: "ÄÃ¢y lÃ  quáº£ tÃ¡o" â†’ "Ã„ÂÃƒÂ¢y lÃƒ  quÃ¡ÂºÂ£ tÃƒÂ¡o").
**NguyÃªn nhÃ¢n:** `decodeAnswers()` dÃ¹ng `atob()` â†’ binary string (má»—i char = 1 byte 0-255) â†’ `eval()` coi má»—i byte lÃ  Latin-1. KÃ½ tá»± UTF-8 multi-byte (VD: `Ä` = `\xC3\x90`) bá»‹ xÃ© thÃ nh 2 kÃ½ tá»± riÃªng biá»‡t.
**BÃ i há»c:** Sau `atob()`, binary string pháº£i Ä‘Æ°á»£c convert vá» UTF-8 Ä‘Ãºng qua `TextDecoder('utf-8')` trÆ°á»›c khi `eval()`. KhÃ´ng Ä‘Æ°á»£c `eval()` trá»±c tiáº¿p binary string cÃ³ chá»©a tiáº¿ng Viá»‡t.
**File sá»­a:** `scripts/encode-answers.py` (template) + 16 file `Exam/**/*.html` cÃ³ `ENCODED_ANSWERS` + `decodeAnswers`
**Pattern fix:**
```js
var raw = atob(r);
var bytes = new Uint8Array(raw.length);
for (var i = 0; i < raw.length; i++) { bytes[i] = raw.charCodeAt(i); }
x = new TextDecoder('utf-8').decode(bytes);
### 2026-06-21: Anti-cheat kÃ­ch hoáº¡t khi chÆ°a nháº­p tÃªn há»c sinh
**Váº¥n Ä‘á»:** Báº¥m "Báº¯t Ä‘áº§u" khi chÆ°a nháº­p tÃªn â†’ anti-cheat (`_examStarted`, fullscreen, cháº·n chuá»™t pháº£i) kÃ­ch hoáº¡t dÃ¹ bÃ i thi chÆ°a báº¯t Ä‘áº§u.
**NguyÃªn nhÃ¢n:** `_anti-cheat.js` wrapper set `_examStarted = true` vÃ  gá»i `_enterFullscreen()` TRÆ¯á»šC khi gá»i `origStart()` (hÃ m gá»‘c chá»©a validation tÃªn rá»—ng). Validation á»Ÿ hÃ m gá»‘c khÃ´ng ká»‹p cháº·n.
**BÃ i há»c:** Wrapper anti-cheat pháº£i kiá»ƒm tra tÃªn Ä‘Ã£ nháº­p TRÆ¯á»šC khi set `_examStarted`. Chá»‰ kÃ­ch hoáº¡t anti-cheat náº¿u `name` khÃ´ng rá»—ng. KhÃ´ng set flag anti-cheat trÆ°á»›c validation.
**File sá»­a:** `templates/_anti-cheat.js` (template) + 30 file `Exam/**/*.html`
**Pattern fix (anti-cheat wrapper):**
window.startTest = function() {
    var nameInput = document.getElementById('student-name');
    var name = nameInput ? nameInput.value.trim() : '';
    if (name) {
        window._examStarted = true;
        window._enterFullscreen();
    }
    origStart.apply(this, arguments);
};
### 2026-06-21: Unicode NFC normalize thieu trong 6 vi tri search/filter
**Van de:** Search "hao" trong Leaderboard khong tim thay hoc vien "Huynh Hong Hao".
**Nguyen nhan:** 6 vi tri trong index.html dung .includes() va === so sanh chuoi tieng Viet khong qua .normalize("NFC"). Browser gui NFC, Google Sheets tra ve NFD â†’ byte khong khop du hien thi giong het.
**Bai hoc:** Moi string input co dau tieng Viet PHAI .normalize("NFC") truoc khi so sanh. Tao utility 
ormalizeText() dung chung.
**File sua:** index.html (6 vi tri: renderLeaderboard, Personal Stats autocomplete, Badges panel)
`js
const term = searchTerm.toLowerCase().trim().normalize("NFC");
filteredData = filteredData.filter(r => (r.name||"").toLowerCase().normalize("NFC").includes(term));
`
### 2026-06-19: Fullscreen warning khong an sau khi bam "Bat lai"
**Van de:** Bam ESC thoat fullscreen â†’ warning hien â†’ bam "Bat lai" vao fullscreen lai â†’ warning khong bien mat.
**Nguyen nhan:** ullscreenchange handler chi co logic HIEN warning khi roi fullscreen, khong co logic AN warning khi fullscreen duoc kich hoat tro lai. Bug ton tai trong 30/30 file exam.
**Bai hoc:** Moi event handler 2 trang thai (show/hide, enable/disable) PHAI xu ly CA HAI nhanh. Chi code 1 nhanh = bug. Khi fix bug trong 1 file, TU DONG kiem tra tat ca file cung pattern.
**File sua:** 30 file Exam/**/*.html
document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement && window._examStarted && !window._examSubmitted) {
        // Hien warning
    } else {
        var warn = document.getElementById('fs-warning');
        if (warn) warn.style.display = 'none';
});
### 2026-06-06: Sidebar sticky top-24 che Question Area tren mobile
**Van de:** Sidebar dung sticky top-24 â†’ khi scroll tren dien thoai, sidebar bi dinh co dinh, de len Question Area phia duoi.
**Nguyen nhan:** 5/30 file exam thieu CSS mobile override .sticky.top-24 { position: static !important; }. Cac file duoc copy tu template khac nhau â†’ khong dong nhat.
**Bai hoc:** Moi CSS position: sticky PHAI co mobile override trong @media (max-width: 639px). Test sticky behavior tren mobile truoc khi commit.
**File sua:** 5 file (pet-b1-exam, pet-b1-exam-2, pet-b1-exam-3, ket-a2-exam-3, flyers-2)
### 2026-06-05: Google Sheets ISO date string hien thi thay vi diem so
**Van de:** Leaderboard hien thi "2026-04-30T17:00:00.000Z" thay vi "4/5".
**Nguyen nhan:** Google Sheets tu format "4/5" thanh DATE â†’ Apps Script serialize thanh ISO string. 9 vi tri render ow.score khong qua sanitize.
**Bai hoc:** Sanitize external data NGAY o tang ingestion. Detect ISO date pattern: /^\d{4}-\d{2}-\d{2}T/. Defense in depth: sanitize ingestion + guard render.
**File sua:** index.html (loadLeaderboard + 9 vi tri render)
### 2026-06-04: Filter Subtabs â†” Sidebar chi sync 1 chieu
**Van de:** Click subtab filter â†’ sidebar khong cap nhat active state. Tab "Tuyen Sinh" khong tu mo "Pho thong" sidebar.
**Nguyen nhan:** Code chi implement chieu Sidebar â†’ Subtabs, khong co chieu nguoc lai Subtabs â†’ Sidebar. Thieu syncSidebarFromFilterSubTabs().
**Bai hoc:** Moi UI sync 2 chieu PHAI implement du inbound + outbound. Xac dinh tat ca chieu sync truoc khi code. Test tung chieu ngay sau implement.
**File sua:** index.html (them syncSidebarFromFilterSubTabs, expandPhoThong)
