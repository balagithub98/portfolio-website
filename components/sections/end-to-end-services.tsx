'use client'

import { motion } from 'framer-motion'
import { Palette, Code, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Design',
    description: 'Beautiful, user-friendly designs that convert visitors into customers',
    features: ['UI/UX Design', 'Brand Identity', 'Responsive Design', 'User Research'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Fast, secure, and scalable websites built with modern technology',
    features: ['Frontend Development', 'Backend Development', 'Database Design', 'Performance Optimization'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Data-driven strategies to grow your online presence and reach',
    features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Analytics & Reporting'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  }
]

export function EndToEndServices() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-orange-100 via-red-50 to-pink-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/15 to-red-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-300/15 to-rose-300/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-yellow-300/10 to-orange-300/10 rounded-full blur-2xl"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              End-to-End Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From concept to launch and beyond, we provide comprehensive solutions for your digital success.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-xl`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
                  borderColor: service.color.includes('purple') ? '#a855f7' : service.color.includes('blue') ? '#3b82f6' : '#10b981',
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
                }}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${service.color} shadow-lg mb-6`}>
                  <service.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className={`h-2 w-2 rounded-full mr-3`} style={{
                        background: service.color.includes('purple') ? '#a855f7' : service.color.includes('blue') ? '#3b82f6' : '#10b981'
                      }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
