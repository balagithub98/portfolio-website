'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'The team delivered an incredible website that has increased our conversions by 300%. Their attention to detail and communication throughout the process was outstanding.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Founder',
    company: 'EcoSolutions',
    content: 'Working with this team was a game-changer for our business. They understood our vision and brought it to life with a beautiful, functional website.',
    rating: 5,
    avatar: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Agency',
    content: 'The marketing strategies they implemented have transformed our online presence. We\'ve seen consistent growth month over month.',
    rating: 5,
    avatar: 'ER'
  },
  {
    name: 'David Thompson',
    role: 'Owner',
    company: 'Local Restaurant',
    content: 'Our new website has brought in so many new customers. The online ordering system they built has been a huge success.',
    rating: 5,
    avatar: 'DT'
  }
]

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </motion.div>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-gray-50 rounded-2xl p-8"
              >
                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-gray-300" />
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic">
                  "{testimonial.content}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
