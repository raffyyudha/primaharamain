'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function About() {
  return (
    <section id="tentang" className="py-32 md:py-48 bg-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="micro-label text-gold">01</span>
                <div className="h-px w-12 bg-gold/50" />
                <span className="micro-label text-text-light">Filosofi Kami</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight mb-10 text-primary">
                Dedikasi Dalam <br />
                <span className="italic text-gold font-light">Melayani</span>
              </h2>

              <div className="space-y-6 text-text-light font-light text-lg leading-relaxed">
                <p>
                  PT. Prima Haramain Abadi berdiri sejak Januari 2020 dengan niat suci untuk memfasilitasi umat muslim Indonesia dalam menunaikan ibadah ke Tanah Suci dengan tenang, aman, dan nyaman.
                </p>
                <p>
                  Sebagai biro perjalanan resmi yang terdaftar di Kementerian Agama RI sebagai PPIU, kami tidak sekadar menjual paket perjalanan. Kami merancang sebuah pengalaman spiritual yang mendalam, memastikan setiap rukun dan sunnah terlaksana dengan sempurna.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <div>
                  <div className="text-4xl font-serif text-primary mb-2">5+</div>
                  <div className="micro-label text-text-light">Tahun Pengalaman</div>
                </div>
                <div className="w-px h-12 bg-gold/30" />
                <div>
                  <div className="text-4xl font-serif text-primary mb-2">100%</div>
                  <div className="micro-label text-text-light">Jadwal Pasti Berangkat</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[600px] w-full md:w-[80%] ml-auto"
            >
              <Image
                src="/images/jamaah_umroh.avif"
                alt="Jamaah Umroh"
                fill
                className="object-cover rounded-sm"
              />
              <div className="absolute inset-0 border border-gold/20 -translate-x-4 translate-y-4 rounded-sm -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-12 left-0 md:left-12 bg-surface p-8 md:p-12 shadow-2xl max-w-sm rounded-sm"
            >
              <div className="text-gold mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-primary mb-3">Izin Resmi Kemenag</h3>
              <p className="text-text-light font-light text-sm leading-relaxed mb-3">
                Terdaftar resmi sebagai PPIU, memberikan kepastian keberangkatan dan keamanan dana jamaah.
              </p>
              <div className="bg-primary/5 rounded-lg px-4 py-2.5 border border-primary/10">
                <p className="text-xs text-text-light mb-0.5">No. SK Kemenag</p>
                <p className="text-sm font-bold text-primary tracking-wide">02202022405730001</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
