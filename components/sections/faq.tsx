'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How much does a website cost?',
    answer: 'Our basic website package is completely free! We build your entire website at no cost, and you only pay for hosting and maintenance after the first year. Premium features and custom development are available at competitive rates.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Most websites are completed within 2-3 weeks from the initial consultation. Complex projects may take 4-6 weeks. We provide regular updates throughout the development process so you always know where we stand.'
  },
  {
    question: 'Do I own my website and content?',
    answer: 'Absolutely! You own 100% of your website, content, and all associated files. We provide you with full access to your website files and can transfer everything to any hosting provider you choose.'
  },
  {
    question: 'Can I make changes to my website after it\'s built?',
    answer: 'Yes! We provide training on how to update your content, and we offer ongoing maintenance packages for technical updates and changes. You can also request unlimited revisions during the initial build process.'
  },
  {
    question: 'What if I\'m not happy with the design?',
    answer: 'We offer unlimited revisions until you\'re completely satisfied. Our goal is to create a website that perfectly represents your brand and meets your business objectives. We work closely with you throughout the entire process.'
  },
  {
    question: 'Do you provide hosting and domain services?',
    answer: 'Yes! We include free hosting and domain registration for the first year with every website package. After the first year, hosting costs are minimal and we can help you choose the best hosting solution for your needs.'
  },
  {
    question: 'Will my website work on mobile devices?',
    answer: 'Absolutely! All our websites are built with a mobile-first approach and are fully responsive. Your website will look and function perfectly on smartphones, tablets, and desktop computers.'
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes! We provide 24/7 support and offer various maintenance packages to keep your website updated, secure, and running smoothly. We\'re here to help your business succeed online.'
  }
]

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

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
            <h2 className="text-heading text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Got questions? We've got answers. Here are the most common questions we receive from our clients.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="minimal-card overflow-hidden hover-lift"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-body font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems.includes(index) ? 'auto' : 0,
                    opacity: openItems.includes(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
