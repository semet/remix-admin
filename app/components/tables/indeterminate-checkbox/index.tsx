import { FC, useEffect, useRef } from 'react'

import { IntermediateCheckboxProps } from './type'

export const IndeterminateCheckbox: FC<IntermediateCheckboxProps> = (props) => {
  const { indeterminate, ...rest } = props

  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!ref.current) return
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate
    }
  }, [ref, indeterminate]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <input
      type="checkbox"
      ref={ref}
      className="h-4 w-4 cursor-pointer rounded text-primary ring-0 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-80"
      {...rest}
    />
  )
}
