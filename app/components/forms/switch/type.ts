import { SwitchProps as HeadlessSwitchProps } from '@headlessui/react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

import { Size, Variant } from '~/types'

export type SwitchProps<T extends FieldValues> = HeadlessSwitchProps & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  variant?: Variant
  size?: Size
  required?: boolean
  type?: 'radio'
}
