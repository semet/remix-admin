import { AnimatePresence } from 'framer-motion'
import { useId } from 'react'
import { FieldError, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { FormError } from '~/components/forms'

import { SelectProps } from './type'

export const Select = <T extends Record<string, unknown>>(
  props: SelectProps<T>
) => {
  const {
    id,
    name,
    rules,
    className,
    containerClassName,
    label,
    options,
    labelClassName,
    required,
    ...rest
  } = props

  const {
    register,
    formState: { errors }
  } = useFormContext()

  const generatedId = useId()

  const error: FieldError = get(errors, name)
  return (
    <div
      className={twMerge([
        'relative flex w-full flex-col gap-1',
        containerClassName
      ])}
    >
      {label && (
        <label
          htmlFor={id ?? generatedId}
          className={twMerge(['text-base text-slate-600', labelClassName])}
        >
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <select
        id={id ?? generatedId}
        className={twMerge([
          'flex overflow-hidden rounded-sm text-slate-600 focus:border-info focus:ring-0',
          error ? 'border-danger' : 'border-slate-300',
          className
        ])}
        {...register(name, rules)}
        {...rest}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <AnimatePresence>
        {error && (
          <FormError
            key={error.message}
            error={error}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
