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
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="xl">
                <Link href="/contact">
                  Get Your Free Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="#services">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Hero Image/Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flow-root sm:mt-24"
        >
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="aspect-[16/9] rounded-md bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">🚀</div>
                <p className="text-xl">Your Website Awaits</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
