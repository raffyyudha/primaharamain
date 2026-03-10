'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Apakah PT. Prima Haramain Abadi travel resmi?",
    a: "Ya, kami adalah Penyelenggara Perjalanan Ibadah Umroh (PPIU) yang resmi terdaftar di Kementerian Agama Republik Indonesia. Anda dapat mengecek legalitas kami melalui aplikasi Umrah Cerdas Kemenag."
  },
  {
    q: "Bagaimana cara mendaftar umroh?",
    a: "Pendaftaran sangat mudah. Anda bisa menghubungi konsultan kami via WhatsApp, mengisi formulir pendaftaran, menyerahkan dokumen (Paspor, KTP, KK, Buku Nikah/Akta Lahir), dan membayar DP (Down Payment) untuk booking seat."
  },
  {
    q: "Apakah harga paket sudah termasuk tiket pesawat dan hotel?",
    a: "Ya, harga paket kami adalah All-In. Sudah termasuk tiket pesawat PP, akomodasi hotel di Makkah dan Madinah, visa umroh, transportasi bus full AC, makan 3x sehari, muthawif, dan perlengkapan umroh."
  },
  {
    q: "Apakah ada pembimbing selama di Tanah Suci?",
    a: "Tentu. Setiap grup keberangkatan akan didampingi oleh Tour Leader dari Indonesia dan Muthawif (pembimbing ibadah) yang berpengalaman dan berilmu selama di Tanah Suci."
  },
  {
    q: "Bagaimana jika saya belum punya paspor?",
    a: "Tim kami akan membantu memberikan surat rekomendasi dari travel dan Kemenag setempat untuk mempermudah proses pembuatan paspor Anda di kantor Imigrasi."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h4 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">FAQ</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>
         
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-surface rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-surface hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-primary text-lg pr-8">{f.q}</span>
                <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 text-text-light leading-relaxed border-t border-gray-100">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
