import { AnnouncementBar } from "@/components/announcement-bar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedCombos } from "@/components/featured-combos"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <HeroSection />
      <StatsSection />
      <CategoryGrid />
      <FeaturedCombos />
      <ProcessSection />
      <TestimonialsSection />
      <WhatsAppFloat />
    </div>
  )
}
