import { AnimatePresence, motion } from 'framer-motion'
import { useId } from 'react'
import { useFormContext, get, FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

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
    labelClassName,
    errorClassName,
    required,
    type = 'text',
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
          className={twMerge(['text-slate-600', labelClassName])}
        >
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div
        className={twMerge([
          'flex overflow-hidden rounded-sm border has-[:focus]:border-info',
          error ? 'border-danger' : 'border-slate-300'
        ])}
      >
        {leftNode && leftNode}
        <input
          type={type}
          id={id ?? generatedId}
          className={twMerge([
            'w-full rounded-sm border-none text-gray-700 focus:ring-0',
            className
          ])}
          {...register(name, rules)}
          {...rest}
        />
        {rightNode && rightNode}
      </div>
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: 'tween', duration: 0.2 }
            }}
            exit={{ opacity: 0, y: -5 }}
            className={twMerge([
              'absolute -bottom-4 text-xs text-danger',
              errorClassName
            ])}
          >
            {error?.message?.toString()}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
