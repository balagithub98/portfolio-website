'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Medal, Target, Users, Clock, Star } from 'lucide-react'

const awards = [
  { name: 'Best Web Design 2023', issuer: 'Design Awards', icon: Trophy },
  { name: 'Top Developer', issuer: 'Tech Excellence', icon: Award },
  { name: 'Marketing Excellence', issuer: 'Digital Marketing', icon: Medal },
  { name: 'Client Satisfaction', issuer: 'Business Awards', icon: Star }
]

const stats = [
  { label: 'Projects Completed', value: '500+', icon: Target },
  { label: 'Happy Clients', value: '200+', icon: Users },
  { label: 'Average Delivery Time', value: '2 Weeks', icon: Clock },
  { label: 'Client Satisfaction', value: '98%', icon: Star }
]

export function AwardsAndStats() {
  return (
    <section className="py-24 sm:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Awards Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Awards & Certifications
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Recognized for excellence in web design, development, and digital marketing.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-24">
          {awards.map((award, index) => (
            <motion.div
              key={award.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mx-auto mb-4">
                <award.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{award.name}</h3>
              <p className="text-xs text-gray-400">{award.issuer}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Numbers
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The results speak for themselves. Here's what we've achieved for our clients.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
