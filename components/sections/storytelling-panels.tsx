'use client'

import { motion } from 'framer-motion'
import { Search, Palette, Rocket, Calendar, Code, Wrench, Target, BarChart3, TrendingUp } from 'lucide-react'

const processes = [
  {
    title: 'Design',
    color: 'from-purple-500 to-pink-500',
    steps: [
      {
        icon: Search,
        title: 'Discovery',
        description: 'We research your business, target audience, and competitors to create a strategic foundation.'
      },
      {
        icon: Palette,
        title: 'Design',
        description: 'Our designers create beautiful, user-friendly interfaces that reflect your brand and convert visitors.'
      },
      {
        icon: Rocket,
        title: 'Delivery',
        description: 'We deliver pixel-perfect designs with detailed specifications and style guides.'
      }
    ]
  },
  {
    title: 'Development',
    color: 'from-blue-500 to-cyan-500',
    steps: [
      {
        icon: Calendar,
        title: 'Planning',
        description: 'We create a detailed development roadmap with timelines, milestones, and technical specifications.'
      },
      {
        icon: Code,
        title: 'Development & Testing',
        description: 'Our developers build your website using modern technologies with rigorous testing at every step.'
      },
      {
        icon: Wrench,
        title: 'Launch & Maintenance',
        description: 'We handle deployment, monitoring, and ongoing maintenance to keep your site running smoothly.'
      }
    ]
  },
  {
    title: 'Marketing',
    color: 'from-green-500 to-emerald-500',
    steps: [
      {
        icon: Target,
        title: 'Setup',
        description: 'We establish your marketing foundation with analytics, tracking, and goal configuration.'
      },
      {
        icon: BarChart3,
        title: 'Optimization',
        description: 'Continuous optimization of your campaigns, content, and user experience for maximum results.'
      },
      {
        icon: TrendingUp,
        title: 'Growth',
        description: 'Scale your success with advanced strategies and data-driven decisions for sustainable growth.'
      }
    ]
  }
]

export function StorytellingPanels() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Three comprehensive tracks that work together to deliver exceptional results for your business.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {processes.map((process, processIndex) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: processIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <div className={`h-1 w-24 mx-auto bg-gradient-to-r ${process.color} rounded-full`}></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {process.steps.map((step, stepIndex) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: stepIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border-2 h-full hover:shadow-xl transition-all duration-300"
                         style={{
                           borderColor: process.color.includes('purple') ? '#a855f7' : 
                                       process.color.includes('blue') ? '#3b82f6' : '#10b981'
                         }}>
                      <div className={`flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r ${process.color} mb-6`}>
                        <step.icon className="h-8 w-8 text-white" aria-hidden="true" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    {stepIndex < process.steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <div className="h-0.5 w-8 bg-gray-300"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                          <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
