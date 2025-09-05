'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@yourdomain.com', 'support@yourdomain.com'],
    description: 'We respond within 24 hours'
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
    description: 'Mon-Fri 9AM-6PM EST'
  },
  {
    icon: MapPin,
    title: 'Address',
    details: [
      '123 Business Street',
      'Suite 100',
      'City, State 12345'
    ],
    description: 'Visit us by appointment'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 10:00 AM - 4:00 PM',
      'Sunday: Closed'
    ],
    description: 'All times in EST'
  }
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-8 shadow-xl border-2 border-purple-200 backdrop-blur-xl"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
      }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
      
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex-shrink-0">
              <info.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">{info.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
