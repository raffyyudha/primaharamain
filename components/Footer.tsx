import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.avif"
                alt="Prima Haramain Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-2xl font-serif font-bold text-white">
                Prima<span className="text-gold">Haramain</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-4">
              Biro perjalanan Umroh & Tour Aqsa resmi terpercaya yang berkomitmen melayani tamu Allah dengan sepenuh hati.
            </p>
            <p className="text-xs text-gray-500 mb-6">
              SK Kemenag: <span className="text-gold font-medium">02202022405730001</span>
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/primaharamainabadi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/primaharamainabadi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Tautan Cepat</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#" className="hover:text-gold transition-colors">Beranda</Link></li>
              <li><Link href="#tentang" className="hover:text-gold transition-colors">Tentang Kami</Link></li>
              <li><Link href="#paket" className="hover:text-gold transition-colors">Paket Umroh</Link></li>
              <li><Link href="#galeri" className="hover:text-gold transition-colors">Galeri Jamaah</Link></li>
              <li><Link href="#testimoni" className="hover:text-gold transition-colors">Testimoni</Link></li>
              <li><Link href="#kontak" className="hover:text-gold transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Layanan Kami</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#paket" className="hover:text-gold transition-colors">Umroh</Link></li>
              <li><Link href="#paket" className="hover:text-gold transition-colors">Tour Aqsa</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Kontak Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span>MTH Square Ground Floor A4 A<br />Jalan Letjen M.T Haryono Kavling 10<br />Jakarta Timur, DKI Jakarta</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span>0822 1587 1742</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span>primahabadi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PT. Prima Haramain Abadi. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
