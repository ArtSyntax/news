import '@/styles/globals.css';
import ClientShell from '@/components/ClientShell';

export const metadata = {
  title: {
    default: 'FINSYNTAX | ข่าวการเงินอัจฉริยะ',
    template: '%s | FINSYNTAX',
  },
  description:
    'FINSYNTAX - แพลตฟอร์มข่าวการเงินอัจฉริยะสำหรับนักลงทุนรุ่นใหม่ อัปเดตข่าวหุ้น เศรษฐกิจ ธุรกิจ ประกัน และ ESG แบบเรียลไทม์ พร้อม AI Copilot สรุปข่าวให้เข้าใจง่าย',
  keywords: [
    'ข่าวหุ้น',
    'ข่าวการเงิน',
    'ข่าวเศรษฐกิจ',
    'ลงทุน',
    'หุ้นไทย',
    'หุ้นต่างประเทศ',
    'ประกัน',
    'ESG',
    'FINSYNTAX',
    'AI ข่าว',
  ],
  metadataBase: new URL('https://finsyntax.com'),
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    siteName: 'FINSYNTAX',
    title: 'FINSYNTAX | Decode the Market. Empower Your Wealth.',
    description:
      'แพลตฟอร์มข่าวการเงินอัจฉริยะ สำหรับนักลงทุนรุ่นใหม่ที่ต้องการข้อมูลแม่นยำ รวดเร็ว',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@finsyntax',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'FINSYNTAX',
    url: 'https://finsyntax.com',
    description:
      'แพลตฟอร์มข่าวการเงินอัจฉริยะสำหรับนักลงทุนรุ่นใหม่',
    logo: 'https://finsyntax.com/logo.png',
    sameAs: [
      'https://twitter.com/finsyntax',
      'https://facebook.com/finsyntax',
    ],
  };

  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Prompt:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          ข้ามไปยังเนื้อหาหลัก
        </a>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
