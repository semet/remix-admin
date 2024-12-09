import { Switch as HeadlessSwitch } from '@headlessui/react'
import { useId } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { SwitchProps } from './type'

export const Switch = <T extends Record<string, unknown>>(
  props: SwitchProps<T>
) => {
  const {
    label,
    name,
    className,
    containerClassName,
    id,
    onChange,
    required,
    variant = 'primary',
    size = 'md',
    ...rest
  } = props
  const { control } = useFormContext()

  const generatedId = useId()

  return (
    <div
      className={twMerge([
        'relative flex w-full items-center gap-2',
        containerClassName
      ])}
    >
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <HeadlessSwitch
              id={id ?? generatedId}
              {...field}
              onChange={(newValue) => {
                if (onChange) {
                  onChange(newValue)
                  return
                }

                field.onChange(newValue)
              }}
              checked={field.value}
              value={field.value}
              className={twMerge([
                'disabled: group inline-flex items-center rounded-full bg-gray-200 transition disabled:cursor-not-allowed disabled:opacity-80',
                variant === 'primary' && 'data-[checked]:bg-primary',
                variant === 'success' && 'data-[checked]:bg-success',
                variant === 'error' && 'data-[checked]:bg-danger',
                variant === 'warning' && 'data-[checked]:bg-warning',
                variant === 'info' && 'data-[checked]:bg-info',
                size === 'sm' && 'h-4 w-9',
                size === 'md' && 'h-6 w-11',
                size === 'lg' && 'h-8 w-14',
                typeof className === 'string' ? className : undefined
              ])}
              {...rest}
            >
              <span className="sr-only">{name}</span>
              <span
                className={twMerge([
                  'translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6',
                  size === 'sm' && 'size-[9px]',
                  size === 'md' && 'size-4',
                  size === 'lg' && 'size-6'
                ])}
              />
            </HeadlessSwitch>
          )
        }}
      />
      {label && (
        <label
          htmlFor={id ?? generatedId}
          className="text-base text-slate-600"
        >
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
    </div>
  )
}
