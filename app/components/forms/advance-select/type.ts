import { FieldValues, Path, RegisterOptions } from 'react-hook-form'
import type { OptionProps, Props } from 'react-select'

import { Size } from '~/types'

export type AdvanceSelectProps<T extends FieldValues> = Props & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  size?: Size
}

export type TOptionProps = OptionProps
