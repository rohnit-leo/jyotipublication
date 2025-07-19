import { HeroSection } from "@/components/hero-section"
import { AnnouncementBar } from "@/components/announcement-bar"
import { FeaturedCombos } from "@/components/featured-combos"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { CategoryGrid } from "@/components/category-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <HeroSection />
      <StatsSection />
      <CategoryGrid />
      <ProcessSection />
      <FeaturedCombos />
      <TestimonialsSection />
      <WhatsAppFloat />
    </div>
  )
}
