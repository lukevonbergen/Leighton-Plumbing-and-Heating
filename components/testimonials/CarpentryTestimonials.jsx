'use client';

import { siteConfig } from '@/config/siteConfig';
import { Quote } from 'lucide-react';

export default function CarpentryTestimonials() {
  const { testimonials } = siteConfig;

  return (
    <section className="py-20 px-6 md:px-12 bg-[#00A1D7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {testimonials.heading}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {testimonials.subheading}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.entries.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <Quote className="w-8 h-8 text-[#00A1D7] mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
