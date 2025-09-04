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
    <section className="py-24 sm:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Gift className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get Your Website for Free
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Yes, you read that right! We're offering to build your complete website at no cost. 
              Here's what you get with our free website package.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What's the Catch?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              There's no catch! We believe in building long-term relationships. 
              We'll build your website for free, and you only pay for ongoing maintenance and hosting after the first year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Claim Your Free Website
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
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
