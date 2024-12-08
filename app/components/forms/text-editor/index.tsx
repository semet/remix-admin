import { Image } from '@tiptap/extension-image'
import { Link } from '@tiptap/extension-link'
import { TextAlign } from '@tiptap/extension-text-align'
import { Underline } from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { AnimatePresence } from 'framer-motion'
import { useId } from 'react'
import { Controller, get, useFormContext } from 'react-hook-form'

import { FormError } from '~/components/forms'

import { Toolbar } from './toolbar'
import { EditorProps } from './type'

const extensions = [
  StarterKit,
  Link.configure({
    openOnClick: false,
    autolink: true
  }),
  Image.configure({
    inline: true
  }),
  Underline,
  TextAlign.configure({
    types: ['heading', 'paragraph']
  })
]

export const TextEditor = <T extends Record<string, unknown>>(
  props: EditorProps<T>
) => {
  const { name, id } = props

  const generatedId = useId()

  const {
    control,
    setValue,
    watch,
    formState: { errors }
  } = useFormContext()

  const watchContent = watch(name)
  const error = get(errors, name)

  const editor = useEditor({
    extensions,
    content: watchContent,
    onUpdate: ({ editor }) => {
      // @ts-expect-error - We need to add the type for the editor
      setValue(name, editor.getHTML())
    }
  })

  return (
    <div className="relative flex w-full flex-col">
      <Toolbar editor={editor} />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <EditorContent
            editor={editor}
            id={id ?? generatedId}
            onClick={() => editor?.commands.focus()}
            {...field}
          />
        )}
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
