'use client'

import { motion } from 'framer-motion'
import { Smartphone, Monitor, Tablet } from 'lucide-react'

const devices = [
  {
    icon: Smartphone,
    name: 'Mobile',
    description: 'Perfect experience on all smartphones',
    features: ['Touch-optimized', 'Fast loading', 'Responsive design']
  },
  {
    icon: Tablet,
    name: 'Tablet',
    description: 'Seamless experience on tablets and iPads',
    features: ['Adaptive layout', 'Touch gestures', 'Optimized spacing']
  },
  {
    icon: Monitor,
    name: 'Desktop',
    description: 'Full-featured experience on desktop computers',
    features: ['Full functionality', 'Keyboard shortcuts', 'Large displays']
  }
]

export function ScreenCompatibility() {
  return (
    <section className="py-24 sm:py-32 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading text-foreground mb-6">
              Perfect on Every Device
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Our websites are designed to work flawlessly across all devices, ensuring your customers have the best experience no matter how they access your site.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="minimal-grid minimal-grid-3">
            {devices.map((device, index) => (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="minimal-card p-8 hover-lift"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 mb-6">
                  <device.icon className="h-8 w-8 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-subheading text-foreground mb-4">{device.name}</h3>
                <p className="text-body text-muted-foreground mb-6 leading-relaxed">{device.description}</p>
                <ul className="space-y-3">
                  {device.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-2 w-2 rounded-full bg-accent mr-3"></div>
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
