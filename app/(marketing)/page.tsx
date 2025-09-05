import { Hero } from '@/components/sections/hero'
import { OurPromise } from '@/components/sections/our-promise'
import { ProblemStatement } from '@/components/sections/problem-statement'
import { EndToEndServices } from '@/components/sections/end-to-end-services'
import { FeaturesBenefits } from '@/components/sections/features-benefits'
import { StorytellingPanels } from '@/components/sections/storytelling-panels'
import { Testimonials } from '@/components/sections/testimonials'
import { AwardsAndStats } from '@/components/sections/awards-and-stats'
import { FreeWebsiteOffer } from '@/components/sections/free-website-offer'
import { CustomerPainPoints } from '@/components/sections/customer-pain-points'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'
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
