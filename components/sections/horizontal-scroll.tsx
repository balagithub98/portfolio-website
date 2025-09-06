'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const panels = [
  {
    id: 'design',
    title: 'Design',
    sections: [
      {
        title: 'Discovery',
        description: 'We research your business, target audience, and competitors to create a strategic foundation.'
      },
      {
        title: 'Design',
        description: 'Our designers create beautiful, user-friendly interfaces that reflect your brand and convert visitors.'
      },
      {
        title: 'Delivery',
        description: 'We deliver pixel-perfect designs with detailed specifications and style guides.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development',
    sections: [
      {
        title: 'Planning',
        description: 'We create a detailed development roadmap with timelines, milestones, and technical specifications.'
      },
      {
        title: 'Development & Testing',
        description: 'Our developers build your website using modern technologies with rigorous testing at every step.'
      },
      {
        title: 'Launch & Maintenance',
        description: 'We handle deployment, monitoring, and ongoing maintenance to keep your site running smoothly.'
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    sections: [
      {
        title: 'Setup',
        description: 'We establish your marketing foundation with analytics, tracking, and goal configuration.'
      },
      {
        title: 'Optimization',
        description: 'Continuous optimization of your campaigns, content, and user experience for maximum results.'
      },
      {
        title: 'Growth',
        description: 'Scale your success with advanced strategies and data-driven decisions for sustainable growth.'
      }
    ]
  }
]

export function HorizontalScroll() {
  const [currentPanel, setCurrentPanel] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Create a more controlled scroll progression
  const x = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["0%", "-100%", "-200%", "-200%"])
  const smoothX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentPanel > 0) {
        e.preventDefault()
        setCurrentPanel(prev => prev - 1)
      } else if (e.key === 'ArrowRight' && currentPanel < panels.length - 1) {
        e.preventDefault()
        setCurrentPanel(prev => prev + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPanel])

  // Handle touch/swipe
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentPanel < panels.length - 1) {
      setCurrentPanel(prev => prev + 1)
    }
    if (isRightSwipe && currentPanel > 0) {
      setCurrentPanel(prev => prev - 1)
    }
  }

  // Update current panel based on scroll progress with lock mechanism
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest < 0.33) {
        setCurrentPanel(0) // Design
      } else if (latest < 0.66) {
        setCurrentPanel(1) // Development
      } else if (latest < 0.9) {
        setCurrentPanel(2) // Marketing
      } else {
        // Lock at the end - no more horizontal movement
        setCurrentPanel(2)
      }
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <section className="relative">
      {/* Progress Indicator */}
      <div className="fixed top-1/2 right-8 z-50 transform -translate-y-1/2">
        <div className="flex flex-col space-y-3">
          {panels.map((panel, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <button
                onClick={() => setCurrentPanel(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPanel 
                    ? 'bg-accent scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to ${panel.title} panel`}
              />
              <span className={`text-xs transition-all duration-300 ${
                index === currentPanel 
                  ? 'text-accent font-medium' 
                  : 'text-muted-foreground/50'
              }`}>
                {panel.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="fixed top-1/2 left-8 z-50 transform -translate-y-1/2">
        <button
          onClick={() => setCurrentPanel(prev => Math.max(0, prev - 1))}
          disabled={currentPanel === 0}
          className={`p-3 rounded-full transition-all duration-300 ${
            currentPanel === 0 
              ? 'bg-muted-foreground/20 text-muted-foreground/50 cursor-not-allowed' 
              : 'bg-background/80 text-foreground hover:bg-background shadow-lg border border-border'
          }`}
          aria-label="Previous panel"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="fixed top-1/2 right-20 z-50 transform -translate-y-1/2">
        <button
          onClick={() => setCurrentPanel(prev => Math.min(panels.length - 1, prev + 1))}
          disabled={currentPanel === panels.length - 1}
          className={`p-3 rounded-full transition-all duration-300 ${
            currentPanel === panels.length - 1 
              ? 'bg-muted-foreground/20 text-muted-foreground/50 cursor-not-allowed' 
              : 'bg-background/80 text-foreground hover:bg-background shadow-lg border border-border'
          }`}
          aria-label="Next panel"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="h-[500vh] relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            ref={scrollRef}
            style={{ x: smoothX }}
            className="flex h-full"
          >
            {panels.map((panel, index) => (
              <div
                key={panel.id}
                className="w-screen h-screen flex-shrink-0 flex items-center justify-center"
              >
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center"
                  >
                    <h2 className="text-display text-foreground mb-16">
                      {panel.title}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {panel.sections.map((section, sectionIndex) => (
                        <motion.div
                          key={section.title}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.4 + (sectionIndex * 0.1) 
                          }}
                          className="minimal-card p-8 hover-lift"
                        >
                          <h3 className="text-subheading text-foreground mb-4">
                            {section.title}
                          </h3>
                          <p className="text-body text-muted-foreground leading-relaxed">
                            {section.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Instructions */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-background/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2"
        >
          <p className="text-caption text-muted-foreground text-center">
            {currentPanel === 0 && "Scroll down to explore Design process"}
            {currentPanel === 1 && "Continue scrolling to see Development workflow"}
            {currentPanel === 2 && "Final section - scroll to continue to next page section"}
          </p>
        </motion.div>
      </div>

      {/* Lock/Release Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.8 ? 1 : 0,
          scale: scrollYProgress.get() > 0.8 ? 1 : 0.8
        }}
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-2">
          <p className="text-caption text-accent font-medium text-center">
            🔓 Horizontal scroll releasing - normal scrolling resumes
          </p>
        </div>
      </motion.div>
    </section>
  )
}
