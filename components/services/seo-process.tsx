'use client'

import { motion } from 'framer-motion'
import { Search, Settings, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Planning & Setup',
    description: 'We analyze your current SEO performance, research keywords, and create a comprehensive strategy tailored to your business goals.',
    features: ['Keyword Research', 'Competitor Analysis', 'Technical Audit', 'Strategy Development'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    icon: Settings,
    title: 'Implementation',
    description: 'Our team implements on-page and technical SEO optimizations, creates quality content, and builds authoritative backlinks.',
    features: ['On-Page Optimization', 'Technical SEO', 'Content Creation', 'Link Building'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    icon: BarChart3,
    title: 'Monitoring',
    description: 'We continuously monitor your rankings, traffic, and conversions, making data-driven adjustments to maximize your results.',
    features: ['Performance Tracking', 'Ranking Monitoring', 'Traffic Analysis', 'Conversion Optimization'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  }
]

export function SEOProcess() {
  return (
    <section id="seo" className="py-24 sm:py-32 bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-300/20 to-green-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-300/15 to-emerald-300/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
              className="relative rounded-2xl p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-xl"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
                borderColor: step.color.includes('green') ? '#10b981' : 
                            step.color.includes('blue') ? '#3b82f6' : '#a855f7',
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
              }}
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${step.color} shadow-lg mb-6`}>
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <ul className="space-y-2">
                {step.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className={`h-2 w-2 rounded-full mr-3`} style={{
                      background: step.color.includes('green') ? '#10b981' : 
                                 step.color.includes('blue') ? '#3b82f6' : '#a855f7'
                    }}></div>
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
