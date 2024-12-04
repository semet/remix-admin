import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { Variant } from '~/types'

import { alertIcon } from './alert-icon'

type Props = {
  variant: Variant
  title: string
  message: string
  showIcon?: boolean
} & ComponentProps<'div'>

export const Alert = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { variant, message, title, showIcon } = props
  const Icon = alertIcon[variant]
  return (
    <div
      ref={ref}
      className={twMerge([
        'flex overflow-hidden rounded text-white bg-blend-color shadow',
        variant === 'primary' && 'bg-primary',
        variant === 'success' && 'bg-success',
        variant === 'error' && 'bg-danger',
        variant === 'warning' && 'bg-warning',
        variant === 'info' && 'bg-info'
      ])}
    >
      {showIcon && (
        <div className="content-center bg-black/50 p-4">
          <Icon
            className={twMerge([
              'text-2xl',
              variant === 'success' && 'text-success',
              variant === 'error' && 'text-danger',
              variant === 'warning' && 'text-warning',
              variant === 'info' && 'text-info'
            ])}
          />
        </div>
      )}
      <div className="flex flex-col gap-1 px-4 py-2">
        <span className="font-semibold capitalize">{title}</span>
        <p className="text-sm text-slate-50">{message}</p>
      </div>
    </div>
  )
})

Alert.displayName = 'Alert'
