# FINSYNTAX: Software Engineer Technical Brief & Handoff Specification

เอกสารบรีฟสำหรับทีมพัฒนาระบบ (Software Engineering & Frontend Developers) เพื่อนำระบบ Design System, CI, และ UX Guidelines ของแพลตฟอร์มข่าวการเงิน **FINSYNTAX** ไปพัฒนาเป็นโค้ดจริง

---

## 1. ภาพรวมโครงการและเป้าหมายเชิงเทคนิค (Project & Technical Goals)

* **ชื่อโครงการ:** FINSYNTAX (ฟินซินแท็กซ์)
* **คอนเซปต์:** "Digital Native + Stock Speed + AI Intelligence"
* **หลักการออกแบบหลัก:**
  1. **Mobile-First Responsive Design:** ออกแบบและเขียนโค้ดเริ่มต้นจากหน้าจอมือถือ แล้วขยายไปสู่ Tablet และ Desktop
  2. **Soft Light Mode Native:** พื้นหลังโทน Soft Warm Slate (`#F8FAFC`) สบายตา ป้องกันแสงสะท้อนจ้า (Glare Effect)
  3. **Zero Ad Noise Policy:** ไม่มี Pop-up บังหน้าจอ และต้องจองพื้นที่ภาพ/คอนเทนต์ล่วงหน้าเพื่อป้องกัน Layout Shift (CLS = 0)
  4. **Performance Target:** โหลดหน้าเว็บเร็วระดับ Real-time (< 1.5 วินาที)

---

## 2. Tech Stack & Font Setup (เทคโนโลยีและฟอนต์ที่ใช้)

### 2.1 CSS & Design Tokens
* ใช้ไฟล์ **`design/design_tokens.css`** เป็นตัวแปรหลัก (`:root`) สำหรับสไตล์ทั้งหมด ห้ามใช้ Hardcoded Hex Color ในคอมโพเนนต์
* นำเข้าไฟล์ CSS Tokens ในไฟล์หลัก:
  ```html
  <link rel="stylesheet" href="./design/design_tokens.css">
  ```

### 2.2 Google Fonts Integration
ต้องทำการโหลดฟอนต์ 3 ตระกูลนี้ใน `<head>` ของเว็บไซต์:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Prompt:wght@500;600;700&display=swap" rel="stylesheet">
```

### 2.3 Font Usage Rules (การนำฟอนต์ไปใช้ในโค้ด)
```css
/* พาดหัว, ปุ่มกด, เมนู, ป้ายกำกับ */
h1, h2, h3, h4, h5, h6, .nav-link, .btn, .badge {
  font-family: var(--font-family-heading); /* Prompt */
}

/* เนื้อหาบทความอ่านยาว */
.article-body, p {
  font-family: var(--font-family-body); /* IBM Plex Sans Thai */
  line-height: var(--line-height-body); /* 1.75 */
  color: var(--color-text-body); /* #334155 */
}

/* ตัวเลขทางการเงิน ราคาหุ้น ตาราง */
.stock-price, .financial-data, .table {
  font-family: var(--font-family-data); /* Inter */
  font-feature-settings: var(--font-feature-numeric); /* 'tnum' 1 - ตัวเลขกว้างเท่ากันทุกหลัก */
}
```

---

## 3. Component Implementation Specs (ข้อกำหนดการเขียนโค้ดคอมโพเนนต์)

### 3.1 Website Navigation Structure (โครงสร้างเมนู 9 หมวด)

หมวดหมู่ข่าวทั้งหมด:
1. `หน้าหลัก` (Home)
2. `โลกลงทุน-หุ้น` (Global & Thai Stocks)
3. `เศรษฐกิจ-การเงิน` (Economy & Finance)
4. `ประกัน` (Insurance)
5. `ธุรกิจ` (Business)
6. `SD+` (Sustainability & ESG)
7. `Story-สัมภาษณ์` (Executive Stories & Interviews)
8. `ข่าวประชาสัมพันธ์` (PR & Press Releases)
9. `เกี่ยวกับเรา` (About Us)

#### A) Mobile Implementation (< 768px)
* **Top Header:** แสดง Logo FINSYNTAX + ช่องค้นหา (Search Icon) + เมนูเปิด Drawer
* **Top Scrollable Chips Bar:** แถบหมวดหมู่ซ่อนใต้ Header ใช้ `display: flex; overflow-x: auto; scrollbar-width: none;` เพื่อให้ปัดนิ้วซ้าย-ขวาได้
* **Bottom Navigation Bar:** เมนู 4 ปุ่ม fixed ด้านล่าง (`z-index: 100`) ประกอบด้วย `หน้าหลัก` | `หุ้น` | `ธุรกิจ` | `เมนู`
* **Off-Canvas Drawer:** เมนูสไลด์ข้างฉบับเต็ม แสดงผลครบ 9 หมวดหมู่

#### B) Desktop Implementation (>= 1024px)
* **Sticky Glassmorphism Header:** 
  ```css
  header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    border-bottom: var(--glass-border);
  }
  ```
* แสดงเมนูกลางเรียง 9 หมวดหมู่ด้วย `Prompt` Medium 15px

---

### 3.2 Category Badges System (สีป้ายหมวดหมู่)

สร้าง CSS Utility Classes สำหรับสีหมวดหมู่ข่าว:

```css
.badge-category {
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  padding: 4px 10px;
  border-radius: var(--radius-pill);
}

.badge-stock     { background: rgba(5, 150, 105, 0.12); color: #047857; }
.badge-economy   { background: rgba(8, 145, 178, 0.12); color: #0e7490; }
.badge-business  { background: rgba(79, 70, 229, 0.12); color: #4338ca; }
.badge-insurance { background: rgba(124, 58, 237, 0.12); color: #6d28d9; }
.badge-sd        { background: rgba(16, 185, 129, 0.12); color: #047857; }
.badge-story     { background: rgba(217, 119, 6, 0.12); color: #b45309; }
.badge-pr        { background: rgba(100, 116, 139, 0.12); color: #475569; }
```

---

### 3.3 AI Impact Summarizer Box Component

กล่องสรุปข่าว 3 บรรทัดด้วย AI วางอยู่ด้านบนสุดของทุกบทความ:

```html
<div class="ai-summary-box">
  <div class="ai-summary-header">
    <span class="ai-badge"><i class="icon-sparkle"></i> FINSYNTAX AI Copilot Summary</span>
    <span class="sentiment-badge bullish">📈 Positive Impact</span>
  </div>
  <ul class="ai-summary-list">
    <li>สรุปประเด็นที่ 1: ผลประกอบการเติบโต 25% YoY จากยอดขายส่งออก</li>
    <li>สรุปประเด็นที่ 2: อัตราดอกเบี้ยนโยบายคงที่ ส่งผลดีต่อต้นทุนการเงิน</li>
    <li>สรุปประเด็นที่ 3: ผลกระทบต่อราคาหุ้นระยะสั้นเป็นบวก (Bullish Zone)</li>
  </ul>
</div>
```

---

## 4. Checklist สำหรับการส่งตรวจโค้ด (Definition of Done)

- [ ] นำเข้า `design_tokens.css` และโหลด Google Fonts ครบ 3 ตระกูล (`Prompt`, `IBM Plex Sans Thai`, `Inter`)
- [ ] ตัวเลขทางการเงินทั้งหมดถูกใส่ `font-feature-settings: 'tnum'` ให้หลักตัวเลขตรงกัน
- [ ] ปุ่มและลิงก์ทั้งหมดมีขนาด Touch Target ไม่ต่ำกว่า `44x44 px`
- [ ] เมนูทั้ง 9 หมวดหมู่ทำงานถูกต้องบน Mobile (Chips Bar + Drawer) และ Desktop (Sticky Glass Header)
- [ ] บทความอ่านยาวใช้สีข้อความ `#334155` บนพื้นหลัง `#F8FAFC` / `#FFFFFF` อ่านง่าย ไม่จ้าตา
- [ ] กล่อง AI Summary และ AI Sentiment Badge แสดงผลถูกต้องในหน้าบทความ
- [ ] หน้าเว็บไม่มีอาการกระตุก (CLS = 0) ขณะโหลดภาพหรือการ์ดข่าว
