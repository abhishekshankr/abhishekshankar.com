'use client'

import { motion } from "motion/react"
import { useRouter } from 'next/navigation'
import Button from './Button'
import { ArrowRight, CaretDown, Plus, House } from '@phosphor-icons/react'

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

      {/* Button Variants Showcase */}
      <div className="w-full max-w-4xl mt-16 space-y-8">
        <div className="flex items-center justify-center space-x-4">
          <Button variant="filled">Regular Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="borderless">Borderless Button</Button>
          <Button variant="filled" leadingIcon={ArrowRight}>With Leading Icon</Button>
          <Button variant="outlined" trailingIcon={CaretDown}>With Trailing Icon</Button>
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          <Button variant="filled" icon={House} />
          <Button variant="outlined" icon={Plus} />
          <Button variant="borderless" icon={ArrowRight} />
          <Button variant="filled" leadingIcon={House} trailingIcon={ArrowRight}>Both Icons</Button>
          <Button variant="borderless" leadingIcon={ArrowRight}>Borderless with Icon</Button>
        </div>
      </div>
    </div>
  )
} 