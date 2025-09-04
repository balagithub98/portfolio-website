'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Find us</h2>
      
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
        <div className="text-center text-gray-500">
          <MapPin className="h-12 w-12 mx-auto mb-2" />
          <p className="text-sm">Interactive Map</p>
          <p className="text-xs">123 Business Street, Suite 100</p>
        </div>
      </div>
      
      <div className="text-sm text-gray-600">
        <p className="mb-2">
          <strong>Directions:</strong> We're located in the heart of the business district, 
          easily accessible by public transportation and with ample parking available.
        </p>
        <p>
          <strong>Parking:</strong> Free parking is available in our building's garage. 
          Street parking is also available with meters.
        </p>
      </div>
    </motion.div>
  )
}
