# FINSYNTAX: UI Component Library (Mobile-First & Light Theme)

ส่วนนี้อธิบายคอมโพเนนต์หลักที่ใช้ในแพลตฟอร์ม FINSYNTAX โดยออกแบบภายใต้แนวคิด Mobile-First, Zero Ad Noise และโครงสร้างหมวดหมู่ข่าวตามที่กำหนด

---

## 1. Website Navigation Architecture (โครงสร้างเมนูเว็บไซต์)

หมวดหมู่หลักของ FINSYNTAX ประกอบด้วย 9 หมวดหมู่:
1. **หน้าหลัก** (Home)
2. **โลกลงทุน-หุ้น** (Global & Thai Stock Markets)
3. **เศรษฐกิจ-การเงิน** (Economy & Macro Finance)
4. **ประกัน** (Insurance & Wealth Protection)
5. **ธุรกิจ** (Business & Corporate Strategy)
6. **SD+** (Sustainability, ESG & Development)
7. **Story-สัมภาษณ์** (In-depth Executive Stories & Interviews)
8. **ข่าวประชาสัมพันธ์** (PR & Press Releases)
9. **เกี่ยวกับเรา** (About Us & Editorial Standards)

---

### 1.1 Mobile Navigation Layout (ระบบนำทางบนมือถือ)

เนื่องจากมีทั้งหมด 9 หมวดหมู่ บนหน้าจอมือถือจะใช้โครงสร้าง 3 เลเยอร์เพื่อให้เข้าถึงง่ายที่สุด:

1. **Top Horizontal Category Chips (แถบหมวดหมู่ปัดซ้าย-ขวาได้ด้านบน):**
   * แถบ Pills แทรกอยู่ใต้ Header สามารถใช้นิ้วปัดซ้าย-ขวา (Horizontal Scroll) เพื่อสลับดูข่าวแต่ละหมวดหมู่ได้ทันทีโดยไม่ต้องเปิดเมนูใหม่
   * หมวดที่ถูกเลือกจะมีไฮไลต์สีเขียว Emerald (`#059669`) ตัวอักษรสีขาว
2. **Mobile Bottom Navigation Bar (แถบเมนูด้านล่าง 4 ไอคอนหลัก):**
   * `หน้าหลัก` (Home Icon)
   * `หุ้น` (Chart Icon)
   * `ธุรกิจ` (Briefcase Icon)
   * `เมนู` (Bars/Grid Icon - กดเพื่อเปิด Drawer)
3. **Full Off-Canvas Navigation Drawer (เมนูสไลด์ข้างฉบับเต็ม):**
   * เมื่อกดปุ่ม "เมนู" จะสไลด์หน้าต่างออกมา แสดงรายการครบทั้ง 9 หมวดหมู่ พร้อมไอคอน และมีช่องค้นหาข่าว (Search Bar) ด้านบนสุด

---

### 1.2 Desktop & Tablet Navigation Layout (ระบบนำทางบน Desktop)

* **Main Sticky Header Navigation Bar:**
  * **ฝั่งซ้าย:** โลโก้ FINSYNTAX (พร้อมสัญลักษณ์ AI Sparkle)
  * **ตรงกลาง (Primary Menu):** เรียงแถวแนวนอนอย่างเป็นระเบียบด้วยฟอนต์ `Prompt` Medium 15px:
    `หน้าหลัก` | `โลกลงทุน-หุ้น` | `เศรษฐกิจ-การเงิน` | `ประกัน` | `ธุรกิจ` | `SD+` | `Story-สัมภาษณ์` | `ข่าวประชาสัมพันธ์` | `เกี่ยวกับเรา`
  * **ฝั่งขวา:** ช่องค้นหาอัจฉริยะ (Search Bar)
* **Visual Effects:** มีเอฟเฟกต์ Glassmorphism (`backdrop-filter: blur(16px)`) พื้นหลังขาวโปร่งแสง เมื่อสกรอลล์ลง เมนูจะลอยติดด้านบนอย่างพรีเมียม

---

## 2. News Cards (การ์ดนำเสนอข่าว)

การ์ดข่าวเป็นส่วนสำคัญที่สุด ต้องอ่านง่าย ไม่รก และแสดงผลตามหมวดหมู่ได้ชัดเจน

### 2.1 Standard News Card (Mobile & Grid)
* **โครงสร้างการ์ด:**
  - รูปภาพปก (Aspect Ratio 16:9) โค้งมน `12px`
  - บนภาพมี **Category Badge** ตามหมวดหมู่ (เช่น `[โลกลงทุน-หุ้น]`, `[SD+]`, `[Story-สัมภาษณ์]`)
  - พาดหัวข่าว (Headline) ขนาด `1.125rem` ฟอนต์ `Prompt` Bold
  - แท็ก **AI Sentiment Badge** ด้านล่าง (Bullish / Neutral / Bearish)
  - เวลาที่เผยแพร่และอ่าน (เช่น "5 นาทีที่แล้ว • อ่าน 3 นาที")

### 2.2 Category Badge Color System (ระบบสีป้ายหมวดหมู่)
* `โลกลงทุน-หุ้น` ➔ สีเขียว Emerald Forest (`#047857`)
* `เศรษฐกิจ-การเงิน` ➔ สีฟ้า Cyan (`#0e7490`)
* `ธุรกิจ` ➔ สีน้ำเงิน Indigo (`#4338ca`)
* `ประกัน` ➔ สีม่วง Violet (`#6d28d9`)
* `SD+` ➔ สีเขียวมิ้นต์ (`#047857`)
* `Story-สัมภาษณ์` ➔ สีส้ม Amber (`#b45309`)
* `ข่าวประชาสัมพันธ์` ➔ สีเทา Slate (`#475569`)

---

## 3. AI Widgets & Enhancements

### 3.1 AI News Impact Summarizer
* **ตำแหน่ง:** วางบนสุดของบทความในทุกหมวดหมู่
* **ดีไซน์:** กล่องสว่างสีกรมท่าอ่อน ขาวนวล มีเส้นขอบเรืองแสง Electric Indigo (`#4F46E5`)
* **เนื้อหา:** สรุป 3 บรรทัดพร้อมไอคอน AI บอกผลกระทบต่อตลาดและนักลงทุน
