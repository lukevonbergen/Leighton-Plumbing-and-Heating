import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import {
  Flame,
  Wrench,
  Thermometer,
  Bath,
  Droplets,
  AlertCircle,
} from 'lucide-react';

const iconMap = {
  boiler: Flame,
  service: Wrench,
  heating: Thermometer,
  bathroom: Bath,
  plumbing: Droplets,
  emergency: AlertCircle,
};

export const metadata = {
  title: 'Our Services | Leighton Plumbing and Heating',
  description: 'Professional plumbing and heating services including boiler installation, servicing, central heating, bathroom plumbing, and emergency callouts.',
};

export default function ServicesPage() {
  const { services } = siteConfig;

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#00A1D7] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {services.heading}
          </h1>
          <p className="text-xl text-white/90">
            {services.subheading}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.items.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Wrench;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-[#E6F7FC] rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[#00A1D7]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free, no-obligation quote on any of our plumbing or heating services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00A1D7] hover:bg-[#0089b8] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
