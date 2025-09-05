'use client'

import { motion } from 'framer-motion'
import { Calendar, Code, Wrench } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: 'Planning & Design',
    description: 'We start with comprehensive planning, user research, and design to ensure your website meets your business objectives.',
    features: ['Project Planning', 'User Research', 'Wireframing', 'UI/UX Design'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Code,
    title: 'Development & Testing',
    description: 'Our developers build your website using modern technologies with rigorous testing to ensure quality and performance.',
    features: ['Frontend Development', 'Backend Development', 'Database Design', 'Quality Assurance'],
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'from-indigo-50 to-purple-50'
  },
  {
    icon: Wrench,
    title: 'Launch & Maintenance',
    description: 'We handle deployment, monitoring, and ongoing maintenance to keep your website running smoothly and securely.',
    features: ['Deployment', 'Performance Monitoring', 'Security Updates', 'Ongoing Support'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  }
]

export function DevelopmentProcess() {
  return (
    <section id="development" className="py-24 sm:py-32 bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-300/15 to-blue-300/15 rounded-full blur-2xl"></div>
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
              className="relative rounded-2xl p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-xl"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
                borderColor: step.color.includes('blue') ? '#3b82f6' : 
                            step.color.includes('indigo') ? '#6366f1' : '#10b981',
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
                      background: step.color.includes('blue') ? '#3b82f6' : 
                                 step.color.includes('indigo') ? '#6366f1' : '#10b981'
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
