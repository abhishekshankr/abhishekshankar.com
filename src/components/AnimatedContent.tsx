'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Button from './Button'

export default function AnimatedContent() {
  const router = useRouter()
  
  return (
    <div className="flex flex-col items-center">
      <motion.h1 
        className="text-9xl text-black p-24 pb-8 font-sans font-normal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        abhishekshankar.com
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="flex items-center space-x-4"
      >
        <Button 
          variant="outlined"
          onClick={() => router.push('/case-studies')}
        >
          View Case Studies
        </Button>
        <Button 
          variant="filled"
          onClick={() => router.push('/about')}
        >
          About Me
        </Button>
      </motion.div>
    </div>
  )
} 