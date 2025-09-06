import { HorizontalScroll } from '@/components/sections/horizontal-scroll'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata = generatePageMetadata({
  title: 'Horizontal Scroll Demo - Modern Web Experience',
  description: 'Experience our innovative horizontal scroll section that converts vertical scrolling into horizontal motion across multiple panels.',
  path: '/demo',
})

export default function DemoPage() {
  return (
    <div className="min-h-screen">
      {/* Normal vertical section before */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-display text-foreground mb-6">
              Modern Web Experience
            </h1>
            <p className="text-body text-muted-foreground leading-relaxed">
              Scroll down to experience our innovative horizontal scroll section that converts 
              vertical scrolling into horizontal motion across multiple panels.
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal scroll section */}
      <section className="horizontal-section relative h-screen overflow-hidden">
        <HorizontalScroll />
      </section>

      {/* Normal vertical section after */}
      <section className="py-24 sm:py-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-heading text-foreground mb-6">
              Back to Normal Scrolling
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              The horizontal scroll section has ended, and we're back to normal vertical scrolling. 
              This demonstrates how the scroll hijack is localized to just that one section.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-heading text-foreground mb-6">
              Seamless Integration
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              The horizontal scroll section integrates seamlessly with the rest of the page, 
              providing an engaging and modern user experience while maintaining accessibility 
              and intuitive navigation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
