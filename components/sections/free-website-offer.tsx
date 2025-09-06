'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Gift, Zap, Globe, Shield } from 'lucide-react'

const features = [
  {
    icon: Gift,
    title: 'Fully Customizable',
    description: 'Complete control over design, content, and functionality'
  },
  {
    icon: Zap,
    title: 'Free Development',
    description: 'No hidden costs - we build your entire website at no charge'
  },
  {
    icon: Globe,
    title: 'Fast Delivery',
    description: 'Get your website live in just 2 weeks from start to finish'
  },
  {
    icon: Shield,
    title: 'Free Hosting',
    description: 'Including domain, hosting, and SSL certificate for the first year'
  }
]

export function FreeWebsiteOffer() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Gift className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h2 className="text-heading text-foreground mb-6">
              Get Your Website for Free
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Yes, you read that right! We're offering to build your complete website at no cost. 
              Here's what you get with our free website package.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="minimal-grid minimal-grid-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="minimal-card p-6 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-body font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-body text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="minimal-card p-8 max-w-2xl mx-auto">
            <h3 className="text-subheading text-foreground mb-4">
              What's the Catch?
            </h3>
            <p className="text-body text-muted-foreground mb-6 leading-relaxed">
              There's no catch! We believe in building long-term relationships. 
              We'll build your website for free, and you only pay for ongoing maintenance and hosting after the first year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="minimal-button w-full sm:w-auto">
                <Link href="/contact">
                  Claim Your Free Website
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="minimal-button-secondary w-full sm:w-auto">
                <Link href="#terms">
                  Read Terms & Conditions
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
