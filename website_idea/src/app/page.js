import { getAllNews } from '@/lib/markdown';
import { NewsCard, NativeAdCard } from '@/components/NewsCard';

export const metadata = {
  title: 'FINSYNTAX | ข่าวการเงินอัจฉริยะ สำหรับนักลงทุนรุ่นใหม่',
  description:
    'อัปเดตข่าวหุ้นไทย หุ้นต่างประเทศ เศรษฐกิจ การเงิน ธุรกิจ ประกัน ESG แบบเรียลไทม์ พร้อม AI สรุปผลกระทบต่อพอร์ตลงทุน',
};

export default function HomePage() {
  const allNews = getAllNews();

  // Split: first article is hero, rest are grid
  const heroArticle = allNews[0];
  const gridArticles = allNews.slice(1);

  // Insert native ad after every 4th article
  const renderGridWithAds = () => {
    const items = [];
    let adCount = 0;

    gridArticles.forEach((article, index) => {
      items.push(
        <NewsCard key={`${article.category}-${article.slug}`} article={article} />
      );

      // Insert native ad after every 4th card
      if ((index + 1) % 4 === 0 && adCount < 2) {
        adCount++;
        items.push(
          <NativeAdCard
            key={`ad-${adCount}`}
            title={
              adCount === 1
                ? 'เปิดโพยกองทุนหุ้นสหรัฐฯ น่าสะสม รับเทรนด์ดอกเบี้ยขาลง'
                : '5 แผนประกันสะสมทรัพย์ ผลตอบแทนสูงสุดปี 2569'
            }
            sponsor={
              adCount === 1 ? 'บลจ. InnovestX' : 'เมืองไทยประกันชีวิต'
            }
            readTime={adCount === 1 ? '2 นาที' : '3 นาที'}
          />
        );
      }
    });

    return items;
  };

  return (
    <>
      {/* Hero Section */}
      {heroArticle && (
        <section className="hero-section" aria-label="ข่าวเด่น">
          <div className="page-container">
            <NewsCard article={heroArticle} featured={true} />
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="news-feed-section" aria-label="ข่าวล่าสุด">
        <div className="page-container">
          <h2 className="section-title">
            <span className="section-title-icon">⚡</span>
            ข่าวล่าสุด
          </h2>
          <div className="news-grid">{renderGridWithAds()}</div>
        </div>
      </section>
    </>
  );
}
