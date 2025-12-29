import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'About Us | Leighton Plumbing and Heating',
  description: 'Learn about Leighton Plumbing and Heating - Gas Safe registered engineers providing quality plumbing and heating services.',
};

export default function AboutPage() {
  const { about, testimonials } = siteConfig;

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#00A1D7] pt-40 md:pt-52 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {about.heading}
          </h1>
          <p className="text-xl text-white/90">
            Your trusted local plumbing and heating specialists
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6 md:px-12 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={about.image}
                alt={about.imageAlt}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                My Story
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                {about.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {about.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#00A1D7] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">
            Why Choose Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6F7FC] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#00A1D7]">Gas</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Gas Safe Registered</h3>
              <p className="text-gray-600">
                I'm fully qualified and Gas Safe registered for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6F7FC] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#00A1D7]">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Emergency Callouts</h3>
              <p className="text-gray-600">
                Plumbing emergencies don't wait. I offer rapid response when you need me most.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E6F7FC] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#00A1D7]">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">
                I'm not happy until you're happy. Quality workmanship is my guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-6 md:px-12 bg-[#00A1D7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            {testimonials.heading}
          </h2>
          <blockquote className="text-xl text-white/90 italic mb-6">
            "{testimonials.entries[0].quote}"
          </blockquote>
          <p className="text-white/80 font-medium">
            - {testimonials.entries[0].name}, {testimonials.entries[0].location}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-[#F8FAFB]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to discuss your plumbing or heating needs? Get in touch for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00A1D7] hover:bg-[#0089b8] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
