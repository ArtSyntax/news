#!/usr/bin/env python3
import os
import re
from datetime import datetime

BASE_URL = "https://finfeednews.com"
NEWS_DIR = "content/news"
PAGES_DIR = "content/pages"
SITEMAP_PATH = "sitemap.xml"

STATIC_ROUTES = [
    {"path": "", "changefreq": "hourly", "priority": "1.0"},
    {"path": "stock", "changefreq": "hourly", "priority": "0.9"},
    {"path": "economy", "changefreq": "hourly", "priority": "0.9"},
    {"path": "business", "changefreq": "hourly", "priority": "0.9"},
    {"path": "insurance", "changefreq": "daily", "priority": "0.8"},
    {"path": "sd", "changefreq": "daily", "priority": "0.8"},
    {"path": "story", "changefreq": "daily", "priority": "0.8"},
    {"path": "lifestyle", "changefreq": "daily", "priority": "0.8"},
    {"path": "pr", "changefreq": "daily", "priority": "0.7"},
    {"path": "about-us", "changefreq": "monthly", "priority": "0.6"},
    {"path": "privacy-policy", "changefreq": "monthly", "priority": "0.5"},
    {"path": "terms-of-use", "changefreq": "monthly", "priority": "0.5"},
    {"path": "sponsor", "changefreq": "monthly", "priority": "0.6"},
]

def parse_frontmatter(content):
    meta = {}
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            yaml_content = parts[1]
            for line in yaml_content.splitlines():
                line = line.strip()
                if not line or line.startswith("#") or line.startswith("-"):
                    continue
                if ":" in line:
                    k, v = line.split(":", 1)
                    k = k.strip()
                    v = v.strip().strip('"').strip("'")
                    meta[k] = v
    return meta

def scan_news_articles():
    articles = []
    if not os.path.exists(NEWS_DIR):
        return articles

    for root, _, files in os.walk(NEWS_DIR):
        for f in sorted(files):
            if f.endswith(".md") and not f.startswith("."):
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, NEWS_DIR)
                parts = rel_path.split(os.sep)
                category = parts[0] if len(parts) > 1 else "general"
                
                try:
                    with open(full_path, "r", encoding="utf-8") as file:
                        content = file.read()
                        meta = parse_frontmatter(content)
                        
                        slug = meta.get("slug") or f.replace(".md", "")
                        date = meta.get("date")
                        if not date:
                            # Try to extract date from filename (e.g. 20260818_...)
                            date_match = re.match(r"^(\d{4})(\d{2})(\d{2})", f)
                            if date_match:
                                date = f"{date_match.group(1)}-{date_match.group(2)}-{date_match.group(3)}"
                            else:
                                mtime = os.path.getmtime(full_path)
                                date = datetime.fromtimestamp(mtime).strftime("%Y-%m-%d")
                                
                        title = meta.get("title", slug)
                        
                        articles.append({
                            "category": category,
                            "slug": slug,
                            "title": title,
                            "date": date,
                            "file_path": os.path.join("content/news", rel_path)
                        })
                except Exception as e:
                    print(f"Error reading {full_path}: {e}")

    # Sort articles newest to oldest
    articles.sort(key=lambda x: x["date"], reverse=True)
    return articles

def generate_sitemap():
    today = datetime.now().strftime("%Y-%m-%d")
    articles = scan_news_articles()
    
    xml_lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"',
        '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
        '',
        '  <!-- Core & Category Pages -->'
    ]

    for route in STATIC_ROUTES:
        url_path = f"{BASE_URL}/{route['path']}".rstrip("/")
        if not route['path']:
            url_path = f"{BASE_URL}/"
        xml_lines.extend([
            '  <url>',
            f'    <loc>{url_path}</loc>',
            f'    <lastmod>{today}</lastmod>',
            f'    <changefreq>{route["changefreq"]}</changefreq>',
            f'    <priority>{route["priority"]}</priority>',
            '  </url>'
        ])

    xml_lines.extend(['', '  <!-- News Articles (Auto-scanned from content/news/) -->'])

    for art in articles:
        art_url = f"{BASE_URL}/{art['category']}/{art['slug']}"
        xml_lines.extend([
            '  <url>',
            f'    <loc>{art_url}</loc>',
            f'    <lastmod>{art["date"]}</lastmod>',
            '    <changefreq>never</changefreq>',
            '    <priority>0.8</priority>',
            '  </url>'
        ])

    xml_lines.append('</urlset>')
    
    output_content = "\n".join(xml_lines) + "\n"
    with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
        f.write(output_content)

    print(f"✅ Successfully generated {SITEMAP_PATH} with {len(STATIC_ROUTES)} static pages and {len(articles)} news articles.")
    return articles

if __name__ == "__main__":
    generate_sitemap()
