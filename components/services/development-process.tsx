'use client'

import { motion } from 'framer-motion'
import { Calendar, Code, Wrench } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: 'Planning & Design',
    description: 'We start with comprehensive planning, user research, and design to ensure your website meets your business objectives.',
    features: ['Project Planning', 'User Research', 'Wireframing', 'UI/UX Design']
  },
  {
    icon: Code,
    title: 'Development & Testing',
    description: 'Our developers build your website using modern technologies with rigorous testing to ensure quality and performance.',
    features: ['Frontend Development', 'Backend Development', 'Database Design', 'Quality Assurance']
  },
  {
    icon: Wrench,
    title: 'Launch & Maintenance',
    description: 'We handle deployment, monitoring, and ongoing maintenance to keep your website running smoothly and securely.',
    features: ['Deployment', 'Performance Monitoring', 'Security Updates', 'Ongoing Support']
  }
]

export function DevelopmentProcess() {
  return (
    <section id="development" className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading text-foreground mb-6">
              Website Development
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Custom websites built with modern technologies, optimized for performance, and designed to convert visitors into customers.
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
