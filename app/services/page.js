import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import {
  ChefHat,
  Armchair,
  ShirtIcon,
  Layers,
  DoorOpen,
  Hammer,
} from 'lucide-react';

const iconMap = {
  kitchen: ChefHat,
  furniture: Armchair,
  wardrobe: ShirtIcon,
  flooring: Layers,
  door: DoorOpen,
  hammer: Hammer,
};

export const metadata = {
  title: 'Our Services | Oakwood Carpentry',
  description: 'Professional carpentry services including fitted kitchens, bespoke furniture, built-in wardrobes, flooring, doors & windows, and general carpentry.',
};

export default function ServicesPage() {
  const { services } = siteConfig;

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#5C4033] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {services.heading}
          </h1>
          <p className="text-xl text-[#D4C4B0]">
            {services.subheading}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.items.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Hammer;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#D4C4B0]/30"
                >
                  <div className="w-14 h-14 bg-[#D4C4B0] rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[#5C4033]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2C2416] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#5C4033] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2C2416] mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-[#5C4033] mb-8">
            Contact us today for a free, no-obligation quote on any of our services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#5C4033] hover:bg-[#4A3429] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
