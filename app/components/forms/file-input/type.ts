import { ComponentProps } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

import { Size } from '~/types'

export type FileInputProps<T extends FieldValues> = Omit<
  ComponentProps<'input'>,
  'size'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  size?: Size
}
