import { ComponentProps } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

export type TextareaProps<T extends FieldValues> =
  ComponentProps<'textarea'> & {
    label?: string
    name: Path<T>
    rules?: RegisterOptions
    containerClassName?: string
  }
