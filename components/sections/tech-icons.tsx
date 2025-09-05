'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const technologies = [
  { name: 'Next.js', icon: '⚡', color: 'from-gray-800 to-gray-900' },
  { name: 'React', icon: '⚛️', color: 'from-blue-500 to-blue-600' },
  { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-500 to-teal-500' },
  { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-indigo-600' },
  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-emerald-600' },
  { name: 'WordPress', icon: '📝', color: 'from-blue-700 to-blue-800' },
  { name: 'Webflow', icon: '🌊', color: 'from-purple-500 to-purple-600' },
  { name: 'Shopify', icon: '🛍️', color: 'from-green-500 to-green-600' },
  { name: 'WooCommerce', icon: '🛒', color: 'from-orange-500 to-red-500' }
]

export function TechIcons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-rose-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-300/15 to-indigo-300/15 rounded-full blur-2xl"></div>
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
              Built with Modern Technologies
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We use the latest and most powerful technologies to create fast, secure, and scalable websites that deliver exceptional performance.
            </p>
          </motion.div>
        </div>

        {/* Animated Technology Icons */}
        <div className="relative">
          {/* Row 1 - Left to Right */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 overflow-hidden">
            {technologies.slice(0, 3).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl shadow-lg border-2 backdrop-blur-xl w-24 sm:w-32 tech-icon hover:scale-105 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
                  borderColor: tech.color.includes('gray') ? '#374151' : 
                              tech.color.includes('blue') ? '#3b82f6' :
                              tech.color.includes('cyan') ? '#06b6d4' :
                              tech.color.includes('green') ? '#10b981' :
                              tech.color.includes('purple') ? '#a855f7' :
                              tech.color.includes('orange') ? '#f97316' : '#ef4444',
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
                }}
              >
                <div className={`flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg bg-gradient-to-r ${tech.color} shadow-lg mb-3 sm:mb-4`}>
                  <span className="text-lg sm:text-2xl">{tech.icon}</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 overflow-hidden">
            {technologies.slice(3, 6).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ 
                  duration: 0.8, 
                  delay: (index + 3) * 0.3,
                  ease: "easeOut"
                }}
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl shadow-lg border-2 backdrop-blur-xl w-24 sm:w-32 tech-icon hover:scale-105 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
                  borderColor: tech.color.includes('gray') ? '#374151' : 
                              tech.color.includes('blue') ? '#3b82f6' :
                              tech.color.includes('cyan') ? '#06b6d4' :
                              tech.color.includes('green') ? '#10b981' :
                              tech.color.includes('purple') ? '#a855f7' :
                              tech.color.includes('orange') ? '#f97316' : '#ef4444',
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
                }}
              >
                <div className={`flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg bg-gradient-to-r ${tech.color} shadow-lg mb-3 sm:mb-4`}>
                  <span className="text-lg sm:text-2xl">{tech.icon}</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Row 3 - Left to Right */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 overflow-hidden">
            {technologies.slice(6, 9).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ 
                  duration: 0.8, 
                  delay: (index + 6) * 0.3,
                  ease: "easeOut"
                }}
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl shadow-lg border-2 backdrop-blur-xl w-24 sm:w-32 tech-icon hover:scale-105 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
                  borderColor: tech.color.includes('gray') ? '#374151' : 
                              tech.color.includes('blue') ? '#3b82f6' :
                              tech.color.includes('cyan') ? '#06b6d4' :
                              tech.color.includes('green') ? '#10b981' :
                              tech.color.includes('purple') ? '#a855f7' :
                              tech.color.includes('orange') ? '#f97316' : '#ef4444',
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
                }}
              >
                <div className={`flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg bg-gradient-to-r ${tech.color} shadow-lg mb-3 sm:mb-4`}>
                  <span className="text-lg sm:text-2xl">{tech.icon}</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continuous Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Technologies continuously updated</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
