'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-primary">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/kaaba_hero.avif"
          alt="Kaaba in Mecca"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-primary/30 to-primary/95" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold/50" />
            <span className="micro-label text-gold">Biro Perjalanan Resmi</span>
            <div className="w-12 h-px bg-gold/50" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
            Menuju <br />
            <span className="italic text-gold font-light">Baitullah</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-light text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed drop-shadow-lg"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}
        >
          Menghadirkan pengalaman ibadah yang tak terlupakan dengan standar pelayanan ultra-premium. Kami merancang setiap detail perjalanan Anda dengan dedikasi dan keikhlasan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#paket"
            className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-gold text-primary overflow-hidden rounded-sm"
          >
            <span className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative micro-label font-bold group-hover:text-primary transition-colors duration-500">
              Mulai Perjalanan
            </span>
          </a>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="micro-label text-white/50">Scroll</span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gold"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
