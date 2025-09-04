'use client'

import { motion } from 'framer-motion'
import { Calendar, Code, Wrench } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: 'Planning & Design',
    description: 'We start with comprehensive planning, user research, and design to ensure your website meets your business objectives.',
    features: ['Project Planning', 'User Research', 'Wireframing', 'UI/UX Design']
  },
  {
    icon: Code,
    title: 'Development & Testing',
    description: 'Our developers build your website using modern technologies with rigorous testing to ensure quality and performance.',
    features: ['Frontend Development', 'Backend Development', 'Database Design', 'Quality Assurance']
  },
  {
    icon: Wrench,
    title: 'Launch & Maintenance',
    description: 'We handle deployment, monitoring, and ongoing maintenance to keep your website running smoothly and securely.',
    features: ['Deployment', 'Performance Monitoring', 'Security Updates', 'Ongoing Support']
  }
]

export function DevelopmentProcess() {
  return (
    <section id="development" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Website Development
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Custom websites built with modern technologies, optimized for performance, and designed to convert visitors into customers.
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
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 mb-6">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">{step.description}</p>
              <ul className="space-y-2">
                {step.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
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
