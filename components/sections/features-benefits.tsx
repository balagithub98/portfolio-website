'use client'

import { motion } from 'framer-motion'
import { Smartphone, Search, Zap, Shield, Users, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Every website is built with mobile users in mind, ensuring perfect experience across all devices.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'from-blue-50 to-indigo-50'
  },
  {
    icon: Search,
    title: 'SEO-Friendly',
    description: 'Built-in SEO optimization to help your website rank higher in search results and attract more customers.',
    color: 'from-green-500 to-teal-500',
    bgColor: 'from-green-50 to-teal-50'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with modern technologies and best practices for maximum performance.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with SSL certificates and regular backups to keep your data safe.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'from-red-50 to-pink-50'
  },
  {
    icon: Users,
    title: 'User-Friendly',
    description: 'Intuitive interfaces designed to convert visitors into customers with seamless user experience.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'from-purple-50 to-violet-50'
  },
  {
    icon: BarChart3,
    title: 'Analytics Ready',
    description: 'Built-in analytics and tracking to help you understand your audience and optimize performance.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'from-cyan-50 to-blue-50'
  }
]

export function FeaturesBenefits() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Websites?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our websites are built with cutting-edge technology and user-focused design principles to deliver exceptional results.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 100%)`,
                  borderColor: feature.color.includes('blue') ? '#3b82f6' : 
                              feature.color.includes('green') ? '#10b981' :
                              feature.color.includes('yellow') ? '#f59e0b' :
                              feature.color.includes('red') ? '#ef4444' :
                              feature.color.includes('purple') ? '#a855f7' : '#06b6d4'
                }}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${feature.color} shadow-lg mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
