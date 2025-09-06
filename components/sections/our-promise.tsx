'use client'

import { motion } from 'framer-motion'
import { RefreshCw, Headphones, Zap, Users } from 'lucide-react'

const promises = [
  {
    icon: RefreshCw,
    title: 'Unlimited Revisions',
    description: 'We work with you until you\'re 100% satisfied with the result.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance to help your business succeed.'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your website live in record time without compromising quality.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join our network of successful entrepreneurs and businesses.'
  }
]

export function OurPromise() {
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
              Our Promise to You
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              We're committed to delivering exceptional results that exceed your expectations.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="minimal-grid minimal-grid-2 lg:minimal-grid-4">
            {promises.map((promise, index) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="minimal-card p-8 text-center hover-lift"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-6">
                  <promise.icon className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-subheading text-foreground mb-4">
                  {promise.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
