import { ComponentProps } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

import { Size } from '~/types'

export type SelectProps<T extends FieldValues> = Omit<
  ComponentProps<'select'>,
  'size'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  options: {
    value: string | number
    label: string
    disabled?: boolean
  }[]
  size?: Size
}
