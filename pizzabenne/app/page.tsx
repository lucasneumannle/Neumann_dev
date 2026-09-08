import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { TrustBar } from '@/components/trust-bar'
import { DestaquesSection } from '@/components/destaques-section'
import { MenuSection } from '@/components/menu-section'
import { ReviewsSection } from '@/components/reviews-section'
import { LocationSection } from '@/components/location-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'
import { MobileCtaBar } from '@/components/mobile-cta-bar'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <TrustBar />
        <DestaquesSection />
        <MenuSection />
        <ReviewsSection />
        <LocationSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <MobileCtaBar />
    </>
  )
}
