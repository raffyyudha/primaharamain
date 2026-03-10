'use client';

import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            Siap Memulai Perjalanan Suci Anda?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}
          >
            Jangan tunda niat baik Anda. Hubungi konsultan kami sekarang untuk mendapatkan penawaran terbaik dan jadwal keberangkatan terdekat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://wa.me/6282215871742" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-full font-bold transition-colors shadow-lg flex items-center justify-center gap-2 text-lg">
              <Phone className="w-5 h-5" />
              Chat WhatsApp
            </a>
            <a href="#paket" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-colors backdrop-blur-sm text-center text-lg">
              Lihat Paket Umroh
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
