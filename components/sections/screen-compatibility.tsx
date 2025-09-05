'use client'

import { motion } from 'framer-motion'
import { Smartphone, Monitor, Tablet } from 'lucide-react'

const devices = [
  {
    icon: Smartphone,
    name: 'Mobile',
    description: 'Perfect experience on all smartphones',
    features: ['Touch-optimized', 'Fast loading', 'Responsive design'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Tablet,
    name: 'Tablet',
    description: 'Seamless experience on tablets and iPads',
    features: ['Adaptive layout', 'Touch gestures', 'Optimized spacing'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  },
  {
    icon: Monitor,
    name: 'Desktop',
    description: 'Full-featured experience on desktop computers',
    features: ['Full functionality', 'Keyboard shortcuts', 'Large displays'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  }
]

export function ScreenCompatibility() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-slate-300/15 to-gray-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-zinc-300/15 to-slate-300/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-gray-300/10 to-slate-300/10 rounded-full blur-2xl"></div>
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
              Perfect on Every Device
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our websites are designed to work flawlessly across all devices, ensuring your customers have the best experience no matter how they access your site.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {devices.map((device, index) => (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative rounded-2xl p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-xl"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
                  borderColor: device.color.includes('blue') ? '#3b82f6' : 
                              device.color.includes('purple') ? '#a855f7' : '#10b981',
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
                }}
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${device.color} shadow-lg mb-6`}>
                  <device.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{device.name}</h3>
                <p className="text-gray-600 mb-6">{device.description}</p>
                <ul className="space-y-2">
                  {device.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className={`h-2 w-2 rounded-full mr-3`} style={{
                        background: device.color.includes('blue') ? '#3b82f6' : 
                                   device.color.includes('purple') ? '#a855f7' : '#10b981'
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
