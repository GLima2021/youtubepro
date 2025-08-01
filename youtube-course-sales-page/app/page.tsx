import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CourseContentSection } from "@/components/course-content-section"
import { BonusSection } from "@/components/bonus-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <FeaturesSection />
      <CourseContentSection />
      <BonusSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
