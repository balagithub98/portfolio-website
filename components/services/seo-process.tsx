'use client'

import { motion } from 'framer-motion'
import { Search, Settings, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Planning & Setup',
    description: 'We analyze your current SEO performance, research keywords, and create a comprehensive strategy tailored to your business goals.',
    features: ['Keyword Research', 'Competitor Analysis', 'Technical Audit', 'Strategy Development']
  },
  {
    icon: Settings,
    title: 'Implementation',
    description: 'Our team implements on-page and technical SEO optimizations, creates quality content, and builds authoritative backlinks.',
    features: ['On-Page Optimization', 'Technical SEO', 'Content Creation', 'Link Building']
  },
  {
    icon: BarChart3,
    title: 'Monitoring',
    description: 'We continuously monitor your rankings, traffic, and conversions, making data-driven adjustments to maximize your results.',
    features: ['Performance Tracking', 'Ranking Monitoring', 'Traffic Analysis', 'Conversion Optimization']
  }
]

export function SEOProcess() {
  return (
    <section id="seo" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading text-foreground mb-6">
              SEO Services
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Boost your online visibility and drive more qualified traffic to your website with our proven SEO strategies.
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
