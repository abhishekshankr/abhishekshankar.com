'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "whileHover" | "transition"> {
  children: ReactNode
  variant?: 'filled' | 'outlined'
  className?: string
}

export default function Button({
  children,
  variant = 'filled',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-[6px] text-base font-normal flex items-center justify-center px-4 py-2"
  
  const variantStyles = {
    filled: "bg-black text-white border-none",
    outlined: "bg-white border border-black text-black hover:bg-black/5"
  }
  
  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
} 