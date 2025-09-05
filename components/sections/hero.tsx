'use client'

import { Button } from '@/components/ui/button'
import { CurvedUnderline, DECORATIVE_CHARS, COLOR_SCHEMES } from '@/components/ui/curved-underline'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="section-padding-lg bg-white">
      <div className="mx-auto max-w-6xl container-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display text-foreground mb-8">
              <CurvedUnderline 
                decorativeChar={DECORATIVE_CHARS.star}
                color="#000000"
                wordCount={3}
                delay={0.2}
              >
                Transform Your Business with Professional Web Services
              </CurvedUnderline>
            </h1>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-12">
              Get your website for free with our comprehensive design, development, and marketing services. 
              We deliver fast, beautiful, and results-driven solutions that grow your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="xl" className="w-full sm:w-auto">
                <Link href="/contact">
                  Get Your Free Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
                <Link href="#services">
                  <Play className="mr-2 h-5 w-5" />
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
          className="mt-20 pt-16 border-t border-border"
        >
          <div className="text-center">
            <p className="text-caption uppercase tracking-wide mb-8">
              Trusted by 500+ businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-40">
              <div className="text-lg font-medium text-muted-foreground">Company A</div>
              <div className="text-lg font-medium text-muted-foreground">Company B</div>
              <div className="text-lg font-medium text-muted-foreground">Company C</div>
              <div className="text-lg font-medium text-muted-foreground">Company D</div>
              <div className="text-lg font-medium text-muted-foreground">Company E</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
