import { ComponentProps, ReactNode } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

export type InputProps<T extends FieldValues> = ComponentProps<'input'> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  labelClassName?: string
  errorClassName?: string
  leftNode?: ReactNode
  rightNode?: ReactNode
}
