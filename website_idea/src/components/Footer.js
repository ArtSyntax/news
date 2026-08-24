import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/categories';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="FINSYNTAX หน้าหลัก">
            <span className="logo-icon">F</span>
            <span className="logo-text">FINSYNTAX</span>
          </Link>
          <p className="footer-tagline">
            Decode the Market. Empower Your Wealth.
          </p>
          <p className="footer-description">
            แพลตฟอร์มข่าวการเงินอัจฉริยะ สำหรับนักลงทุนรุ่นใหม่
            ที่ต้องการข้อมูลแม่นยำ รวดเร็ว และเข้าใจง่าย
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-nav-section">
          <h3 className="footer-heading">หมวดหมู่</h3>
          <nav className="footer-nav" aria-label="หมวดหมู่ข่าว">
            {NAV_ITEMS.filter((item) => item.href !== '/').map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact & Social */}
        <div className="footer-contact">
          <h3 className="footer-heading">ติดตามเรา</h3>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="X (Twitter)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="social-link" aria-label="LINE">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 5.79 2 10.4c0 3.86 3.14 7.18 7.5 8.2-.1.32-.67 2.04-.7 2.18-.05.2.07.39.28.39.14 0 .28-.07.36-.14 1-1.35 2.7-3.62 3.34-4.32.74.07 1.48.1 2.22.1 5.52 0 10-3.79 10-8.41C22 5.79 17.52 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {currentYear} FINSYNTAX. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">นโยบายความเป็นส่วนตัว</a>
          <a href="#">เงื่อนไขการใช้งาน</a>
        </div>
      </div>
    </footer>
  );
}
