import { ComponentProps, ReactNode } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

import { Size } from '~/types'

export type InputProps<T extends FieldValues> = Omit<
  ComponentProps<'input'>,
  'size' | 'name'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  leftNode?: ReactNode
  rightNode?: ReactNode
  size?: Size
}
