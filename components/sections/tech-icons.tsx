'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  { name: 'Next.js', color: 'text-gray-300' },
  { name: 'React', color: 'text-blue-300' },
  { name: 'Tailwind CSS', color: 'text-cyan-300' },
  { name: 'PostgreSQL', color: 'text-indigo-300' },
  { name: 'MongoDB', color: 'text-green-300' },
  { name: 'WordPress', color: 'text-blue-400' },
  { name: 'Webflow', color: 'text-purple-300' },
  { name: 'Shopify', color: 'text-green-400' },
  { name: 'WooCommerce', color: 'text-orange-300' }
]

export function TechIcons() {
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Premium Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-mint-400 animated-gradient"></div>
      
      {/* Floating Bokeh Light Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-xl floating-element"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-lg floating-element" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-mint-400/25 to-cyan-400/25 rounded-full blur-2xl floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-indigo-400/35 to-purple-400/35 rounded-full blur-xl floating-element" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full blur-lg floating-element" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-mint-400/20 to-emerald-400/20 rounded-full blur-3xl floating-element" style={{animationDelay: '5s'}}></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Built with <span className="bg-gradient-to-r from-cyan-400 to-mint-400 bg-clip-text text-transparent">Modern Technologies</span>
            </h2>
            <p className="text-lg leading-8 text-gray-300">
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
                  <div className="px-6 py-3 sm:px-8 sm:py-4 rounded-2xl backdrop-blur-xl border border-white/20 hover:scale-110 transition-all duration-500 hover:rotate-2"
                       style={{
                         background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)`,
                         boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)`
                       }}>
                    <span className={`text-lg sm:text-xl lg:text-2xl font-bold ${tech.color} group-hover:text-cyan-300 transition-colors duration-300 whitespace-nowrap`}>
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
                  <div className="px-6 py-3 sm:px-8 sm:py-4 rounded-2xl backdrop-blur-xl border border-white/20 hover:scale-110 transition-all duration-500 hover:-rotate-2"
                       style={{
                         background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)`,
                         boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)`
                       }}>
                    <span className={`text-lg sm:text-xl lg:text-2xl font-bold ${tech.color} group-hover:text-cyan-300 transition-colors duration-300 whitespace-nowrap`}>
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
                  <div className="px-6 py-3 sm:px-8 sm:py-4 rounded-2xl backdrop-blur-xl border border-white/20 hover:scale-110 transition-all duration-500 hover:rotate-1"
                       style={{
                         background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)`,
                         boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)`
                       }}>
                    <span className={`text-lg sm:text-xl lg:text-2xl font-bold ${tech.color} group-hover:text-cyan-300 transition-colors duration-300 whitespace-nowrap`}>
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