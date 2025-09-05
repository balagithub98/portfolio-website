'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We research your brand, target audience, and market position to create a design strategy that resonates with your customers.',
    features: ['Brand Research', 'Audience Analysis', 'Competitor Review', 'Strategy Development'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    icon: Palette,
    title: 'Design & Development',
    description: 'Our designers create compelling visual identities and marketing materials that communicate your brand effectively.',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Visual Identity'],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50'
  },
  {
    icon: Rocket,
    title: 'Delivery & Implementation',
    description: 'We deliver all brand assets and provide guidance on implementation across all your marketing channels.',
    features: ['Asset Delivery', 'Brand Guidelines', 'Implementation Support', 'Training'],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50'
  }
]

export function BrandDesignProcess() {
  return (
    <section id="design" className="py-24 sm:py-32 bg-gradient-to-br from-purple-100 via-pink-50 to-violet-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-violet-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-300/15 to-purple-300/15 rounded-full blur-2xl"></div>
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
              Brand Design
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Create a memorable brand identity that stands out from the competition and connects with your target audience.
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
                borderColor: step.color.includes('purple') ? '#a855f7' : 
                            step.color.includes('pink') ? '#ec4899' : '#8b5cf6',
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
                      background: step.color.includes('purple') ? '#a855f7' : 
                                 step.color.includes('pink') ? '#ec4899' : '#8b5cf6'
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
