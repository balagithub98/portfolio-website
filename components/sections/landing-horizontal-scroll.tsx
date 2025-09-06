'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function LandingHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const panels = gsap.utils.toArray(".panel")
    console.log('Found panels:', panels.length)

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".landing-horizontal-section",
        pin: true,
        scrub: true,
        start: "top top",
        end: () => "+=" + (window.innerWidth * (panels.length - 1) * 0.8), // Reduced scroll distance for mobile
        onUpdate: (self) => {
          console.log('Scroll progress:', self.progress)
        }
      },
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const Box = ({ title, text }: { title: string; text: string }) => (
    <div className="minimal-card p-4 sm:p-6 lg:p-8 hover-lift">
      <h3 className="text-lg sm:text-xl lg:text-subheading text-foreground mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base lg:text-body text-muted-foreground leading-relaxed">{text}</p>
    </div>
  )

  return (
    <div ref={containerRef} className="flex h-full w-max">
      {/* Design Title Panel */}
      <div className="panel w-screen h-screen bg-background text-foreground flex items-center justify-center p-6 sm:p-12">
        <div className="text-center px-4">
          <h2 className="text-4xl sm:text-6xl lg:text-display text-foreground mb-4 sm:mb-6">Design</h2>
          <p className="text-sm sm:text-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We create beautiful, user-friendly interfaces that reflect your brand and convert visitors into customers.
          </p>
        </div>
      </div>

      {/* Design Grid Panel */}
      <div className="panel w-screen h-screen bg-muted/20 text-foreground p-4 sm:p-8 lg:p-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-4xl lg:text-display text-foreground mb-8 sm:mb-12 lg:mb-16 text-center px-4">Design Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl px-4">
          <Box
            title="Discovery"
            text="We research your business, target audience, and competitors to create a strategic foundation."
          />
          <Box
            title="Design"
            text="Our designers create beautiful, user-friendly interfaces that reflect your brand and convert visitors."
          />
          <Box
            title="Delivery"
            text="We deliver pixel-perfect designs with detailed specifications and style guides."
          />
        </div>
      </div>

      {/* Development Title Panel */}
      <div className="panel w-screen h-screen bg-background text-foreground flex items-center justify-center p-6 sm:p-12">
        <div className="text-center px-4">
          <h2 className="text-4xl sm:text-6xl lg:text-display text-foreground mb-4 sm:mb-6">Development</h2>
          <p className="text-sm sm:text-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We build your website using modern technologies with rigorous testing at every step.
          </p>
        </div>
      </div>

      {/* Development Grid Panel */}
      <div className="panel w-screen h-screen bg-muted/20 text-foreground p-4 sm:p-8 lg:p-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-4xl lg:text-display text-foreground mb-8 sm:mb-12 lg:mb-16 text-center px-4">Development Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl px-4">
          <Box
            title="Planning"
            text="We create a detailed development roadmap with timelines, milestones, and technical specifications."
          />
          <Box
            title="Development & Testing"
            text="Our developers build your website using modern technologies with rigorous testing at every step."
          />
          <Box
            title="Launch & Maintenance"
            text="We handle deployment, monitoring, and ongoing maintenance to keep your site running smoothly."
          />
        </div>
      </div>

      {/* SEO Title Panel */}
      <div className="panel w-screen h-screen bg-background text-foreground flex items-center justify-center p-6 sm:p-12">
        <div className="text-center px-4">
          <h2 className="text-4xl sm:text-6xl lg:text-display text-foreground mb-4 sm:mb-6">SEO</h2>
          <p className="text-sm sm:text-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We optimize your website to rank higher in search results and attract more organic traffic.
          </p>
        </div>
      </div>

      {/* SEO Grid Panel */}
      <div className="panel w-screen h-screen bg-muted/20 text-foreground p-4 sm:p-8 lg:p-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-4xl lg:text-display text-foreground mb-8 sm:mb-12 lg:mb-16 text-center px-4">SEO Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-6xl px-4">
          <Box
            title="Keyword Research"
            text="We analyze and identify the right keywords to target your ideal audience effectively."
          />
          <Box
            title="On-Page Optimization"
            text="We optimize your website structure, content, and meta tags to improve search rankings."
          />
          <Box
            title="Link Building"
            text="We create high-quality backlinks to increase your website authority and visibility."
          />
        </div>
      </div>
    </div>
  )
}
