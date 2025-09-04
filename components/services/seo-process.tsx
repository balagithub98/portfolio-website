'use client'

import { motion } from 'framer-motion'
import { Search, Settings, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Planning & Setup',
    description: 'We analyze your current SEO performance, research keywords, and create a comprehensive strategy tailored to your business goals.',
    features: ['Keyword Research', 'Competitor Analysis', 'Technical Audit', 'Strategy Development']
  },
  {
    icon: Settings,
    title: 'Implementation',
    description: 'Our team implements on-page and technical SEO optimizations, creates quality content, and builds authoritative backlinks.',
    features: ['On-Page Optimization', 'Technical SEO', 'Content Creation', 'Link Building']
  },
  {
    icon: BarChart3,
    title: 'Monitoring',
    description: 'We continuously monitor your rankings, traffic, and conversions, making data-driven adjustments to maximize your results.',
    features: ['Performance Tracking', 'Ranking Monitoring', 'Traffic Analysis', 'Conversion Optimization']
  }
]

export function SEOProcess() {
  return (
    <section id="seo" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              SEO Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Boost your online visibility and drive more qualified traffic to your website with our proven SEO strategies.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-100 mb-6">
                <step.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <ul className="space-y-2">
                {step.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
