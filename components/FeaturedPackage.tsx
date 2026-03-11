'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const packages = [
  {
    title: "Umrah Khusyuk",
    duration: "9 Hari",
    priceDisplay: "Rp 25 Jt",
    image: "/images/kaaba_hero.avif",
    details: [
      { label: "Makkah", value: "Hotel Bintang 4–5 dekat Masjidil Haram" },
      { label: "Madinah", value: "Hotel Bintang 4–5 dekat Masjid Nabawi" },
      { label: "Maskapai", value: "Saudia Airlines / Oman Airlines" },
    ]
  },
  {
    title: "Tur Al Aqsa (Afiliasi Santriani Wisata)",
    duration: "10 Hari",
    priceDisplay: "$2,700",
    image: "/images/al_aqsa.avif",
    details: [
      { label: "Wadi Rum", value: "Oasis Camp" },
      { label: "Dead Sea", value: "Grand Est. Dead Sea Hotel" },
      { label: "Jerusalem", value: "Holy Land Hotel" },
      { label: "Taba", value: "Strand Hotel" },
      { label: "Cairo", value: "Hilton Grand Nile Hotel" },
    ]
  }
];

export function FeaturedPackage() {
  return (
    <section id="paket" className="py-32 md:py-48 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-8">
              <span className="micro-label text-gold">02</span>
              <div className="h-px w-12 bg-gold/50" />
              <span className="micro-label text-text-light">Koleksi Perjalanan</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-primary">
              Pilihan <span className="italic text-gold font-light">Paket Unggulan</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-text-light font-light max-w-md leading-relaxed">
              Setiap paket dirancang dengan teliti untuk memberikan kenyamanan maksimal selama Anda beribadah di Tanah Suci dan berziarah.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative h-[450px] w-full overflow-hidden mb-8 rounded-sm">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-sm border border-white/20">
                    <span className="micro-label text-white">{pkg.duration}</span>
                  </div>
                  <div className="text-white text-right">
                    <span className="block text-sm font-light mb-1">Mulai dari</span>
                    <span className="text-2xl font-serif">{pkg.priceDisplay}</span>
                  </div>
                </div>
              </div>

              <div className="pr-8">
                <h3 className="text-2xl font-serif text-primary mb-6 group-hover:text-gold transition-colors duration-300">{pkg.title}</h3>

                <div className="space-y-4 mb-8">
                  {pkg.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between items-center hairline-b pb-4">
                      <span className="text-sm font-light text-text-light min-w-[30%]">{detail.label}</span>
                      <span className="text-sm font-medium text-primary text-right">{detail.value}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/6282215871742?text=Assalamualaikum%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3.5 rounded-full font-bold transition-colors shadow-md text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-5 h-5 flex-shrink-0">
                    <path fill="#fff" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324a60.95 60.95 0 0 0 31.112 8.481h.028c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.922-43.252 60.72 60.72 0 0 0-43.199-17.885z" />
                    <path fill="#25D366" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324a60.95 60.95 0 0 0 31.112 8.481h.028c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.922-43.252 60.72 60.72 0 0 0-43.199-17.885z" />
                    <path fill="#fff" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043a6.76 6.76 0 0 0-4.894 2.3c-1.682 1.838-6.42 6.269-6.42 15.288 0 8.998 6.573 17.7 7.492 18.923.918 1.224 12.698 20.326 31.344 27.64 15.502 6.076 18.648 4.864 22.022 4.562 3.373-.302 10.878-4.448 12.413-8.74 1.537-4.29 1.537-7.972 1.077-8.74-.459-.765-1.684-1.224-3.52-2.142-1.838-.918-10.878-5.37-12.562-5.982-1.684-.612-2.908-.918-4.137.918s-4.746 5.979-5.818 7.206c-1.071 1.224-2.143.918-3.98.306-1.838-.612-7.833-2.959-14.655-9.166-5.343-4.812-8.886-10.69-9.957-12.527-1.071-1.838-.114-2.835.806-3.752.826-.826 1.838-2.142 2.755-3.214.918-1.071 1.224-1.838 1.836-3.061.612-1.224.306-2.298-.153-3.214-.459-.918-4.028-9.98-5.685-13.633z" />
                  </svg>
                  Tanya di WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
