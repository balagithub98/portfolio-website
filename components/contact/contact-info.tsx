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
      className="minimal-card p-6"
    >
      <h2 className="text-subheading text-foreground mb-6">Get in touch</h2>
      
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start space-x-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
              <info.icon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-body font-semibold text-foreground mb-2">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-body text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-caption text-muted-foreground mt-2">{info.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
