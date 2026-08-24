# FINSYNTAX: UX Guidelines & Best Practices (Light Theme & Ergonomics Focus)

กฎเกณฑ์และแนวทางปฏิบัติในการออกแบบประสบการณ์ผู้ใช้ (UX) สำหรับ FINSYNTAX โดยยึดหลักเกณฑ์จากรายงานการวิเคราะห์ (UX Audit) และการเพิ่มประสิทธิภาพการอ่านบนมือถือและจอภาพทุกขนาด

## 1. Ergonomic Readability & Typography Rules (การอ่านที่สบายตาที่สุดในโหมดสว่าง)

เนื้อหาการเงินมักจะยาวและซับซ้อน UX ต้องช่วยให้ผู้ใช้อ่านได้สบายตาจนจบโดยไม่อ่อนล้า:

* **Dual Font System:**
  - **Headings & Badges:** ใช้ `Prompt` (ความหนา 600-700) เพิ่มความโมเดิร์น คมชัด สะดุดตา
  - **Article Body Text:** ใช้ `IBM Plex Sans Thai` (ความหนา 400) มีระยะบรรทัดกว้าง สบายตา ไม่กระจุกตัว
  - **Data/Numbers:** ใช้ `Inter` พร้อมเปิดใช้งาน Tabular Numbers (`font-feature-settings: 'tnum'`) เพื่อให้ตัวเลขงบการเงินเรียงตรงกันในทุกคอลัมน์
* **Soft Warm Slate Light Background (`#F8FAFC` & `#FFFFFF`):**
  - หลีกเลี่ยง Pure Harsh White (`#FFFFFF`) สำหรับพื้นหลังหลัก เพื่อป้องกัน Screen Glare (ความจ้าของแสงหน้าจอเมื่ออ่านยาว)
  - ใช้สีข้อความบทความแบบ Soft Charcoal Slate (`#334155`) ตัดกับพื้นหลังโทนสว่างอย่างนุ่มนวลและคมชัด (WCAG AAA Compliant)
* **Article Column Width Limit:**
  - กำหนดความกว้างคอลัมน์อ่านข่าวสูงสุดที่ `720px` (ประมาณ 60-75 ตัวอักษรต่อบรรทัด) บน Tablet/Desktop เพื่อไม่ให้ผู้ใช้ต้องกวาดสายตากว้างเกินไป
* **Line Height (ระยะห่างบรรทัด):**
  - กำหนดไว้ที่ `1.75` สำหรับภาษาไทย เพื่อเพิ่มพื้นที่ว่างระหว่างบรรทัด ช่วยให้อ่านบทความยาวได้ลื่นไหล
* **Paragraph Boundaries:**
  - ย่อหน้าหนึ่งไม่ควรเกิน 3-4 บรรทัดบนหน้าจอมือถือ เพิ่มการเว้นวรรค (Margin-bottom: 1.25rem) ระหว่างย่อหน้า

## 2. Zero Ad Noise Policy (นโยบายไร้โฆษณาก่อกวน)

ความพึงพอใจของผู้อ่านคือสิ่งสำคัญที่สุด เราจึงมีกฎเหล็กเรื่องโฆษณาดังนี้:
* **ไม่อนุญาตให้ใช้ Pop-up หรือ Interstitial Ads** ที่บังหน้าจอทั้งหมด
* **ห้ามมีโฆษณาที่เล่นเสียงอัตโนมัติ (Auto-play sound)**
* **No Layout Shift:** พื้นที่โฆษณาต้องมีการจองพื้นที่ (Placeholder) ไว้ล่วงหน้า เพื่อไม่ให้หน้าเว็บกระตุก หรือดันเนื้อหาลงขณะโหลด (ลดค่า Cumulative Layout Shift - CLS)
* **ทางออก:** ใช้รูปแบบ Native Sponsorship หรือ Micro-Subscription แทน Display Ads

## 3. Mobile-First Touch & Interactions

* **Touch Targets:** ปุ่ม ลิงก์ และเมนู ต้องมีขนาดไม่ต่ำกว่า `44x44 px` เพื่อให้กดบนมือถือได้แม่นยำ
* **Thumb Zone Layout:** เมนูหลักอยู่ Bottom Navigation ในระยะกดง่ายของหัวแม่มือ

## 4. Data Visualization UX (การนำเสนอข้อมูล)

* **หลีกเลี่ยงตารางที่ซับซ้อนบนมือถือ (No Complex Tables):** ข้อมูลตารางราคาหุ้นหรือพอร์ตฟอลิโอ ให้เปลี่ยนเป็นรูปแบบ "Card List" เมื่ออยู่บนมือถือ แทนการพยายามย่อตารางลง (Responsive Tables)
* **ใช้สีอย่างมีความหมาย (Semantic Colors):** สีเขียว (#059669) และสีแดง (#E11D48) ต้องสงวนไว้สำหรับเรื่องของตัวเลขการเงิน (บวก/ลบ) เท่านั้น ห้ามใช้เป็นสีปุ่มทั่วไป เพื่อป้องกันความสับสน

## 5. Performance & Core Web Vitals

* **LCP (Largest Contentful Paint):** ภาพ Hero Image ต้องโหลดเร็วที่สุด 
* **Light Mode Native:** ดีไซน์เริ่มต้นเป็น Soft Warm Slate Light Mode สบายตาและมีเอกลักษณ์เฉพาะตัว
