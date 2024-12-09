import { AnimatePresence } from 'framer-motion'
import { ChangeEvent, useId } from 'react'
import { Controller, FieldError, get, useFormContext } from 'react-hook-form'
import ReactSelect from 'react-select'
import { useHydrated } from 'remix-utils/use-hydrated'
import { twMerge } from 'tailwind-merge'

import { FormError, Select } from '~/components/forms'

import { CustomOption } from './custom-option'
import { AdvanceSelectProps } from './type'

export const AdvanceSelect = <T extends Record<string, unknown>>(
  props: AdvanceSelectProps<T>
) => {
  const isHydrated = useHydrated()
  const {
    name,
    id,
    label,
    onChange,
    containerClassName,
    labelClassName,
    required,
    isSearchable = false,
    isMulti,
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
      {isHydrated ? (
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                isMulti={isMulti}
                instanceId={id ?? generatedId}
                components={{ Option: CustomOption }}
                onChange={(newValue, actionMeta) => {
                  if (onChange) {
                    onChange(
                      newValue as ChangeEvent<HTMLInputElement>,
                      actionMeta
                    )
                    return
                  }
                  field.onChange(newValue)
                }}
                value={field.value}
                isSearchable={isSearchable}
                styles={{
                  control: (base, { isFocused }) => ({
                    ...base,
                    borderRadius: '.125rem',
                    boxShadow: 'none',
                    borderColor: error
                      ? '#f06548'
                      : isFocused
                        ? '#299cdb'
                        : '#cbd5e1',
                    height: isMulti ? 'auto' : '2.65rem',
                    minHeight: '2.65rem',
                    color: '#475569'
                  }),
                  menu: (base) => ({
                    ...base,
                    fontSize: '0.875rem'
                  }),
                  indicatorSeparator: () => ({
                    display: 'none'
                  }),
                  option: (base, state) => ({
                    ...base,
                    color: state.isSelected ? '#0ab39c' : '#475569',
                    backgroundColor: state.isSelected
                      ? 'white'
                      : state.isFocused
                        ? '#f3f4f6'
                        : 'white'
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: '#475569',
                    marginLeft: '.25rem'
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: '#475569',
                    marginLeft: '.25rem'
                  }),
                  input: (base) => ({
                    ...base,
                    '[type="text"]': {
                      boxShadow: 'none !important'
                    }
                  })
                }}
                {...rest}
              />
            )
          }}
        />
      ) : (
        <div className="h-[2.65rem] w-full animate-pulse rounded-s">
          <Select
            name={name}
            options={[{ label: 'Select...', value: '' }]}
            label=""
            disabled
            containerClassName="h-[2.65rem] w-full animate-pulse rounded-s"
          />
        </div>
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
