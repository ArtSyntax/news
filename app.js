// categories configuration (from lib/categories.js)
const CATEGORIES = {
    stock: { slug: 'stock', label: 'หุ้นและการลงทุน', badgeClass: 'badge-stock', icon: '📈', navIcon: 'chart' },
    economy: { slug: 'economy', label: 'เศรษฐกิจและการเงิน', badgeClass: 'badge-economy', icon: '💰', navIcon: 'economy' },
    insurance: { slug: 'insurance', label: 'ประกันภัย', badgeClass: 'badge-insurance', icon: '🛡️', navIcon: 'shield' },
    business: { slug: 'business', label: 'ธุรกิจ', badgeClass: 'badge-business', icon: '💼', navIcon: 'briefcase' },
    sd: { slug: 'sd', label: 'ความยั่งยืน SD+', badgeClass: 'badge-sd', icon: '🌱', navIcon: 'leaf' },
    story: { slug: 'story', label: 'สัมภาษณ์พิเศษ', badgeClass: 'badge-story', icon: '🎙️', navIcon: 'mic' },
    pr: { slug: 'pr', label: 'ข่าวประชาสัมพันธ์', badgeClass: 'badge-pr', icon: '📢', navIcon: 'megaphone' },
};

const NAV_ITEMS = [
    { href: '/', label: 'หน้าหลัก' },
    { href: '/stock', label: 'หุ้นและการลงทุน' },
    { href: '/economy', label: 'เศรษฐกิจและการเงิน' },
    { href: '/insurance', label: 'ประกันภัย' },
    { href: '/business', label: 'ธุรกิจ' },
    { href: '/sd', label: 'ความยั่งยืน SD+' },
    { href: '/story', label: 'สัมภาษณ์พิเศษ' },
    { href: '/pr', label: 'ข่าวประชาสัมพันธ์' },
    { href: '/about-us', label: 'เกี่ยวกับเรา' },
];

const MOBILE_NAV_ITEMS = [
    { href: '/', label: 'หน้าหลัก', icon: 'home' },
    { href: '/stock', label: 'หุ้น', icon: 'chart' },
    { href: '/business', label: 'ธุรกิจ', icon: 'briefcase' },
    { href: '#menu', label: 'เมนู', icon: 'menu', isDrawerToggle: true },
];

const SENTIMENTS = {
    bullish: { label: '📈 Positive Impact', className: 'sentiment-bullish' },
    neutral: { label: '➡️ Neutral', className: 'sentiment-neutral' },
    bearish: { label: '📉 Negative Impact', className: 'sentiment-bearish' },
};

function getCategoryBySlug(slug) {
    return CATEGORIES[slug] || null;
}

function getSentimentInfo(sentiment) {
    return SENTIMENTS[sentiment] || SENTIMENTS.neutral;
}

function formatRelativeTime(dateString) {
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

    return date.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Icon Components rendering strings
const ICONS = {
    home: (active) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${active ? 'var(--color-primary)' : 'var(--color-text-muted)'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    chart: (active) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${active ? 'var(--color-primary)' : 'var(--color-text-muted)'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    briefcase: (active) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${active ? 'var(--color-primary)' : 'var(--color-text-muted)'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    menu: (active) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${active ? 'var(--color-primary)' : 'var(--color-text-muted)'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
    fontSizeMinus: (active) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${active ? 'var(--color-primary)' : 'var(--color-text-muted)'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><text x="3" y="17" font-size="14" font-family="Prompt, sans-serif" font-weight="700" fill="${active ? 'var(--color-primary)' : 'var(--color-text-muted)'}" stroke="none">A</text><line x1="14" y1="12" x2="22" y2="12" stroke-width="2.5"></line></svg>`,
    fontSizePlus: (active) => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${active ? 'var(--color-primary)' : 'var(--color-text-muted)'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><text x="2" y="17" font-size="14" font-family="Prompt, sans-serif" font-weight="700" fill="${active ? 'var(--color-primary)' : 'var(--color-text-muted)'}" stroke="none">A</text><line x1="13" y1="12" x2="21" y2="12" stroke-width="2.5"></line><line x1="17" y1="8" x2="17" y2="16" stroke-width="2.5"></line></svg>`,
    sparkle: () => `<svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-secondary)" stroke="none"><path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"></path></svg>`
};

// List of Content Files (direct reading from /content instead of /data)
const ARTICLE_FILES = [
    'content/news/stock/20260818_set-index-rebound.md',
    'content/news/stock/20260819_tech-stocks-correction.md',
    'content/news/economy/20260820_thai-gdp-q2-growth.md',
    'content/news/economy/20260821_bot-interest-rate-hold.md',
    'content/news/insurance/20260819_health-insurance-premium-rise.md',
    'content/news/insurance/20260822_ev-insurance-standard.md',
    'content/news/business/20260818_retail-giant-omnichannel.md',
    'content/news/business/20260823_airline-merger-rumor.md',
    'content/news/sd/20260818_carbon-credit-trading-boom.md',
    'content/news/sd/20260824_green-bond-issuance.md',
    'content/news/story/20260819_ceo-interview-fintech.md',
    'content/news/story/20260822_succession-family-business.md',
    'content/news/pr/20260820_bank-new-app-launch.md',
    'content/news/pr/20260823_property-developer-award.md'
];

const SPONSOR_FILES = [
    'content/sponsors/sponsor-innovestx.md',
    'content/sponsors/sponsor-muangthai.md'
];

// Lightweight Frontmatter Parser (Vanilla JS)
function parseFrontmatter(markdownText) {
    if (!markdownText || !markdownText.startsWith('---')) {
        return { data: {}, content: markdownText || '' };
    }
    const endIndex = markdownText.indexOf('---', 3);
    if (endIndex === -1) {
        return { data: {}, content: markdownText };
    }

    const yamlBlock = markdownText.substring(3, endIndex).trim();
    const content = markdownText.substring(endIndex + 3).trim();
    const data = {};

    const lines = yamlBlock.split('\n');
    let currentArrayKey = null;

    for (let line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        if (trimmed.startsWith('- ') && currentArrayKey) {
            let val = trimmed.substring(2).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                val = val.slice(1, -1);
            }
            if (!Array.isArray(data[currentArrayKey])) {
                data[currentArrayKey] = [];
            }
            data[currentArrayKey].push(val);
            continue;
        }

        const colonIndex = trimmed.indexOf(':');
        if (colonIndex !== -1) {
            const key = trimmed.substring(0, colonIndex).trim();
            let val = trimmed.substring(colonIndex + 1).trim();

            if (val === '') {
                currentArrayKey = key;
                data[key] = [];
            } else {
                currentArrayKey = null;
                if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                    val = val.slice(1, -1);
                } else if (val === 'true') {
                    val = true;
                } else if (val === 'false') {
                    val = false;
                } else if (!isNaN(val) && val !== '') {
                    val = Number(val);
                }
                data[key] = val;
            }
        }
    }

    return { data, content };
}

// Global State
let articles = [];
let sponsors = [];

// DOM Elements
const mainContent = document.getElementById('main-content');
const desktopNav = document.getElementById('desktop-nav');
const categoryChips = document.getElementById('category-chips');
const bottomNav = document.getElementById('bottom-nav');
const drawerNav = document.getElementById('drawer-nav');

// Layout Setup
function setupShell() {
    // 1. Desktop Nav
    desktopNav.innerHTML = NAV_ITEMS.map(item => 
        `<a href="#${item.href === '/' ? '/' : item.href}" class="nav-link">${item.label}</a>`
    ).join('');

    // 2. Mobile Bottom Nav
    bottomNav.innerHTML = MOBILE_NAV_ITEMS.map(item => {
        if (item.isDrawerToggle) {
            return `<button class="bottom-nav-item drawer-trigger" aria-label="${item.label}">
                ${ICONS[item.icon](false)}
                <span class="bottom-nav-label">${item.label}</span>
            </button>`;
        }
        return `<a href="#${item.href === '/' ? '/' : item.href}" class="bottom-nav-item">
            ${ICONS[item.icon](false)}
            <span class="bottom-nav-label">${item.label}</span>
        </a>`;
    }).join('');

    // 3. Drawer Nav
    drawerNav.innerHTML = NAV_ITEMS.map(item => 
        `<a href="#${item.href === '/' ? '/' : item.href}" class="drawer-nav-link drawer-close-trigger">
            <span>${item.label}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </a>`
    ).join('');

    // Update active states
    updateActiveNav();
}

function updateActiveNav() {
    const path = window.location.hash.replace('#', '') || '/';
    
    // Update Desktop
    Array.from(desktopNav.children).forEach(link => {
        const href = link.getAttribute('href').replace('#', '');
        link.className = `nav-link ${path === href ? 'active' : ''}`;
    });

    // Update Bottom Nav
    Array.from(bottomNav.children).forEach(link => {
        if (link.tagName === 'A') {
            const href = link.getAttribute('href').replace('#', '');
            const isActive = path === href;
            // Hacky but works for updating SVG stroke:
            const iconKey = MOBILE_NAV_ITEMS.find(i => i.href === href)?.icon;
            if (iconKey && ICONS[iconKey]) {
                 link.innerHTML = ICONS[iconKey](isActive) + `<span class="bottom-nav-label">${link.querySelector('span').innerText}</span>`;
            }
            link.className = `bottom-nav-item ${isActive ? 'active' : ''}`;
        }
    });

    // Update Category Chips
    categoryChips.innerHTML = `
        <a href="#/" class="chip ${path === '/' ? 'active' : ''}">ทั้งหมด</a>
        ${Object.values(CATEGORIES).map(cat => 
            `<a href="#/${cat.slug}" class="chip ${path === `/${cat.slug}` ? 'active' : ''}">${cat.label}</a>`
        ).join('')}
    `;
}

// Interactivity
function setupInteractivity() {
    // Font Size Listeners in Drawer
    const drawerFontDec = document.getElementById('drawer-font-dec');
    const drawerFontInc = document.getElementById('drawer-font-inc');
    if (drawerFontDec) drawerFontDec.addEventListener('click', () => adjustFontSize(-1));
    if (drawerFontInc) drawerFontInc.addEventListener('click', () => adjustFontSize(1));

    // Header Scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('site-header');
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Search
    const searchBtn = document.getElementById('search-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchResultsList = document.getElementById('search-results-list');
    
    function performSearch(query) {
        const q = (query || '').trim().toLowerCase();
        if (!q) {
            if (searchResultsList) {
                searchResultsList.style.display = 'none';
                searchResultsList.innerHTML = '';
            }
            // Restore normal view based on current hash
            handleRoute();
            return;
        }

        const matched = articles.filter(article => {
            const titleMatch = article.title && article.title.toLowerCase().includes(q);
            const excerptMatch = article.excerpt && article.excerpt.toLowerCase().includes(q);
            const contentMatch = article.content && article.content.toLowerCase().includes(q);
            const authorMatch = article.author && article.author.toLowerCase().includes(q);
            const tagsMatch = article.tags && Array.isArray(article.tags) && article.tags.some(t => String(t).toLowerCase().includes(q));
            const aiSummaryMatch = article.aiSummary && Array.isArray(article.aiSummary) && article.aiSummary.some(s => String(s).toLowerCase().includes(q));
            return titleMatch || excerptMatch || contentMatch || authorMatch || tagsMatch || aiSummaryMatch;
        });

        // 1. Render dropdown in search overlay
        if (searchResultsList) {
            searchResultsList.style.display = 'block';
            if (matched.length === 0) {
                searchResultsList.innerHTML = `<div style="padding: 16px; background: white; border-radius: 8px; color: var(--color-text-muted); text-align: center; border: 1px solid var(--color-border);">ไม่พบข่าวที่ค้นหา "${query}"</div>`;
            } else {
                searchResultsList.innerHTML = matched.map(article => `
                    <a href="#/${article.category}/${article.slug}" class="search-result-item" style="display: flex; gap: 12px; padding: 12px; background: white; border-radius: 8px; margin-bottom: 8px; text-decoration: none; border: 1px solid var(--color-border); align-items: center; transition: transform 0.15s ease;">
                        <div style="width: 56px; height: 56px; border-radius: 6px; background-size: cover; background-position: center; background-image: url('${article.image || '/images/placeholder.jpg'}'); flex-shrink: 0; background-color: var(--color-bg-surface-hover);"></div>
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-size: 14px; font-weight: 600; color: var(--color-text-title); margin-bottom: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${article.title}</div>
                            <div style="font-size: 12px; color: var(--color-text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${article.excerpt || ''}</div>
                        </div>
                    </a>
                `).join('');
            }
        }

        // 2. Render search results directly on the main page feed
        if (matched.length === 0) {
            mainContent.innerHTML = `
                <section class="news-feed-section" style="padding-top: var(--space-6);">
                    <div class="page-container">
                        <h2 class="section-title"><span class="section-title-icon">🔍</span>ผลการค้นหา "${query}" (ไม่พบข่าว)</h2>
                        <p style="color: var(--color-text-muted); text-align: center; padding: 40px 0;">ไม่พบข่าวสารที่ตรงกับคำค้นหาของคุณ</p>
                    </div>
                </section>
            `;
        } else {
            const gridHtml = matched.map(article => renderNewsCard(article)).join('');
            mainContent.innerHTML = `
                <section class="news-feed-section" style="padding-top: var(--space-6);">
                    <div class="page-container">
                        <h2 class="section-title"><span class="section-title-icon">🔍</span>ผลการค้นหา "${query}" (${matched.length} รายการ)</h2>
                        <div class="news-grid">${gridHtml}</div>
                    </div>
                </section>
            `;
        }
    }

    searchBtn.addEventListener('click', () => { 
        searchOverlay.style.display = 'block';
        if (searchInput) searchInput.focus();
    });
    
    searchClose.addEventListener('click', () => { 
        searchOverlay.style.display = 'none';
        if (searchInput) searchInput.value = '';
        if (searchResultsList) searchResultsList.style.display = 'none';
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => performSearch(e.target.value));
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                searchOverlay.style.display = 'none';
                if (searchResultsList) searchResultsList.style.display = 'none';
            }
        });
    }

    if (searchResultsList) {
        searchResultsList.addEventListener('click', (e) => {
            if (e.target.closest('.search-result-item')) {
                searchOverlay.style.display = 'none';
                if (searchInput) searchInput.value = '';
                searchResultsList.style.display = 'none';
            }
        });
    }

    // Drawer Search Input
    const drawerSearchInput = document.querySelector('.drawer-search-input');
    if (drawerSearchInput) {
        drawerSearchInput.addEventListener('input', (e) => {
            const val = e.target.value;
            const drawerOverlay = document.getElementById('drawer-overlay');
            const drawer = document.getElementById('drawer');
            if (drawer) drawer.classList.remove('open');
            if (drawerOverlay) drawerOverlay.classList.remove('open');
            document.body.style.overflow = '';

            searchOverlay.style.display = 'block';
            if (searchInput) {
                searchInput.value = val;
                searchInput.focus();
            }
            performSearch(val);
        });
    }

    // Drawer
    const drawerOverlay = document.getElementById('drawer-overlay');
    const drawer = document.getElementById('drawer');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');

    const openDrawer = () => {
        drawer.classList.add('open');
        drawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        drawer.classList.remove('open');
        drawerOverlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.drawer-trigger')) openDrawer();
        if (e.target === drawerOverlay) closeDrawer();
        if (e.target.closest('.drawer-close-trigger') || e.target.closest('#drawer-close-btn')) closeDrawer();
    });
}

// Components
function renderNewsCard(article, featured = false) {
    const category = getCategoryBySlug(article.category);
    const sentiment = getSentimentInfo(article.sentiment);
    const bgImage = article.image ? `url(${article.image})` : 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-surface-hover) 100%)';
    
    return `
    <article class="news-card ${featured ? 'featured' : ''}">
        <a href="#/${article.category}/${article.slug}" class="news-card-link" aria-label="${article.title}">
            <div class="card-image-wrapper">
                <div class="card-image" style="background-image: ${bgImage};" role="img" aria-label="${article.title}"></div>
                ${category ? `<span class="badge-category ${category.badgeClass}">${category.label}</span>` : ''}
            </div>
            <div class="card-content">
                <h3 class="card-title">${article.title}</h3>
                ${article.excerpt ? `<p class="card-excerpt">${article.excerpt}</p>` : ''}
                <div class="card-meta">
                    <span class="sentiment-badge ${sentiment.className}">${sentiment.label}</span>
                    <div class="card-meta-info">
                        <time datetime="${article.date}">${formatRelativeTime(article.date)}</time>
                        ${article.readTime ? `<span class="read-time">• อ่าน ${article.readTime}</span>` : ''}
                    </div>
                </div>
            </div>
        </a>
    </article>`;
}

function renderNativeAdCard(title, sponsor, readTime, index) {
    return `
    <article class="news-card native-ad">
        <div class="news-card-link">
            <div class="card-image-wrapper">
                <div class="card-image" style="background-image: linear-gradient(135deg, rgba(245,158,11,0.1) 0%, var(--color-bg-surface) 100%);" role="img" aria-label="${title}"></div>
                <span class="badge-category badge-sponsored">Sponsored</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${title}</h3>
                <div class="card-meta">
                    <span class="sponsor-name">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-amber)" stroke-width="2" style="margin-right: 4px; vertical-align: middle;">
                            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                            <path d="M9 12h6M9 8h6M9 16h3"></path>
                        </svg>
                        ${sponsor}
                    </span>
                    <span class="read-time">• อ่าน ${readTime}</span>
                </div>
            </div>
        </div>
    </article>`;
}



function renderAISummaryBox(summaryPoints = [], sentiment = 'neutral') {
    const sentimentInfo = getSentimentInfo(sentiment);
    const pointsHtml = summaryPoints.length > 0 ? 
        `<ul class="ai-summary-list">${summaryPoints.map(p => `<li>${p}</li>`).join('')}</ul>` : '';
    
    return `
    <div class="ai-summary-box" role="complementary" aria-label="สรุปข่าวโดย AI">
        <div class="ai-summary-header">
            <span class="ai-badge">
                <svg class="ai-sparkle-icon" width="16" height="16" viewBox="0 0 24 24" fill="var(--color-secondary)">
                    <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z"></path>
                </svg>
                FINSYNTAX AI Copilot Summary
            </span>
            <span class="sentiment-badge ${sentimentInfo.className}">${sentimentInfo.label}</span>
        </div>
        ${pointsHtml}
    </div>`;
}

// Helper functions for Sponsor filtering
function isSponsorActive(sponsor, compareDateStr = null) {
    let checkDate = compareDateStr;
    if (!checkDate) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        checkDate = `${year}-${month}-${day}`;
    } else {
        checkDate = checkDate.split('T')[0];
    }

    if (sponsor.startDate && checkDate < sponsor.startDate) return false;
    if (sponsor.endDate && checkDate > sponsor.endDate) return false;
    return true;
}

function isSponsorCategoryMatch(sponsor, currentCategory) {
    if (!currentCategory) return true; // All categories on home page
    if (!sponsor.targetCategories || sponsor.targetCategories.includes('all')) return true;
    return sponsor.targetCategories.includes(currentCategory);
}

function sortSponsors(a, b) {
    const posA = a.articlePosition || a.orderPosition || 99;
    const posB = b.articlePosition || b.orderPosition || 99;
    
    if (posA !== posB) {
        return posA - posB;
    }
    
    // If articlePosition is duplicate, sort by startDate
    const startA = a.startDate || '';
    const startB = b.startDate || '';
    if (startA !== startB) {
        return startA.localeCompare(startB);
    }
    
    // If startDate is also equal, sort by endDate
    const endA = a.endDate || '';
    const endB = b.endDate || '';
    return endA.localeCompare(endB);
}

// Views
function renderHomeView(articlesToRender, currentCategory = null) {
    if (articlesToRender.length === 0) return `<div class="page-container"><p>ไม่มีข่าวในหมวดหมู่นี้</p></div>`;
    
    const heroArticle = articlesToRender[0];
    const gridArticles = articlesToRender.slice(1);
    
    // Filter active sponsors for feed placement and category, sorted by articlePosition -> startDate -> endDate
    const activeFeedSponsors = sponsors
        .filter(s => 
            isSponsorActive(s) && 
            (s.placement === 'feed' || s.placement === 'both') &&
            isSponsorCategoryMatch(s, currentCategory)
        )
        .sort(sortSponsors);
    
    let gridHtml = '';
    const renderedSponsors = new Set();
    
    gridArticles.forEach((article, index) => {
        gridHtml += renderNewsCard(article);
        
        // Position index in grid (1-based index)
        const pos = index + 1;
        
        // 1. Find sponsor matching exact feedPosition that has not been rendered yet
        const posMatchedSponsor = activeFeedSponsors.find(s => s.feedPosition === pos && !renderedSponsors.has(s.id || s.title));
        if (posMatchedSponsor) {
            renderedSponsors.add(posMatchedSponsor.id || posMatchedSponsor.title);
            gridHtml += renderNativeAdCard(posMatchedSponsor.title, posMatchedSponsor.sponsor, posMatchedSponsor.readTime || '2 นาที', posMatchedSponsor.image);
        } else if (pos % 3 === 0 || pos === gridArticles.length) {
            // 2. Fallback to remaining active sponsors that haven't been shown
            const remainingSponsors = activeFeedSponsors.filter(s => !renderedSponsors.has(s.id || s.title));
            if (remainingSponsors.length > 0) {
                const adData = remainingSponsors[0];
                renderedSponsors.add(adData.id || adData.title);
                gridHtml += renderNativeAdCard(adData.title, adData.sponsor, adData.readTime || '2 นาที', adData.image);
            }
        }
    });

    // 3. Ensure any remaining active feed sponsors matching current category are rendered
    const unrenderedSponsors = activeFeedSponsors.filter(s => !renderedSponsors.has(s.id || s.title));
    unrenderedSponsors.forEach(adData => {
        renderedSponsors.add(adData.id || adData.title);
        gridHtml += renderNativeAdCard(adData.title, adData.sponsor, adData.readTime || '2 นาที', adData.image);
    });

    return `
        <section class="hero-section" aria-label="ข่าวเด่น">
            <div class="page-container">
                ${renderNewsCard(heroArticle, true)}
            </div>
        </section>
        <section class="news-feed-section" aria-label="ข่าวล่าสุด">
            <div class="page-container">
                <h2 class="section-title">
                    <span class="section-title-icon">⚡</span>ข่าวล่าสุด
                </h2>
                <div class="news-grid">${gridHtml}</div>
            </div>
        </section>
    `;
}

function renderNativeAdBox(
  title = '💡 แนะนำสำหรับคุณ',
  description = 'เปรียบเทียบประกันชีวิตสะสมทรัพย์ ผลตอบแทนสูงสุด 3.5% ต่อปี กับแผนที่ใช่สำหรับคุณ',
  sponsor = 'เมืองไทยประกันชีวิต',
  ctaText = 'ดูรายละเอียด',
  image = '/images/placeholder.jpg'
) {
  const imgSrc = image && (image.startsWith('/') || image.startsWith('http')) ? image : '/' + (image || 'images/placeholder.jpg');

  return `
    <aside class="in-article-ad-box" aria-label="เนื้อหาสนับสนุน">
      <div class="ad-box-inner">
        <div class="ad-box-image-wrapper">
          <img src="${imgSrc}" alt="${title}" class="ad-box-img" loading="lazy" onerror="this.onerror=null; this.src='./images/placeholder.jpg';" />
        </div>
        <div class="ad-box-content">
          <div class="ad-box-header">
            <span class="ad-box-label">Partner Insight</span>
            <span class="ad-box-sponsor">สนับสนุนโดย ${sponsor}</span>
          </div>
          <h4 class="ad-box-title">${title}</h4>
          <p class="ad-box-desc">${description}</p>
          <button class="ad-box-cta">${ctaText} →</button>
        </div>
      </div>
    </aside>
  `;
}

function getRelatedArticles(currentArticle) {
    if (!currentArticle || !articles.length) return [];
    
    // Filter articles in the exact same category
    const categoryArticles = articles.filter(a => a.category === currentArticle.category);
    const currentIndex = categoryArticles.findIndex(a => a.slug === currentArticle.slug);
    
    let result = [];
    
    if (currentIndex !== -1) {
        // categoryArticles is sorted descending by date (0 = newest)
        const newer = categoryArticles.slice(0, currentIndex).reverse(); // closest newer first
        const older = categoryArticles.slice(currentIndex + 1); // closest older first
        
        const selectedNewer = newer.slice(0, 2);
        const selectedOlder = older.slice(0, 2);
        
        result = [...selectedNewer, ...selectedOlder];
        
        // Fill remaining from current category if either newer or older has fewer than 2
        if (result.length < 4) {
            const remainingCurrentCat = categoryArticles
                .filter(a => a.slug !== currentArticle.slug && !result.some(r => r.slug === a.slug));
            result = [...result, ...remainingCurrentCat.slice(0, 4 - result.length)];
        }
    } else {
        const otherInCat = categoryArticles.filter(a => a.slug !== currentArticle.slug);
        result = [...otherInCat.slice(0, 4)];
    }
    
    // Fallback: If still less than 4, pull articles from NEXT categories sequentially
    if (result.length < 4) {
        const categorySlugs = Object.keys(CATEGORIES);
        const currentCatIdx = categorySlugs.indexOf(currentArticle.category);
        const baseIdx = currentCatIdx !== -1 ? currentCatIdx : 0;
        
        for (let i = 1; i < categorySlugs.length; i++) {
            if (result.length >= 4) break;
            
            const nextCatSlug = categorySlugs[(baseIdx + i) % categorySlugs.length];
            const nextCatArticles = articles
                .filter(a => a.category === nextCatSlug && a.slug !== currentArticle.slug && !result.some(r => r.slug === a.slug));
            
            result = [...result, ...nextCatArticles.slice(0, 4 - result.length)];
        }
    }
    
    return result.slice(0, 4);
}

function renderRelatedCardsSection(relatedArticles) {
    if (!relatedArticles || relatedArticles.length === 0) return '';
    return `
        <div class="in-article-related-container">
            ${relatedArticles.map(a => {
                const categoryInfo = getCategoryBySlug(a.category);
                const imgSrc = a.image && (a.image.startsWith('/') || a.image.startsWith('http')) ? a.image : '/' + (a.image || 'images/placeholder.jpg');
                
                return `
                <a href="#/${a.category}/${a.slug}" class="in-article-ad-box in-article-related-card" style="display: block; text-decoration: none;">
                  <div class="ad-box-inner">
                    <div class="ad-box-image-wrapper">
                      <img src="${imgSrc}" alt="${a.title}" class="ad-box-img" loading="lazy" onerror="this.onerror=null; this.src='./images/placeholder.jpg';" />
                    </div>
                    <div class="ad-box-content">
                      <div class="ad-box-header">
                        <span class="ad-box-label" style="color: var(--color-primary);">${categoryInfo ? categoryInfo.label : 'ข่าวที่เกี่ยวข้อง'}</span>
                        <span class="ad-box-sponsor">${formatRelativeTime(a.date)}</span>
                      </div>
                      <h4 class="ad-box-title">${a.title}</h4>
                      <p class="ad-box-desc">${a.excerpt || ''}</p>
                      <span class="ad-box-cta" style="display: inline-flex; align-items: center; gap: 4px;">อ่านต่อ →</span>
                    </div>
                  </div>
                </a>
                `;
            }).join('')}
        </div>
    `;
}

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

async function renderArticleView(category, slug) {
    const articleMeta = articles.find(a => a.category === category && a.slug === slug);
    if (!articleMeta) return `<div class="article-container"><h1>404 Not Found</h1></div>`;

    mainContent.innerHTML = `<div class="article-container"><p>กำลังโหลด...</p></div>`;

    try {
        const response = await fetch(getAppPath(`content/news/${category}/${articleMeta.fileName}`));
        if (!response.ok) throw new Error('Failed to load markdown');
        const markdown = await response.text();
        
        let body = markdown;
        if (markdown.startsWith('---')) {
            const endIndex = markdown.indexOf('---', 3);
            if (endIndex !== -1) {
                body = markdown.substring(endIndex + 3).trim();
            }
        }
        
        const htmlContent = marked.parse(body);
        const categoryInfo = getCategoryBySlug(articleMeta.category);
        const contentParts = splitContentForAd(htmlContent);

        const formattedDate = new Date(articleMeta.date).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const tagsHtml = articleMeta.tags && articleMeta.tags.length > 0 ?
            `<div class="article-tags">${articleMeta.tags.map(tag => `<span class="article-tag">#${tag}</span>`).join('')}</div>` : '';

        mainContent.innerHTML = `
        <article class="article-page">
            <div class="article-container">
                <!-- Breadcrumb -->
                <nav class="breadcrumb" aria-label="เส้นทาง">
                    <a href="#/">หน้าหลัก</a>
                    <span class="breadcrumb-separator">/</span>
                    ${categoryInfo ? `
                        <a href="#/${articleMeta.category}">${categoryInfo.label}</a>
                        <span class="breadcrumb-separator">/</span>
                    ` : ''}
                    <span class="breadcrumb-current">${articleMeta.title}</span>
                </nav>

                <!-- Article Header -->
                <header class="article-header">
                    ${categoryInfo ? `<span class="badge-category ${categoryInfo.badgeClass}">${categoryInfo.label}</span>` : ''}
                    <h1 class="article-title">${articleMeta.title}</h1>
                    <div class="article-meta">
                        ${articleMeta.author ? `
                        <span class="article-author">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px; vertical-align: middle;">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            ${articleMeta.author}
                        </span>` : ''}
                        <time datetime="${articleMeta.date}" class="article-date">${formattedDate}</time>
                        ${articleMeta.readTime ? `<span class="article-read-time">อ่าน ${articleMeta.readTime}</span>` : ''}
                    </div>
                </header>

                <!-- AI Summary Box -->
                ${renderAISummaryBox(articleMeta.aiSummary || articleMeta.ai_summary || [], articleMeta.sentiment)}

                <!-- Article Hero Image -->
                ${articleMeta.image ? `
                <div class="article-hero-image">
                    <img src="${articleMeta.image.startsWith('/') || articleMeta.image.startsWith('http') ? articleMeta.image : '/' + articleMeta.image}" alt="${articleMeta.title}" class="article-image-img" loading="eager" onerror="this.onerror=null; this.src='./images/placeholder.jpg';" />
                </div>` : ''}

                <!-- Article Body -->
                <div class="article-body">
                    ${contentParts.before}
                    ${(() => {
                        const activeArticleSponsors = sponsors
                            .filter(s => 
                                isSponsorActive(s) && 
                                (s.placement === 'article' || s.placement === 'both') &&
                                isSponsorCategoryMatch(s, articleMeta.category)
                            )
                            .sort(sortSponsors);
                        
                        let sponsorCards = [];
                        if (activeArticleSponsors.length > 0) {
                            sponsorCards = activeArticleSponsors.map(s => renderNativeAdBox(s.title, s.description, s.sponsor, s.ctaText, s.image));
                        } else {
                            sponsorCards = [renderNativeAdBox()];
                        }
                        
                        const relatedArticles = getRelatedArticles(articleMeta);
                        
                        const sponsor1 = sponsorCards[0] || '';
                        const news1 = relatedArticles.length > 0 ? renderRelatedCardsSection([relatedArticles[0]]) : '';
                        
                        const remainingSponsors = sponsorCards.length > 1 ? sponsorCards.slice(1).join('') : '';
                        const remainingNews = relatedArticles.length > 1 ? renderRelatedCardsSection(relatedArticles.slice(1)) : '';
                        
                        return sponsor1 + news1 + remainingSponsors + remainingNews;
                    })()}
                    ${contentParts.after}
                </div>

                <!-- Tags -->
                ${tagsHtml}
            </div>
        </article>`;
    } catch (e) {
        console.error(e);
        mainContent.innerHTML = `<div class="article-container"><h1>ไม่สามารถโหลดเนื้อหาได้</h1></div>`;
    }
}

// Router
async function renderStaticPage(pageName) {
    mainContent.innerHTML = `<div class="page-container"><p>กำลังโหลด...</p></div>`;
    try {
        const response = await fetch(getAppPath(`content/pages/${pageName}.md`));
        if (!response.ok) throw new Error('Failed to load markdown');
        const markdown = await response.text();
        
        let body = markdown;
        if (markdown.startsWith('---')) {
            const endIndex = markdown.indexOf('---', 3);
            if (endIndex !== -1) {
                body = markdown.substring(endIndex + 3).trim();
            }
        }
        
        const htmlContent = marked.parse(body);
        mainContent.innerHTML = `
        <div class="page-container" style="padding-top: var(--spacing-xl); padding-bottom: var(--spacing-xl);">
            <div class="article-content">${htmlContent}</div>
        </div>`;
    } catch (e) {
        mainContent.innerHTML = `<div class="page-container"><h1>ไม่สามารถโหลดเนื้อหาได้</h1></div>`;
    }
}

async function handleRoute() {
    updateActiveNav();
    const hash = window.location.hash.replace('#', '') || '/';
    const parts = hash.split('/').filter(Boolean);

    window.scrollTo(0, 0);

    if (parts.length === 0) {
        // Home
        mainContent.innerHTML = renderHomeView(articles);
    } else if (parts.length === 1 && CATEGORIES[parts[0]]) {
        // Category Page
        const categoryArticles = articles.filter(a => a.category === parts[0]);
        mainContent.innerHTML = renderHomeView(categoryArticles, parts[0]);
    } else if (parts.length === 1 && parts[0] === 'about-us') {
        // Static Page
        await renderStaticPage(parts[0]);
    } else if (parts.length === 2 && CATEGORIES[parts[0]]) {
        // Article Page
        await renderArticleView(parts[0], parts[1]);
    } else {
        // Handle pages like /about-us (Not fully implemented, fallback to 404)
        mainContent.innerHTML = `<div class="page-container"><h1>404 Not Found</h1></div>`;
    }
}

// Initialization
// Font Size Control System
const FONT_SIZES = [
    { size: '14px', label: '87.5%' },
    { size: '16px', label: '100% (ปกติ)' },
    { size: '18px', label: '112.5%' },
    { size: '20px', label: '125%' },
    { size: '22px', label: '137.5%' }
];
let currentFontSizeIndex = 1;

function updateFontIndicator() {
    const indicator = document.getElementById('drawer-font-indicator');
    if (indicator) {
        indicator.innerText = FONT_SIZES[currentFontSizeIndex].label.split(' ')[0];
    }
}

function initFontSize() {
    const savedIndex = parseInt(localStorage.getItem('fontSizeIndex'));
    if (!isNaN(savedIndex) && savedIndex >= 0 && savedIndex < FONT_SIZES.length) {
        currentFontSizeIndex = savedIndex;
        document.documentElement.style.fontSize = FONT_SIZES[savedIndex].size;
    }
    updateFontIndicator();
}

function adjustFontSize(delta) {
    const newIndex = Math.max(0, Math.min(FONT_SIZES.length - 1, currentFontSizeIndex + delta));
    if (newIndex !== currentFontSizeIndex) {
        currentFontSizeIndex = newIndex;
        localStorage.setItem('fontSizeIndex', currentFontSizeIndex);
        document.documentElement.style.fontSize = FONT_SIZES[currentFontSizeIndex].size;
        updateFontIndicator();
        showToast(`ขนาดข้อความ: ${FONT_SIZES[currentFontSizeIndex].label}`);
    } else {
        if (delta < 0) showToast('ขนาดข้อความเล็กที่สุดแล้ว');
        if (delta > 0) showToast('ขนาดข้อความใหญ่ที่สุดแล้ว');
    }
}

function showToast(message) {
    let toast = document.getElementById('font-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'font-toast';
        toast.className = 'font-toast';
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.add('show');
    
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
        toast.classList.remove('show');
    }, 1800);
}

function getAppPath(relativePath) {
    const cleanRelative = relativePath.replace(/^\.\//, '').replace(/^\//, '');
    let basePath = window.location.origin + window.location.pathname;
    if (!basePath.endsWith('/')) {
        basePath += '/';
    }
    return basePath + cleanRelative;
}

async function init() {
    initFontSize();
    setupShell();
    setupInteractivity();
    
    try {
        const [articleResults, sponsorResults] = await Promise.all([
            Promise.all(ARTICLE_FILES.map(file => 
                fetch(getAppPath(file))
                    .then(r => r.ok ? r.text() : '')
                    .then(text => ({ file, text }))
            )),
            Promise.all(SPONSOR_FILES.map(file => 
                fetch(getAppPath(file))
                    .then(r => r.ok ? r.text() : '')
                    .then(text => ({ file, text }))
            ))
        ]);

        articles = articleResults.map(({ file, text }) => {
            if (!text) return null;
            const { data, content } = parseFrontmatter(text);
            const parts = file.split('/');
            const fileName = parts[parts.length - 1];
            const category = data.category || parts[2];
            const slug = data.slug || fileName.replace(/\.md$/, '');
            return {
                ...data,
                content: content || '',
                category,
                slug,
                fileName,
                filePath: file
            };
        }).filter(Boolean).sort((a, b) => new Date(b.date) - new Date(a.date));

        sponsors = sponsorResults.map(({ file, text }) => {
            if (!text) return null;
            const { data } = parseFrontmatter(text);
            const fileName = file.split('/').pop();
            return {
                ...data,
                id: fileName.replace(/\.md$/, ''),
                filePath: file
            };
        }).filter(Boolean);

    } catch (e) {
        console.error("Failed to load content markdown files directly", e);
    }

    handleRoute();
    window.addEventListener('hashchange', handleRoute);
}

init();
