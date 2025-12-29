'use client';
import { siteConfig } from '@/config/siteConfig';
import { Phone, Mail } from 'lucide-react';

export default function BannerStrip() {
  const banner = siteConfig.banner;

  if (!banner.show) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#FA0300] text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-4 md:gap-8">
        <a
          href={`tel:${banner.phone.replace(/\s/g, '')}`}
          className="flex items-center gap-2 hover:opacity-80 transition font-medium"
        >
          <Phone className="w-4 h-4" />
          <span>{banner.phone}</span>
        </a>
        <span className="hidden md:inline text-white/50">|</span>
        <a
          href={`mailto:${banner.email}`}
          className="hidden md:flex items-center gap-2 hover:opacity-80 transition font-medium"
        >
          <Mail className="w-4 h-4" />
          <span>{banner.email}</span>
        </a>
      </div>
    </div>
  );
}
