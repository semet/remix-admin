import { ComponentProps } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

export type FileInputProps<T extends FieldValues> = ComponentProps<'input'> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
}
