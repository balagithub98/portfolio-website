'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertTriangle, ArrowRight } from 'lucide-react'

const problems = [
  'Outdated websites that don\'t convert',
  'Poor mobile experience driving customers away',
  'Slow loading times hurting SEO rankings',
  'No clear strategy for online growth',
  'Overpaying for mediocre results'
]

export function ProblemStatement() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground/5">
                <AlertTriangle className="h-8 w-8 text-foreground" aria-hidden="true" />
              </div>
            </div>
            <h2 className="text-heading text-foreground mb-6">
              Is Your Current Website Holding You Back?
            </h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Many businesses struggle with these common website problems that cost them customers and revenue every day.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="minimal-grid minimal-grid-2 lg:minimal-grid-3">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="minimal-card p-6 hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10">
                        <div className="h-2 w-2 rounded-full bg-accent"></div>
                      </div>
                    </div>
                    <p className="text-body font-medium text-foreground">{problem}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="minimal-card p-12 max-w-2xl mx-auto">
              <h3 className="text-subheading text-foreground mb-6">
                Don't Let These Problems Cost You More Customers
              </h3>
              <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                Every day you wait is another day of lost opportunities. Let us help you transform your online presence.
              </p>
              <Button asChild size="lg" className="minimal-button">
                <Link href="/contact">
                  Get Your Free Website Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
