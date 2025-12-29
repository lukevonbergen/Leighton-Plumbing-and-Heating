import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import {
  Flame,
  Wrench,
  Thermometer,
  Bath,
  Droplets,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  boiler: Flame,
  service: Wrench,
  heating: Thermometer,
  bathroom: Bath,
  plumbing: Droplets,
  emergency: AlertCircle,
};

export default function CarpentryServices() {
  const { services } = siteConfig;

  return (
    <section className="py-20 px-6 md:px-12 bg-[#F8FAFB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            {services.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {services.subheading}
          </p>
        </div>

        {/* Services Grid */}
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

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[#00A1D7] hover:text-[#0089b8] font-semibold transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
