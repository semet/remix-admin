import { EditorContentProps } from '@tiptap/react'
import { DetailedHTMLProps, ReactNode } from 'react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

export type EditorProps<T extends FieldValues> = Omit<
  EditorContentProps,
  'ref' | 'editor'
> & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
}

export type EditorButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: ReactNode
  active?: boolean
}
