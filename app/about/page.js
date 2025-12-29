import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'About Us | Oakwood Carpentry',
  description: 'Learn about Oakwood Carpentry - a family-run business with over 15 years of experience delivering exceptional craftsmanship across Surrey and South London.',
};

export default function AboutPage() {
  const { about, testimonials } = siteConfig;

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#5C4033] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {about.heading}
          </h1>
          <p className="text-xl text-[#D4C4B0]">
            Crafting quality carpentry since 2009
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
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
              <h2 className="text-3xl font-bold text-[#2C2416] mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-[#5C4033] mb-8">
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
                    <div className="w-6 h-6 bg-[#5C4033] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#2C2416] font-medium">{feature}</span>
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
          <h2 className="text-3xl font-bold text-[#2C2416] text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4C4B0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#5C4033]">15+</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2C2416] mb-3">Years Experience</h3>
              <p className="text-[#5C4033]">
                Over a decade of delivering exceptional carpentry work to satisfied customers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4C4B0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#5C4033]">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2C2416] mb-3">Satisfaction</h3>
              <p className="text-[#5C4033]">
                We're not happy until you're happy. Quality is our guarantee.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4C4B0] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-[#5C4033]">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-[#2C2416] mb-3">Projects Completed</h3>
              <p className="text-[#5C4033]">
                From small repairs to complete renovations, we've done it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-6 md:px-12 bg-[#5C4033]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            {testimonials.heading}
          </h2>
          <blockquote className="text-xl text-white/90 italic mb-6">
            "{testimonials.entries[0].quote}"
          </blockquote>
          <p className="text-[#D4C4B0] font-medium">
            — {testimonials.entries[0].name}, {testimonials.entries[0].location}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2C2416] mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-[#5C4033] mb-8">
            Ready to transform your space? Get in touch for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#5C4033] hover:bg-[#4A3429] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
