import { useId } from 'react'
import { FieldError, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { RadioProps } from './type'

export const Radio = <T extends Record<string, unknown>>(
  props: RadioProps<T>
) => {
  const {
    id,
    name,
    rules,
    className,
    containerClassName,
    label,
    required,
    type = 'radio',
    variant = 'primary',
    size = 'sm',
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
        'relative flex w-full items-center gap-2',
        containerClassName
      ])}
    >
      <input
        id={id ?? generatedId}
        type={type}
        className={twMerge([
          'h-8 w-8 cursor-pointer text-slate-600 ring-0 focus:ring-0 disabled:cursor-not-allowed disabled:opacity-80',
          size === 'sm' && 'h-4 w-4',
          size === 'md' && 'h-6 w-6',
          size === 'lg' && 'h-8 w-8',
          variant === 'primary' &&
            'bg-primary text-primary focus:border-primary',
          variant === 'success' &&
            'bg-secondary text-secondary focus:border-secondary',
          variant === 'error' && 'bg-danger text-danger focus:border-danger',
          variant === 'warning' &&
            'bg-warning text-warning focus:border-warning',
          variant === 'info' && 'bg-info text-info focus:border-info',
          error ? 'border-danger' : 'border-slate-300',
          className
        ])}
        {...register(name, rules)}
        {...rest}
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
