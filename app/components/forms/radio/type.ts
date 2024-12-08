import { ComponentProps } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

import { Size, Variant } from '~/types'

export type RadioProps<T extends FieldValues> = Omit<
  ComponentProps<'input'>,
  'size' | 'type'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  variant?: Variant
  size?: Size
  required?: boolean
  type?: 'radio'
}
