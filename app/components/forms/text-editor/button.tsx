import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import { EditorButtonProps } from './type'

export const EditorButton: FC<EditorButtonProps> = (props) => {
  const { icon, className, disabled, active, ...rest } = props
  return (
    <button
      type="button"
      className={twMerge([
        'flex items-center justify-center rounded-md bg-transparent text-xl text-slate-400',
        active
          ? 'hover:bg-primary-700 text-slate-700 hover:text-slate-400'
          : '',
        disabled ? 'cursor-not-allowed text-slate-300' : '',
        className
      ])}
      {...rest}
    >
      {icon}
    </button>
  )
}
