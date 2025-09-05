'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CurvedUnderlineProps {
  children: ReactNode
  className?: string
  decorativeChar?: string
  wordCount?: number
  color?: string
  delay?: number
}

export function CurvedUnderline({ 
  children, 
  className = '', 
  decorativeChar = '✦',
  wordCount = 3,
  color = '#06b6d4',
  delay = 0
}: CurvedUnderlineProps) {
  // Extract text content from children
  const getTextContent = (node: ReactNode): string => {
    if (typeof node === 'string') return node
    if (typeof node === 'number') return node.toString()
    if (Array.isArray(node)) return node.map(getTextContent).join('')
    if (node && typeof node === 'object' && 'props' in node) {
      return getTextContent(node.props.children)
    }
    return ''
  }

  const textContent = getTextContent(children)
  const words = textContent.split(' ')
  const firstWords = words.slice(0, wordCount).join(' ')
  const remainingWords = words.slice(wordCount).join(' ')

  // Calculate approximate width for the underline based on word count
  const getUnderlineWidth = () => {
    const baseWidth = firstWords.length * 0.6 // Approximate character width
    return Math.max(baseWidth, 8) // Minimum width
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        className="relative"
      >
        {/* Decorative character */}
        <motion.span
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2, type: "spring", stiffness: 200 }}
          className="inline-block mr-2 text-lg sm:text-xl"
          style={{ color }}
        >
          {decorativeChar}
        </motion.span>

        {/* First words with underline */}
        <span className="relative inline-block">
          {firstWords}
          
          {/* Hand-drawn curved underline */}
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: delay + 0.4, ease: "easeInOut" }}
            className="absolute -bottom-1 left-0 w-full h-4 overflow-visible"
            viewBox={`0 0 ${getUnderlineWidth() * 10} 40`}
            style={{ width: `${getUnderlineWidth()}em` }}
            preserveAspectRatio="none"
          >
            {/* Main curved underline with hand-drawn effect */}
            <motion.path
              d={`M 2 25 Q ${getUnderlineWidth() * 2.5} 8 ${getUnderlineWidth() * 5} 18 Q ${getUnderlineWidth() * 7.5} 28 ${getUnderlineWidth() * 10 - 2} 22`}
              stroke={color}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
                strokeDasharray: '2,1'
              }}
            />
            {/* Secondary decorative curve */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.5, delay: delay + 0.8, ease: "easeInOut" }}
              d={`M 0 28 Q ${getUnderlineWidth() * 2.5} 12 ${getUnderlineWidth() * 5} 22 Q ${getUnderlineWidth() * 7.5} 32 ${getUnderlineWidth() * 10} 26`}
              stroke={color}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
              style={{
                strokeDasharray: '1,2'
              }}
            />
            {/* Accent dots */}
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: delay + 1.2 }}
              cx={getUnderlineWidth() * 2.5}
              cy="12"
              r="1.5"
              fill={color}
              opacity="0.8"
            />
            <motion.circle
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: delay + 1.4 }}
              cx={getUnderlineWidth() * 7.5}
              cy="30"
              r="1"
              fill={color}
              opacity="0.6"
            />
          </motion.svg>
        </span>

        {/* Remaining words */}
        {remainingWords && (
          <span className="ml-1">
            {remainingWords}
          </span>
        )}
      </motion.div>
    </div>
  )
}

// Preset decorative characters
export const DECORATIVE_CHARS = {
  star: '✦',
  diamond: '✧',
  sparkle: '✨',
  flower: '❀',
  heart: '♥',
  arrow: '➤',
  bullet: '●',
  circle: '◯',
  square: '◼',
  triangle: '▲'
} as const

// Preset color schemes
export const COLOR_SCHEMES = {
  cyan: '#06b6d4',
  purple: '#a855f7',
  pink: '#ec4899',
  green: '#10b981',
  orange: '#f97316',
  blue: '#3b82f6',
  indigo: '#6366f1',
  emerald: '#059669'
} as const
