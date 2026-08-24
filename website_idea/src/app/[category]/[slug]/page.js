import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticle, getAllArticlePaths } from '@/lib/markdown';
import { getCategoryBySlug } from '@/lib/categories';
import { AISummaryBox } from '@/components/AISummaryBox';
import { NativeAdBox } from '@/components/NewsCard';

/**
 * Generate static params for all articles.
 */
export function generateStaticParams() {
  const paths = getAllArticlePaths();
  return paths.map((p) => ({
    category: p.category,
    slug: p.slug,
  }));
}

/**
 * Dynamic metadata for article pages.
 */
export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = await getArticle(category, slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt || article.title,
    openGraph: {
      title: article.title,
      description: article.excerpt || article.title,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: article.image ? [{ url: article.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt || article.title,
    },
  };
}

export default async function ArticlePage({ params }) {
  const { category: categorySlug, slug } = await params;
  const article = await getArticle(categorySlug, slug);

  if (!article) {
    notFound();
  }

  const category = getCategoryBySlug(article.category);

  // JSON-LD for article page
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt || '',
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author || 'FINSYNTAX',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FINSYNTAX',
      logo: {
        '@type': 'ImageObject',
        url: 'https://finsyntax.com/logo.png',
      },
    },
    image: article.image || '',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://finsyntax.com/${article.category}/${article.slug}`,
    },
  };

  // Split HTML content to insert in-article ad
  const contentParts = splitContentForAd(article.content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="article-page">
        <div className="article-container">
          {/* Breadcrumb */}
          <nav className="breadcrumb" aria-label="เส้นทาง">
            <Link href="/">หน้าหลัก</Link>
            <span className="breadcrumb-separator">/</span>
            {category && (
              <>
                <Link href={`/${article.category}`}>{category.label}</Link>
                <span className="breadcrumb-separator">/</span>
              </>
            )}
            <span className="breadcrumb-current">{article.title}</span>
          </nav>

          {/* Article Header */}
          <header className="article-header">
            {category && (
              <span className={`badge-category ${category.badgeClass}`}>
                {category.label}
              </span>
            )}
            <h1 className="article-title">{article.title}</h1>

            <div className="article-meta">
              {article.author && (
                <span className="article-author">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '4px', verticalAlign: 'middle' }}>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {article.author}
                </span>
              )}
              <time dateTime={article.date} className="article-date">
                {new Date(article.date).toLocaleDateString('th-TH', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {article.readTime && (
                <span className="article-read-time">
                  อ่าน {article.readTime}
                </span>
              )}
            </div>
          </header>

          {/* AI Summary Box */}
          {article.aiSummary && article.aiSummary.length > 0 && (
            <AISummaryBox
              summaryPoints={article.aiSummary}
              sentiment={article.sentiment}
            />
          )}

          {/* Article Hero Image */}
          {article.image && (
            <div className="article-hero-image">
              <div
                className="article-image"
                style={{
                  backgroundImage: `url(${article.image})`,
                }}
                role="img"
                aria-label={article.title}
              />
            </div>
          )}

          {/* Article Body */}
          <div className="article-body">
            {contentParts.before && (
              <div dangerouslySetInnerHTML={{ __html: contentParts.before }} />
            )}

            {/* In-Article Native Ad */}
            <NativeAdBox />

            {contentParts.after && (
              <div dangerouslySetInnerHTML={{ __html: contentParts.after }} />
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="article-tags">
              {article.tags.map((tag) => (
                <span key={tag} className="article-tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}

/**
 * Split HTML content to insert native ad after 3rd paragraph.
 */
function splitContentForAd(htmlContent) {
  if (!htmlContent) return { before: '', after: '' };

  const paragraphs = htmlContent.split('</p>');

  if (paragraphs.length <= 3) {
    return { before: htmlContent, after: '' };
  }

  const before = paragraphs.slice(0, 3).join('</p>') + '</p>';
  const after = paragraphs.slice(3).join('</p>');

  return { before, after };
}
