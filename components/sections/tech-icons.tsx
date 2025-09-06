'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CurvedUnderline, DECORATIVE_CHARS, COLOR_SCHEMES } from '@/components/ui/curved-underline'

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Three.js', color: '#000000' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'Sass', color: '#CC6699' },
  { name: 'Webpack', color: '#8DD6F9' },
  { name: 'Strapi', color: '#2F2E8B' },
  { name: 'Bootstrap', color: '#7952B3' },
  { name: 'D3.js', color: '#F9A03C' }
]

export function TechIcons() {
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Built with Modern Technologies
            </h2>
            <p className="text-lg leading-8 text-gray-600">
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
                  <div 
                    className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
                      borderColor: `${tech.color}20`
                    }}
                  >
                    <span 
                      className="text-lg sm:text-xl lg:text-2xl font-bold whitespace-nowrap"
                      style={{ color: tech.color }}
                    >
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
                  <div 
                    className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
                      borderColor: `${tech.color}20`
                    }}
                  >
                    <span 
                      className="text-lg sm:text-xl lg:text-2xl font-bold whitespace-nowrap"
                      style={{ color: tech.color }}
                    >
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
                  <div 
                    className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`,
                      borderColor: `${tech.color}20`
                    }}
                  >
                    <span 
                      className="text-lg sm:text-xl lg:text-2xl font-bold whitespace-nowrap"
                      style={{ color: tech.color }}
                    >
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
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full backdrop-blur-xl border border-gray-200/50"
               style={{
                 background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)`
               }}>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-sm font-medium text-gray-700">Technologies continuously updated</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}