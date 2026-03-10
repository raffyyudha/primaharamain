'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function SpiritualJourney() {
  return (
    <section className="relative py-32 md:py-48 bg-primary overflow-hidden flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/nabawi_umbrellas.avif"
          alt="Masjid Nabawi Umbrellas"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-gold mb-12 opacity-50">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="mx-auto" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.3] mb-12">
            &quot;Dan berserulah kepada manusia untuk mengerjakan haji, niscaya mereka akan datang kepadamu dengan berjalan kaki, dan mengendarai unta yang kurus yang datang dari segenap penjuru yang jauh.&quot;
          </h2>
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-px bg-gold/50" />
            <p className="micro-label text-gold">
              QS. Al-Hajj: 27
            </p>
            <div className="w-12 h-px bg-gold/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
