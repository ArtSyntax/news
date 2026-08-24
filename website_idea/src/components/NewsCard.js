import Link from 'next/link';
import { getCategoryBySlug, getSentimentInfo, formatRelativeTime } from '@/lib/categories';

/* ─────────── Standard News Card ─────────── */
export function NewsCard({ article, featured = false }) {
  const category = getCategoryBySlug(article.category);
  const sentiment = getSentimentInfo(article.sentiment);

  return (
    <article className={`news-card ${featured ? 'featured' : ''}`}>
      <Link
        href={`/${article.category}/${article.slug}`}
        className="news-card-link"
        aria-label={article.title}
      >
        {/* Image wrapper */}
        <div className="card-image-wrapper">
          <div
            className="card-image"
            style={{
              backgroundImage: article.image
                ? `url(${article.image})`
                : 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-surface-hover) 100%)',
            }}
            role="img"
            aria-label={article.title}
          />
          {category && (
            <span className={`badge-category ${category.badgeClass}`}>
              {category.label}
            </span>
          )}
        </div>

        {/* Card content */}
        <div className="card-content">
          <h3 className="card-title">{article.title}</h3>

          {article.excerpt && (
            <p className="card-excerpt">{article.excerpt}</p>
          )}

          <div className="card-meta">
            <span className={`sentiment-badge ${sentiment.className}`}>
              {sentiment.label}
            </span>
            <div className="card-meta-info">
              <time dateTime={article.date}>
                {formatRelativeTime(article.date)}
              </time>
              {article.readTime && (
                <span className="read-time">• อ่าน {article.readTime}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

/* ─────────── Native Ad Card (In-Feed) ─────────── */
export function NativeAdCard({
  title = 'เปิดโพยกองทุนหุ้นสหรัฐฯ น่าสะสม รับเทรนด์ดอกเบี้ยขาลง',
  sponsor = 'บลจ. InnovestX',
  readTime = '2 นาที',
  image,
}) {
  return (
    <article className="news-card native-ad">
      <div className="news-card-link">
        <div className="card-image-wrapper">
          <div
            className="card-image"
            style={{
              backgroundImage: image
                ? `url(${image})`
                : 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, var(--color-bg-surface) 100%)',
            }}
            role="img"
            aria-label={title}
          />
          <span className="badge-category badge-sponsored">Sponsored</span>
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <div className="card-meta">
            <span className="sponsor-name">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-amber)" strokeWidth="2" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 12h6M9 8h6M9 16h3" />
              </svg>
              {sponsor}
            </span>
            <span className="read-time">• อ่าน {readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────── Native Ad Box (In-Article) ─────────── */
export function NativeAdBox({
  title = '💡 แนะนำสำหรับคุณ',
  description = 'เปรียบเทียบประกันชีวิตสะสมทรัพย์ ผลตอบแทนสูงสุด 3.5% ต่อปี กับแผนที่ใช่สำหรับคุณ',
  sponsor = 'เมืองไทยประกันชีวิต',
  ctaText = 'ดูรายละเอียด',
}) {
  return (
    <aside className="in-article-ad-box" aria-label="เนื้อหาสนับสนุน">
      <div className="ad-box-header">
        <span className="ad-box-label">Partner Insight</span>
        <span className="ad-box-sponsor">สนับสนุนโดย {sponsor}</span>
      </div>
      <h4 className="ad-box-title">{title}</h4>
      <p className="ad-box-desc">{description}</p>
      <button className="ad-box-cta">{ctaText} →</button>
    </aside>
  );
}
