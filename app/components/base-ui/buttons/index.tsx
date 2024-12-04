import { HTMLMotionProps, motion } from 'framer-motion'
import { forwardRef, PropsWithChildren } from 'react'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

import { Size, Variant } from '~/types'

type Props = PropsWithChildren<{
  variant?: Variant
  size?: Size
  icon?: IconType
}> &
  HTMLMotionProps<'button'>
export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    className,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    ...rest
  } = props

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      ref={ref}
      className={twMerge([
        'flex h-fit items-center justify-center rounded-sm px-4 py-1.5 text-white',
        variant === 'primary' && 'hover:bg-primary-100 bg-primary',
        variant === 'success' && 'hover:bg-success-100 bg-success',
        variant === 'error' && 'hover:bg-danger-100 bg-danger',
        variant === 'warning' && 'hover:bg-warning-100 bg-warning',
        variant === 'info' && 'hover:bg-info-100 bg-info',
        size === 'sm' && 'px-3 py-1 text-xs',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-2.5 text-lg',
        className
      ])}
      {...rest}
    >
      {Icon && <Icon className="mr-2" />}
      {children}
    </motion.button>
  )
})

Button.displayName = 'Button'
