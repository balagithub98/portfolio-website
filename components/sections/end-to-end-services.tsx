'use client'

import { motion } from 'framer-motion'
import { Palette, Code, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Design',
    description: 'Beautiful, user-friendly designs that convert visitors into customers',
    features: ['UI/UX Design', 'Brand Identity', 'Responsive Design', 'User Research']
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Fast, secure, and scalable websites built with modern technology',
    features: ['Frontend Development', 'Backend Development', 'Database Design', 'Performance Optimization']
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Data-driven strategies to grow your online presence and reach',
    features: ['SEO Optimization', 'Content Marketing', 'Social Media', 'Analytics & Reporting']
  }
]

export function EndToEndServices() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
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
