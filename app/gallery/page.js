'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const { gallery } = siteConfig;
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#5C4033] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {gallery.heading}
            </h1>
            <p className="text-xl text-[#D4C4B0]">
              {gallery.subheading}
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(image)}
                  className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-md group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#2C2416]/0 group-hover:bg-[#2C2416]/50 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 bg-gradient-to-t from-[#2C2416]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-medium">
                        {image.alt}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2C2416] mb-4">
              Like What You See?
            </h2>
            <p className="text-lg text-[#5C4033] mb-8">
              Every project is unique. Let's discuss how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#5C4033] hover:bg-white hover:text-[#5C4033] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-150"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
