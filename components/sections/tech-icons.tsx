'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CurvedUnderline, DECORATIVE_CHARS, COLOR_SCHEMES } from '@/components/ui/curved-underline'

const technologies = [
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'Tailwind CSS' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB' },
  { name: 'WordPress' },
  { name: 'Webflow' },
  { name: 'Shopify' },
  { name: 'WooCommerce' }
]

export function TechIcons() {
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="section-padding-lg bg-muted/30" ref={ref}>
      <div className="mx-auto max-w-6xl container-padding">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-heading text-foreground mb-6">
              <CurvedUnderline 
                decorativeChar={DECORATIVE_CHARS.sparkle}
                color="#000000"
                wordCount={2}
                delay={0.3}
              >
                Built with Modern Technologies
              </CurvedUnderline>
            </h2>
            <p className="text-body text-muted-foreground">
              We use the latest and most powerful technologies to create fast, secure, and scalable websites that deliver exceptional performance.
            </p>
          </motion.div>
        </div>

        {/* Endless Horizontal Scroll Animation */}
        <div className="relative overflow-hidden">
          {/* First Row - Right to Left Scroll */}
          <div className="flex items-center mb-8 sm:mb-12 overflow-hidden">
            <motion.div
              className="flex items-center gap-6 sm:gap-8 lg:gap-12"
              animate={{
                x: [0, -50 * technologies.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the technologies array for seamless loop */}
              {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group relative"
                >
                  <div className="minimal-card px-6 py-3 sm:px-8 sm:py-4 hover-lift">
                    <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Left to Right Scroll (Reverse Direction) */}
          <div className="flex items-center mb-8 sm:mb-12 overflow-hidden">
            <motion.div
              className="flex items-center gap-6 sm:gap-8 lg:gap-12"
              animate={{
                x: [-50 * technologies.length, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the technologies array for seamless loop */}
              {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-reverse-${index}`}
                  className="flex-shrink-0 group relative"
                >
                  <div className="minimal-card px-6 py-3 sm:px-8 sm:py-4 hover-lift">
                    <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Third Row - Right to Left Scroll (Faster) */}
          <div className="flex items-center overflow-hidden">
            <motion.div
              className="flex items-center gap-6 sm:gap-8 lg:gap-12"
              animate={{
                x: [0, -50 * technologies.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the technologies array for seamless loop */}
              {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-fast-${index}`}
                  className="flex-shrink-0 group relative"
                >
                  <div className="minimal-card px-6 py-3 sm:px-8 sm:py-4 hover-lift">
                    <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Premium Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20"
               style={{
                 background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`
               }}>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-mint-400 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-sm font-medium text-white">Technologies continuously updated</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}