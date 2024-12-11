import dayjs from 'dayjs'
import { AnimatePresence } from 'framer-motion'
import { useId } from 'react'
import ReactDatePicker from 'react-datepicker'
import { Controller, FieldError, get, useFormContext } from 'react-hook-form'
import { MdOutlineCalendarToday } from 'react-icons/md'
import { useHydrated } from 'remix-utils/use-hydrated'
import { twMerge } from 'tailwind-merge'

import { FormError } from '~/components/forms'

import { DatePickerProps } from './type'

export const DatePicker = <T extends Record<string, unknown>>(
  props: DatePickerProps<T>
) => {
  const isHydrated = useHydrated()
  const {
    name,
    id,
    label,
    className,
    containerClassName,
    required,
    minDate,
    maxDate,
    selected,
    size = 'md',
    ...rest
  } = props
  const generatedId = useId()

  const {
    control,
    formState: { errors }
  } = useFormContext()

  const error: FieldError = get(errors, name)
  return (
    <div
      className={twMerge(['relative flex w-full flex-col', containerClassName])}
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
      {isHydrated && (
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              // @ts-expect-error - ReactDatePicker types are not up to date
              <ReactDatePicker
                {...field}
                id={id ?? generatedId}
                onChange={(date) => {
                  const formattedDate = date
                    ? dayjs(String(date)).format('YYYY-MM-DD')
                    : null
                  field.onChange(formattedDate)
                }}
                value={field.value}
                dateFormat="dd/MM/y"
                className={twMerge(
                  'mt-1 w-full items-center rounded pl-8 text-slate-600 focus:border-info focus:ring-0',
                  error ? 'border-danger' : 'border-slate-300',
                  size === 'sm' && 'h-sm text-xs',
                  size === 'md' && 'h-md text-sm',
                  size === 'lg' && 'h-lg text-lg',
                  className
                )}
                selected={field.value ? new Date(field.value) : selected}
                minDate={new Date(minDate ?? '')}
                maxDate={new Date(maxDate ?? '')}
                showIcon
                icon={
                  <MdOutlineCalendarToday className="text-lg text-slate-600" />
                }
                calendarIconClassName="px-4 top-1/2 transform -translate-y-1/2 left-1.5"
                {...rest}
              />
            )
          }}
        />
      )}

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
