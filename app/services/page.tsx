import { ServicesIntro } from '@/components/services/services-intro'
import { SEOProcess } from '@/components/services/seo-process'
import { DevelopmentProcess } from '@/components/services/development-process'
import { BrandDesignProcess } from '@/components/services/brand-design-process'
import { CaseStudies } from '@/components/services/case-studies'
import { ServicesCTA } from '@/components/services/services-cta'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata = generatePageMetadata({
  title: 'Our Services - Web Design, Development & Marketing',
  description: 'Comprehensive web design, development, and digital marketing services. From SEO to custom development, we help your business grow online.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesIntro />
      <SEOProcess />
      <DevelopmentProcess />
      <BrandDesignProcess />
      <CaseStudies />
      <ServicesCTA />
    </div>
  )
}
