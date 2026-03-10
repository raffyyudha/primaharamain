'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const photos = [
  "/images/jamaah_umroh.avif",
  "/images/nabawi_umbrellas.avif",
  "/images/kaaba_hero.avif",
  "/images/turkey_mosque.avif",
  "/images/jamaah_umroh.avif",
  "/images/nabawi_umbrellas.avif",
];

export function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Galeri Jamaah</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Jejak Langkah di Tanah Suci
          </h2>
          <p className="text-text-light text-lg">
            Momen-momen indah dan khusyuk para jamaah Prima Haramain selama menjalankan ibadah di Makkah dan Madinah.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-48 md:h-72 rounded-xl overflow-hidden group shadow-sm"
            >
              <Image
                src={src}
                alt={`Galeri Jamaah ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm">
            Lihat Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
}
