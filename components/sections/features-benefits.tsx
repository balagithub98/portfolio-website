'use client'

import { motion } from 'framer-motion'
import { Smartphone, Search, Zap, Shield, Users, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Every website is built with mobile users in mind, ensuring perfect experience across all devices.'
  },
  {
    icon: Search,
    title: 'SEO-Friendly',
    description: 'Built-in SEO optimization to help your website rank higher in search results and attract more customers.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with modern technologies and best practices for maximum performance.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with SSL certificates and regular backups to keep your data safe.'
  },
  {
    icon: Users,
    title: 'User-Friendly',
    description: 'Intuitive interfaces designed to convert visitors into customers with seamless user experience.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Ready',
    description: 'Built-in analytics and tracking to help you understand your audience and optimize performance.'
  }
]

export function FeaturesBenefits() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading text-foreground mb-6">
              Why Choose Our Websites?
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Our websites are built with cutting-edge technology and user-focused design principles to deliver exceptional results.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="minimal-grid minimal-grid-2 lg:minimal-grid-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="minimal-card p-8 hover-lift"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 mb-6">
                  <feature.icon className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-subheading text-foreground mb-4">{feature.title}</h3>
                <p className="text-body text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
