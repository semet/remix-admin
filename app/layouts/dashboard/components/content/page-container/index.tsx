import { ComponentProps, forwardRef, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = PropsWithChildren & ComponentProps<'div'>

export const PageContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className } = props
  return (
    <div
      ref={ref}
      className={twMerge(['p-4', className])}
    >
      {children}
    </div>
  )
})

PageContainer.displayName = 'PageContainer'
