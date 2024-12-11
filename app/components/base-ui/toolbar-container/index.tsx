import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

import { Props } from './type'

export const ToolbarContainer = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { children, className, ...rest } = props
    return (
      <div
        ref={ref}
        className={twMerge(['rounded bg-white p-4 shadow-sm', className])}
        {...rest}
      >
        {children}
      </div>
    )
  }
)

ToolbarContainer.displayName = 'ToolbarContainer'
