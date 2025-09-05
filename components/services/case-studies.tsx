'use client'

import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react'

const caseStudies = [
  {
    title: 'E-commerce Platform Redesign',
    client: 'TechStart Inc.',
    description: 'Complete redesign of an e-commerce platform resulting in 300% increase in conversions.',
    results: [
      { metric: 'Conversion Rate', value: '+300%', icon: TrendingUp },
      { metric: 'Page Load Speed', value: '2.1s', icon: Clock },
      { metric: 'User Engagement', value: '+150%', icon: Users }
    ],
    image: '/case-study-1.jpg',
    link: '#'
  },
  {
    title: 'Local Restaurant Website',
    client: 'Bella Vista Restaurant',
    description: 'Modern website with online ordering system that increased online orders by 400%.',
    results: [
      { metric: 'Online Orders', value: '+400%', icon: TrendingUp },
      { metric: 'Mobile Traffic', value: '+250%', icon: Users },
      { metric: 'Page Load Speed', value: '1.8s', icon: Clock }
    ],
    image: '/case-study-2.jpg',
    link: '#'
  },
  {
    title: 'SaaS Company Marketing',
    client: 'CloudTech Solutions',
    description: 'Comprehensive digital marketing strategy that increased qualified leads by 500%.',
    results: [
      { metric: 'Qualified Leads', value: '+500%', icon: TrendingUp },
      { metric: 'Organic Traffic', value: '+350%', icon: Users },
      { metric: 'Conversion Rate', value: '+200%', icon: TrendingUp }
    ],
    image: '/case-study-3.jpg',
    link: '#'
  }
]

export function CaseStudies() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-300/20 to-amber-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-300/15 to-yellow-300/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Case Studies
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how we've helped businesses achieve remarkable results with our comprehensive digital solutions.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-xl border-2 border-amber-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-xl"
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
                boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
              }}
            >
              <div className="aspect-video bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">📊</div>
                  <p className="text-sm">Case Study</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{study.client}</p>
                <p className="text-gray-700 mb-6">{study.description}</p>
                
                <div className="space-y-3 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <result.icon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{result.metric}</span>
                      </div>
                      <span className="text-sm font-semibold text-primary">{result.value}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={study.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Full Case Study
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
