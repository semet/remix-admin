import { AnimatePresence } from 'framer-motion'
import { useId } from 'react'
import { FieldError, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { FormError } from '~/components/forms'

import { FileInputProps } from './type'

export const FileInput = <T extends Record<string, unknown>>(
  props: FileInputProps<T>
) => {
  const {
    id,
    name,
    rules,
    className,
    containerClassName,
    label,
    required,
    type = 'file',
    size = 'md',
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
          className={twMerge([
            'text-slate-600',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-lg'
          ])}
        >
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div
        className={twMerge([
          'relative flex h-[2.65rem] overflow-hidden rounded-sm border border-slate-300 focus-within:border-info has-[:disabled]:bg-slate-100',
          error ? 'border-danger' : 'border-slate-300',
          size === 'sm' && 'h-8',
          size === 'md' && 'h-10',
          size === 'lg' && 'h-12',
          className
        ])}
      >
        <input
          type={type}
          id={id ?? generatedId}
          {...register(name, rules)}
          className={twMerge([
            'w-full cursor-pointer border-none text-slate-600 file:mr-2 file:h-full file:cursor-pointer file:border-0 file:px-4 file:text-slate-500 focus:outline-none focus:ring-0 disabled:cursor-not-allowed file:disabled:bg-slate-300',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-lg'
          ])}
          {...rest}
        />
      </div>

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
