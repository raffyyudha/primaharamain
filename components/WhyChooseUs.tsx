'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Plane, Building2, Users } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: "Hotel Dekat Masjidil Haram",
    desc: "Akomodasi hotel pilihan kami berlokasi sangat dekat dengan Masjidil Haram dan Masjid Nabawi — cukup jalan kaki 10 menit ke pelataran masjid."
  },
  {
    icon: ShieldCheck,
    title: "Harga Kompetitif",
    desc: "Paket umroh dengan harga terjangkau namun tetap berkualitas tinggi. Tidak ada biaya tersembunyi, semua sudah termasuk dalam satu paket."
  },
  {
    icon: Plane,
    title: "Jadwal Pasti Berangkat",
    desc: "Kepastian keberangkatan dijamin. Kami berkomitmen penuh agar jadwal tidak berubah-ubah sehingga Anda tenang mempersiapkan ibadah."
  },
  {
    icon: Users,
    title: "Pembimbing Berpengalaman",
    desc: "Didampingi muthawif dan pembimbing ibadah yang berilmu serta berpengalaman untuk memastikan ibadah Anda berjalan dengan khusyuk dan sempurna."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-32 md:py-48 bg-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px w-12 bg-gold/50" />
              <span className="micro-label text-gold">Keunggulan Kami</span>
              <div className="h-px w-12 bg-gold/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-primary">
              Mengapa Memilih <br />
              <span className="italic text-gold font-light">Prima Haramain</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-8 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                <feature.icon className="w-8 h-8 text-gold relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-primary mb-4">{feature.title}</h3>
              <p className="text-text-light font-light leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
