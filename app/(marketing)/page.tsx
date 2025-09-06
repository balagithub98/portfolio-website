import { Hero } from '@/components/sections/hero'
import { OurPromise } from '@/components/sections/our-promise'
import { ProblemStatement } from '@/components/sections/problem-statement'
import { EndToEndServices } from '@/components/sections/end-to-end-services'
import { FeaturesBenefits } from '@/components/sections/features-benefits'
import { ScreenCompatibility } from '@/components/sections/screen-compatibility'
import { TechIcons } from '@/components/sections/tech-icons'
import { StorytellingPanels } from '@/components/sections/storytelling-panels'
import { Testimonials } from '@/components/sections/testimonials'
import { AwardsAndStats } from '@/components/sections/awards-and-stats'
import { FreeWebsiteOffer } from '@/components/sections/free-website-offer'
import { CustomerPainPoints } from '@/components/sections/customer-pain-points'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'
import { DemoCTA } from '@/components/sections/demo-cta'
import { LandingHorizontalScroll } from '@/components/sections/landing-horizontal-scroll'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata = generatePageMetadata({
  title: 'Professional Web Design & Development Services',
  description: 'Transform your business with our comprehensive web design, development, and marketing services. Get your website for free with our expert team.',
  path: '/',
})

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurPromise />
      <ProblemStatement />
      <EndToEndServices />
      <FeaturesBenefits />
      <ScreenCompatibility />
      <TechIcons />
      
      {/* Section Title */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-display text-foreground mb-6">
              End-to-End Business Solutions
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              From design to development to SEO, we provide comprehensive solutions that drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section className="landing-horizontal-section relative h-screen overflow-hidden">
        <LandingHorizontalScroll />
      </section>
      
      <DemoCTA />
      <StorytellingPanels />
      <Testimonials />
      <AwardsAndStats />
      <FreeWebsiteOffer />
      <CustomerPainPoints />
      <FAQ />
      <FinalCTA />
    </div>
  )
}
