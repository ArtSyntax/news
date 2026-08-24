import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get all news articles from all category subdirectories.
 * Automatically scans all folders inside content/news/.
 * Returns articles sorted by date (newest first).
 */
export function getAllNews() {
  const newsDir = path.join(contentDirectory, 'news');

  if (!fs.existsSync(newsDir)) return [];

  const categories = fs.readdirSync(newsDir).filter((item) => {
    return fs.statSync(path.join(newsDir, item)).isDirectory();
  });

  const allArticles = [];

  for (const category of categories) {
    const categoryDir = path.join(newsDir, category);
    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContents);

      allArticles.push({
        ...data,
        category: data.category || category,
        slug: data.slug || file.replace(/\.md$/, ''),
        fileName: file,
      });
    }
  }

  return allArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Get news articles filtered by category slug.
 */
export function getNewsByCategory(categorySlug) {
  return getAllNews().filter((article) => article.category === categorySlug);
}

/**
 * Get a single article by category and slug.
 * Returns both frontmatter data and rendered HTML content.
 */
export async function getArticle(categorySlug, articleSlug) {
  const newsDir = path.join(contentDirectory, 'news', categorySlug);

  if (!fs.existsSync(newsDir)) return null;

  const files = fs.readdirSync(newsDir).filter((f) => f.endsWith('.md'));

  const targetFile = files.find((f) => {
    const fileContents = fs.readFileSync(path.join(newsDir, f), 'utf-8');
    const { data } = matter(fileContents);
    return data.slug === articleSlug || f.replace(/\.md$/, '') === articleSlug;
  });

  if (!targetFile) return null;

  const filePath = path.join(newsDir, targetFile);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    ...data,
    category: data.category || categorySlug,
    slug: data.slug || targetFile.replace(/\.md$/, ''),
    content: htmlContent,
  };
}

/**
 * Get all unique categories that have at least one article.
 */
export function getActiveCategories() {
  const newsDir = path.join(contentDirectory, 'news');

  if (!fs.existsSync(newsDir)) return [];

  return fs
    .readdirSync(newsDir)
    .filter((item) => {
      const itemPath = path.join(newsDir, item);
      if (!fs.statSync(itemPath).isDirectory()) return false;
      const files = fs.readdirSync(itemPath).filter((f) => f.endsWith('.md'));
      return files.length > 0;
    });
}

/**
 * Get all possible [category, slug] pairs for static generation.
 */
export function getAllArticlePaths() {
  const allNews = getAllNews();
  return allNews.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

/**
 * Get a page content file from content/pages/ directory.
 */
export async function getPageContent(pageName) {
  const filePath = path.join(contentDirectory, 'pages', `${pageName}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return {
    ...data,
    content: htmlContent,
  };
}
