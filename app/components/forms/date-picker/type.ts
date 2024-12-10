import type { DatePickerProps as OriginalProps } from 'react-datepicker'
import { FieldValues, Path } from 'react-hook-form'

import { Size } from '~/types'

export type DatePickerProps<T extends FieldValues> = Omit<
  OriginalProps,
  'date'
> & {
  label?: string
  name: Path<T>
  containerClassName?: string
  errorClassName?: string
  required?: boolean
  size?: Size
}
