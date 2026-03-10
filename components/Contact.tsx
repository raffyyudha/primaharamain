'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="kontak" className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Hubungi Kami</h4>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
              Mari Rencanakan Perjalanan Suci Anda
            </h2>
            <p className="text-text-light text-lg mb-10">
              Konsultan perjalanan kami siap membantu menjawab pertanyaan dan merencanakan ibadah umroh Anda dengan sebaik-baiknya.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Kantor Pusat</h4>
                  <p className="text-text-light leading-relaxed">
                    MTH Square Ground Floor A4 A<br />
                    Jalan Letjen M.T Haryono Kavling 10<br />
                    Jakarta Timur, DKI Jakarta
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Telepon & WhatsApp</h4>
                  <p className="text-text-light text-lg font-medium">0822 1587 1742</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Email</h4>
                  <p className="text-text-light">primahabadi@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg mb-1">Jam Operasional</h4>
                  <p className="text-text-light">Senin - Jumat: 09:00 - 17:00 WIB<br/>Sabtu: 09:00 - 14:00 WIB</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-bg p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Kirim Pesan</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">Nomor WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Contoh: 08123456789"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Pesan / Pertanyaan</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-surface border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-light text-white py-4 rounded-lg font-bold transition-colors shadow-md text-lg"
              >
                Kirim Pesan Sekarang
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
