import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { VideoSection } from '@/components/VideoSection';
import { CryptoCarousel } from '@/components/CryptoCarousel';
import { NewsGrid } from '@/components/NewsGrid';
import { Testimonials } from '@/components/Testimonials';
import { ProductGrid } from '@/components/ProductGrid';
import { About } from '@/components/About';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { FloatingCTA } from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoSection />
      <CryptoCarousel />
      <NewsGrid />
      <Testimonials />
      <ProductGrid />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
