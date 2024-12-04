import { ComponentProps, forwardRef, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = PropsWithChildren & ComponentProps<'div'>

export const Card = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, title, className, ...rest } = props
  return (
    <div
      ref={ref}
      {...rest}
      className={twMerge(['flex flex-col rounded bg-white shadow-sm'])}
    >
      {title && (
        <h3 className="border-b p-4 font-semibold text-slate-600">{title}</h3>
      )}
      <div className={twMerge(['p-4', className])}>{children}</div>
    </div>
  )
})

Card.displayName = 'Card'
