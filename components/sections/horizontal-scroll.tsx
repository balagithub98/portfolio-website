'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const panels = gsap.utils.toArray(".panel")
    console.log('Found panels:', panels.length)

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-section",
        pin: true,
        scrub: true,
        start: "top top",
        end: () => "+=" + window.innerWidth * (panels.length - 1),
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
    <div className="minimal-card p-8 hover-lift">
      <h3 className="text-subheading text-foreground mb-4">{title}</h3>
      <p className="text-body text-muted-foreground leading-relaxed">{text}</p>
    </div>
  )

  return (
    <div ref={containerRef} className="flex h-full w-max">
      {/* Debug indicator */}
      <div className="fixed top-4 left-4 z-50 bg-background/90 border border-border rounded-lg px-3 py-2">
        <p className="text-xs text-muted-foreground">
          GSAP ScrollTrigger Active - Scroll to see panels
        </p>
      </div>

      {/* Design Title Panel */}
      <div className="panel w-screen h-screen bg-background text-foreground flex items-center justify-center p-12">
        <h2 className="text-display text-foreground">Design</h2>
      </div>

      {/* Design Grid Panel */}
      <div className="panel w-screen h-screen bg-muted/20 text-foreground p-12 flex flex-col items-center justify-center">
        <h2 className="text-display text-foreground mb-16">Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
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
      <div className="panel w-screen h-screen bg-background text-foreground flex items-center justify-center p-12">
        <h2 className="text-display text-foreground">Development</h2>
      </div>

      {/* Development Grid Panel */}
      <div className="panel w-screen h-screen bg-muted/20 text-foreground p-12 flex flex-col items-center justify-center">
        <h2 className="text-display text-foreground mb-16">Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
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

      {/* Marketing Title Panel */}
      <div className="panel w-screen h-screen bg-background text-foreground flex items-center justify-center p-12">
        <h2 className="text-display text-foreground">Marketing</h2>
      </div>

      {/* Marketing Grid Panel */}
      <div className="panel w-screen h-screen bg-muted/20 text-foreground p-12 flex flex-col items-center justify-center">
        <h2 className="text-display text-foreground mb-16">Marketing Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <Box
            title="Setup"
            text="We establish your marketing foundation with analytics, tracking, and goal configuration."
          />
          <Box
            title="Optimization"
            text="Continuous optimization of your campaigns, content, and user experience for maximum results."
          />
          <Box
            title="Growth"
            text="Scale your success with advanced strategies and data-driven decisions for sustainable growth."
          />
        </div>
      </div>

      {/* SEO Title Panel */}
      <div className="panel w-screen h-screen bg-background text-foreground flex items-center justify-center p-12">
        <h2 className="text-display text-foreground">SEO</h2>
      </div>

      {/* SEO Grid Panel */}
      <div className="panel w-screen h-screen bg-muted/20 text-foreground p-12 flex flex-col items-center justify-center">
        <h2 className="text-display text-foreground mb-16">SEO Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
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