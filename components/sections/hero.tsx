'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Business with{' '}
              <span className="text-primary">Professional Web Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get your website for free with our comprehensive design, development, and marketing services. 
              We deliver fast, beautiful, and results-driven solutions that grow your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
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
          className="mt-16 sm:mt-24"
        >
          <div className="text-center">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
              Trusted by 500+ businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-12 opacity-60">
              {/* Placeholder for client logos - you can replace with actual logos */}
              <div className="flex items-center justify-center h-6 w-20 sm:h-8 sm:w-24 bg-gray-200 rounded"></div>
              <div className="flex items-center justify-center h-6 w-20 sm:h-8 sm:w-24 bg-gray-200 rounded"></div>
              <div className="flex items-center justify-center h-6 w-20 sm:h-8 sm:w-24 bg-gray-200 rounded"></div>
              <div className="flex items-center justify-center h-6 w-20 sm:h-8 sm:w-24 bg-gray-200 rounded"></div>
              <div className="flex items-center justify-center h-6 w-20 sm:h-8 sm:w-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
