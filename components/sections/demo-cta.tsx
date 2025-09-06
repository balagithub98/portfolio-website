'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function DemoCTA() {
  return (
    <section className="py-24 sm:py-32 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h2 className="text-heading text-foreground mb-6">
              Experience Modern Web Design
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed mb-8">
              See our innovative horizontal scroll section in action. Watch how vertical scrolling 
              transforms into horizontal motion across multiple panels, creating an engaging and 
              modern user experience.
            </p>
            <Button asChild size="lg" className="minimal-button">
              <Link href="/demo">
                View Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
