import { ComponentProps } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

export type SelectProps<T extends FieldValues> = ComponentProps<'select'> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  options: {
    value: string | number
    label: string
    disabled?: boolean
  }[]
}
