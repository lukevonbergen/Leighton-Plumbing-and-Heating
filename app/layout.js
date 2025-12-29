import './globals.css';
import { Inter } from 'next/font/google';
import BannerStrip from '@/components/banner/Banner_1';
import CarpentryNav from '@/components/navigation/CarpentryNav';
import CarpentryFooter from '@/components/footer/CarpentryFooter';
import { siteConfig } from '@/config/siteConfig';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = siteConfig.metadata.base;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${inter.variable}
          font-sans
          antialiased
          bg-white
          text-[#1A1A1A]
        `}
      >
        <BannerStrip />
        <CarpentryNav />
        <main>{children}</main>
        <CarpentryFooter />
      </body>
    </html>
  );
}
