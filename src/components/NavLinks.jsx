import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

export function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return [
    ['Home', ''],
    ['Become A Notary', '/start'],
    ['Notary Renewal', ''],
    ['Our Classes', ''],
    // ['FAQ', ''],
    // ['Support', ''],
    // ['7 Step Process', ''],
    ['Need Help?', ''],
    // FAQ + Support

    // Home, Become A Notary, Renew Notary, Our Classes, Need Help?
  ].map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-base text-gray-800 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms] font-medium text-primary"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 border-b-2 border-yellow-400"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label}</span>
    </Link>
  ))
}
