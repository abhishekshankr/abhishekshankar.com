'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import { Icon } from '@phosphor-icons/react'

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "whileHover" | "transition"> {
  children?: ReactNode
  variant?: 'filled' | 'outlined' | 'borderless'
  className?: string
  icon?: Icon
  leadingIcon?: Icon
  trailingIcon?: Icon
  iconSize?: number
}

export default function Button({
  children,
  variant = 'filled',
  className = '',
  icon,
  leadingIcon,
  trailingIcon,
  iconSize = 20,
  ...props
}: ButtonProps) {
  const IconComponent = icon || leadingIcon || trailingIcon
  const isIconOnly = icon && !children
  
  const baseStyles = "rounded-[6px] text-base font-normal flex items-center justify-center transition-colors duration-200"
  
  const variantStyles = {
    filled: `bg-black text-white border-none hover:bg-neutral-800 ${isIconOnly ? 'p-2' : 'px-4 py-2'}`,
    outlined: `bg-white border border-black text-black hover:bg-black/5 ${isIconOnly ? 'p-[7px]' : 'px-[15px] py-[7px]'}`,
    borderless: `bg-transparent text-black hover:bg-black/5 ${isIconOnly ? 'p-2' : 'px-3 py-2'}`
  }

  const getIconElement = (IconComponent: Icon) => {
    const IconTag = IconComponent
    return <IconTag size={iconSize} weight={variant === 'filled' ? "fill" : "regular"} />
  }

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {leadingIcon && !isIconOnly && (
        <span className="mr-2">
          {getIconElement(leadingIcon)}
        </span>
      )}
      
      {icon && getIconElement(icon)}
      
      {children}
      
      {trailingIcon && !isIconOnly && (
        <span className="ml-2">
          {getIconElement(trailingIcon)}
        </span>
      )}
    </motion.button>
  )
} 