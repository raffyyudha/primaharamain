'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Hj. Siti Aminah",
    role: "Jamaah Umrah Khusyuk",
    text: "Pelayanan Prima Haramain sangat luar biasa. Mulai dari manasik, keberangkatan, hingga kembali ke tanah air, semuanya diurus dengan sangat profesional. Hotelnya dekat sekali dengan Masjidil Haram, jalan kaki cuma 10 menit. Muthawifnya sangat sabar membimbing kami.",
    rating: 5
  },
  {
    name: "Bpk. Ahmad Fauzi & Keluarga",
    role: "Jamaah Umrah",
    text: "Alhamdulillah, perjalanan ibadah yang sangat berkesan. Hotelnya dekat sekali dengan masjid, makanannya cocok di lidah orang Indonesia. Jadwal berangkatnya juga tepat waktu seperti yang dijanjikan.",
    rating: 5
  },
  {
    name: "Dr. Budi Santoso",
    role: "Jamaah Tour Aqsa",
    text: "Sangat merekomendasikan travel ini bagi yang mencari kenyamanan dan kepastian berangkat. Harga kompetitif dan pembimbingnya sangat berpengalaman. Ibadah jadi lebih fokus dan khusyuk.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Testimoni</h4>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Apa Kata Jamaah Kami?
          </h2>
          <p className="text-text-light text-lg">
            Kepuasan dan kenyamanan ibadah Anda adalah prioritas utama kami. Berikut adalah pengalaman mereka yang telah berangkat bersama Prima Haramain.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-bg p-8 rounded-2xl shadow-sm border border-gray-100 relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-text-light italic mb-8 leading-relaxed">
                &quot;{t.text}&quot;
              </p>
              <div>
                <h4 className="font-bold text-primary">{t.name}</h4>
                <p className="text-sm text-text-light">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
