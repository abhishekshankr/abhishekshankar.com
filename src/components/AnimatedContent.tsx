'use client'

import { motion } from "motion/react"
import { useRouter } from 'next/navigation'
import Button from './Button'

export default function AnimatedContent() {
  const router = useRouter()
  const text = "abhishekshankar.com"
  
  return (
    <div className="flex flex-col items-center">
      <motion.h1 
        className="text-9xl text-black font-sans font-normal tracking-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1
        }}
      >
        {text}
      </motion.h1>
      
      <motion.div 
        className="flex items-center space-x-4 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 30,
          mass: 1,
          delay: 0.2
        }}
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