'use client'

import { motion } from 'framer-motion'

export function ServicesIntro() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-300/15 to-blue-300/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
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
