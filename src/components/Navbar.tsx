'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-black' : 'text-black/50 hover:text-black'
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-medium text-black leading-none">
            <span className="block">abhishek</span>
            <span className="block">shankar</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/case-studies" className={`${isActive('/case-studies')} transition-colors`}>
              Case Studies
            </Link>
            <Link href="/about" className={`${isActive('/about')} transition-colors`}>
              About
            </Link>
            <Link href="/contact" className={`${isActive('/contact')} transition-colors`}>
              Contact
            </Link>
            <Link href="/test-fonts" className={`${isActive('/test-fonts')} transition-colors`}>
              Test Fonts
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
} 