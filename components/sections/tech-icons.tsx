'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CurvedUnderline, DECORATIVE_CHARS, COLOR_SCHEMES } from '@/components/ui/curved-underline'

const technologies = [
  { 
    name: 'React', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React - A JavaScript library for building user interfaces'
  },
  { 
    name: 'JavaScript', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    alt: 'JavaScript - A programming language for web development'
  },
  { 
    name: 'TypeScript', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    alt: 'TypeScript - A typed superset of JavaScript'
  },
  { 
    name: 'D3.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
    alt: 'D3.js - A JavaScript library for data visualization'
  },
  { 
    name: 'Next.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    alt: 'Next.js - A React framework for production'
  },
  { 
    name: 'HTML', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    alt: 'HTML5 - HyperText Markup Language for web structure'
  },
  { 
    name: 'CSS', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    alt: 'CSS3 - Cascading Style Sheets for web styling'
  },
  { 
    name: 'Sass', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    alt: 'Sass - A CSS preprocessor for enhanced styling'
  },
  { 
    name: 'Tailwind CSS', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    alt: 'Tailwind CSS - A utility-first CSS framework'
  },
  { 
    name: 'Bootstrap', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    alt: 'Bootstrap - A popular CSS framework for responsive design'
  },
  { 
    name: 'Three.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    alt: 'Three.js - A JavaScript 3D library for web graphics'
  },
  { 
    name: 'Strapi', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg',
    alt: 'Strapi - A headless CMS for building APIs'
  },
  { 
    name: 'Webpack', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
    alt: 'Webpack - A module bundler for JavaScript applications'
  },
  { 
    name: 'Firebase', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    alt: 'Firebase - A platform for building mobile and web applications'
  },
  { 
    name: 'Figma', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    alt: 'Figma - A collaborative interface design tool'
  },
  { 
    name: 'Webflow', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg',
    alt: 'Webflow - A visual web design platform'
  },
  { 
    name: 'WordPress', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    alt: 'WordPress - A popular content management system'
  },
  { 
    name: 'Wix', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wix/wix-original.svg',
    alt: 'Wix - A cloud-based web development platform'
  },
  { 
    name: 'Clerk', 
    logo: 'https://clerk.com/favicon.ico',
    alt: 'Clerk - Authentication and user management platform'
  },
  { 
    name: 'Supabase', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    alt: 'Supabase - An open source Firebase alternative'
  },
  { 
    name: 'Resend', 
    logo: 'https://resend.com/favicon.ico',
    alt: 'Resend - Email API for developers'
  },
  { 
    name: 'MailerSend', 
    logo: 'https://www.mailersend.com/favicon.ico',
    alt: 'MailerSend - Email delivery service'
  },
  { 
    name: 'Vercel', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    alt: 'Vercel - A platform for frontend developers'
  },
  { 
    name: 'Netlify', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
    alt: 'Netlify - A web development platform'
  },
  { 
    name: 'GitHub', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    alt: 'GitHub - A code hosting platform for version control'
  },
  { 
    name: 'Docker', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    alt: 'Docker - A containerization platform'
  },
  { 
    name: 'Kubernetes', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg',
    alt: 'Kubernetes - A container orchestration platform'
  },
  { 
    name: 'AWS', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    alt: 'Amazon Web Services - A cloud computing platform'
  },
  { 
    name: 'GCP', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    alt: 'Google Cloud Platform - A cloud computing platform'
  },
  { 
    name: 'Azure', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    alt: 'Microsoft Azure - A cloud computing platform'
  },
  { 
    name: 'PlanetScale', 
    logo: 'https://planetscale.com/favicon.ico',
    alt: 'PlanetScale - A serverless MySQL platform'
  },
  { 
    name: 'Prisma', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    alt: 'Prisma - A database toolkit for TypeScript and Node.js'
  }
]

export function TechIcons() {
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true, amount: 0.3 })
  
  // Create different shuffled arrays for each row to avoid overlapping patterns
  const shuffleArray = (array: typeof technologies) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
  
  const row1Tech = shuffleArray(technologies)
  const row2Tech = shuffleArray(technologies)
  const row3Tech = shuffleArray(technologies)

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 w-full" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl text-center mb-16 w-full">
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
        <div className="relative overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }} role="region" aria-label="Technology logos carousel">
          {/* First Row - Right to Left Scroll */}
          <div className="flex items-center mb-6 sm:mb-8 overflow-hidden w-full" aria-hidden="true">
            <motion.div
              className="flex items-center gap-6 sm:gap-8 lg:gap-10"
              animate={{
                x: [0, -100 * technologies.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the technologies array for seamless loop */}
              {[...row1Tech, ...row1Tech, ...row1Tech].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group relative"
                >
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.alt}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xs sm:text-sm lg:text-base font-bold text-gray-700">${tech.name}</span>`;
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Left to Right Scroll (Reverse Direction) */}
          <div className="flex items-center mb-6 sm:mb-8 overflow-hidden w-full" aria-hidden="true">
            <motion.div
              className="flex items-center gap-6 sm:gap-8 lg:gap-10"
              animate={{
                x: [-100 * technologies.length, 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the technologies array for seamless loop */}
              {[...row2Tech, ...row2Tech, ...row2Tech].map((tech, index) => (
                <div
                  key={`${tech.name}-reverse-${index}`}
                  className="flex-shrink-0 group relative"
                >
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.alt}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xs sm:text-sm lg:text-base font-bold text-gray-700">${tech.name}</span>`;
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Third Row - Right to Left Scroll (Faster) */}
          <div className="flex items-center overflow-hidden w-full" aria-hidden="true">
            <motion.div
              className="flex items-center gap-6 sm:gap-8 lg:gap-10"
              animate={{
                x: [0, -100 * technologies.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the technologies array for seamless loop */}
              {[...row3Tech, ...row3Tech, ...row3Tech].map((tech, index) => (
                <div
                  key={`${tech.name}-fast-${index}`}
                  className="flex-shrink-0 group relative"
                >
                  <div 
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)`
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.alt}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        // Fallback to text if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-xs sm:text-sm lg:text-base font-bold text-gray-700">${tech.name}</span>`;
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Screen Reader Accessible Technology List */}
        <div className="sr-only">
          <h3>Technologies We Use</h3>
          <ul>
            {technologies.map((tech) => (
              <li key={tech.name}>{tech.alt}</li>
            ))}
          </ul>
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