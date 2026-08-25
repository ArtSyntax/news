# 📈 FinFeed NEWS

> **"Decode the Market. Empower Your Wealth."**  
> แพลตฟอร์มข่าวการเงินและการลงทุนอัจฉริยะ สำหรับนักลงทุนรุ่นใหม่ ข้อมูลแม่นยำ รวดเร็ว และเข้าใจง่าย

---

## 🌟 จุดเด่นและฟีเจอร์หลัก (Key Features)

- 🤖 **AI Copilot Summary & Sentiment Analysis**: สรุปประเด็นข่าวสำคัญแบบกระชับ พร้อมแท็กทิศทางตลาด (📈 Positive Impact / ➡️ Neutral / 📉 Negative Impact)
- 🎯 **Monetization & Ads System**:
  - **Native Sponsored Content**: ระบบสปอนเซอร์และโฆษณากลมกลืนกับเนื้อหา
  - **Google AdSense Integration**: รองรับรหัสผู้เผยแพร่ (`ca-pub-1191941271672621`), ไฟล์ `ads.txt`, โฆษณา In-Feed (การ์ดลำดับที่ 6 ในทุกหมวด) และ In-Article (การ์ดลำดับที่ 4 ในทุกบทความ)
- 🔍 **Full-Stack SEO & Social Sharing**:
  - **Dynamic Title & Meta Description**: เปลี่ยนตามบทความและหมวดหมู่อัตโนมัติ
  - **Open Graph & Twitter Cards**: แสดงรูปภาพปกและหัวข้อข่าวสวยงามเมื่อแชร์ลง Facebook, LINE, X, LinkedIn
  - **Structured Data (Schema.org JSON-LD)**: รองรับ `NewsArticle`, `NewsMediaOrganization`, `WebSite`, และ `BreadcrumbList` เพื่อดันอันดับบน Google News และ Top Stories
  - **AI Crawler Friendly**: เปิดสิทธิ์ใน `robots.txt` ให้ Google Gemini, OpenAI ChatGPT, Perplexity และ Claude เข้าถึงข้อมูลได้
  - **Auto-Generating `sitemap.xml`**: สคริปต์สแกนไฟล์ `.md` ทุกหมวดหมู่อัตโนมัติ
- 🌓 **Dark / Light Mode**: สลับโหมดมืด-สว่างได้อย่างราบรื่น พร้อมจดจำค่าผ่าน LocalStorage
- 🔤 **Dynamic Font Size Scaler**: ปรับขนาดตัวอักษรได้ 5 ระดับ (87.5% - 137.5%) เพื่อความสะดวกในการอ่าน
- 🎲 **AI Random News Discovery**: ปุ่มสุ่มบทความเพื่อค้นพบอินไซต์การลงทุนใหม่ๆ แบบ Serendipity
- 🍪 **PDPA / GDPR Cookie Consent**: แบนเนอร์ขอความยินยอมคุกกี้ตามกฎหมาย

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
finfeed-news/
├── content/
│   ├── news/                  # ไฟล์บทความข่าว Markdown แยกตามหมวดหมู่
│   │   ├── business/
│   │   ├── economy/
│   │   ├── insurance/
│   │   ├── lifestyle/
│   │   ├── pr/
│   │   ├── sd/
│   │   ├── stock/
│   │   └── story/
│   ├── pages/                 # หน้าเนื้อหาทั่วไป (about-us, sponsor, privacy-policy, terms-of-use)
│   └── sponsors/              # ไฟล์ข้อมูลสปอนเซอร์ (innovestx, muangthai)
├── images/                    # โลโก้, ไอคอน และรูปภาพประกอบ
│   ├── finfeednews_icon.png   # ไอคอนโลโก้แบรนด์ (42x42)
│   ├── finfeednews_logo.png   # โลโก้เต็มสำหรับ SEO / Open Graph
│   └── placeholder.jpg
├── styles/
│   ├── design_tokens.css      # ตัวแปรสี, ฟอนต์, Spacing, Typography
│   ├── globals.css            # สไตล์พื้นฐาน, Reset, Layout Container
│   └── components.css         # สไตล์ของคอมโพเนนต์ทั้งหมด (Header, Card, Footer, Ad Box)
├── index.html                 # Shell หลักของ Single Page Application (SPA)
├── 404.html                   # หน้า fallback สำหรับ GitHub Pages / Static Hosting
├── app.js                     # สมองหลักของระบบ: SPA Router, Markdown Parser, Dynamic SEO, Ads
├── generate_sitemap.py        # สคริปต์ Python สแกนโฟลเดอร์ข่าวเพื่อสร้าง sitemap.xml อัตโนมัติ
├── server.py                  # Local SPA Web Server (พอร์ต 3000) พร้อม Auto-Sitemap
├── sitemap.xml                # แผนผังเว็บไซต์สำหรับ Search Engine
├── robots.txt                 # กฎการเข้าถึงของ Web Crawlers & AI Bots
├── ads.txt                    # ไฟล์ยืนยันสิทธิ์ Google AdSense
├── CNAME                      # การตั้งค่า Custom Domain (finfeednews.com)
└── .gitignore                 # กำหนดไฟล์ที่ไม่ต้องติดตามลง Git (__pycache__, logs, ฯลฯ)
```

---

## 🚀 การติดตั้งและรันเซิร์ฟเวอร์ (Getting Started)

### 1. รันเว็บเซิร์ฟเวอร์ Local (Development)

ระบบมีเซิร์ฟเวอร์ Python SPA ในตัว รันได้ทันทีโดยไม่ต้องติดตั้ง Node.js หรือ dependencies เพิ่มเติม:

```bash
python3 server.py 3000
```
เปิดบราวเซอร์ไปที่: `http://localhost:3000`

---

### 2. การเพิ่มข่าวใหม่ (Adding New Articles)

สร้างไฟล์ `.md` ใหม่ในโฟลเดอร์หมวดหมู่ที่ต้องการ เช่น `content/news/stock/YYYYMMDD_slug-name.md` พร้อมใส่ Frontmatter ด้านบนของไฟล์:

```markdown
---
title: "หัวข้อข่าวของคุณ"
slug: "slug-name"
date: "2026-08-25"
category: "stock"
categoryLabel: "หุ้นและการลงทุน"
author: "ชื่อผู้เขียน"
readTime: "3 นาที"
excerpt: "สรุปข่าวสั้นๆ 1-2 ประโยคสำหรับแสดงในการ์ดและ SEO Description"
image: "images/placeholder.jpg"
sentiment: "bullish" # bullish | neutral | bearish
aiSummary:
  - "ประเด็นสรุปข้อที่ 1"
  - "ประเด็นสรุปข้อที่ 2"
  - "ประเด็นสรุปข้อที่ 3"
tags:
  - "SET"
  - "หุ้นไทย"
---

เนื้อหาข่าวรูปแบบ Markdown ตามปกติ...
```

---

### 3. อัปเดต Sitemap อัตโนมัติ (Update Sitemap)

เมื่อเพิ่มไฟล์ `.md` ข่าวใหม่ สามารถสั่งสร้าง `sitemap.xml` ล่าสุดได้ด้วยคำสั่ง:

```bash
python3 generate_sitemap.py
```
*(หมายเหตุ: หากรันผ่าน `server.py` ระบบจะอัปเดต Sitemap ให้อัตโนมัติเมื่อเริ่มเซิร์ฟเวอร์)*

---

## 🌐 การนำขึ้นระบบจริง (Deployment)

เว็บไซต์สร้างขึ้นด้วยสถาปัตยกรรม **Vanilla JS SPA / Static Site** สามารถ Deploy ได้บนผู้ให้บริการทุกแห่ง:

- **GitHub Pages**: อัปโหลดขึ้น Repository แล้วเปิด GitHub Pages (มี `404.html` และ `CNAME` พร้อมใช้งาน)
- **Cloudflare Pages / Vercel / Netlify**: ลากโฟลเดอร์ขึ้นหรือเชื่อมต่อกับ Git Repo ได้ทันที

---

## 📬 ติดต่อเรา (Contact)

- **สำนักข่าว**: FinFeed NEWS
- **เว็บไซต์**: [https://finfeednews.com](https://finfeednews.com)
