import CarpentryHero from '@/components/hero/CarpentryHero';
import CarpentryServices from '@/components/services/CarpentryServices';
import CarpentryAbout from '@/components/about/CarpentryAbout';
import CarpentryGallery from '@/components/gallery/CarpentryGallery';
import CarpentryTestimonials from '@/components/testimonials/CarpentryTestimonials';
import CarpentryContact from '@/components/contact/CarpentryContact';

export default function HomePage() {
  return (
    <main>
      <CarpentryHero />
      <CarpentryServices />
      <CarpentryAbout />
      <CarpentryGallery />
      <CarpentryTestimonials />
      <CarpentryContact />
    </main>
  );
}
