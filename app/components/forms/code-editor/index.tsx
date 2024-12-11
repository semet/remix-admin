import { Editor } from '@monaco-editor/react'
import { AnimatePresence } from 'framer-motion'
import { useId } from 'react'
import { Controller, FieldError, get, useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { FormError } from '~/components/forms'

import { CodeEditorType } from './type'

export const CodeEditor = <T extends Record<string, unknown>>(
  props: CodeEditorType<T>
) => {
  const {
    id,
    label,
    name,
    rules,
    containerClassName,
    required,
    className,
    language = 'html',
    defaultLanguage = 'html'
  } = props

  const {
    control,
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
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return (
            <Editor
              height="50vh"
              defaultLanguage={defaultLanguage}
              language={language}
              theme="vs-light"
              value={field.value}
              onChange={field.onChange}
              className={twMerge([
                'w-full rounded border py-4 focus-within:border-info',
                className
              ])}
              options={{
                minimap: { enabled: false },
                wordWrap: 'on',
                wrappingIndent: 'same',
                wrappingStrategy: 'advanced',
                fontFamily: 'JetBrains Mono, monospace'
              }}
            />
          )
        }}
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
