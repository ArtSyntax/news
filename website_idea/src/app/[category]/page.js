import { notFound } from 'next/navigation';
import { getNewsByCategory, getAllNews } from '@/lib/markdown';
import { getCategoryBySlug, CATEGORIES } from '@/lib/categories';
import { NewsCard, NativeAdCard } from '@/components/NewsCard';

/**
 * Generate static params for all category pages.
 */
export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ category: slug }));
}

/**
 * Dynamic metadata per category.
 */
export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: `${category.label} - ข่าว${category.label}ล่าสุด`,
    description: `ติดตามข่าว${category.label}ล่าสุด วิเคราะห์เชิงลึก พร้อม AI สรุปผลกระทบต่อนักลงทุน อัปเดตแบบเรียลไทม์ | FINSYNTAX`,
    openGraph: {
      title: `${category.label} | FINSYNTAX`,
      description: `ข่าว${category.label}ล่าสุดจาก FINSYNTAX`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getNewsByCategory(categorySlug);

  // JSON-LD for category page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.label,
    description: `ข่าว${category.label}ล่าสุดจาก FINSYNTAX`,
    url: `https://finsyntax.com/${categorySlug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="category-page" aria-label={`ข่าว${category.label}`}>
        <div className="page-container">
          {/* Category Header */}
          <div className="category-header">
            <h1 className="category-page-title">
              <span className="category-icon">{category.icon}</span>
              {category.label}
            </h1>
            <p className="category-description">{category.labelEn}</p>
          </div>

          {/* Articles Grid */}
          {articles.length > 0 ? (
            <div className="news-grid">
              {articles.map((article, index) => (
                <>
                  <NewsCard
                    key={`${article.category}-${article.slug}`}
                    article={article}
                    featured={index === 0}
                  />
                  {/* Insert native ad after first article */}
                  {index === 0 && (
                    <NativeAdCard
                      key="category-ad"
                      title="ค้นพบโอกาสลงทุนใหม่ๆ กับเครื่องมือ AI วิเคราะห์พอร์ต"
                      sponsor="FINSYNTAX Pro"
                      readTime="1 นาที"
                    />
                  )}
                </>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>ยังไม่มีข่าวในหมวดหมู่นี้</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
