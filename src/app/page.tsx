import HeaderNavigation from '@/components/sections/header-navigation';
import HeroSection from '@/components/sections/hero-section';
import NewsBanner from '@/components/sections/news-banner';
import ImageShowcase from '@/components/sections/image-showcase';
import ProductOfferings from '@/components/sections/product-offerings';
import UniqueFeatures from '@/components/sections/unique-features';
import TestimonialsCarousel from '@/components/sections/testimonials-carousel';
import ResourceLibrary from '@/components/sections/resource-library';
import ClientLogos from '@/components/sections/client-logos';
import DemoRequestForm from '@/components/sections/demo-request-form';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-['DM_Sans',sans-serif]">
      <HeaderNavigation />
      
      <main className="pt-[88px]">
        <HeroSection />
        <NewsBanner />
        <ImageShowcase />
        <ProductOfferings />
        <UniqueFeatures />
        <TestimonialsCarousel />
        <ResourceLibrary />
        <ClientLogos />
        <DemoRequestForm />
      </main>

      <Footer />
    </div>
  );
}