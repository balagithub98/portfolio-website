'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Real SVG Icons for Technologies
const NextJSIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.1 19.1 0 0 0-.315.034 2.1 2.1 0 0 0-.254.05 1.8 1.8 0 0 0-.217.078c-.06.03-.12.065-.18.103a1.1 1.1 0 0 0-.15.12l-.14.13a1.3 1.3 0 0 0-.12.15c-.04.06-.07.12-.1.18a1.8 1.8 0 0 0-.08.22 2.1 2.1 0 0 0-.05.25 19.1 19.1 0 0 0-.03.31c-.01.05-.01.18-.01.36v11.14c0 .18 0 .31.01.36.01.1.02.2.03.31.02.08.03.16.05.25.02.07.05.14.08.22.03.06.06.12.1.18.04.05.08.1.12.15l.14.13c.05.04.1.08.15.12.06.04.12.07.18.1.07.03.14.06.22.08.08.02.17.03.25.05.1.01.21.02.31.03.05.01.18.01.36.01h.72c.18 0 .31 0 .36-.01.1-.01.2-.02.31-.03.08-.02.16-.03.25-.05.07-.02.14-.05.22-.08.06-.03.12-.06.18-.1.05-.04.1-.08.15-.12l.13-.13c.04-.05.08-.1.12-.15.04-.06.07-.12.1-.18.03-.07.06-.14.08-.22.02-.08.03-.17.05-.25.01-.1.02-.21.03-.31.01-.05.01-.18.01-.36V.357c0-.177 0-.31-.007-.358a19.1 19.1 0 0 0-.034-.315 2.1 2.1 0 0 0-.05-.254 1.8 1.8 0 0 0-.078-.217c-.03-.06-.065-.12-.103-.18a1.1 1.1 0 0 0-.12-.15l-.13-.14a1.3 1.3 0 0 0-.15-.12c-.06-.04-.12-.07-.18-.1a1.8 1.8 0 0 0-.22-.08 2.1 2.1 0 0 0-.25-.05 19.1 19.1 0 0 0-.31-.03C11.882.001 11.748 0 11.572 0zM9.358 5.358c.177 0 .31.001.358.007.1.01.2.02.31.03.08.02.16.03.25.05.07.02.14.05.22.08.06.03.12.06.18.1.05.04.1.08.15.12l.13.13c.04.05.08.1.12.15.04.06.07.12.1.18.03.07.06.14.08.22.02.08.03.17.05.25.01.1.02.21.03.31.01.05.01.18.01.36v11.14c0 .18 0 .31-.01.36-.01.1-.02.2-.03.31-.02.08-.03.16-.05.25-.02.07-.05.14-.08.22-.03.06-.06.12-.1.18-.04.05-.08.1-.12.15l-.13.13c-.05.04-.1.08-.15.12-.06.04-.12.07-.18.1-.07.03-.14.06-.22.08-.08.02-.17.03-.25.05-.1.01-.21.02-.31.03-.05.01-.18.01-.36.01h-.72c-.18 0-.31 0-.36-.01-.1-.01-.2-.02-.31-.03-.08-.02-.16-.03-.25-.05-.07-.02-.14-.05-.22-.08-.06-.03-.12-.06-.18-.1-.05-.04-.1-.08-.15-.12l-.13-.13a1.3 1.3 0 0 1-.12-.15c-.04-.06-.07-.12-.1-.18a1.8 1.8 0 0 1-.08-.22 2.1 2.1 0 0 1-.05-.25 19.1 19.1 0 0 1-.03-.31c-.01-.05-.01-.18-.01-.36V5.715c0-.177 0-.31.007-.358a19.1 19.1 0 0 1 .034-.315 2.1 2.1 0 0 1 .05-.254 1.8 1.8 0 0 1 .078-.217c.03-.06.065-.12.103-.18a1.1 1.1 0 0 1 .12-.15l.13-.14c.05-.04.1-.08.15-.12.06-.04.12-.07.18-.1.07-.03.14-.06.22-.08.08-.02.17-.03.25-.05.1-.01.21-.02.31-.03.05-.01.18-.01.36-.01z"/>
  </svg>
)

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-4.963-1.461 23.8 23.8 0 0 0-2.006-3.768c1.733-1.61 3.158-2.48 4.12-2.48l.047.001zm-9.743.125c.96 0 2.388.87 4.125 2.48a23.8 23.8 0 0 0-2.006 3.768 23.476 23.476 0 0 0-4.963 1.46 26.1 26.1 0 0 1-.25-1.439c-.23-1.869.059-3.322.73-3.704.147-.085.328-.127.558-.127l.047-.001zm4.856 2.1c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.17 25.17 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.346-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.744 2.852 1.708 2.852 2.476-.005.768-1.125 1.732-2.857 2.476-.42.18-.88.342-1.355.493a25.952 25.952 0 0 0-1.1-2.997c.22-.38.44-.763.655-1.15.215-.39.425-.783.63-1.174.265.656.49 1.31.676 1.947zm-13.395.004c.18-.632.405-1.282.66-1.933.24.377.48.763.704 1.16.225.39.435.782.635 1.174.265-.656.49-1.31.676-1.947-.64-.15-1.315-.283-2.015-.386zm-2.1 1.123c-.484-.15-.944-.317-1.375-.498C3.555 9.855 2.435 8.89 2.435 8.123c0-.768 1.125-1.732 2.857-2.476.42-.18.88-.342 1.355-.493.425 1.14.915 2.287 1.46 3.417.22.38.44.763.655 1.15.215.39.425.783.63 1.174-.265.656-.49 1.31-.676 1.947zm12.635 2.806c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.096-1.36 1.564-.455-.468-.91-.992-1.36-1.564zm2.716 2.4c.265.656.49 1.31.676 1.947-1.732.744-3.407 1.307-5.006 1.686a23.8 23.8 0 0 0 2.006 3.768c1.733 1.61 3.158 2.48 4.12 2.48.96 0 2.388-.87 4.125-2.48a23.8 23.8 0 0 0-2.006-3.768 23.476 23.476 0 0 0-4.963-1.46 26.1 26.1 0 0 1 .25 1.439zm-11.06-.4c.18.632.405 1.282.66 1.933.24-.377.48-.763.704-1.16.225-.39.435-.782.635-1.174.265.656.49 1.31.676 1.947.64.15 1.315.283 2.015.386-.695-.103-1.365-.23-2.006-.387a25.952 25.952 0 0 1-1.1 2.997c-.425-1.14-.915-2.287-1.46-3.417-.22-.38-.44-.763-.655-1.15a25.952 25.952 0 0 1-.63-1.174zm-2.1 1.123c.484.15.944.317 1.375.498 1.732.744 2.852 1.708 2.852 2.476 0 .768-1.125 1.732-2.857 2.476-.42.18-.88.342-1.355.493a25.952 25.952 0 0 1-1.1-2.997c.22-.38.44-.763.655-1.15.215-.39.425-.783.63-1.174-.265-.656-.49-1.31-.676-1.947zm13.395.004c-.18.632-.405 1.282-.66 1.933-.24-.377-.48-.763-.704-1.16-.225-.39-.435-.782-.635-1.174-.265.656-.49 1.31-.676 1.947-.64.15-1.315.283-2.015.386.695.103 1.365.23 2.006.387.425 1.14.915 2.287 1.46 3.417.22.38.44.763.655 1.15.215.39.425.783.63 1.174.265-.656.49-1.31.676-1.947z"/>
  </svg>
)

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
  </svg>
)

const PostgresIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M23.111 8.739c-.647-3.616-2.933-6.466-6.5-7.38A8.013 8.013 0 0 0 12 0C8.5 0 5.573 2.11 4.5 5.09 2.07 5.85 0 7.8 0 10.5c0 2.9 2.4 5.3 5.3 5.3h13.4c2.9 0 5.3-2.4 5.3-5.3 0-2.1-1.2-3.9-3-4.8z"/>
  </svg>
)

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
  </svg>
)

const WordPressIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.584-.03-.661.855-.075.885 0 0 .54.06 1.125.105l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.403-2.325.607-3.582.607M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
  </svg>
)

const WebflowIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M17.802 8.56s-1.946 6.103-2.105 6.607c-.159.504-.403.921-.715 1.23-.313.308-.695.5-1.105.5-.41 0-.792-.192-1.105-.5-.312-.309-.556-.726-.715-1.23-.159-.504-2.105-6.607-2.105-6.607s1.946-6.103 2.105-6.607c.159-.504.403-.921.715-1.23.313-.308.695-.5 1.105-.5.41 0 .792.192 1.105.5.312.309.556.726.715 1.23.159.504 2.105 6.607 2.105 6.607z"/>
  </svg>
)

const ShopifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M15.337 23.979c-.372 0-.743-.09-1.08-.27L8.16 20.548c-.675-.36-1.08-1.08-1.08-1.89v-9.12c0-.81.405-1.53 1.08-1.89l6.097-3.161c.675-.36 1.485-.36 2.16 0l6.097 3.161c.675.36 1.08 1.08 1.08 1.89v9.12c0 .81-.405 1.53-1.08 1.89l-6.097 3.161c-.337.18-.708.27-1.08.27zm-6.097-4.161l6.097 3.161 6.097-3.161v-9.12l-6.097-3.161-6.097 3.161v9.12z"/>
  </svg>
)

const WooCommerceIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5-8.5-3.813-8.5-8.5zm8.5-6.5c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5z"/>
  </svg>
)

const technologies = [
  { name: 'Next.js', icon: NextJSIcon, color: 'from-gray-800 to-gray-900', borderColor: '#374151' },
  { name: 'React', icon: ReactIcon, color: 'from-blue-500 to-cyan-500', borderColor: '#06b6d4' },
  { name: 'Tailwind CSS', icon: TailwindIcon, color: 'from-cyan-500 to-teal-500', borderColor: '#14b8a6' },
  { name: 'PostgreSQL', icon: PostgresIcon, color: 'from-blue-600 to-indigo-600', borderColor: '#4f46e5' },
  { name: 'MongoDB', icon: MongoIcon, color: 'from-green-600 to-emerald-600', borderColor: '#059669' },
  { name: 'WordPress', icon: WordPressIcon, color: 'from-blue-700 to-blue-800', borderColor: '#1e40af' },
  { name: 'Webflow', icon: WebflowIcon, color: 'from-purple-500 to-purple-600', borderColor: '#7c3aed' },
  { name: 'Shopify', icon: ShopifyIcon, color: 'from-green-500 to-green-600', borderColor: '#16a34a' },
  { name: 'WooCommerce', icon: WooCommerceIcon, color: 'from-orange-500 to-red-500', borderColor: '#ea580c' }
]

export function TechIcons() {
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      {/* Premium Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-mint-400 animated-gradient"></div>
      
      {/* Floating Bokeh Light Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-xl floating-element"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-lg floating-element" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-mint-400/25 to-cyan-400/25 rounded-full blur-2xl floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-r from-indigo-400/35 to-purple-400/35 rounded-full blur-xl floating-element" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full blur-lg floating-element" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-r from-mint-400/20 to-emerald-400/20 rounded-full blur-3xl floating-element" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Subtle Light Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/20 rounded-sm"></div>
          ))}
        </div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Built with <span className="bg-gradient-to-r from-cyan-400 to-mint-400 bg-clip-text text-transparent">Modern Technologies</span>
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              We use the latest and most powerful technologies to create fast, secure, and scalable websites that deliver exceptional performance.
            </p>
          </motion.div>
        </div>

        {/* Premium Technology Grid with Enhanced Zigzag Animation */}
        <div className="relative">
          {/* Row 1 - Left to Right with Staggered Animation */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 overflow-hidden">
            {technologies.slice(0, 3).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -150, y: -50, rotate: -15 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0, rotate: 0 } : { opacity: 0, x: -150, y: -50, rotate: -15 }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
              >
                <div className="premium-tech-card p-6 sm:p-8 rounded-3xl shadow-2xl border-2 backdrop-blur-2xl w-32 sm:w-40 hover:scale-110 transition-all duration-500 hover:rotate-2"
                     style={{
                       background: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)`,
                       borderColor: tech.borderColor,
                       boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                     }}>
                  <div className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${tech.color} shadow-xl mb-4 group-hover:shadow-2xl transition-all duration-500`}>
                    <tech.icon />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-white text-center block group-hover:text-cyan-300 transition-colors duration-300">{tech.name}</span>
                  
                  {/* Soft Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{
                         background: `radial-gradient(circle at center, ${tech.borderColor}20 0%, transparent 70%)`,
                         filter: 'blur(20px)'
                       }}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 - Right to Left with Enhanced Zigzag */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 overflow-hidden">
            {technologies.slice(3, 6).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 150, y: 50, rotate: 15 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0, rotate: 0 } : { opacity: 0, x: 150, y: 50, rotate: 15 }}
                transition={{ 
                  duration: 1.2, 
                  delay: (index + 3) * 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
              >
                <div className="premium-tech-card p-6 sm:p-8 rounded-3xl shadow-2xl border-2 backdrop-blur-2xl w-32 sm:w-40 hover:scale-110 transition-all duration-500 hover:-rotate-2"
                     style={{
                       background: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)`,
                       borderColor: tech.borderColor,
                       boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                     }}>
                  <div className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${tech.color} shadow-xl mb-4 group-hover:shadow-2xl transition-all duration-500`}>
                    <tech.icon />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-white text-center block group-hover:text-cyan-300 transition-colors duration-300">{tech.name}</span>
                  
                  {/* Soft Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{
                         background: `radial-gradient(circle at center, ${tech.borderColor}20 0%, transparent 70%)`,
                         filter: 'blur(20px)'
                       }}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3 - Left to Right with Final Zigzag */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 overflow-hidden">
            {technologies.slice(6, 9).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -150, y: -30, rotate: -10 }}
                animate={isVisible ? { opacity: 1, x: 0, y: 0, rotate: 0 } : { opacity: 0, x: -150, y: -30, rotate: -10 }}
                transition={{ 
                  duration: 1.2, 
                  delay: (index + 6) * 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
              >
                <div className="premium-tech-card p-6 sm:p-8 rounded-3xl shadow-2xl border-2 backdrop-blur-2xl w-32 sm:w-40 hover:scale-110 transition-all duration-500 hover:rotate-1"
                     style={{
                       background: `linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)`,
                       borderColor: tech.borderColor,
                       boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                     }}>
                  <div className={`flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${tech.color} shadow-xl mb-4 group-hover:shadow-2xl transition-all duration-500`}>
                    <tech.icon />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-white text-center block group-hover:text-cyan-300 transition-colors duration-300">{tech.name}</span>
                  
                  {/* Soft Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                       style={{
                         background: `radial-gradient(circle at center, ${tech.borderColor}20 0%, transparent 70%)`,
                         filter: 'blur(20px)'
                       }}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20"
               style={{
                 background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`
               }}>
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-mint-400 rounded-full animate-pulse shadow-lg"></div>
            <span className="text-sm font-medium text-white">Technologies continuously updated</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}