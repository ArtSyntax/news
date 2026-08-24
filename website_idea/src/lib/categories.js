/**
 * Category configuration for FINSYNTAX.
 * Maps category slugs to Thai labels, badge CSS classes, and icons.
 */

export const CATEGORIES = {
  stock: {
    slug: 'stock',
    label: 'โลกลงทุน-หุ้น',
    labelEn: 'Global & Thai Stocks',
    badgeClass: 'badge-stock',
    icon: '📈',
    navIcon: 'chart',
  },
  economy: {
    slug: 'economy',
    label: 'เศรษฐกิจ-การเงิน',
    labelEn: 'Economy & Finance',
    badgeClass: 'badge-economy',
    icon: '💰',
    navIcon: 'economy',
  },
  insurance: {
    slug: 'insurance',
    label: 'ประกัน',
    labelEn: 'Insurance',
    badgeClass: 'badge-insurance',
    icon: '🛡️',
    navIcon: 'shield',
  },
  business: {
    slug: 'business',
    label: 'ธุรกิจ',
    labelEn: 'Business',
    badgeClass: 'badge-business',
    icon: '💼',
    navIcon: 'briefcase',
  },
  sd: {
    slug: 'sd',
    label: 'SD+',
    labelEn: 'Sustainability & ESG',
    badgeClass: 'badge-sd',
    icon: '🌱',
    navIcon: 'leaf',
  },
  story: {
    slug: 'story',
    label: 'Story-สัมภาษณ์',
    labelEn: 'Executive Stories & Interviews',
    badgeClass: 'badge-story',
    icon: '🎙️',
    navIcon: 'mic',
  },
  pr: {
    slug: 'pr',
    label: 'ข่าวประชาสัมพันธ์',
    labelEn: 'PR & Press Releases',
    badgeClass: 'badge-pr',
    icon: '📢',
    navIcon: 'megaphone',
  },
};

/**
 * Navigation menu items for the website.
 */
export const NAV_ITEMS = [
  { href: '/', label: 'หน้าหลัก', labelEn: 'Home' },
  { href: '/stock', label: 'โลกลงทุน-หุ้น', labelEn: 'Stocks' },
  { href: '/economy', label: 'เศรษฐกิจ-การเงิน', labelEn: 'Economy' },
  { href: '/insurance', label: 'ประกัน', labelEn: 'Insurance' },
  { href: '/business', label: 'ธุรกิจ', labelEn: 'Business' },
  { href: '/sd', label: 'SD+', labelEn: 'SD+' },
  { href: '/story', label: 'Story-สัมภาษณ์', labelEn: 'Stories' },
  { href: '/pr', label: 'ข่าวประชาสัมพันธ์', labelEn: 'PR' },
  { href: '/about-us', label: 'เกี่ยวกับเรา', labelEn: 'About' },
];

/**
 * Bottom navigation items for mobile (5 items).
 */
export const MOBILE_NAV_ITEMS = [
  { href: '/', label: 'หน้าหลัก', icon: 'home' },
  { href: '/stock', label: 'หุ้น', icon: 'chart' },
  { href: '/business', label: 'ธุรกิจ', icon: 'briefcase' },
  { href: '#menu', label: 'เมนู', icon: 'menu', isDrawerToggle: true },
];

/**
 * Sentiment display configuration.
 */
export const SENTIMENTS = {
  bullish: { label: '📈 Positive Impact', className: 'sentiment-bullish' },
  neutral: { label: '➡️ Neutral', className: 'sentiment-neutral' },
  bearish: { label: '📉 Negative Impact', className: 'sentiment-bearish' },
};

/**
 * Get category info by slug.
 */
export function getCategoryBySlug(slug) {
  return CATEGORIES[slug] || null;
}

/**
 * Get sentiment info.
 */
export function getSentimentInfo(sentiment) {
  return SENTIMENTS[sentiment] || SENTIMENTS.neutral;
}

/**
 * Format relative time from a date string.
 */
export function formatRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMinutes < 1) return 'เมื่อสักครู่';
  if (diffMinutes < 60) return `${diffMinutes} นาทีที่แล้ว`;
  if (diffHours < 24) return `${diffHours} ชั่วโมงที่แล้ว`;
  if (diffDays < 7) return `${diffDays} วันที่แล้ว`;

  return date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
