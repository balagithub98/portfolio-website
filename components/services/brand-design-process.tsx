'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We research your brand, target audience, and market position to create a design strategy that resonates with your customers.',
    features: ['Brand Research', 'Audience Analysis', 'Competitor Review', 'Strategy Development']
  },
  {
    icon: Palette,
    title: 'Design & Development',
    description: 'Our designers create compelling visual identities and marketing materials that communicate your brand effectively.',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Visual Identity']
  },
  {
    icon: Rocket,
    title: 'Delivery & Implementation',
    description: 'We deliver all brand assets and provide guidance on implementation across all your marketing channels.',
    features: ['Asset Delivery', 'Brand Guidelines', 'Implementation Support', 'Training']
  }
]

export function BrandDesignProcess() {
  return (
    <section id="design" className="py-24 sm:py-32 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading text-foreground mb-6">
              Brand Design
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Create a memorable brand identity that stands out from the competition and connects with your target audience.
            </p>
          </motion.div>
        </div>
        
        <div className="minimal-grid minimal-grid-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="minimal-card p-8 hover-lift"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 mb-6">
                <step.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-subheading text-foreground mb-4">{step.title}</h3>
              <p className="text-body text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
              <ul className="space-y-3">
                {step.features.map((feature) => (
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
    </section>
  )
}
