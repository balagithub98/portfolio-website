'use client'

import { motion } from 'framer-motion'

export function ServicesIntro() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-display text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-body text-muted-foreground leading-relaxed">
              We provide comprehensive digital solutions to help your business thrive online. 
              From initial design to ongoing marketing, we're your complete digital partner.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
