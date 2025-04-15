'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <motion.h1 
        className="text-4xl font-semibold mb-4 text-white"
        style={{ fontFamily: 'Uncut Sans' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to My Website
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-300"
        style={{ fontFamily: 'Uncut Sans' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Built with Next.js and custom fonts
      </motion.p>
    </div>
  )
}
