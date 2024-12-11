import { AnimatePresence } from 'framer-motion'
import { useId } from 'react'
import { useFormContext, get, FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { FormError } from '~/components/forms'

import { InputProps } from './type'

export const Input = <T extends Record<string, unknown>>(
  props: InputProps<T>
) => {
  const {
    id,
    name,
    rules,
    className,
    containerClassName,
    label,
    leftNode,
    rightNode,
    required,
    type = 'text',
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
          'flex overflow-hidden rounded border has-[:focus]:border-info',
          size === 'sm' && 'h-sm',
          size === 'md' && 'h-md',
          size === 'lg' && 'h-lg',
          error ? 'border-danger' : 'border-slate-300'
        ])}
      >
        {leftNode && leftNode}
        <input
          type={type}
          id={id ?? generatedId}
          className={twMerge([
            'w-full rounded border-none text-slate-600 focus:ring-0',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-lg',
            className
          ])}
          {...register(name, rules)}
          {...rest}
        />
        {rightNode && rightNode}
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
