'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading text-background mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Book a free consultation today and let's discuss how we can help you achieve your goals. 
              No obligation, just honest advice and a clear path forward.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild size="lg" className="minimal-button bg-background text-foreground hover:bg-muted">
            <Link href="/contact">
              <Calendar className="mr-2 h-4 w-4" />
              Book Free Consultation
            </Link>
          </Button>
          <Button asChild size="lg" className="minimal-button-secondary border-background text-background hover:bg-background hover:text-foreground">
            <Link href="/services">
              View Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="minimal-card p-8 max-w-4xl mx-auto bg-background/5 border-background/20">
            <h3 className="text-subheading text-background mb-8 text-center">
              What Happens Next?
            </h3>
            <div className="minimal-grid minimal-grid-3">
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/10 mx-auto mb-4">
                  <span className="text-background font-bold">1</span>
                </div>
                <h4 className="text-body font-semibold text-background mb-2">Free Consultation</h4>
                <p className="text-muted-foreground text-sm">We discuss your goals and current challenges</p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/10 mx-auto mb-4">
                  <span className="text-background font-bold">2</span>
                </div>
                <h4 className="text-body font-semibold text-background mb-2">Custom Proposal</h4>
                <p className="text-muted-foreground text-sm">We create a tailored solution for your business</p>
              </div>
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background/10 mx-auto mb-4">
                  <span className="text-background font-bold">3</span>
                </div>
                <h4 className="text-body font-semibold text-background mb-2">Start Building</h4>
                <p className="text-muted-foreground text-sm">We begin work on your project immediately</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">No obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Quick response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
