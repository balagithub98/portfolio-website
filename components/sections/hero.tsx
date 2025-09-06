'use client'

import { Button } from '@/components/ui/button'
import { CurvedUnderline, DECORATIVE_CHARS, COLOR_SCHEMES } from '@/components/ui/curved-underline'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ["modern", "fast", "animated", "responsive", "beautiful", "powerful"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2500)
    
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display text-foreground mb-8">
              <span className="block mb-4">We make your website</span>
              <div className="relative inline-block min-h-[1.2em]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center text-accent"
                    style={{
                      color: 'hsl(var(--accent))',
                      fontWeight: '800'
                    }}
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Get your website for free with our comprehensive design, development, and marketing services. 
              We deliver fast, beautiful, and results-driven solutions that grow your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="minimal-button w-full sm:w-auto">
                <Link href="/contact">
                  Get Your Free Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="minimal-button-secondary w-full sm:w-auto">
                <Link href="#services">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 pt-16 border-t border-border"
        >
          <div className="text-center">
            <p className="text-caption uppercase tracking-wider mb-12 text-muted-foreground">
              Trusted by 500+ businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-60">
              <div className="text-lg font-medium text-muted-foreground">TechCorp</div>
              <div className="text-lg font-medium text-muted-foreground">StartupHub</div>
              <div className="text-lg font-medium text-muted-foreground">InnovateLab</div>
              <div className="text-lg font-medium text-muted-foreground">DigitalFlow</div>
              <div className="text-lg font-medium text-muted-foreground">WebCraft</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
