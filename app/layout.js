import './globals.css';
import { Inter } from 'next/font/google';
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
          bg-[#FAF8F5]
          text-[#2C2416]
        `}
      >
        <CarpentryNav />
        <main>{children}</main>
        <CarpentryFooter />
      </body>
    </html>
  );
}
