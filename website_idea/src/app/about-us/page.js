import { getPageContent } from '@/lib/markdown';

export const metadata = {
  title: 'เกี่ยวกับเรา - FINSYNTAX',
  description:
    'รู้จัก FINSYNTAX แพลตฟอร์มข่าวการเงินอัจฉริยะสำหรับนักลงทุนรุ่นใหม่ ที่เชื่อว่าข้อมูลที่ดีคือจุดเริ่มต้นของการตัดสินใจที่ดี',
};

export default async function AboutUsPage() {
  const pageData = await getPageContent('about-us');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'เกี่ยวกับ FINSYNTAX',
    description: 'แพลตฟอร์มข่าวการเงินอัจฉริยะสำหรับนักลงทุนรุ่นใหม่',
    url: 'https://finsyntax.com/about-us',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="about-page">
        <div className="article-container">
          <header className="about-header">
            <h1 className="article-title">
              {pageData?.title || 'เกี่ยวกับ FINSYNTAX'}
            </h1>
            {pageData?.subtitle && (
              <p className="about-subtitle">{pageData.subtitle}</p>
            )}
          </header>

          {pageData?.content ? (
            <div
              className="article-body about-body"
              dangerouslySetInnerHTML={{ __html: pageData.content }}
            />
          ) : (
            <div className="article-body about-body">
              <p>
                <strong>FINSYNTAX (ฟินซินแท็กซ์)</strong> คือแพลตฟอร์มข่าวการเงินอัจฉริยะ
                ที่ออกแบบมาเพื่อนักลงทุนรุ่นใหม่โดยเฉพาะ
              </p>
              <p>
                เราเชื่อว่า ข้อมูลทางการเงินที่ดีไม่ควรซับซ้อนจนเข้าใจยาก
                FINSYNTAX จึงใช้เทคโนโลยี AI
                ในการสังเคราะห์และสรุปข่าวการเงินที่ซับซ้อนให้เป็นข้อมูลที่เข้าใจง่าย
                แม่นยำ และนำไปใช้ตัดสินใจได้ทันที
              </p>
              <h2>พันธกิจของเรา</h2>
              <p>
                <em>Decode the Market. Empower Your Wealth.</em> —
                ถอดรหัสตลาดการเงิน เสริมพลังความมั่งคั่งของคุณ
              </p>
              <h2>ทำไมต้อง FINSYNTAX?</h2>
              <ul>
                <li>ข่าวสารอัปเดตแบบเรียลไทม์ เร็วกว่าใคร</li>
                <li>AI Copilot สรุปผลกระทบต่อพอร์ตลงทุนของคุณ</li>
                <li>ออกแบบเพื่อการอ่านที่สบายตา ไร้โฆษณารบกวน</li>
                <li>ครอบคลุมทุกมิติ: หุ้น เศรษฐกิจ ธุรกิจ ประกัน ESG</li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
