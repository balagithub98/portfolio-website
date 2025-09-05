'use client'

import { motion } from 'framer-motion'
import { RefreshCw, Headphones, Zap, Users } from 'lucide-react'

const promises = [
  {
    icon: RefreshCw,
    title: 'Unlimited Revisions',
    description: 'We work with you until you\'re 100% satisfied with the result.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance to help your business succeed.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your website live in record time without compromising quality.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join our network of successful entrepreneurs and businesses.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50'
  }
]

export function OurPromise() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-cyan-300/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-2xl"></div>
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
              Our Promise to You
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're committed to delivering exceptional results that exceed your expectations.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {promises.map((promise, index) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${promise.color} shadow-lg`}>
                  <promise.icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <dt className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                  {promise.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {promise.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
