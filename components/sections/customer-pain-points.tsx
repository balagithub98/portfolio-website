'use client'

import { motion } from 'framer-motion'
import { TrendingDown, FileText, DollarSign, AlertCircle } from 'lucide-react'

const painPoints = [
  {
    icon: TrendingDown,
    title: 'Poor Results',
    description: 'Your current website isn\'t generating leads or sales',
    impact: 'Losing potential customers daily'
  },
  {
    icon: FileText,
    title: 'No Reports',
    description: 'You have no idea how your website is performing',
    impact: 'Making decisions without data'
  },
  {
    icon: DollarSign,
    title: 'Overcharging',
    description: 'Paying too much for mediocre results',
    impact: 'Wasting money on ineffective solutions'
  }
]

export function CustomerPainPoints() {
  return (
    <section className="py-24 sm:py-32 bg-red-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Are You Experiencing These Problems?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These common issues are costing businesses thousands of dollars in lost revenue every month.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-red-100"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-100 mb-6">
                  <point.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600 mb-4">{point.description}</p>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-red-800">
                    <strong>Impact:</strong> {point.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Don't Let These Problems Continue
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$5,000+</div>
                <p className="text-sm text-gray-600">Average monthly loss from poor website performance</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">75%</div>
                <p className="text-sm text-gray-600">Of visitors leave due to poor user experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">90%</div>
                <p className="text-sm text-gray-600">Of businesses overpay for web services</p>
              </div>
            </div>
            <p className="text-lg text-gray-600">
              The longer you wait, the more money you're losing. Let us help you turn things around today.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
