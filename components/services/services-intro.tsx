'use client'

import { motion } from 'framer-motion'
import { CurvedUnderline, DECORATIVE_CHARS, COLOR_SCHEMES } from '@/components/ui/curved-underline'

export function ServicesIntro() {
  return (
    <section className="section-padding-lg bg-white">
      <div className="mx-auto max-w-6xl container-padding">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display text-foreground mb-8">
              <CurvedUnderline 
                decorativeChar={DECORATIVE_CHARS.diamond}
                color="#000000"
                wordCount={1}
                delay={0.2}
              >
                Our Services
              </CurvedUnderline>
            </h1>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive digital solutions to help your business thrive online. 
              From initial design to ongoing marketing, we're your complete digital partner.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
