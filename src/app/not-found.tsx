"use client"

import Link from 'next/link'
import { motion, useSpring, useAnimate } from 'motion/react'
import { useEffect, useState } from 'react'

function AnimatedNumber({ target, delay = 0 }: { target: number; delay?: number }) {
  const [scope, animate] = useAnimate()
  const [displayNumber, setDisplayNumber] = useState(0)
  
  useEffect(() => {
    const duration = 1.5 // 1.5 seconds total
    const startTime = Date.now()
    const endTime = startTime + (duration * 1000) // Convert to milliseconds

    const animate = () => {
      const now = Date.now()
      if (now < startTime + (delay * 1000)) { // Convert delay to milliseconds
        requestAnimationFrame(animate)
        return
      }
      
      const progress = Math.min(1, (now - (startTime + (delay * 1000))) / (duration * 1000))
      const easedProgress = 1 - Math.pow(1 - progress, 2) // Quadratic ease out

      if (now < endTime) {
        if (Math.random() < (1 - easedProgress) * 0.8) {
          const randomNumber = Math.floor(Math.random() * 10)
          setDisplayNumber(randomNumber)
        }
        requestAnimationFrame(animate)
      } else {
        // Smooth transition to final number
        setDisplayNumber(target)
      }
    }

    requestAnimationFrame(animate)
  }, [target, delay])

  return (
    <motion.span
      ref={scope}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay // Now using seconds directly
      }}
      className="inline-block"
    >
      {displayNumber}
    </motion.span>
  )
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-medium text-black mb-2 sm:mb-4 flex">
          <AnimatedNumber target={4} delay={0} />
          <AnimatedNumber target={0} delay={0.1} />
          <AnimatedNumber target={4} delay={0.2} />
        </h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-black/70 mb-6 sm:mb-8 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 1.2 // Start after numbers finish
          }}
        >
          Looks like that page doesn't exist in this website
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 1.4 // Start slightly after text
          }}
          className="w-full sm:w-auto"
        >
          <Link 
            href="/"
            className="w-full sm:w-auto rounded-[6px] text-base font-normal flex items-center justify-center px-6 py-3 bg-black text-white hover:bg-black/90 transition-colors"
          >
            Go to the home page
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 