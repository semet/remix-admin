import { EditorProps } from '@monaco-editor/react'
import { FieldValues, Path, RegisterOptions } from 'react-hook-form'

export type CodeEditorType<T extends FieldValues> = EditorProps & {
  label?: string
  name: Path<T>
  rules?: RegisterOptions
  containerClassName?: string
  required?: boolean
  id?: string
  defaultLanguage?: Languages
}

type Languages = 'html' | 'css' | 'javascript' | 'typescript' | 'json'
