import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WeddingTimeline from "@/components/sections/WeddingTimeline";
import BookingCTA from "@/components/sections/BookingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <WeddingTimeline />
      <TestimonialsSection />
      <BookingCTA />
    </>
  );
}
