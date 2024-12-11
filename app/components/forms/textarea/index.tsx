import { AnimatePresence } from 'framer-motion'
import { useId } from 'react'
import { FieldError, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { FormError } from '~/components/forms'

import { TextareaProps } from './type'

export const Textarea = <T extends Record<string, unknown>>(
  props: TextareaProps<T>
) => {
  const {
    id,
    name,
    rules,
    className,
    containerClassName,
    label,
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
          className="text-slate-600"
        >
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <textarea
        id={id ?? generatedId}
        {...register(name, rules)}
        className={twMerge([
          'overflow-hidden rounded text-slate-600 focus:border-info focus:ring-0',
          error ? 'border-danger' : 'border-slate-300',
          className
        ])}
        {...rest}
      />
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
