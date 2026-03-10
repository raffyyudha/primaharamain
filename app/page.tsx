import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { FeaturedPackage } from '@/components/FeaturedPackage';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { SpiritualJourney } from '@/components/SpiritualJourney';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <About />
      <FeaturedPackage />
      <WhyChooseUs />
      <SpiritualJourney />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
