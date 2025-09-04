'use client'

import { motion } from 'framer-motion'

export function ServicesIntro() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide comprehensive digital solutions to help your business thrive online. 
              From initial design to ongoing marketing, we're your complete digital partner.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
