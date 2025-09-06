'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="minimal-card p-6"
    >
      <h2 className="text-subheading text-foreground mb-6">Find us</h2>
      
      <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center mb-4 border border-border">
        <div className="text-center text-muted-foreground">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-accent/10 mx-auto mb-3">
            <MapPin className="h-8 w-8 text-accent" />
          </div>
          <p className="text-sm font-semibold">Interactive Map</p>
          <p className="text-xs">123 Business Street, Suite 100</p>
        </div>
      </div>
      
      <div className="text-caption text-muted-foreground">
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
