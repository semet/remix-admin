import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { Variant } from '~/types'

type Props = {
  badge: string
  variant?: Variant
}

export const SidebarBadge: FC<Props> = ({ badge, variant }) => {
  return (
    <span
      className={twMerge([
        'content-center rounded px-2 py-0.5 text-xs font-light',
        variant === 'success' && 'bg-success-50 text-white',
        variant === 'error' && 'bg-danger-50 text-white',
        variant === 'warning' && 'bg-warning-50 text-white',
        variant === 'info' && 'bg-info-50 text-white',
        variant === 'primary' && 'bg-primary-50 text-white'
      ])}
    >
      {badge}
    </span>
  )
}
