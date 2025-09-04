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
    <section className="py-24 sm:py-32 bg-red-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <AlertTriangle className="h-8 w-8 text-red-600" aria-hidden="true" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Is Your Current Website Holding You Back?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm border border-red-100"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Don't Let These Problems Cost You More Customers
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Every day you wait is another day of lost opportunities. Let us help you transform your online presence.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Your Free Website Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
