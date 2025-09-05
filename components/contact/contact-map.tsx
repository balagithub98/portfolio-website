'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-2xl p-8 shadow-xl border-2 border-pink-200 backdrop-blur-xl"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 100%)`,
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)`
      }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Find us</h2>
      
      <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 border-2 border-pink-200">
        <div className="text-center text-gray-600">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg mx-auto mb-3">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <p className="text-sm font-semibold">Interactive Map</p>
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
